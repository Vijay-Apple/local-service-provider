// ServiceDetails.jsx

import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment:
      "Excellent service. Technician arrived on time and fixed the issue quickly.",
  },
  {
    id: 2,
    name: "Amit Kumar",
    rating: 5,
    comment: "Professional and affordable service. Highly recommended.",
  },
];

const faqs = [
  {
    question: "How long does the service take?",
    answer:
      "Most AC services take between 60-90 minutes depending on the issue.",
  },
  {
    question: "Do technicians bring tools?",
    answer:
      "Yes, all technicians come equipped with the required tools and equipment.",
  },
];

const packages = [
  {
    id: 1,
    name: "Basic Service",
    price: 499,
    features: ["General Inspection", "Basic Cleaning", "Performance Check"],
  },
  {
    id: 2,
    name: "Premium Service",
    price: 999,
    popular: true,
    features: [
      "Deep Cleaning",
      "Gas Check",
      "Performance Optimization",
      "Priority Support",
    ],
  },
];

const ServiceDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* LEFT */}
            <div className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
                alt="AC Service"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />

              <div className="grid grid-cols-3 gap-4 mt-4">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80"
                  className="h-28 w-full object-cover rounded-2xl"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80"
                  className="h-28 w-full object-cover rounded-2xl"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80"
                  className="h-28 w-full object-cover rounded-2xl"
                  alt=""
                />
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    ✓ Verified Professionals
                  </span>

                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    1200+ Bookings
                  </span>

                  <span className="px-4 py-2 bg-white/5 border border-indigo-500/30 text-indigo-300 rounded-full text-sm">
                    ⭐ 4.8 Rating
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold mt-8 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  AC Repair & Maintenance
                </h1>

                <div className="flex flex-wrap gap-6 mt-5 text-slate-400">
                  <span>⭐ 4.8 Rating</span>
                  <span>1200+ Bookings</span>
                  <span>60-90 Minutes</span>
                </div>

                <p className="mt-8 text-lg text-slate-400 leading-8">
                  Professional AC repair and maintenance service by verified
                  technicians. Includes inspection, deep cleaning, performance
                  optimization and expert recommendations.
                </p>
              </div>
            </div>

            {/* BOOKING CARD */}
            <div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-24">
                <h2 className="text-3xl font-bold text-white">Book Service</h2>

                <div className="mt-6">
                  <p className="text-slate-400">Starting from</p>

                  <div className="flex items-end gap-3 mt-2">
                    <h3 className="text-5xl font-bold text-indigo-300">₹499</h3>

                    <span className="line-through text-slate-500">₹799</span>
                  </div>

                  <p className="text-green-400 font-medium mt-2">
                    Save 38% today
                  </p>
                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-4 rounded-2xl font-semibold">
                  Book Service Now
                </button>

                <button className="w-full mt-4 border border-white/10 bg-white/5 text-white py-4 rounded-2xl font-medium hover:bg-white/10 transition">
                  Contact Support
                </button>

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

      {/* INCLUDED */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-white">What's Included</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Complete Inspection",
            "Performance Check",
            "Professional Cleaning",
            "Expert Recommendations",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500/20 to-indigo-400/10 flex items-center justify-center mb-4 text-indigo-300 font-bold">
                ✓
              </div>

              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-10">Pricing Packages</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/40 transition-all"
            >
              {pkg.popular && (
                <span className="absolute top-5 right-5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-xs px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-3xl font-bold">{pkg.name}</h3>

              <p className="text-5xl font-bold text-indigo-300 mt-6">
                ₹{pkg.price}
              </p>

              <ul className="mt-8 space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 rounded-xl">
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white">
            Why Choose ServiceHub?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="text-5xl font-bold text-indigo-300">500+</h3>
              <p className="mt-2 text-slate-400">Verified Technicians</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-indigo-300">25K+</h3>
              <p className="mt-2 text-slate-400">Completed Services</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-indigo-300">98%</h3>
              <p className="mt-2 text-slate-400">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-10 text-white">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-indigo-500/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/100?u=${review.id}`}
                  alt={review.name}
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>

                  <p className="text-indigo-300">⭐⭐⭐⭐⭐</p>
                </div>
              </div>

              <p className="mt-5 text-slate-400 leading-7">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold mb-10 text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-indigo-500/40 transition-all"
            >
              <h3 className="font-semibold text-lg text-white">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-400 leading-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-slate-950 via-black to-slate-950 border border-white/10 p-14 text-center">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <span className="inline-block px-5 py-2 rounded-full border border-indigo-500/30 bg-white/5 text-indigo-200 text-sm backdrop-blur-md">
              Get Started Today
            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight text-white">
              Ready to Book Your Service?
            </h2>

            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Get professional service from verified experts with transparent
              pricing, secure payments, and guaranteed satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-[0_15px_40px_rgba(79,70,229,0.35)] transition">
                Book Now
              </button>

              <Link
                to="/contact"
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-indigo-300">25K+</h3>
                <p className="text-slate-500 mt-2 text-sm">
                  Services Completed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-300">500+</h3>
                <p className="text-slate-500 mt-2 text-sm">Technicians</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-300">10K+</h3>
                <p className="text-slate-500 mt-2 text-sm">Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-300">98%</h3>
                <p className="text-slate-500 mt-2 text-sm">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
