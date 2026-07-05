import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <Container>
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="ServiceHub Logo"
                className="h-10 w-auto object-contain rounded-2xl"
              />

              <span className="text-2xl font-bold text-white tracking-wide">
                <span className="text-indigo-400">Service</span>Hub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-slate-300 hover:text-indigo-300 transition font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                to="/register"
                className="hidden md:flex px-5 py-2.5 rounded-xl font-medium
                           bg-indigo-500 text-white hover:bg-indigo-600 transition"
              >
                Get Started
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setOpen(true)}
                className="p-2 rounded-lg hover:bg-white/10 transition"
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-slate-950 border-l border-white/10
        z-[60] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Menu</h2>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-indigo-300 transition"
            >
              {item.label}
            </Link>
          ))}

          <hr className="border-white/10" />

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block text-center px-4 py-3 rounded-lg
                       bg-white/5 border border-white/10 text-white
                       hover:bg-white/10 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="block text-center px-4 py-3 rounded-lg
                       bg-indigo-500 text-white hover:bg-indigo-600 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-50"
        />
      )}
    </>
  );
};

export default Navbar;
