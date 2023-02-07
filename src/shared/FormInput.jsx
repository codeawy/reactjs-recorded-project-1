const FormInput = ({ label, type = "text", id, name, value, onChange, isRequired = true }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-[1px] text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="border-[1px] border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-md p-3 text-md"
        value={value}
        onChange={onChange}
        // required={isRequired}
      />
    </div>
  );
};

export default FormInput;
