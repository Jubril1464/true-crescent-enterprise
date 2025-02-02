import { Card } from "@src/components/card";
import { Layout } from "@src/components/page-layout";
import { SlLocationPin } from "react-icons/sl";
import { useFormHandler } from "@hooks/use-form-handler";
import * as yup from "yup";
import Input from "@src/components/input";
import Button from "@src/components/button";
const Contact = () => {
  const { values, errors, touched, handleSubmit, handleChange } =
    useFormHandler({
      initialValues: {
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
      validationSchema: yup.object({
        fullName: yup.string().required("Full name is required"),
        email: yup.string().email().required("Email is required"),
        message: yup.string().required("Message is required"),
        phoneNumber: yup.string().required("Phone number is required"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <Layout>
      <div className="grid md:grid-cols-2 grid-cols-1 px-5 mt-10 gap-10">
        <div className="space-y-5 ">
          <div>
            <h2 className="sm:text-[30px] text-2xl font-semibold">
              Get in Touch
            </h2>
            <p className="text-[#525252]">
              We're here to help and answer any questions you might have.
            </p>
          </div>

          <Card variant="default">
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <SlLocationPin />
                <h3>Head Office</h3>
              </div>
              <p>Plot/No. 4, Orowumi Street, Lagos Mainland Servicing,</p>
              <p>Badagry Express Way,</p>
              <p>Doyin/Orile Bus-Stop, Lagos.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <SlLocationPin />
                <h3>Branch Office</h3>
              </div>
              <p>No. 221, Section C - Line3,</p>
              <p>Orile/Ifesowapo Iron Market, Lagos Mainland</p>
              <p>Servicing, Badagry Express Way, Lagos.</p>
            </div>
          </Card>
        </div>
        <Card variant="default">
          <div>
            <h2 className="sm:text-[30px] text-2xl font-semibold">
              Send us a message
            </h2>
            <p className="text-[#525252]">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form action="" onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="block text-sm font-medium">
                Full name
                <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="Enter your full name"
                value={values.fullName}
                onChange={handleChange}
              />
              {touched?.fullName && typeof errors?.fullName === "string" && (
                <small className="text-destructive mt-1">
                  {errors.fullName}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
                <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="Enter your email address"
                value={values.email}
                onChange={handleChange}
              />
              {touched?.email && typeof errors?.email === "string" && (
                <small className="text-destructive mt-1">{errors.email}</small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium"
              >
                Phone number
                <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="Enter your phone number"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              {touched?.phoneNumber &&
                typeof errors?.phoneNumber === "string" && (
                  <small className="text-destructive mt-1">
                    {errors.phoneNumber}
                  </small>
                )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
                <span className="text-destructive">*</span>
              </label>
              <textarea
                name=""
                rows={5}
                className="border border-input pl-3 rounded-md focus:outline-none focus:ring-2 transition w-full py-2 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                placeholder="Enter your message"
              ></textarea>
              {touched?.message && typeof errors?.message === "string" && (
                <small className="text-destructive mt-1">
                  {errors.message}
                </small>
              )}
            </div>
            <Button className="w-full">Send message</Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
};
export default Contact;
