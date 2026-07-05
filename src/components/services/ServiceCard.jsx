import Card from "../ui/Card";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{service.title}</h3>

          <p className="text-slate-500">{service.category}</p>
        </div>

        <p className="text-slate-600">{service.description}</p>

        <div className="font-bold">Starting at ₹{service.price}</div>

        <Link to={`/services/${service.slug}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
