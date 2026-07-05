const roles = [
  {
    value: "customer",
    title: "Customer",
    description: "Book local services",
  },
  {
    value: "technician",
    title: "Technician",
    description: "Provide services",
  },
  {
    value: "admin",
    title: "Admin",
    description: "Manage platform",
  },
];

const RoleSelector = ({ selectedRole, onChange, hideAdmin = false }) => {
  const filteredRoles = hideAdmin
    ? roles.filter((r) => r.value !== "admin")
    : roles;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {filteredRoles.map((role) => (
        <button
          key={role.value}
          type="button"
          onClick={() => onChange(role.value)}
          className={`p-4 rounded-xl border transition ${
            selectedRole === role.value
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <h3 className="font-semibold">{role.title}</h3>

          <p className="text-sm text-gray-500 mt-1">{role.description}</p>
        </button>
      ))}
    </div>
  );
};

export default RoleSelector;
