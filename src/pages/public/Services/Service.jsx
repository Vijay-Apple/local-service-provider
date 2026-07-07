import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllServices } from "../../../services/public/public.service";

const Service = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);

      const res = await getAllServices();

      setServices(res.data || []);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = useMemo(() => {
    const cats = services
      .map((service) => service.category?.name)
      .filter(Boolean);

    return ["All", ...new Set(cats)];
  }, [services]);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchSearch = service.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All"
          ? true
          : service.category?.name === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [services, search, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading Services...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <span className="inline-flex items-center px-5 py-2 rounded-full border border-indigo-500/30 bg-white/5 text-indigo-200 text-sm font-semibold backdrop-blur-md">
            Professional Service Marketplace
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Book Trusted Home
            <span className="block bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Service Experts
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-3xl">
            AC Repair, Plumbing, Cleaning, Electricians, Installation Services
            and more — verified professionals at affordable prices.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {[
              ["25K+", "Completed Jobs"],
              ["500+", "Technicians"],
              ["10K+", "Customers"],
              ["4.8★", "Average Rating"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
              >
                <h3 className="text-3xl font-bold text-indigo-300">{value}</h3>

                <p className="text-slate-400 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/20 border border-white/10 text-white placeholder:text-slate-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service._id}
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image || "https://via.placeholder.com/600x400"}
                  alt={service.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-indigo-500/30 px-4 py-2 rounded-full text-sm font-semibold text-indigo-300">
                  {service.category?.name}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {service.name}
                </h3>

                <div className="flex justify-between mt-4">
                  <span className="text-indigo-300 font-semibold">
                    ⭐ {service.rating}
                  </span>

                  <span className="text-slate-400">
                    {service.bookings}+ bookings
                  </span>
                </div>

                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="flex items-end gap-2">
                    <h4 className="text-4xl font-bold text-indigo-300">
                      ₹{service.price}
                    </h4>

                    <span className="text-slate-500">Starting Price</span>
                  </div>

                  <p className="mt-3 text-slate-400">⏱ {service.duration}</p>
                </div>

                <div className="flex gap-3 mt-6">
                  <Link
                    to={`/services/${service._id}`}
                    className="flex-1 text-center py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 font-medium"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => navigate(`/booking/${service._id}`)}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center mt-10">
            <h3 className="text-2xl font-semibold">No Services Found</h3>

            <p className="text-slate-500 mt-3">
              Try changing your search or category.
            </p>
          </div>
        )}
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Verified Professionals",
              desc: "Every technician is background checked and verified.",
            },
            {
              title: "Affordable Pricing",
              desc: "Transparent pricing with no hidden charges.",
            },
            {
              title: "Quick Support",
              desc: "24/7 customer support whenever you need help.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-100 rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-blue-300 to-cyan-500 p-14 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            Need Help Choosing a Service?
          </h2>
          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
            Get personalized recommendations from our support team and find the
            perfect professional for your needs.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default Service;
