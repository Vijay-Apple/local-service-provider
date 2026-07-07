import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getServiceDetails,
  createOrder,
  verifyPayment,
  createBooking,
} from "../../../services/public/public.service";

const steps = ["Address", "Schedule", "Issue Details", "Review"];

const BookingPage = () => {
  const { id } = useParams();

  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [processingPayment, setProcessingPayment] = useState(false);

  const [service, setService] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const [bookingData, setBookingData] = useState({
    address: "",
    city: "",
    date: "",
    time: "",
    issue: "",
  });

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      setLoading(true);

      const res = await getServiceDetails(id);

      console.log("SERVICE RESPONSE =", res);

      if (res.success) {
        const serviceData =
          res.data ||
          res.service ||
          res.services?.find((item) => item._id === id);

        setService(serviceData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep === 0) {
      if (!bookingData.address || !bookingData.city) {
        alert("Please fill address details");
        return;
      }
    }

    if (currentStep === 1) {
      if (!bookingData.date || !bookingData.time) {
        alert("Please select date & time");
        return;
      }
    }

    if (currentStep === 2) {
      if (!bookingData.issue.trim()) {
        alert("Please describe the issue");
        return;
      }
    }

    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const validateBooking = () => {
    if (!bookingData.address.trim()) {
      alert("Please enter address");
      return false;
    }

    if (!bookingData.city.trim()) {
      alert("Please enter city");
      return false;
    }

    if (!bookingData.date) {
      alert("Please select booking date");
      return false;
    }

    if (!bookingData.time) {
      alert("Please select time");
      return false;
    }

    if (!bookingData.issue.trim()) {
      alert("Please describe your issue");
      return false;
    }

    return true;
  };

  const handleBooking = async () => {
    console.log("RAZORPAY KEY =", import.meta.env.VITE_RAZORPAY_KEY);
    console.log("SERVICE =", service);
    if (!validateBooking()) return;

    try {
      setProcessingPayment(true);

      const amount = Number(service?.price || 0) + 49;

      const orderResponse = await createOrder({
        amount,
        serviceId: service._id,
      });

      console.log("ORDER RESPONSE =", orderResponse);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: orderResponse.order.amount,
        currency: "INR",
        name: "ServiceHub",
        description: service.name,
        order_id: orderResponse.order.id,

        handler: async (response) => {
          try {
            const verifyResponse = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (!verifyResponse.success) {
              alert("Payment verification failed");
              return;
            }

            const bookingResponse = await createBooking({
              serviceId: service?.service?._id,
              address: bookingData.address,
              city: bookingData.city,
              bookingDate: bookingData.date,
              timeSlot: bookingData.time,
              notes: bookingData.issue,
              paymentId: response.razorpay_payment_id,
            });
            console.log("ACTUAL SERVICE ID =", service?.service?._id);
            console.log("KEY =", import.meta.env.VITE_RAZORPAY_KEY);
            console.log("OPTIONS =", options);

            if (bookingResponse.success) {
              setBookingDetails(bookingResponse.booking);
              setBookingSuccess(true);
            }
          } catch (error) {
            console.error(error);
            alert("Booking creation failed");
          }
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    } finally {
      setProcessingPayment(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center">
        Service not found
      </div>
    );
  }

  if (bookingSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-10 rounded-3xl shadow-lg max-w-xl w-full">
          <h1 className="text-4xl font-bold text-green-600 text-center">
            Booking Confirmed
          </h1>

          <p className="text-center mt-4 text-slate-600">
            Your payment was successful.
          </p>

          <div className="mt-8 space-y-3">
            <p>
              <strong>Booking ID:</strong> {bookingDetails?.bookingId}
            </p>

            <p>
              <strong>Service:</strong> {service?.name}
            </p>

            <p>
              <strong>Date:</strong> {bookingData.date}
            </p>

            <p>
              <strong>Time:</strong> {bookingData.time}
            </p>

            <p>
              <strong>Address:</strong> {bookingData.address}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const platformFee = 49;
  const servicePrice = Number(service?.service?.price || 0);
  const total = servicePrice + platformFee;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-blue-600 font-medium">Service Booking</p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Book {service?.name}
          </h1>

          <p className="text-slate-500 mt-4">
            Complete the booking process in a few simple steps.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-8">
              <div className="flex justify-between mb-10 overflow-x-auto">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex flex-col items-center min-w-[100px]"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        index <= currentStep
                          ? "bg-blue-600 text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <p className="text-sm mt-3">{step}</p>
                  </div>
                ))}
              </div>

              {currentStep === 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Service Address</h2>

                  <div className="space-y-5">
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter full address"
                      value={bookingData.address}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-4"
                    />

                    <input
                      type="text"
                      name="city"
                      placeholder="Enter city"
                      value={bookingData.city}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-4"
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Schedule Service</h2>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      name="date"
                      value={bookingData.date}
                      onChange={handleChange}
                      className="border rounded-xl px-5 py-4"
                    />

                    <input
                      type="time"
                      name="time"
                      value={bookingData.time}
                      onChange={handleChange}
                      className="border rounded-xl px-5 py-4"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Describe The Issue
                  </h2>

                  <textarea
                    rows={6}
                    name="issue"
                    value={bookingData.issue}
                    onChange={handleChange}
                    placeholder="Explain the issue..."
                    className="w-full border rounded-xl px-5 py-4"
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Review Booking</h2>

                  <div className="space-y-4">
                    <div className="bg-slate-50 p-5 rounded-xl">
                      <strong>Service:</strong> {service?.name}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl">
                      <strong>Address:</strong> {bookingData.address}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl">
                      <strong>City:</strong> {bookingData.city}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl">
                      <strong>Date:</strong> {bookingData.date}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl">
                      <strong>Time:</strong> {bookingData.time}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl">
                      <strong>Issue:</strong> {bookingData.issue}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl">
                      <strong>Total Amount:</strong> ₹{total}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-10">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 border rounded-xl disabled:opacity-40"
                >
                  Previous
                </button>

                {currentStep === steps.length - 1 ? (
                  <button
                    onClick={handleBooking}
                    disabled={processingPayment}
                    className="px-8 py-3 bg-green-600 text-white rounded-xl disabled:opacity-50"
                  >
                    {processingPayment ? "Processing..." : `Pay ₹${total}`}
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-blue-600 text-white rounded-xl"
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sticky top-24">
              <img
                src={
                  service?.image ||
                  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
                }
                alt={service?.name}
                className="rounded-2xl h-52 w-full object-cover"
              />

              <h3 className="text-2xl font-bold mt-6">{service?.name}</h3>

              <p className="text-slate-500 mt-3">{service?.description}</p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span>Service Cost</span>
                  <span>₹{servicePrice}</span>
                </div>

                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <div className="mt-8 text-sm text-slate-600 space-y-2">
                <p>✓ Verified Professionals</p>
                <p>✓ Secure Payments</p>
                <p>✓ Service Warranty</p>
                <p>✓ Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
