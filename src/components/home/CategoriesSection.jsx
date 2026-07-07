import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import { getAllCategories } from "../../services/public/public.service";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();

        setCategories(data.categories || []);
      } catch (error) {
        console.log("CATEGORY ERROR =", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-black text-white">
        <Container>
          <p className="text-center text-slate-400">Loading categories...</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-[-120px] left-1/2 -translate-x-1/2 
        w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full"
        ></div>

        <div
          className="absolute bottom-[-120px] right-[-120px] 
        w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"
        ></div>
      </div>

      <Container>
        <div className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-indigo-300 font-semibold uppercase tracking-wide">
              Categories
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Explore our home services
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Choose from professional services designed to solve your everyday
              home maintenance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {categories.map((category) => (
              <Card
                key={category._id}
                className="
                group relative bg-white/5 border border-white/10
                rounded-2xl p-8 backdrop-blur-md
                hover:bg-white/10 hover:border-indigo-500/30
                hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className="
                w-14 h-14 rounded-xl bg-indigo-500/20
                flex items-center justify-center
                text-indigo-300 text-xl font-bold mb-6"
                >
                  {category.name?.charAt(0)}
                </div>

                <h3
                  className="
                text-xl font-bold text-white 
                group-hover:text-indigo-300 transition"
                >
                  {category.name}
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
                  {category.description ||
                    "Professional service available for your home needs."}
                </p>

                <div
                  className="
                mt-6 text-indigo-300 font-medium
                inline-flex items-center gap-1
                group-hover:gap-2 transition-all"
                >
                  Explore <span>→</span>
                </div>

                <div
                  className="
                absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100 bg-indigo-500/10
                transition pointer-events-none"
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
