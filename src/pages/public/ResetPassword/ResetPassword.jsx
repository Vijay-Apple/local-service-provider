import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  resetPassword,
  resetPasswordForm,
} from "../../../services/auth/auth.service";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [checkingToken, setCheckingToken] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    try {
      setCheckingToken(true);

      const response = await resetPasswordForm(token);

      if (response?.success) {
        setTokenValid(true);
      } else {
        setError("Invalid or expired reset link");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid or expired reset link");
    } finally {
      setCheckingToken(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const response = await resetPassword(token, {
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      setMessage(response?.message || "Password updated successfully");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  if (checkingToken) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg font-medium">Verifying reset link...</div>
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm border w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600">Invalid Link</h2>

          <p className="mt-3 text-slate-600">{error}</p>

          <Link
            to="/forgot-password"
            className="inline-block mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl"
          >
            Request New Link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border rounded-3xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Reset Password</h1>

        <p className="text-slate-500 mt-3">
          Create a new password for your account.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {message && (
            <div className="bg-green-100 text-green-700 border border-green-300 p-3 rounded-xl">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 border border-red-300 p-3 rounded-xl">
              {error}
            </div>
          )}

          <div>
            <label className="block mb-2 font-medium">New Password</label>

            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full border rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full border rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-blue-600 font-medium">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
