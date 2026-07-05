import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Glow Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>
      </div>

      <Container>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-indigo-500/30 bg-white/5 text-indigo-200 text-sm backdrop-blur-md">
            Get Started Today
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
            Transform Your Home Service Operations
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Automate bookings, manage technicians, track service history, and
            deliver exceptional customer experiences from one unified platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button variant="primary" onClick={() => navigate("/register")}>
              Get Started Free
            </Button>

            <Button variant="outline" onClick={() => navigate("/contact")}>
              Request Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
            <div className="hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-300">25K+</h3>
              <p className="text-slate-500 mt-2 text-sm">Services Completed</p>
            </div>

            <div className="hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-400">500+</h3>
              <p className="text-slate-500 mt-2 text-sm">Technicians</p>
            </div>

            <div className="hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-200">10K+</h3>
              <p className="text-slate-500 mt-2 text-sm">Customers</p>
            </div>

            <div className="hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-300">98%</h3>
              <p className="text-slate-500 mt-2 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
