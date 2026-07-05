import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoleSelector from "../../../components/auth/RoleSelector";
import { registerUser } from "../../../services/auth/auth.service";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    role: "customer",
    fullName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
    serviceCategory: "",
    experience: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        role: formData.role,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        password: formData.password,
        serviceCategory: formData.serviceCategory,
        experience: formData.experience,
      };

      const data = await registerUser(payload);

      alert(data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
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
            "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <span className="inline-flex w-fit px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm">
            Join ServiceHub
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Join India's Growing
            <br />
            Local Services Network
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Connect customers with trusted professionals and manage everything
            from one intelligent platform.
          </p>

          <div className="mt-10 space-y-4 text-slate-200">
            <div>✓ Online Booking Management</div>
            <div>✓ Secure Payments</div>
            <div>✓ Service History Tracking</div>
            <div>✓ Verified Professionals</div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-slate-400 text-sm">Services Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-slate-400 text-sm">Professionals</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-slate-400 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center justify-center p-6 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full" />

        <div className="relative z-10 w-full max-w-2xl bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-white">
            Create Account
          </h2>

          <p className="text-center text-slate-400 mt-2">
            Start your journey today
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block mb-3 font-medium text-slate-300">
                Register As
              </label>

              <RoleSelector
                selectedRole={formData.role}
                onChange={handleRoleChange}
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">Full Name</label>

              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Vijay Kumar"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Gurgaon"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            {formData.role === "technician" && (
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="AC Technician">AC Technician</option>
                  <option value="Cleaner">Cleaner</option>
                </select>

                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="5 Years"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1" />
              <p className="text-sm text-slate-400">
                I agree to the Terms & Conditions and Privacy Policy.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:opacity-90 transition text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-6 text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-400 font-semibold hover:text-indigo-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
