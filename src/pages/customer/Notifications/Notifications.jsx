import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const initialNotifications = [
  {
    id: 1,
    title: "Technician Assigned",
    message: "Rahul Sharma has been assigned to your AC Repair booking.",
    time: "2 hours ago",
    read: false,
    type: "booking",
  },
  {
    id: 2,
    title: "Service Reminder",
    message: "Your AC service is due next week. Schedule maintenance now.",
    time: "1 day ago",
    read: false,
    type: "reminder",
  },
  {
    id: 3,
    title: "Booking Completed",
    message: "Your Electrician service has been completed successfully.",
    time: "3 days ago",
    read: true,
    type: "booking",
  },
  {
    id: 4,
    title: "Special Offer",
    message: "Get 20% off on RO Maintenance this month.",
    time: "5 days ago",
    read: true,
    type: "offer",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getTypeStyle = (type) => {
    switch (type) {
      case "booking":
        return "from-indigo-500 to-blue-500";
      case "reminder":
        return "from-amber-500 to-orange-500";
      case "offer":
        return "from-green-500 to-emerald-500";
      default:
        return "from-slate-400 to-slate-500";
    }
  };

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Notifications</h1>

          <p className="text-white/90 mt-2 max-w-2xl">
            Stay updated with bookings, reminders, offers and service updates.
          </p>

          <div className="mt-5 inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
            🔔 Unread: {unreadCount}
          </div>
        </div>
      </div>

      {/* NOTIFICATION FEED */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`relative bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition ${
              !notification.read ? "ring-2 ring-indigo-200" : ""
            }`}
          >
            {/* unread dot */}
            {!notification.read && (
              <div className="absolute top-6 left-6 w-3 h-3 bg-indigo-600 rounded-full"></div>
            )}

            <div className="pl-6 flex flex-col md:flex-row md:justify-between gap-4">
              {/* LEFT */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-lg text-slate-800">
                    {notification.title}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full text-white bg-gradient-to-r ${getTypeStyle(
                      notification.type,
                    )}`}
                  >
                    {notification.type}
                  </span>

                  {!notification.read && (
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                      New
                    </span>
                  )}
                </div>

                <p className="text-slate-600">{notification.message}</p>

                <p className="text-xs text-slate-400">{notification.time}</p>
              </div>

              {/* RIGHT ACTION */}
              <div className="flex items-start md:items-center">
                {!notification.read ? (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="px-4 py-2 rounded-xl border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition text-sm"
                  >
                    Mark as read
                  </button>
                ) : (
                  <span className="text-xs text-slate-400">Read</span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* EMPTY STATE */}
        {notifications.length === 0 && (
          <div className="bg-white border border-indigo-100 rounded-3xl p-10 text-center text-slate-500">
            No notifications available
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
