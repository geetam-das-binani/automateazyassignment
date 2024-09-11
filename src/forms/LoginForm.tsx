import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/loginSchema";
import { LoginType } from "../types/types";

type Props = {
  loading: boolean;
  onSubmit: (data: LoginType) => void;
};
const LoginForm = ({ loading, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          {...register("email")}
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="your email"
        />
        {errors.email?.message && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.password?.message && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <a href="#" className="text-sm font-medium text-white hover:underline">
          Forgot password?
        </a>
      </div>
      <button
        disabled={loading}
        type="submit"
        className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-black-600 rounded-full"
              role="status"
              aria-label="loading"
            >
            </div>
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
