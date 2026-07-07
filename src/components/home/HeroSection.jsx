import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";

import heroBg from "../../assets/survice-hub.jpg";

const HeroSection = ({ hero }) => {
  const navigate = useNavigate();

  if (!hero) return null;

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}

          <div>
            <span
              className="
              inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold
              bg-white/5 border border-white/10 text-indigo-300 backdrop-blur-md
              "
            >
              {hero.badge}
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {hero.title}{" "}
              <span className="text-indigo-400">{hero.highlight}</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Button onClick={() => navigate("/register")}>Get Started</Button>

              <Button variant="outline" onClick={() => navigate("/services")}>
                Explore Solutions
              </Button>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-8 mt-14">
              {hero.stats?.map((item, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-indigo-300">
                    {item.value}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT DASHBOARD */}

          <div className="relative">
            {/* Floating Cards */}

            {hero.floatingCards?.map((card, index) => (
              <div
                key={index}
                className={`
                  hidden lg:block absolute
                  ${index === 0 ? "-top-6 -right-6" : "-bottom-6 -left-6"}
                  bg-white/10 border border-white/10 backdrop-blur-md
                  rounded-2xl px-6 py-4
                  `}
              >
                <p className="text-sm text-slate-400">{card.title}</p>

                <h4 className="text-3xl font-bold text-indigo-300">
                  {card.value}
                </h4>
              </div>
            ))}

            {/* MAIN DASHBOARD */}

            <div
              className="
              bg-white/5 border border-white/10 backdrop-blur-md
              rounded-3xl shadow-2xl p-6
              "
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-bold text-white">
                    {hero.dashboard?.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {hero.dashboard?.subtitle}
                  </p>
                </div>

                <span
                  className="
                  px-3 py-1 rounded-full
                  bg-emerald-500/20
                  text-emerald-300
                  text-sm
                  "
                >
                  Live
                </span>
              </div>

              {/* METRICS */}

              <div className="grid grid-cols-2 gap-4 mt-6">
                {hero.dashboard?.metrics?.map((metric, index) => (
                  <div
                    key={index}
                    className="
                      rounded-xl p-4
                      bg-white/5
                      border border-white/10
                      "
                  >
                    <p className="text-sm text-slate-400">{metric.label}</p>

                    <h4
                      className="
                        text-3xl font-bold mt-2
                        text-indigo-300
                        "
                    >
                      {metric.value}
                    </h4>
                  </div>
                ))}
              </div>

              {/* ACTIVITY */}

              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-white">
                  Recent Activity
                </h4>

                <div className="space-y-3">
                  {hero.dashboard?.activities?.map((activity, index) => (
                    <div
                      key={index}
                      className="
                        flex justify-between
                        bg-white/5
                        p-3
                        rounded-lg
                        border border-white/10
                        "
                    >
                      <span className="text-slate-300">{activity.title}</span>

                      <span className="text-emerald-300">
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
