import Input from "@components/input";
import Button from "@src/components/button";
import { CiMail, CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useFormHandler } from "@hooks/use-form-handler";
import * as yup from "yup";
const Login = () => {
  const { values, errors, touched, handleSubmit, handleChange } =
    useFormHandler({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup.string().email().required("Email is required"),
        password: yup
          .string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <section className="sm:px-10 px-5 flex flex-col justify-center items-center h-screen">
      <div className="mt-10 xl:w-[350px] md:w-auto w-full">
        <h2 className="sm:text-[30px] text-2xl font-semibold">Login</h2>
        <p className="text-[#525252]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <form
        action=""
        className="xl:w-[350px] md:w-auto w-full  mt-10 space-y-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
            <span className="text-destructive">*</span>
          </label>
          <Input
            icon={<CiMail />}
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {touched?.email && typeof errors?.email === "string" && (
            <small className="text-destructive mt-1">{errors.email}</small>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Password
            <span className="text-destructive">*</span>
          </label>
          <Input
            icon={<CiLock />}
            placeholder="Enter your password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          {touched?.password && typeof errors?.password === "string" && (
            <small className="text-destructive mt-1">{errors.password}</small>
          )}
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
        <div>
          <Link className="underline" to="/auth/reset-password">
            Forgot Password?
          </Link>
        </div>
        <div className="flex gap-2">
          <p>Don&apos;t have an account?</p>
          <Link
            to="/auth/register"
            className="font-medium text-primary underline"
          >
            Register
          </Link>
        </div>
      </form>
    </section>
  );
};
export default Login;
