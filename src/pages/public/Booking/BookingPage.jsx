import { useState } from "react";
import { Link } from "react-router-dom";

const steps = ["Address", "Schedule", "Issue Details", "Review"];

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [bookingData, setBookingData] = useState({
    address: "",
    city: "",
    date: "",
    time: "",
    issue: "",
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      {/* HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-blue-600 font-medium">Service Booking</p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Book AC Repair & Maintenance
          </h1>

          <p className="text-slate-500 mt-4">
            Complete the booking process in a few simple steps.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2">
            {/* STEPPER */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8">
              <div className="flex justify-between mb-10 overflow-x-auto">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex flex-col items-center min-w-[100px]"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                        ${
                          index <= currentStep
                            ? "bg-blue-600 text-white"
                            : "bg-slate-200 text-slate-500"
                        }`}
                    >
                      {index + 1}
                    </div>

                    <p className="text-sm mt-3 text-center">{step}</p>
                  </div>
                ))}
              </div>

              {/* STEP 1 */}
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
                      placeholder="City"
                      value={bookingData.city}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-4"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Schedule Service</h2>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="date"
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

              {/* STEP 3 */}
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

              {/* STEP 4 */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Review Booking</h2>

                  <div className="space-y-5">
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
                  </div>
                </div>
              )}

              {/* BUTTONS */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 border rounded-xl disabled:opacity-40"
                >
                  Previous
                </button>

                {currentStep === steps.length - 1 ? (
                  <button className="px-8 py-3 bg-green-600 text-white rounded-xl">
                    Confirm Booking
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

          {/* RIGHT SIDEBAR */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="service"
                className="rounded-2xl h-52 w-full object-cover"
              />

              <h3 className="text-2xl font-bold mt-6">AC Repair & Service</h3>

              <p className="text-slate-500 mt-3">
                Verified technician service with warranty.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span>Service Cost</span>
                  <span>₹499</span>
                </div>

                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>₹49</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹548</span>
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
