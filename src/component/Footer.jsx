import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="flex flex-wrap gap-4 max-sm:p-4 max-md:p-8 p-16 bg-black text-white">
      <div className="flex flex-col flex-1 gap-8 ">
        <div>
          <h1 className="text-red-700 font-bold dancing-script text-4xl">AMEN</h1>
        </div>
        <div>
          <p className="max-w-[400px]">
            At CoffeeHouse, every cup tells a story. Enjoy freshly brewed
            coffee, cozy vibes, and moments worth savoring. Brewed with passion,
            served with care.
          </p>
        </div>
        <nav className="flex gap-4">
          <Link to="">
            <Instagram size={24} className="hover:text-red-700" />
          </Link>
          <Link to="">
            <Facebook size={24} className="hover:text-red-700" />
          </Link>
          <Link to="">
            <Twitter size={24} className="hover:text-red-700" />
          </Link>
        </nav>
        <div>
          <HashLink
            smooth
            to="/#Hero"
            className="text-white bg-red-700 text-[1rem] px-5 py-2 rounded-md shadow-md hover:bg-red-800 transition"
          >
            Back To Top
          </HashLink>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center gap-4">
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-stone-400" />
          <span className="text-sm">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-stone-400" />
          <span className="text-sm">hello@coffeehouse.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-stone-400" />
          <span className="text-sm">123 Brew Street, Bean City, USA</span>
        </div>
      </div>

      <div className="flex flex-col gap-8 flex-1">
        <div>
          <h2 className="text-[1.2rem]">Site Map</h2>
        </div>
        <nav className="flex flex-col gap-5">
          <HashLink to="/#Hero">Home</HashLink>
          <HashLink to="/#Best sell">Best sell</HashLink>
          <HashLink to="/#Services">Services</HashLink>
          <HashLink to="/#Menu">Menu</HashLink>
          <HashLink to="/contact">Contact</HashLink>
        </nav>
      </div>

      <div className="flex flex-col flex-1 gap-8">
        <div>
          <h3 className="text-[1.2rem]">Extras</h3>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p>Opening Hours (Mon–Fri: 8AM – 8PM, Sat–Sun: 9AM – 6PM)</p>
          <p>Newsletter signup (“Get updates & offers”)</p>
          <p>Copyright line at the bottom</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
