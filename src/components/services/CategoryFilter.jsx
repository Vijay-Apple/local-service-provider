const categories = ["All", "Home Services"];

const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`
            px-4 py-2 rounded-lg border
            ${selected === category ? "bg-blue-600 text-white" : ""}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
