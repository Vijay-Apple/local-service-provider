import Container from "../ui/Container";

const HowItWorksSection = ({ howItWorks }) => {
  if (!howItWorks) return null;

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>
      </div>

      <Container>
        <div className="relative">
          {/* Header */}

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-indigo-300 font-semibold uppercase tracking-wide">
              {howItWorks.badge}
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              {howItWorks.title}
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              {howItWorks.description}
            </p>
          </div>

          {/* Steps */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {howItWorks.steps?.map((step) => (
              <div
                key={step.number}
                className="
                  relative group rounded-2xl p-8
                  bg-white/5 border border-white/10
                  hover:bg-white/10
                  hover:border-indigo-500/30
                  hover:-translate-y-2
                  transition-all duration-300
                  backdrop-blur-md
                  "
              >
                {/* Number */}

                <div
                  className="
                    text-6xl font-extrabold
                    text-white/10
                    group-hover:text-indigo-400/30
                    transition
                    "
                >
                  {step.number}
                </div>

                {/* Line */}

                <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4 mb-6"></div>

                <h3
                  className="
                    text-xl font-bold text-white
                    group-hover:text-indigo-300
                    transition
                    "
                >
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Glow */}

                <div
                  className="
                    absolute inset-0 rounded-2xl
                    opacity-0
                    group-hover:opacity-100
                    bg-indigo-500/10
                    transition
                    pointer-events-none
                    "
                ></div>
              </div>
            ))}
          </div>

          {/* Stats */}

          <div
            className="
            grid grid-cols-2 md:grid-cols-4 gap-8
            mt-20 pt-12
            border-t border-white/10
            "
          >
            {howItWorks.stats?.map((item) => (
              <div
                key={item.label}
                className="text-center hover:scale-105 transition"
              >
                <h3 className="text-3xl font-bold text-indigo-300">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-2 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
