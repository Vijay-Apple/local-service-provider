import {
  MapPin,
  CalendarDays,
  Clock3,
  FileText,
  ShieldCheck,
  CheckCircle,
  IndianRupee,
  AlertTriangle,
  Tag,
} from "lucide-react";
import Button from "../ui/Button";

const ReviewStep = ({ bookingData, service, submit, back }) => {
  const servicePrice = Number(service?.price || 0);
  const platformFee = 49;
  const total = servicePrice + platformFee;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
          <CheckCircle size={16} />
          Final Review
        </span>

        <h2 className="text-3xl font-bold mt-4">Review Your Booking</h2>

        <p className="text-slate-600 mt-3">
          Verify all details before proceeding to payment.
        </p>
      </div>

      {/* Service Info */}
      <div className="mt-10 border rounded-3xl p-5">
        <div className="flex gap-5 items-center">
          <img
            src={service?.image}
            alt={service?.name}
            className="w-28 h-28 rounded-2xl object-cover"
          />

          <div>
            <h3 className="text-2xl font-bold">{service?.name}</h3>

            <p className="text-slate-500 mt-2">{service?.description}</p>

            <div className="flex items-center gap-2 mt-3 text-green-600 font-semibold">
              <IndianRupee size={18} />
              {servicePrice}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <div className="border rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <div>
              <p className="text-sm text-slate-500">Address</p>
              <h4 className="font-semibold">{bookingData.address}</h4>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <div>
              <p className="text-sm text-slate-500">City</p>
              <h4 className="font-semibold">{bookingData.city}</h4>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <CalendarDays size={20} />
            <div>
              <p className="text-sm text-slate-500">Service Date</p>
              <h4 className="font-semibold">{bookingData.date}</h4>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-5 bg-slate-50">
          <div className="flex items-center gap-3">
            <Clock3 size={20} />
            <div>
              <p className="text-sm text-slate-500">Service Time</p>
              <h4 className="font-semibold">{bookingData.time}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Issue Information */}
      <div className="mt-8 border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText size={20} />
          <h3 className="font-semibold text-lg">Issue Description</h3>
        </div>

        <p className="text-slate-600">{bookingData.issue}</p>

        <div className="grid md:grid-cols-2 gap-4 mt-5">
          <div className="flex items-center gap-3">
            <Tag size={18} />

            <div>
              <p className="text-xs text-slate-500">Category</p>

              <p className="font-medium">
                {bookingData.issueCategory || "Not Selected"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <AlertTriangle size={18} />

            <div>
              <p className="text-xs text-slate-500">Priority</p>

              <p className="font-medium capitalize">
                {bookingData.priority || "Normal"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Uploaded Images */}
      {bookingData.images?.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-4">Uploaded Images</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bookingData.images.map((img, index) => (
              <img
                key={index}
                src={img.preview}
                alt="issue"
                className="h-32 w-full rounded-xl object-cover border"
              />
            ))}
          </div>
        </div>
      )}

      {/* Pricing */}
      <div className="mt-8 border rounded-3xl p-6">
        <h3 className="font-bold text-xl mb-5">Payment Summary</h3>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Service Cost</span>
            <span>₹{servicePrice}</span>
          </div>

          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>₹{platformFee}</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-xl font-bold">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>

      {/* Trust Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-blue-50 rounded-2xl p-5">
          <ShieldCheck className="text-blue-600 mb-3" size={24} />

          <h4 className="font-semibold">Verified Technicians</h4>

          <p className="text-sm text-slate-600 mt-2">
            Background verified professionals.
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-5">
          <CheckCircle className="text-green-600 mb-3" size={24} />

          <h4 className="font-semibold">Service Warranty</h4>

          <p className="text-sm text-slate-600 mt-2">
            Guaranteed service quality.
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5">
          <ShieldCheck className="text-purple-600 mb-3" size={24} />

          <h4 className="font-semibold">Secure Payment</h4>

          <p className="text-sm text-slate-600 mt-2">
            Razorpay encrypted payment gateway.
          </p>
        </div>
      </div>

      {/* Next Process */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-6">
        <h3 className="text-xl font-semibold">What Happens Next?</h3>

        <ul className="mt-4 space-y-2 text-white/90">
          <li>✓ Complete secure payment</li>
          <li>✓ Booking will be created</li>
          <li>✓ Technician assigned automatically</li>
          <li>✓ Track booking from dashboard</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
        <Button variant="outline" onClick={back} className="w-full sm:w-auto">
          ← Back
        </Button>

        <Button onClick={submit} className="w-full sm:w-auto">
          Pay ₹{total} & Confirm →
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
