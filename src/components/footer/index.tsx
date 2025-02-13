import { CiLocationOn, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsSend } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 py-10 flex justify-between flex-wrap bg-black text-white gap-5">
      <div className="space-y-5 sm:w-1/3 w-full">
        <h3 className="font-semibold">Locate us</h3>
        <div className="flex gap-1 items-center">
          <p>
            Plot/No. 4, Orowumi Street, Lagos Mailand Servicing, Badagry Express
            Way, Doyin/Orile Bus-Stop, Lagos
          </p>
        </div>
        <h3 className="font-semibold">Contact us</h3>
        <div className="flex gap-1 items-center">
          <CiMail className="shrink-0" />
          <p>contact@truecrescent.com</p>
        </div>
        <div>
          <p>+2348160804480</p>
          <p>+2348168347319</p>
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
