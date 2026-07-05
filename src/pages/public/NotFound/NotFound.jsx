import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-indigo-600/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[450px] h-[450px] bg-indigo-500/10 blur-3xl rounded-full"></div>

      {/* Main Card */}
      <div className="relative z-10 max-w-3xl w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 md:p-16 shadow-2xl">
        <span className="inline-block px-5 py-2 rounded-full border border-indigo-500/30 bg-white/5 text-indigo-200 text-sm font-medium">
          Page Not Found
        </span>

        <h1 className="mt-8 text-7xl md:text-9xl font-bold bg-gradient-to-r from-indigo-300 via-white to-indigo-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
          Oops! This Page Doesn't Exist
        </h2>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          The page you're looking for may have been moved, deleted, or never
          existed. Try returning to the homepage or browsing our services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            to="/"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold hover:shadow-[0_15px_40px_rgba(79,70,229,0.35)] transition"
          >
            Back to Home
          </Link>

          <Link
            to="/services"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
          >
            Browse Services
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-indigo-300">25K+</h3>
            <p className="text-slate-500 text-sm mt-1">Services Completed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-300">500+</h3>
            <p className="text-slate-500 text-sm mt-1">Technicians</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-300">98%</h3>
            <p className="text-slate-500 text-sm mt-1">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
