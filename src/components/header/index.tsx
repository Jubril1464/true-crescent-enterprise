import { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <header>
      <div className="bg-black flex justify-between items-center py-2 px-5 text-white">
        <div className="flex items-center gap-3 sm:text-base text-xs">
          <LuPhone />
          <p>Call now: +234 8120000089</p>
        </div>
        <div className="flex items-center gap-5 sm:text-base text-sm">
          <Link to="/auth/register">Register</Link>
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
      <nav className="flex justify-between py-4 px-5 items-center relative">
        <Link to="/" className="font-semibold text-2xl">
          SalyekSteel
        </Link>
        <ul
          className={`flex gap-5 duration-100 transform min-[850px]:translate-y-0 -translate-y-96 ${
            checked ? "translate-y-0" : "-translate-y-96"
          }  min-[850px]:static absolute min-[850px]:flex-row flex-col min-[850px]:w-auto w-full min-[850px]:bg-transparent bg-white top-0 left-0 min-[850px]:p-0 p-10 min-[850px]:items-center items-start `}
        >
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1">
              Products <LuChevronDown />
            </button>
            <div
              className={`absolute top-full w-[200px] left-0 bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
              }`}
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/products/mild-steel"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mild Steel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/stainless-steel"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Stainless Steel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/galvanized-steel"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Galvanised Steel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/fabrication-and-installation"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Fabriaction and Installation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/mesh-wire"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mesh Wire
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/our-company">Our Company</NavLink>
          </li>
          <li>
            <NavLink to="/our-services">Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/markets">Markets</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <button>
            <CiSearch />
          </button>
          <button>
            <CiUser />
          </button>
          <button>
            <CiShoppingCart />
          </button>
        </div>
        <div
          className="nav__icon min-[850px]:hidden block "
          // ref={navIconRef}
        >
          <input
            type="checkbox"
            className={`navigation__checkbox none`}
            id="navi-toggle"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label
            htmlFor="navi-toggle"
            className={`navigation__button text-center cursor-pointer`}
          >
            <span className={`navigation__icon relative mt-5`}>&nbsp;</span>
          </label>
        </div>
      </nav>
    </header>
  );
};
