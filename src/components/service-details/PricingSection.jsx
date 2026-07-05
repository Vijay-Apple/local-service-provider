import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";

const PricingSection = ({ service }) => {
  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-bold">Pricing</h2>

        <Card className="mt-8">
          <h3 className="text-2xl font-semibold">Standard Package</h3>

          <p className="mt-3">Starting from ₹{service.price}</p>

          <Button className="mt-6">Book Service</Button>
        </Card>
      </Container>
    </section>
  );
};

export default PricingSection;
