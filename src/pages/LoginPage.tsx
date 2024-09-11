import toast from "react-hot-toast";

import LoginForm from "../forms/LoginForm";
import { useState } from "react";
import { LoginType } from "../types/types";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate()
  //!  State to manage the loading spinner
  const [loading, setLoading] = useState<boolean>(false);

  // ! Function to handle form submission
  const onSubmit = async (data: LoginType) => {
    setLoading(true);
    try {
      //  ! Send POST request to the authentication endpoint
      const res = await fetch(
        "https://dev-cc.automateazy.com/api/v1/users/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data), //! Convert  data to JSON
        }
      );

      //  ! Check if the response is not OK and show an error message
      if (!res.ok) {
        toast.error("Invalid email or password");
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      //  ! Parse the response data
      const result = await res.json();
      toast.success("Login successful");
      localStorage.setItem('token', result.token.toString());
      navigate ('/all-leads')
      
    } catch (error: any) {
      console.error("Error during login:", error);
      toast.error(error.message ?? "Something went wrong");
    } finally {
      // ! Reset the loading state after the request is complete
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login in to your account (Automateazy)
            </h1>

            {/* Login Form Component  */}

            <LoginForm loading={loading} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
