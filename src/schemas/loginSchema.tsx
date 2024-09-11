import * as z from "zod";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;


const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email" })
    .min(10, { message: "Email must be atleast 10 characters" })
    .max(50, { message: "Email must not be more than 50 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be atleast 8 characters" })
    .refine((data) => passwordRegex.test(data), {
      message: `Atleast one lowercase, uppercase, digit, special character needed`,
    }),
});
export { loginSchema };
