import Container from "../ui/Container";

const FAQSection = ({ faqs }) => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold">FAQs</h2>

        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl p-4">
              <h3 className="font-semibold">{faq.question}</h3>

              <p className="mt-2 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
