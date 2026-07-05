import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Menu,
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  LogOut,
} from "lucide-react";

import { logout } from "../../redux/features/auth/authSlice";

const Header = ({ toggleSidebar }) => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-lg md:text-xl font-semibold text-slate-900">
              ServiceHub Dashboard
            </h1>

            <p className="hidden md:block text-xs text-slate-500">
              Manage bookings, technicians & customers
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-96">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search services, customers..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Messages */}
          <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">
            <MessageSquare size={20} />

            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">
            <Bell size={20} />

            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-3 hover:bg-slate-100 px-3 py-2 rounded-xl transition"
            >
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-slate-900">
                  Vijay Kumar
                </p>

                <p className="text-xs text-slate-500">Administrator</p>
              </div>

              <ChevronDown
                size={16}
                className={`hidden md:block text-slate-500 transition-transform ${
                  showMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {showMenu && (
              <div className="absolute right-0 mt-3 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50">
                <div className="p-4 border-b border-slate-100">
                  <p className="font-semibold text-slate-900">Vijay Kumar</p>

                  <p className="text-sm text-slate-500">admin@servicehub.com</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-4 text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
