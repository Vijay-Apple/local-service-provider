import { CalendarDays, Clock3 } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ScheduleStep = ({ bookingData, setBookingData, next, back }) => {
  const timeSlots = [
    "09:00 AM",
    "11:00 AM",
    "01:00 PM",
    "03:00 PM",
    "05:00 PM",
    "07:00 PM",
  ];

  const handleContinue = () => {
    if (!bookingData.date || !bookingData.time) {
      alert("Please select date and time");
      return;
    }

    next();
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
          <CalendarDays size={16} />
          Schedule Service
        </span>

        <h2 className="text-3xl font-bold mt-4 text-slate-900">
          Select Your Preferred Date & Time
        </h2>

        <p className="mt-3 text-slate-600">
          Choose a convenient time slot for your service appointment.
        </p>
      </div>

      {/* Date Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Service Date
        </label>

        <Input
          type="date"
          value={bookingData.date}
          onChange={(e) =>
            setBookingData({
              ...bookingData,
              date: e.target.value,
            })
          }
        />
      </div>

      {/* Time Slots */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">
          Available Time Slots
        </label>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() =>
                setBookingData({
                  ...bookingData,
                  time: slot,
                })
              }
              className={`p-4 rounded-2xl border font-medium transition ${
                bookingData.time === slot
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:border-blue-500"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Slot */}
      {bookingData.time && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <Clock3 className="text-green-600" size={20} />

            <div>
              <h4 className="font-semibold text-green-700">
                Selected Time Slot
              </h4>

              <p className="text-green-600">
                {bookingData.date} • {bookingData.time}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="bg-slate-50 border rounded-2xl p-4">
          <h4 className="font-semibold">On-Time Arrival</h4>

          <p className="text-sm text-slate-500 mt-2">
            Technicians arrive within the selected time window.
          </p>
        </div>

        <div className="bg-slate-50 border rounded-2xl p-4">
          <h4 className="font-semibold">Easy Rescheduling</h4>

          <p className="text-sm text-slate-500 mt-2">
            Change your appointment anytime before service starts.
          </p>
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

export default ScheduleStep;
