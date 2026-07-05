import { AlertCircle, Upload, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

const IssueStep = ({ bookingData, setBookingData, next, back }) => {
  const handleContinue = () => {
    if (!bookingData.issue.trim()) {
      alert("Please describe your issue");
      return;
    }

    next();
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium">
          <AlertCircle size={16} />
          Issue Details
        </span>

        <h2 className="text-3xl font-bold mt-4 text-slate-900">
          Describe Your Problem
        </h2>

        <p className="mt-3 text-slate-600">
          Help our technicians understand the issue before they arrive.
        </p>
      </div>

      {/* Textarea */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Problem Description
        </label>

        <textarea
          rows={7}
          placeholder="Example: AC is not cooling properly, strange noise coming from indoor unit, water leakage..."
          value={bookingData.issue}
          onChange={(e) =>
            setBookingData({
              ...bookingData,
              issue: e.target.value,
            })
          }
          className="
            w-full
            border
            border-slate-300
            rounded-2xl
            p-5
            outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            resize-none
          "
        />
      </div>

      {/* Optional Upload Section */}
      <div className="mt-6 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center">
        <Upload className="mx-auto text-slate-400" size={28} />

        <h4 className="mt-3 font-semibold">Upload Images (Optional)</h4>

        <p className="text-sm text-slate-500 mt-1">
          Add photos of the issue to help technicians prepare.
        </p>

        <button
          type="button"
          className="mt-4 px-5 py-2 border rounded-xl hover:bg-slate-50"
        >
          Choose Files
        </button>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="bg-slate-50 rounded-2xl p-4 border">
          <div className="flex gap-3">
            <ShieldCheck
              size={20}
              className="text-green-600 flex-shrink-0 mt-1"
            />

            <div>
              <h4 className="font-semibold">Faster Resolution</h4>

              <p className="text-sm text-slate-500 mt-1">
                Detailed descriptions help technicians arrive prepared.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border">
          <div className="flex gap-3">
            <AlertCircle
              size={20}
              className="text-blue-600 flex-shrink-0 mt-1"
            />

            <div>
              <h4 className="font-semibold">Accurate Estimates</h4>

              <p className="text-sm text-slate-500 mt-1">
                Better issue details improve pricing and service quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
        <Button variant="outline" onClick={back} className="sm:w-auto w-full">
          ← Back
        </Button>

        <Button onClick={handleContinue} className="sm:w-auto w-full">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default IssueStep;
