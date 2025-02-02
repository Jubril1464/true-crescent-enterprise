import { Outlet } from "react-router-dom";
import AuthImage from "@assets/images/auth-image.jpg";
export const AuthLayout = () => {
  return (
    <div className="md:grid grid-cols-5 h-screen">
      <div className="md:col-span-2">
        <Outlet />
      </div>
      <div className="col-span-3 h-screen md:block hidden">
        <img
          src={AuthImage}
          alt="auth-image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};


