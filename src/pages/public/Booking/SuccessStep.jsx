import {
  CheckCircle2,
  CalendarDays,
  Clock3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const SuccessStep = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-10 text-center">
          <CheckCircle2 size={80} className="mx-auto mb-4" />

          <h2 className="text-4xl md:text-5xl font-bold">Booking Confirmed</h2>

          <p className="mt-4 text-lg text-white/90">
            Your service request has been submitted successfully.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="border rounded-2xl p-5 bg-slate-50">
              <CalendarDays className="text-blue-600 mb-3" size={24} />

              <h3 className="font-semibold">Appointment Scheduled</h3>

              <p className="text-sm text-slate-500 mt-2">
                Your booking has been added to our system.
              </p>
            </div>

            <div className="border rounded-2xl p-5 bg-slate-50">
              <Clock3 className="text-purple-600 mb-3" size={24} />

              <h3 className="font-semibold">Technician Assignment</h3>

              <p className="text-sm text-slate-500 mt-2">
                A nearby professional will be assigned shortly.
              </p>
            </div>

            <div className="border rounded-2xl p-5 bg-slate-50">
              <ShieldCheck className="text-green-600 mb-3" size={24} />

              <h3 className="font-semibold">Service Guarantee</h3>

              <p className="text-sm text-slate-500 mt-2">
                Verified professionals with quality assurance.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-10 bg-slate-50 rounded-3xl p-6">
            <h3 className="text-xl font-semibold mb-6">What Happens Next?</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>

                <div>
                  <h4 className="font-semibold">Booking Received</h4>

                  <p className="text-slate-500 text-sm">
                    Your service request is successfully registered.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>

                <div>
                  <h4 className="font-semibold">Technician Assigned</h4>

                  <p className="text-slate-500 text-sm">
                    We will assign the best available technician.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>

                <div>
                  <h4 className="font-semibold">Service Completed</h4>

                  <p className="text-slate-500 text-sm">
                    Track status and service history from dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              to="/dashboard"
              className="
                px-8
                py-4
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-xl
                font-medium
                transition
                flex items-center
                justify-center
                gap-2
              "
            >
              Go To Dashboard
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="
                px-8
                py-4
                border
                rounded-xl
                font-medium
                hover:bg-slate-50
                transition
                text-center
              "
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
