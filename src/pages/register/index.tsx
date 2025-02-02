import Input from "@components/input";
import Button from "@src/components/button";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useFormHandler } from "@hooks/use-form-handler";
import * as yup from "yup";
const Register = () => {
  const { values, errors, touched, handleSubmit, handleChange } =
    useFormHandler({
      initialValues: {
        fullName:"",
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        fullName: yup.string().required("Full name is required"),
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
        <h2 className="sm:text-[30px] text-2xl font-semibold">Register</h2>
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
            Full name
            <span className="text-destructive">*</span>
          </label>
          <Input
            icon={<CiUser />}
            placeholder="Enter your full name"
            value={values.fullName}
            onChange={handleChange}
          />
          {touched?.fullName && typeof errors?.fullName === "string" && (
            <small className="text-destructive mt-1">{errors.fullName}</small>
          )}
        </div>
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
          Register
        </Button>

        <div className="flex gap-2">
          <p>Already have an account?</p>
          <Link to="/auth/login" className="font-medium text-primary underline">
            Login
          </Link>
        </div>
      </form>
    </section>
  );
};
export default Register;
