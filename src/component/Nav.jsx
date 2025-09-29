import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200";

  return (
    <header className="flex items-center bg-white border-black border-solid border-b-4 border-t-2  py-4 px-4">
      <div className="font-dancing font-bold text-red-700 text-[20px] mr-16">
        AMEN
      </div>

      <ul className="hidden md:flex items-center justify-between flex-1 mr-16">
        <li>
          <HashLink smooth to="/#Hero" className={linkStyle}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#BestSell" className={linkStyle}>
            Best sell
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#Services" className={linkStyle}>
            Services
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#Menu" className={linkStyle}>
            Menu
          </HashLink>
        </li>
        <li>
          <Link smooth to="/contact" className={linkStyle}>
            Contact
          </Link>
        </li>
      </ul>

      <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-4 py-6 border-t border-black md:hidden">
          <li>
            <HashLink smooth to="/#Hero" className={linkStyle}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#BestSell" className={linkStyle}>
              Best sell
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Services" className={linkStyle}>
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Menu" className={linkStyle}>
              Menu
            </HashLink>
          </li>
          <li>
            <Link smooth to="/contact" className={linkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Nav;
