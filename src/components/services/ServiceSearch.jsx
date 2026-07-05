const ServiceSearch = ({
    search,
    setSearch,
}) => {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) =>
                setSearch(e.target.value)
            }
            placeholder="Search services..."
            className="
        w-full
        border
        rounded-xl
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
        />
    );
};

export default ServiceSearch;