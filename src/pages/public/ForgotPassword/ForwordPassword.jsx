import { Link } from "react-router-dom";
import { useState } from "react";
import { forgotPassword } from "../../../services/auth/auth.service";
const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [resetUrl, setResetUrl] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");
      setResetUrl("");

      const response = await forgotPassword(formData.email);

      if (response.success) {
        setSuccess(response.message || "Password reset link sent successfully");

        // Development/Test Mode
        if (response.resetUrl) {
          setResetUrl(response.resetUrl);
        }

        setFormData({
          email: "",
        });
      }
    } catch (err) {
      setError(
        err?.response?.data?.message || "Failed to send reset password link",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Forgot Password
        </h1>

        <p className="text-center text-slate-400 mt-3">
          Enter your registered email address to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {success && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl">
              {success}
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {resetUrl && (
            <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-3 rounded-xl break-all">
              <p className="font-semibold mb-2">
                Reset Link (Development Mode)
              </p>

              <a
                href={resetUrl}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {resetUrl}
              </a>
            </div>
          )}

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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center mt-6 text-slate-400">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-indigo-400 font-semibold hover:text-indigo-300"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
