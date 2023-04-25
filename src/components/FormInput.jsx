const FormInput = ({
  value,
  setValue,
  label,
  name,
  type = "text",
  dark = false,
  required = true,
  disabled = false
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="email"
        className={`${dark ? "text-white" : "text-black"}`}
      >
        {label}
      </label>
      <div className="w-full rounded-md border-gray-300 border-[2px] relative overflow-hidden">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`outline-none py-2 px-4 relative w-full z-10 peer bg-transparent ${
            dark ? "focus:text-black text-white" : "focus:text-white text-black"
          } transition-colors`}
          required={required}
          disabled={disabled}
        />
        <span
          className={`absolute top-0 left-0 h-full w-0 z-0 ${
            dark ? "bg-white" : "bg-black"
          } peer-focus:w-full transition-all duration-500`}
        />
      </div>
    </div>
  );
};

export default FormInput;
