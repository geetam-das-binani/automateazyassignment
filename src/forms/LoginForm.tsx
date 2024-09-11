import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/loginSchema";
import { LoginType } from "../types/types";
import { inputConfigs } from "../utils/inputConfig";
import InputWithLabel from "../components/InputWithLabel";

type Props = {
  loading: boolean;
  onSubmit: (data: LoginType) => void;
};
const LoginForm = ({ loading, onSubmit }: Props) => {
   // ! Initialize the form with react-hook-form, using Zod for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema), // ! Applied login  schema validation
  });
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {inputConfigs.map((config) => (
        <InputWithLabel
          key={config.id}
          {...config}  //! Spread the config object to pass down props
          register={register} //!  Register input fields with react-hook-form
          errors={errors}  // ! Passed validation errors to InputWithLabel
        />
      ))}
      <div className="flex items-center justify-between">
        <a href="#" className="text-sm font-medium text-white hover:underline">
          Forgot password?
        </a>
      </div>
      {/* Submit button */}
      <button
        disabled={loading}
        type="submit"
        className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {loading ? (
            //!  Show a loading spinner when the form is being submitted
            
          <div className="flex items-center justify-center gap-2">
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-black-600 rounded-full"
              role="status"
              aria-label="loading"
            ></div>
            <span>Please Wait</span>
          </div>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
