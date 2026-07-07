import { useState } from "react";
import { createContact } from "../../../services/public/public.service";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

      const response = await createContact(formData);

      console.log(response);

      alert("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(error?.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-sm font-medium">
            Contact ServiceHub
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Let's Start a Conversation
          </h1>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Have questions, feedback, or need support? Our team is here to help
            you with everything related to ServiceHub.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white">Send us a Message</h2>

            <p className="text-slate-400 mt-2">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Vijay Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white">Get In Touch</h2>

              <p className="text-slate-400 mt-3">
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-8 mt-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-xl">
                    📧
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-slate-400">vijayraj639726@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-xl">
                    📞
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-slate-400">+91 86308 21798</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-xl">
                    📍
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-slate-400">
                      Gurgaon DLF phase(III) , Haryana, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-xl">
                    ⏰
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Business Hours</h3>
                    <p className="text-slate-400">Monday - Saturday</p>
                    <p className="text-slate-500 text-sm">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-5 text-center">
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-slate-400 text-sm mt-1">Support</p>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-5 text-center">
                <h3 className="text-2xl font-bold text-white">25K+</h3>
                <p className="text-slate-400 text-sm mt-1">Customers</p>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-5 text-center">
                <h3 className="text-2xl font-bold text-white">4.8★</h3>
                <p className="text-slate-400 text-sm mt-1">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
