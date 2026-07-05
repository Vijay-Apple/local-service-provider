import { Link } from "react-router-dom";
import {
  Info,
  Briefcase,
  Phone,
  UserCog,
  Building2,
  LogIn,
  ArrowRight,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    {
      title: "About Us",
      path: "/about",
      icon: <Info size={18} />,
    },
    {
      title: "Services",
      path: "/services",
      icon: <Briefcase size={18} />,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <Phone size={18} />,
    },
    {
      title: "Doctor Portal",
      path: "/doctor",
      icon: <UserCog size={18} />,
    },
    {
      title: "Clinic Admin",
      path: "/clinic",
      icon: <Building2 size={18} />,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[340px] z-50
        bg-white/95 backdrop-blur-2xl border-l border-indigo-100
        shadow-[0_20px_80px_rgba(0,0,0,0.15)]
        transition-all duration-500 ease-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600" />

        {/* Glow */}
        <div className="absolute top-10 right-0 w-60 h-60 bg-white/20 rounded-full blur-3xl" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6">
          <div>
            <p className="text-white/80 text-sm">Welcome to</p>

            <h2 className="text-3xl font-bold text-white">ServiceHub</h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="
              w-10 h-10 rounded-xl
              bg-white/20
              hover:bg-white/30
              flex items-center justify-center
              transition
            "
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Menu */}
        <div className="relative z-10 px-5 mt-10">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="
                  group
                  flex items-center gap-4
                  px-5 py-4
                  rounded-2xl
                  text-slate-700
                  hover:bg-indigo-50
                  hover:text-indigo-600
                  transition-all duration-300
                  hover:translate-x-1
                "
              >
                <div
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-indigo-100
                    text-indigo-600
                    flex items-center justify-center
                    group-hover:scale-110
                    transition
                  "
                >
                  {item.icon}
                </div>

                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-slate-200" />

          {/* CTA Card */}
          <div
            className="
              rounded-3xl
              p-5
              bg-gradient-to-br
              from-indigo-600
              via-violet-600
              to-blue-600
              text-white
              shadow-xl
            "
          >
            <h3 className="font-bold text-lg">Ready to get started?</h3>

            <p className="text-sm text-white/80 mt-2">
              Book services, manage requests and track technicians in real time.
            </p>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="
                mt-5
                flex items-center justify-center gap-2
                bg-white
                text-indigo-700
                py-3
                rounded-xl
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Login */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="
              mt-4
              flex items-center justify-center gap-2
              border border-indigo-200
              text-indigo-600
              py-3
              rounded-xl
              font-semibold
              hover:bg-indigo-50
              transition
            "
          >
            <LogIn size={18} />
            Log In
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
