import { useEffect, useState } from "react";
import {
  createService,
  getAllCategories,
} from "../../../services/auth/admin.service";

const AddService = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    duration: "",
    image: "",
    description: "",
    features: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getAllCategories();

      console.log("CATEGORIES RESPONSE =>", res);

      setCategories(res.categories || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formData,
        price: Number(formData.price),
        features: formData.features
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      console.log("SERVICE PAYLOAD =>", payload);

      await createService(payload);

      alert("Service Added Successfully");

      setFormData({
        name: "",
        category: "",
        price: "",
        duration: "",
        image: "",
        description: "",
        features: "",
      });
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed To Add Service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {" "}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {" "}
        <form onSubmit={handleSubmit} className="bg-slate-900 rounded-3xl p-8">
          {" "}
          <div className="grid md:grid-cols-2 gap-6">
            {" "}
            <input
              type="text"
              name="name"
              placeholder="Service Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white"
            >
              <option value="">Select Category</option>

              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white"
            />
            <input
              type="text"
              name="duration"
              placeholder="60-90 mins"
              value={formData.duration}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white"
            />
          </div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white mt-6"
          />
          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white mt-6"
          />
          <textarea
            rows="4"
            name="features"
            placeholder="Inspection, Cleaning, Performance Check"
            value={formData.features}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white mt-6"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 rounded-xl bg-indigo-600 text-white"
          >
            {loading ? "Adding..." : "Add Service"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
