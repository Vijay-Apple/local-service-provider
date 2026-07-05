import Container from "../ui/Container";

const ServiceHero = ({ service }) => {
  return (
    <section className="py-16 border-b">
      <Container>
        <div className="max-w-4xl">
          <span className="text-sm text-blue-600">{service.category}</span>

          <h1 className="text-5xl font-bold mt-3">{service.title}</h1>

          <p className="mt-5 text-slate-600 text-lg">{service.description}</p>

          <div className="mt-8">
            <span className="text-3xl font-bold">₹{service.price}</span>

            <span className="text-slate-500 ml-2">Starting Price</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceHero;
