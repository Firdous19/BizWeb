function Input({ label, name, type, placeholder, handleInputChange,value }) {
  return (
    <div>
      <label className="block">{label}</label>
      <input
        className="outline-none border border-gray-300 rounded-md w-full px-3 py-2 mt-1"
        type={type}
        onChange={handleInputChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
