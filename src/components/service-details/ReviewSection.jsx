import Container from "../ui/Container";

const ReviewSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-bold">Customer Reviews</h2>

        <div className="mt-8 border rounded-xl p-5">
          ⭐⭐⭐⭐⭐
          <p className="mt-3">Excellent service and fast response.</p>
          <span className="text-sm text-slate-500">- Rahul Sharma</span>
        </div>
      </Container>
    </section>
  );
};

export default ReviewSection;
