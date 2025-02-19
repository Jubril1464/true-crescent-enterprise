import { CiLocationOn, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsSend } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Logo from "@assets/images/true-cresent-logo.png";

const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 py-10 flex justify-between flex-wrap bg-black text-white gap-5">
      <div className="space-y-5 sm:w-1/3 w-full">
        <img src={Logo} alt="True crescent logo" className="w-[200px]" />
        <div className="flex gap-1 items-center">
          <p>
            True Crescent Enterprise Limited - Your trusted partner for steel
            sales, fabrication, and installation services. Quality steel
            products and expert solutions for your construction needs.
          </p>
        </div>
        <h3 className="font-semibold">Contact us</h3>
        <div className="flex gap-1 items-center">
          <CiMail className="shrink-0" />
          <p>contact@truecrescent.com</p>
        </div>
        <div>
          <p>+2348021491086</p>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="font-semibold">Quick Links</h3>
        <ul className="space-y-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/our-company">Our Company</Link>
          </li>
          <li>
            <Link to="/our-services">Our Services</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h3 className="font-semibold">Our Products</h3>
        <ul className="space-y-3">
          <li>
            <Link to="/products/mild-steel">Mild steel</Link>
          </li>
          <li>
            <Link to="/products/stainless-steel">Stainless steel</Link>
          </li>
          <li>
            <Link to="/products/galvanized-steel">Galvanised material</Link>
          </li>
          <li>
            <Link to="/products/fabrication-and-installation">
              Welding and consumables
            </Link>
          </li>
          <li>
            <Link to="/products/mesh-wire">Mesh wire</Link>
          </li>
          <li>
            <Link to="/products/fittings-and-accessories">
              Fittings and accessories
            </Link>
          </li>
          <li>
            <Link to="/products/form-works">
              Acrow props and Formwork material
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h3 className="font-semibold">NewsLetter</h3>
        <div className="flex gap-2 items-center bg-white rounded-md p-2 px-3">
          <input
            type="text"
            className="bg-transparent focus:outline-none border-none text-black"
            placeholder="Enter email"
          />
          <button>
            <BsSend color="#000" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
