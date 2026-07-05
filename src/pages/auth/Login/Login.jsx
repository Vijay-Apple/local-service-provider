import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoleSelector from "../../../components/auth/RoleSelector";
import roleRedirect from "../../../utils/roleRedirect";
import { loginUser } from "../../../services/auth/auth.service";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../store/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    role: "customer",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser({
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      // IMPORTANT: accessToken save karo
      localStorage.setItem("accessToken", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      dispatch(
        loginSuccess({
          user: response.user,
          token: response.token,
        }),
      );

      navigate(roleRedirect(response.user.role));
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-950">
      {/* LEFT SIDE */}
      <div
        className="hidden lg:flex relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <span className="inline-flex w-fit px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm">
            ServiceHub Platform
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-lg">
            Manage bookings, track service requests, monitor technicians, and
            grow your business from one unified platform.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-slate-400 text-sm mt-1">Services Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-slate-400 text-sm mt-1">Technicians</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-slate-400 text-sm mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center justify-center p-6 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />

        <div className="relative z-10 w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-white">Sign In</h2>

          <p className="text-center text-slate-400 mt-2">
            Login to your account
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block mb-3 font-medium text-slate-300">
                Login As
              </label>

              <RoleSelector
                selectedRole={formData.role}
                onChange={handleRoleChange}
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">Email Address</label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">Password</label>

              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <div className="flex justify-end mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-6 text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 font-semibold hover:text-indigo-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
