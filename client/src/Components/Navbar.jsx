import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNav(true); // Close the mobile menu after navigation
    }
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Skill Studio.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a
            className="relative text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#00df9a] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-[-4px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#00df9a] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-[-4px] after:right-[50%]"
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
        </li>
        <li className="p-4">
          <a
            className="relative text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#00df9a] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-[-4px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#00df9a] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-[-4px] after:right-[50%]"
            onClick={() => scrollToSection("Features")}
          >
            Categories
          </a>
        </li>
        <li className="p-4">
          <a
            className="relative text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#00df9a] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-[-4px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#00df9a] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-[-4px] after:right-[50%]"
            onClick={() => scrollToSection("Faqs")}
          >
            About
          </a>
        </li>
        <li className="p-4">
          <a
            className="relative text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#00df9a] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-[-4px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#00df9a] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-[-4px] after:right-[50%]"
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </a>
        </li>
      </ul>

      <a
        href="/login"
        className="bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black"
      >
        <button className="w-full h-full">Login</button>
      </a>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <IoClose size={25} /> : <TiThMenu size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4 mt-14">
          <li className="p-4 border-b border-gray-600">
            <a href="#" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#" onClick={() => scrollToSection("features")}>
              Categories
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
