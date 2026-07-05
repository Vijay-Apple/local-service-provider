import Container from "../ui/Container";

const BenefitsSection = ({ benefits }) => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold">Why Choose Us</h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {benefits.map((benefit) => (
            <div key={benefit} className="border rounded-xl p-4">
              ✓ {benefit}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
