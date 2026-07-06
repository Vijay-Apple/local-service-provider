import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getServiceDetails } from "../../../services/public/public.service";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const res = await getServiceDetails(id);
      setService(res.data || res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">
        Loading Service Details...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />

              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    ✓ Verified Professionals
                  </span>

                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    {service.totalBookings || 0}+ Bookings
                  </span>

                  <span className="px-4 py-2 bg-white/5 border border-indigo-500/30 text-indigo-300 rounded-full text-sm">
                    ⭐ {service.rating || 4.8}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold mt-8 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  {service.name}
                </h1>

                <div className="flex flex-wrap gap-6 mt-5 text-slate-400">
                  <span>⭐ {service.rating || 4.8}</span>
                  <span>{service.totalBookings || 0}+ Bookings</span>
                  <span>{service.duration}</span>
                </div>

                <p className="mt-8 text-lg text-slate-400 leading-8">
                  {service.description}
                </p>
              </div>
            </div>

            {/* BOOKING CARD */}
            <div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-24">
                <h2 className="text-3xl font-bold">Book Service</h2>

                <div className="mt-6">
                  <p className="text-slate-400">Starting From</p>

                  <div className="flex items-end gap-3 mt-2">
                    <h3 className="text-5xl font-bold text-indigo-300">
                      ₹{service.price}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/booking/${service._id}`)}
                  className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-indigo-500 py-4 rounded-2xl font-semibold"
                >
                  Book Service Now
                </button>

                <Link
                  to="/contact"
                  className="block text-center w-full mt-4 border border-white/10 bg-white/5 py-4 rounded-2xl font-medium hover:bg-white/10 transition"
                >
                  Contact Support
                </Link>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-slate-300">
                  <p>✓ Verified Professionals</p>
                  <p>✓ Service Warranty</p>
                  <p>✓ Secure Payments</p>
                  <p>✓ 24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {service.features?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">What's Included</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                  ✓
                </div>

                <h3 className="font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PACKAGES */}
      {service.packages?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-bold mb-10">Pricing Packages</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-3xl font-bold">{pkg.name}</h3>

                <p className="text-5xl font-bold text-indigo-300 mt-6">
                  ₹{pkg.price}
                </p>

                <ul className="mt-8 space-y-4">
                  {pkg.features?.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* REVIEWS */}
      {service.reviews?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-bold mb-10">Customer Reviews</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="font-semibold text-white">{review.name}</h3>

                <p className="text-indigo-300 mt-2">⭐ {review.rating}</p>

                <p className="mt-4 text-slate-400">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-4xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>

                <p className="mt-3 text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[32px] bg-gradient-to-r from-indigo-600 to-blue-600 p-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready To Book This Service?
          </h2>

          <p className="mt-5 text-lg text-white/90">
            Professional service from verified experts.
          </p>

          <button
            onClick={() => navigate(`/booking/${service._id}`)}
            className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
