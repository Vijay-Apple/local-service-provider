import {
  CheckCircle2,
  CalendarDays,
  Clock3,
  ShieldCheck,
  ArrowRight,
  Receipt,
  MapPin,
  IndianRupee,
} from "lucide-react";
import { Link } from "react-router-dom";

const SuccessStep = ({ booking, service }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-10 text-center">
          <CheckCircle2 size={80} className="mx-auto mb-4" />

          <h2 className="text-4xl md:text-5xl font-bold">Booking Confirmed</h2>

          <p className="mt-4 text-lg text-white/90">
            Your payment has been received and booking has been created
            successfully.
          </p>

          {booking?._id && (
            <div className="mt-5 inline-flex bg-white/20 px-5 py-2 rounded-full">
              Booking ID: #{booking._id.slice(-8)}
            </div>
          )}
        </div>

        <div className="p-8 md:p-10">
          {/* Service Summary */}
          <div className="border rounded-3xl p-5 mb-8">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <img
                src={service?.image}
                alt={service?.name}
                className="w-32 h-32 rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-bold">{service?.name}</h3>

                <p className="text-slate-500 mt-2">{service?.description}</p>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border rounded-2xl p-5 bg-slate-50">
              <div className="flex gap-3">
                <MapPin className="text-blue-600" size={22} />

                <div>
                  <p className="text-sm text-slate-500">Service Address</p>

                  <h4 className="font-semibold">{booking?.address}</h4>

                  <p className="text-sm text-slate-500">{booking?.city}</p>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl p-5 bg-slate-50">
              <div className="flex gap-3">
                <CalendarDays className="text-purple-600" size={22} />

                <div>
                  <p className="text-sm text-slate-500">Appointment</p>

                  <h4 className="font-semibold">{booking?.date}</h4>

                  <p className="text-sm text-slate-500">{booking?.time}</p>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl p-5 bg-slate-50">
              <div className="flex gap-3">
                <IndianRupee className="text-green-600" size={22} />

                <div>
                  <p className="text-sm text-slate-500">Amount Paid</p>

                  <h4 className="font-semibold">
                    ₹{booking?.amount || service?.price}
                  </h4>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl p-5 bg-slate-50">
              <div className="flex gap-3">
                <Receipt className="text-orange-600" size={22} />

                <div>
                  <p className="text-sm text-slate-500">Payment Status</p>

                  <h4 className="font-semibold text-green-600">
                    {booking?.paymentStatus || "Paid"}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction */}
          {booking?.paymentId && (
            <div className="mt-8 border rounded-2xl p-5">
              <h3 className="font-semibold mb-3">Payment Information</h3>

              <p className="text-sm text-slate-600">Transaction ID</p>

              <p className="font-mono text-sm break-all mt-1">
                {booking.paymentId}
              </p>
            </div>
          )}

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-blue-50 rounded-2xl p-5">
              <CalendarDays className="text-blue-600 mb-3" size={24} />

              <h4 className="font-semibold">Appointment Scheduled</h4>

              <p className="text-sm text-slate-600 mt-2">
                Booking added successfully.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-5">
              <Clock3 className="text-purple-600 mb-3" size={24} />

              <h4 className="font-semibold">Technician Assignment</h4>

              <p className="text-sm text-slate-600 mt-2">
                Assignment in progress.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-5">
              <ShieldCheck className="text-green-600 mb-3" size={24} />

              <h4 className="font-semibold">Service Guarantee</h4>

              <p className="text-sm text-slate-600 mt-2">
                Verified professional support.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-10 bg-slate-50 rounded-3xl p-6">
            <h3 className="text-xl font-semibold mb-6">Booking Progress</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                  1
                </div>

                <div>
                  <h4 className="font-semibold">Payment Completed</h4>

                  <p className="text-sm text-slate-500">
                    Payment verified successfully.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  2
                </div>

                <div>
                  <h4 className="font-semibold">Booking Created</h4>

                  <p className="text-sm text-slate-500">
                    Service request registered.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  3
                </div>

                <div>
                  <h4 className="font-semibold">Technician Assignment</h4>

                  <p className="text-sm text-slate-500">
                    Awaiting technician allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              to="/customer/bookings"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2"
            >
              View My Bookings
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 border rounded-xl text-center hover:bg-slate-50"
            >
              Explore More Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStep;
