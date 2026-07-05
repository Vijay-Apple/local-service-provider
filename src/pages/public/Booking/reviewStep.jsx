import {
  MapPin,
  CalendarDays,
  Clock3,
  FileText,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import Button from "../ui/Button";

const ReviewStep = ({ bookingData, submit, back }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
          <CheckCircle size={16} />
          Final Review
        </span>

        <h2 className="text-3xl font-bold mt-4 text-slate-900">
          Review Your Booking
        </h2>

        <p className="text-slate-600 mt-3">
          Please verify all details before confirming your service request.
        </p>
      </div>

      {/* Booking Summary */}
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-600" size={20} />
            <div>
              <p className="text-sm text-slate-500">Service Address</p>
              <h4 className="font-semibold">
                {bookingData.address || "Not Provided"}
              </h4>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <MapPin className="text-green-600" size={20} />
            <div>
              <p className="text-sm text-slate-500">City</p>
              <h4 className="font-semibold">
                {bookingData.city || "Not Provided"}
              </h4>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-purple-600" size={20} />
            <div>
              <p className="text-sm text-slate-500">Service Date</p>
              <h4 className="font-semibold">
                {bookingData.date || "Not Selected"}
              </h4>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <Clock3 className="text-orange-600" size={20} />
            <div>
              <p className="text-sm text-slate-500">Preferred Time</p>
              <h4 className="font-semibold">
                {bookingData.time || "Not Selected"}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Issue Description */}
      <div className="mt-8 border border-slate-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-blue-600" size={20} />
          <h3 className="font-semibold text-lg">Issue Description</h3>
        </div>

        <p className="text-slate-600 leading-7">
          {bookingData.issue || "No issue description provided"}
        </p>
      </div>

      {/* Trust Section */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-blue-50 rounded-2xl p-5">
          <ShieldCheck className="text-blue-600 mb-3" size={24} />

          <h4 className="font-semibold">Verified Technicians</h4>

          <p className="text-sm text-slate-600 mt-2">
            Background-verified professionals.
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5">
          <CheckCircle className="text-green-600 mb-3" size={24} />

          <h4 className="font-semibold">Service Warranty</h4>

          <p className="text-sm text-slate-600 mt-2">
            Quality assurance on completed services.
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5">
          <ShieldCheck className="text-purple-600 mb-3" size={24} />

          <h4 className="font-semibold">Secure Booking</h4>

          <p className="text-sm text-slate-600 mt-2">
            Safe and encrypted booking process.
          </p>
        </div>
      </div>

      {/* Estimated Info */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-6">
        <h3 className="text-xl font-semibold">What Happens Next?</h3>

        <ul className="mt-4 space-y-2 text-white/90">
          <li>✓ Booking request will be submitted</li>
          <li>✓ Technician will be assigned automatically</li>
          <li>✓ You'll receive confirmation instantly</li>
          <li>✓ Service tracking available in dashboard</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
        <Button variant="outline" onClick={back} className="w-full sm:w-auto">
          ← Back
        </Button>

        <Button onClick={submit} className="w-full sm:w-auto">
          Confirm Booking →
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
