import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full"></div>

      {/* Card */}
      <div className="relative z-10 max-w-2xl w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 shadow-2xl">
        <span className="inline-block px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium">
          Access Restricted
        </span>

        <h1 className="mt-8 text-7xl md:text-8xl font-bold bg-gradient-to-r from-indigo-300 via-white to-indigo-400 bg-clip-text text-transparent">
          403
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          Unauthorized Access
        </h2>

        <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto">
          You don't have permission to access this page. Please log in with an
          authorized account or contact your administrator.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            to="/"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold hover:shadow-[0_15px_40px_rgba(79,70,229,0.35)] transition"
          >
            Go Home
          </Link>

          <Link
            to="/login"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
          >
            Login
          </Link>
        </div>

        {/* Stats Style Footer */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-indigo-300">24/7</h3>
            <p className="text-slate-500 text-sm mt-1">Support</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-300">Secure</h3>
            <p className="text-slate-500 text-sm mt-1">Access Control</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-300">100%</h3>
            <p className="text-slate-500 text-sm mt-1">Protected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
