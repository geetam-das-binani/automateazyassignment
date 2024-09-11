type InputProps = {
  type: string; //! Type of the input (e.g., "text", "password")
  name: string; //! Name of the input field, used for registration and error handling
  label: string; //! Label text for the input
  placeholder: string; //! Placeholder text for the input
  register: any; //! Function to register the input field with react-hook-form
  errors: any; //!  Object containing validation errors
};
const InputWithLabel = ({
  register,
  errors,
  type,
  name,
  label,
  placeholder,
}: InputProps) => {
  return (
    <div>
        {/* Label for the input field */}
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your {label}
      </label>

      {/* Input field */}
      <input
        {...register(name)}
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
       {/* Display validation error message if it exists */}
      {errors[name]?.message && (
        <p className="text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputWithLabel;
