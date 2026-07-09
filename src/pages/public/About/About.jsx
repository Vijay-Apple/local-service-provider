import {
  ShieldCheck,
  Users,
  Clock3,
  Star,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const stats = [
  { value: "25K+", label: "Completed Services" },
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Verified Technicians" },
  { value: "98%", label: "Customer Satisfaction" },
];

const values = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted Professionals",
    description:
      "Every technician on ServiceHub is verified and trained to deliver reliable service.",
  },
  {
    icon: <Clock3 size={28} />,
    title: "Fast & On-Time Service",
    description:
      "Book services easily and get assistance from nearby professionals.",
  },
  {
    icon: <Users size={28} />,
    title: "Customer First",
    description:
      "We focus on transparency, convenience, and customer satisfaction.",
  },
  {
    icon: <Star size={28} />,
    title: "Quality Assurance",
    description:
      "Every completed service is backed by ratings, reviews, and quality checks.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <span className="inline-flex px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-sm font-medium">
            About ServiceHub
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
            Connecting Customers With Trusted Service Professionals
          </h1>

          <p className="mt-8 text-xl text-slate-400 leading-relaxed max-w-4xl">
            ServiceHub, powered by <strong>TrustLink Solutions</strong>, is a
            modern service marketplace that connects customers with verified
            professionals for repairs, maintenance, installation, and cleaning
            services.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl p-8 text-center"
              >
                <h3 className="text-4xl font-bold text-indigo-400">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200"
            alt="Team"
            className="rounded-3xl border border-indigo-500/20"
          />

          <div>
            <p className="text-indigo-400 font-semibold uppercase">
              Our Mission
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Simplifying Home & Business Services
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-8">
              Finding reliable service professionals shouldn't be difficult. We
              created ServiceHub to make booking trusted technicians simple,
              transparent, and efficient.
            </p>

            <p className="mt-6 text-slate-400 text-lg leading-8">
              From electricians and plumbers to AC technicians and cleaning
              experts, our platform helps customers connect with verified
              professionals in just a few clicks.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-indigo-400 font-semibold uppercase">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Built Around Trust & Quality
            </h2>

            <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
              We focus on delivering reliable, transparent, and premium service
              experiences for every customer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">{item.title}</h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl p-10">
            <h2 className="text-4xl font-bold">TrustLink Solutions</h2>

            <p className="text-slate-400 mt-4 text-lg">
              Technology-driven company focused on connecting customers with
              trusted service professionals through ServiceHub.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="flex gap-3">
                <Mail className="text-indigo-400" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-400">vijayraj639726@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="text-indigo-400" />
                <div>
                  <h4 className="font-semibold">Support</h4>
                  <p className="text-slate-400">+91 8630821798</p>
                  <p className="text-slate-500 text-sm">
                    WhatsApp: +91 8393821798
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-indigo-400" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-slate-400">
                    DLF Phase 3, Cyber City,
                    <br />
                    Gurugram, Haryana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-r from-indigo-600 to-blue-600 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Experience Better Service?
            </h2>

            <p className="mt-6 text-lg text-white/90">
              Join thousands of customers who trust ServiceHub for their home
              and business service needs.
            </p>

            <a
              href="/service"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
