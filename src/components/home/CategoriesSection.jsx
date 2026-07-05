import Container from "../ui/Container";
import Card from "../ui/Card";

const solutions = [
  {
    title: "Booking Management",
    description:
      "Manage service requests, appointments, and schedules from a centralized platform.",
  },
  {
    title: "Technician Dispatch",
    description:
      "Assign technicians efficiently and monitor field operations in real time.",
  },
  {
    title: "Customer Records",
    description:
      "Maintain complete service history, invoices, and maintenance records.",
  },
  {
    title: "Service Tracking",
    description:
      "Track every request from booking to completion with full visibility.",
  },
  {
    title: "Payment Management",
    description: "Manage invoices, payments, and transaction records securely.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Gain business insights through dashboards and performance reports.",
  },
];

const CategoriesSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Glow background (same as CTA) */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>
      </div>

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-indigo-300 font-semibold uppercase tracking-wide">
              Solutions
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Everything you need to manage home services
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Streamline operations, improve technician productivity, and
              deliver exceptional customer experiences with a unified service
              management platform.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {solutions.map((solution) => (
              <Card
                key={solution.title}
                className="group relative bg-white/5 border border-white/10
                           rounded-2xl p-8 backdrop-blur-md
                           hover:bg-white/10 hover:border-indigo-500/30
                           hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 text-xl font-bold mb-6">
                  →
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                  {solution.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-6 text-indigo-300 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span>→</span>
                </div>

                {/* glow overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-indigo-500/10 transition pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
