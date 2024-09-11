type InputProps = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  register: any;
  errors: any;
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
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your {label}
      </label>
      <input
        {...register(name)}
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      {errors[name]?.message && (
        <p className="text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputWithLabel;
