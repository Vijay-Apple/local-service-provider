import { useEffect, useState } from "react";

import HeroSection from "../../../components/home/HeroSection";
import CategoriesSection from "../../../components/home/CategoriesSection";
import HomeRecordSection from "../../../components/home/HomeRecordSection";
import HowItWorksSection from "../../../components/home/HowItWorksSection";
import CTASection from "../../../components/home/CTASection";
import Footer from "../../../components/home/Footer";

import { getHomePage } from "../../../services/public/public.service";

const Home = () => {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await getHomePage();

        if (res?.success) {
          setHome(res.data);
        }
      } catch (error) {
        console.log("HOME PAGE ERROR =", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!home) {
    return null;
  }

  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <div className="animate-[fadeIn_0.6s_ease-in-out]">
        {/* HERO */}

        <HeroSection hero={home.hero} />

        {/* TRUST */}

        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-indigo-300 uppercase tracking-widest text-sm font-semibold">
              {home.trust?.title}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {home.trust?.stats?.map((item, index) => (
                <div
                  key={index}
                  className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                text-center
                hover:bg-white/10
                hover:-translate-y-2
                transition
                backdrop-blur-md
                "
                >
                  <h3 className="text-4xl font-bold text-indigo-300">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}

        <CategoriesSection />

        {/* WHY CHOOSE */}

        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <p className="text-indigo-300 font-semibold uppercase">
                {home.whyChoose?.badge}
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                {home.whyChoose?.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {home.whyChoose?.features?.map((item, index) => (
                <div
                  key={index}
                  className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-8
                hover:bg-white/10
                hover:-translate-y-2
                transition
                backdrop-blur-md
                "
                >
                  <div
                    className="
                  w-12 h-12
                  rounded-xl
                  bg-indigo-500/20
                  flex
                  items-center
                  justify-center
                  text-indigo-300
                  font-bold
                  "
                  >
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOME RECORD */}

        <HomeRecordSection />

        {/* HOW IT WORKS */}

        <HowItWorksSection howItWorks={home.howItWorks} />

        {/* TESTIMONIAL */}

        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <p className="text-indigo-300 font-semibold uppercase">
                Customer Success
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {home.testimonials?.map((item, index) => (
                <div
                  key={index}
                  className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-md
                "
                >
                  <p className="text-slate-300">"{item.quote}"</p>

                  <h4 className="mt-6 font-semibold">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <p className="text-indigo-300 font-semibold uppercase">FAQ</p>

              <h2 className="mt-4 text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 space-y-5">
              {home.faq?.map((item, index) => (
                <div
                  key={index}
                  className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                "
                >
                  <h3 className="font-semibold text-lg">{item.q}</h3>

                  <p className="mt-3 text-slate-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <CTASection />

        {/* FOOTER */}

        <Footer />
      </div>
    </main>
  );
};

export default Home;
