import HeroSection from "../../../components/home/HeroSection";
import CategoriesSection from "../../../components/home/CategoriesSection";
import HomeRecordSection from "../../../components/home/HomeRecordSection";
import HowItWorksSection from "../../../components/home/HowItWorksSection";
import CTASection from "../../../components/home/CTASection";
import Footer from "../../../components/home/Footer";

const Home = () => {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      {/* GLOBAL ANIMATION STYLE WRAPPER */}
      <div className="animate-[fadeIn_0.6s_ease-in-out]">
        <HeroSection />

        {/* Trust Section */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-center text-indigo-300 uppercase tracking-widest text-sm font-semibold
                          animate-[fadeInUp_0.8s_ease-in-out]"
            >
              Trusted Across India
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                ["25K+", "Completed Services"],
                ["500+", "Technicians"],
                ["10K+", "Customers"],
                ["98%", "Customer Satisfaction"],
              ].map(([value, label], i) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center
                             hover:bg-white/10 hover:-translate-y-2 hover:scale-[1.02]
                             transition-all duration-300 ease-out backdrop-blur-md
                             animate-[fadeInUp_0.8s_ease-in-out]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-4xl font-bold text-indigo-300 animate-pulse">
                    {value}
                  </h3>
                  <p className="mt-3 text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <div className="animate-[fadeIn_0.8s_ease-in-out]">
          <CategoriesSection />
        </div>

        {/* Why Choose Us */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center animate-[fadeInUp_0.8s_ease-in-out]">
              <p className="text-indigo-300 font-semibold uppercase">
                Why ServiceHub
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                Built for Modern Service Businesses
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[
                "Verified Professionals",
                "Real-Time Tracking",
                "Secure Payments",
                "Service History",
                "Smart Scheduling",
                "24/7 Support",
              ].map((item, i) => (
                <div
                  key={item}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8
                             hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl
                             transition-all duration-300 ease-out backdrop-blur-md
                             animate-[fadeInUp_0.8s_ease-in-out]"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold
                                  animate-pulse"
                  >
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item}
                  </h3>

                  <p className="mt-3 text-slate-400">
                    Improve efficiency and deliver better customer experiences.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeRecordSection />
        <HowItWorksSection />

        {/* Testimonials */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center animate-[fadeInUp_0.8s_ease-in-out]">
              <p className="text-indigo-300 font-semibold uppercase">
                Customer Success
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  quote:
                    "ServiceHub helped us reduce response time and improve customer satisfaction.",
                  name: "Rahul Sharma",
                },
                {
                  quote:
                    "Managing technicians and service requests is now seamless.",
                  name: "Amit Verma",
                },
                {
                  quote:
                    "Excellent platform for maintaining customer service history.",
                  name: "Vikas Singh",
                },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8
                             hover:bg-white/10 hover:-translate-y-2 hover:scale-[1.02]
                             transition-all duration-300 ease-out backdrop-blur-md
                             animate-[fadeInUp_0.8s_ease-in-out]"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <p className="text-slate-300 leading-relaxed">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src={`https://i.pravatar.cc/100?u=${item.name}`}
                      className="w-12 h-12 rounded-full hover:scale-110 transition"
                    />
                    <h4 className="font-semibold text-white">{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center animate-[fadeInUp_0.8s_ease-in-out]">
              <p className="text-indigo-300 font-semibold uppercase">FAQ</p>
              <h2 className="mt-4 text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 space-y-5">
              {[
                {
                  q: "How do I book a service?",
                  a: "Choose a service, select a date and confirm the booking.",
                },
                {
                  q: "Are technicians verified?",
                  a: "Yes, all professionals are verified before onboarding.",
                },
                {
                  q: "Can I track service history?",
                  a: "Yes, every service record is stored securely.",
                },
              ].map((faq, i) => (
                <div
                  key={faq.q}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6
                             hover:bg-white/10 hover:-translate-y-1
                             transition-all duration-300 ease-out backdrop-blur-md
                             animate-[fadeInUp_0.8s_ease-in-out]"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <h3 className="font-semibold text-lg text-white">{faq.q}</h3>
                  <p className="mt-3 text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
