import { useEffect, useState } from "react";
import {
  getNotifications,
  getUnreadCount,
  markAsRead,
} from "../../../services/auth/customer.service";

const demoNotifications = [
  {
    _id: "demo1",
    title: "Technician Assigned",
    message: "Rahul Sharma has been assigned to your AC Repair booking.",
    type: "booking",
    read: false,
    createdAt: new Date(),
  },
  {
    _id: "demo2",
    title: "Service Reminder",
    message: "Your AC service is due next week. Schedule maintenance now.",
    type: "reminder",
    read: false,
    createdAt: new Date(Date.now() - 86400000),
  },
  {
    _id: "demo3",
    title: "Booking Completed",
    message: "Your Electrician service has been completed successfully.",
    type: "booking",
    read: true,
    createdAt: new Date(Date.now() - 3 * 86400000),
  },
  {
    _id: "demo4",
    title: "Special Offer",
    message: "Get 20% off on RO Maintenance this month.",
    type: "offer",
    read: true,
    createdAt: new Date(Date.now() - 5 * 86400000),
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const [notificationsRes, unreadRes] = await Promise.all([
        getNotifications(),
        getUnreadCount(),
      ]);

      if (notificationsRes?.success) {
        setNotifications(
          notificationsRes.data?.length
            ? notificationsRes.data
            : demoNotifications,
        );
      } else {
        setNotifications(demoNotifications);
      }

      if (unreadRes?.success) {
        setUnreadCount(unreadRes.count || 0);
      }
    } catch (error) {
      console.error(error);

      setNotifications(demoNotifications);
      setUnreadCount(demoNotifications.filter((item) => !item.read).length);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);

      setNotifications((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                read: true,
              }
            : item,
        ),
      );

      setUnreadCount((prev) => Math.max(prev - 1, 0));
    } catch (error) {
      console.error(error);
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case "booking":
        return "from-indigo-500 to-blue-500";

      case "reminder":
        return "from-amber-500 to-orange-500";

      case "offer":
        return "from-green-500 to-emerald-500";

      default:
        return "from-slate-500 to-slate-600";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-slate-500 text-lg">Loading Notifications...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Notifications</h1>

          <p className="text-white/90 mt-2 max-w-2xl">
            Stay updated with bookings, reminders and service updates.
          </p>

          <div className="mt-5 inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
            🔔 Unread Notifications: {unreadCount}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Total Notifications</p>
          <h2 className="text-4xl font-bold text-indigo-600 mt-2">
            {notifications.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Unread</p>
          <h2 className="text-4xl font-bold text-amber-500 mt-2">
            {unreadCount}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Read</p>
          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {notifications.length - unreadCount}
          </h2>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification._id}
            className={`relative bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition ${
              !notification.read ? "ring-2 ring-indigo-200" : ""
            }`}
          >
            {!notification.read && (
              <div className="absolute top-6 left-6 w-3 h-3 bg-indigo-600 rounded-full"></div>
            )}

            <div className="pl-6 flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
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

                <p className="text-slate-600 mt-2">{notification.message}</p>

                <p className="text-xs text-slate-400 mt-2">
                  {formatTime(notification.createdAt)}
                </p>
              </div>

              <div className="flex items-center">
                {!notification.read ? (
                  <button
                    onClick={() => handleMarkAsRead(notification._id)}
                    className="px-4 py-2 rounded-xl border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition text-sm"
                  >
                    Mark as Read
                  </button>
                ) : (
                  <span className="text-sm text-green-600 font-medium">
                    ✓ Read
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="bg-white border border-indigo-100 rounded-3xl p-10 text-center text-slate-500">
          No notifications available.
        </div>
      )}
    </div>
  );
};

export default Notifications;
