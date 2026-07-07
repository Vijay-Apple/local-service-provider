import { useState } from "react";
import { MapPin, Building2, LocateFixed } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddressStep = ({ bookingData, setBookingData, next }) => {
  const [loadingLocation, setLoadingLocation] = useState(false);

  const handleContinue = () => {
    if (!bookingData.address || !bookingData.city) {
      alert("Please fill all required fields");
      return;
    }

    next();
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setBookingData({
          ...bookingData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setLoadingLocation(false);
      },
      (error) => {
        console.error(error);
        alert("Unable to fetch location");
        setLoadingLocation(false);
      },
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
          <MapPin size={16} />
          Service Location
        </span>

        <h2 className="text-3xl font-bold mt-4 text-slate-900">
          Where do you need the service?
        </h2>

        <p className="mt-3 text-slate-600">
          Enter your address so we can assign the nearest verified technician.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Full Address *
          </label>

          <Input
            placeholder="House No, Street, Area"
            value={bookingData.address || ""}
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                address: e.target.value,
              })
            }
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">City *</label>

            <Input
              placeholder="Enter City"
              value={bookingData.city || ""}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  city: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">State</label>

            <Input
              placeholder="Enter State"
              value={bookingData.state || ""}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  state: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Pincode</label>

          <Input
            placeholder="Enter Pincode"
            value={bookingData.pincode || ""}
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                pincode: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Button
            type="button"
            variant="outline"
            onClick={getCurrentLocation}
            disabled={loadingLocation}
          >
            <LocateFixed size={16} />

            {loadingLocation ? "Fetching Location..." : "Use Current Location"}
          </Button>
        </div>

        {(bookingData.latitude || bookingData.longitude) && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-700 text-sm">
              Location Captured Successfully
            </p>

            <p className="text-xs text-green-600 mt-1">
              Lat: {bookingData.latitude}
            </p>

            <p className="text-xs text-green-600">
              Lng: {bookingData.longitude}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-4 bg-slate-50">
            <div className="flex items-center gap-3">
              <Building2 className="text-blue-600" size={20} />

              <div>
                <h4 className="font-semibold">Verified Coverage</h4>

                <p className="text-sm text-slate-500">
                  Service available in 200+ cities
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-4 bg-slate-50">
            <div className="flex items-center gap-3">
              <MapPin className="text-green-600" size={20} />

              <div>
                <h4 className="font-semibold">Fast Assignment</h4>

                <p className="text-sm text-slate-500">
                  Nearby technician allocation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button onClick={handleContinue} className="w-full md:w-auto">
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddressStep;
