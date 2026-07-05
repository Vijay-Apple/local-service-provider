import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const properties = [
  { id: 1, name: "Home - A102" },
  { id: 2, name: "Office - B21" },
];

const serviceRecords = [
  {
    id: 1,
    service: "AC Service",
    completedDate: "15 Jan 2026",
    nextDueDate: "15 Jul 2026",
    technician: "Rahul Sharma",
  },
  {
    id: 2,
    service: "RO Filter Replacement",
    completedDate: "10 Mar 2026",
    nextDueDate: "10 Sep 2026",
    technician: "Amit Kumar",
  },
  {
    id: 3,
    service: "Pest Control",
    completedDate: "05 May 2026",
    nextDueDate: "05 Nov 2026",
    technician: "Sandeep Verma",
  },
];

const upcomingServices = [
  {
    id: 1,
    service: "AC Service",
    dueDate: "15 Jul 2026",
    daysLeft: 12,
  },
  {
    id: 2,
    service: "RO Filter Replacement",
    dueDate: "10 Sep 2026",
    daysLeft: 69,
  },
];

const ServiceRecords = () => {
  const [selectedProperty, setSelectedProperty] = useState(properties[0].id);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Maintenance Records
          </h1>

          <p className="text-white/90 mt-2 max-w-2xl">
            Track service history, upcoming maintenance and asset lifecycle in
            one place.
          </p>
        </div>
      </div>

      {/* PROPERTY SELECTOR (UPGRADED CARD) */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Select Property
        </h2>

        <select
          value={selectedProperty}
          onChange={(e) => setSelectedProperty(Number(e.target.value))}
          className="w-full md:w-80 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {properties.map((property) => (
            <option key={property.id} value={property.id}>
              {property.name}
            </option>
          ))}
        </select>
      </div>

      {/* UPCOMING MAINTENANCE */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-5">
          Upcoming Maintenance
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {upcomingServices.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-2xl border border-yellow-100 bg-yellow-50 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-slate-800 text-lg">
                {service.service}
              </h3>

              <p className="text-slate-600 mt-2">Due Date: {service.dueDate}</p>

              <div className="mt-4 inline-flex px-4 py-2 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium">
                ⏳ {service.daysLeft} Days Remaining
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Maintenance Timeline
        </h2>

        <div className="space-y-6">
          {serviceRecords.map((record) => (
            <div
              key={record.id}
              className="relative pl-8 border-l-2 border-indigo-200"
            >
              {/* dot */}
              <div className="absolute left-[-7px] top-2 w-3 h-3 bg-indigo-600 rounded-full"></div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-sm transition">
                <h3 className="text-lg font-semibold text-slate-800">
                  {record.service}
                </h3>

                <div className="mt-2 text-sm text-slate-600 space-y-1">
                  <p>
                    Completed:{" "}
                    <span className="font-medium text-slate-700">
                      {record.completedDate}
                    </span>
                  </p>

                  <p>
                    Next Due:{" "}
                    <span className="font-medium text-indigo-600">
                      {record.nextDueDate}
                    </span>
                  </p>

                  <p>
                    Technician:{" "}
                    <span className="font-medium text-slate-700">
                      {record.technician}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceRecords;
