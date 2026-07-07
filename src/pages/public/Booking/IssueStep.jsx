import { useRef } from "react";
import { AlertCircle, Upload, ShieldCheck, X, Camera } from "lucide-react";
import Button from "../ui/Button";

const IssueStep = ({ bookingData, setBookingData, next, back }) => {
  const fileRef = useRef();

  const handleContinue = () => {
    if (!bookingData.issue?.trim()) {
      alert("Please describe your issue");
      return;
    }

    next();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setBookingData({
      ...bookingData,
      images: [...(bookingData.images || []), ...previews],
    });
  };

  const removeImage = (index) => {
    const updated = [...bookingData.images];

    updated.splice(index, 1);

    setBookingData({
      ...bookingData,
      images: updated,
    });
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
          Help technicians understand the issue before they arrive.
        </p>
      </div>

      {/* Issue Category */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Issue Category</label>

        <select
          value={bookingData.issueCategory || ""}
          onChange={(e) =>
            setBookingData({
              ...bookingData,
              issueCategory: e.target.value,
            })
          }
          className="w-full border rounded-2xl p-4"
        >
          <option value="">Select Category</option>
          <option value="repair">Repair</option>
          <option value="installation">Installation</option>
          <option value="maintenance">Maintenance</option>
          <option value="inspection">Inspection</option>
        </select>
      </div>

      {/* Priority */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Priority Level</label>

        <select
          value={bookingData.priority || "normal"}
          onChange={(e) =>
            setBookingData({
              ...bookingData,
              priority: e.target.value,
            })
          }
          className="w-full border rounded-2xl p-4"
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Problem Description
        </label>

        <textarea
          rows={7}
          value={bookingData.issue || ""}
          placeholder="Explain the issue..."
          onChange={(e) =>
            setBookingData({
              ...bookingData,
              issue: e.target.value,
            })
          }
          className="w-full border rounded-2xl p-5 resize-none"
        />

        <div className="text-right text-xs text-slate-500 mt-2">
          {(bookingData.issue || "").length}/1000
        </div>
      </div>

      {/* Upload Images */}
      <div className="mt-6 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center">
        <Camera className="mx-auto text-slate-400" size={28} />

        <h4 className="mt-3 font-semibold">Upload Images</h4>

        <p className="text-sm text-slate-500 mt-1">
          Add photos of the issue to help technicians.
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          type="button"
          onClick={() => fileRef.current.click()}
          className="mt-4 px-5 py-2 border rounded-xl hover:bg-slate-50"
        >
          <Upload size={16} className="inline mr-2" />
          Choose Files
        </button>
      </div>

      {/* Image Preview */}
      {bookingData.images?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {bookingData.images.map((img, index) => (
            <div
              key={index}
              className="relative border rounded-xl overflow-hidden"
            >
              <img
                src={img.preview}
                alt="issue"
                className="w-full h-32 object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="bg-slate-50 rounded-2xl p-4 border">
          <div className="flex gap-3">
            <ShieldCheck size={20} className="text-green-600 mt-1" />

            <div>
              <h4 className="font-semibold">Faster Resolution</h4>

              <p className="text-sm text-slate-500 mt-1">
                Detailed information helps technicians arrive prepared.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border">
          <div className="flex gap-3">
            <AlertCircle size={20} className="text-blue-600 mt-1" />

            <div>
              <h4 className="font-semibold">Accurate Estimates</h4>

              <p className="text-sm text-slate-500 mt-1">
                Better details improve service quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
        <Button variant="outline" onClick={back} className="w-full sm:w-auto">
          ← Back
        </Button>

        <Button onClick={handleContinue} className="w-full sm:w-auto">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default IssueStep;
