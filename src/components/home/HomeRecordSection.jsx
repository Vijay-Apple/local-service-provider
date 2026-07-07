import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { getHomeRecord } from "../../services/public/public.service";

const HomeRecordSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchHomeRecord = async () => {
      try {
        const res = await getHomeRecord();

        if (res?.success) {
          setData(res.data);
        }
      } catch (error) {
        console.log("Home Record Error:", error);
      }
    };

    fetchHomeRecord();
  }, []);

  if (!data) return null;

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>
      </div>

      <Container>
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="text-indigo-300 font-semibold uppercase tracking-wide">
              {data.badge}
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              {data.title}
            </h2>

            <p className="mt-6 text-lg text-slate-400">{data.description}</p>

            <div className="mt-10 space-y-5">
              {data.features?.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 rounded-full bg-indigo-500/20 
                    flex items-center justify-center 
                    text-indigo-300 font-bold"
                  >
                    ✓
                  </div>

                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DASHBOARD */}
          <div
            className="
            bg-white/5 border border-white/10 
            rounded-3xl shadow-xl p-8 
            backdrop-blur-md
            "
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h3 className="font-bold text-lg">
                  Service Operations Dashboard
                </h3>

                <p className="text-sm text-slate-400">
                  Real-time service monitoring
                </p>
              </div>

              <span
                className="
                px-3 py-1 bg-emerald-500/20 
                text-emerald-300 rounded-full text-sm
                "
              >
                Live
              </span>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-4 mt-6">
              {data.stats?.map((stat) => (
                <div
                  key={stat.label}
                  className="
                  rounded-xl p-4 
                  bg-white/5 border border-white/10
                  "
                >
                  <p className="text-slate-400 text-sm">{stat.label}</p>

                  <h4 className="text-3xl font-bold mt-2 text-indigo-300">
                    {stat.value}
                  </h4>
                </div>
              ))}
            </div>

            {/* ACTIVITIES */}

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Recent Service Activity</h4>

              <div className="space-y-3">
                {data.activities?.map((activity) => (
                  <div
                    key={activity.name}
                    className="
                    flex justify-between 
                    p-3 bg-white/5 rounded-lg 
                    border border-white/10
                    "
                  >
                    <span>{activity.name}</span>

                    <span className="text-indigo-300 font-medium">
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeRecordSection;
