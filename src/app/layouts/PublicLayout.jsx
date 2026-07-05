import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PublicLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Toast */}
      <ToastContainer position="top-right" />

      {/* Navbar */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            LocalServe
          </Link>

          {/* Search */}
          <input
            type="text"
            placeholder="Search services..."
            className="hidden md:block border px-3 py-1 rounded-lg w-64"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Contact
            </NavLink>

            <NavLink to="/dashboard" className="font-medium">
              Dashboard
            </NavLink>

            <NavLink to="/post-service" className="text-green-600 font-medium">
              Post Service
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Link to="/notifications" className="text-xl">
              🔔
            </Link>

            {/* Profile */}
            <Link to="/profile" className="w-8 h-8 bg-gray-200 rounded-full" />

            {/* Auth */}
            <Link
              to="/login"
              className="px-4 py-2 border rounded-xl hidden md:block"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hidden md:block"
            >
              Register
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/post-service">Post Service</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg">LocalServe</h3>
              <p className="text-slate-500 mt-2">
                Trusted local services marketplace.
              </p>

              <div className="flex gap-3 mt-3 text-sm">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/about">About</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/blog">Blog</Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/help">Help Center</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center text-slate-500 text-sm">
            © 2026 LocalServe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
