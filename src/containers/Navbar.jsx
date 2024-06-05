import { useState } from "react";
import { NavbarTabs } from "../constants";
import { logo, close, menu } from "../assets";
import ProductDropdown from "../components/ProductDropdown";
import TemplateDropdown from "../components/TemplateDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productHover, setProductHover] = useState(false);
  const [templateHover, setTemplateHover] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white top-0 z-20 py-6 flex justify-between items-center px-12 sm:px-16 lg:px-40 sticky">
      <img src={logo} alt="" className="md:w-32 w-24" />
      <div className="hidden sm:flex sm:gap-5 md:gap-10 pb-2">
        <div
          className="cursor-pointer text-secondary hover:text-primary relative"
          onMouseOver={() => setProductHover(true)}
          onMouseOut={() => setProductHover(false)}
        >
          Product
          <div
            className={`${
              productHover ? "" : "hidden"
            } absolute top-6 -left-10 shadow-lg `}
            onMouseOver={() => setProductHover(true)}
            onMouseOut={() => setProductHover(false)}
          >
            <ProductDropdown />
          </div>
        </div>
        <div
          className="cursor-pointer text-secondary hover:text-primary relative"
          onMouseOver={() => setTemplateHover(true)}
          onMouseOut={() => setTemplateHover(false)}
        >
          Templates
          <div
            className={`${
              templateHover ? "" : "hidden"
            } absolute top-6 -left-10 shadow-lg`}
            onMouseOver={() => setTemplateHover(true)}
            onMouseOut={() => setTemplateHover(false)}
          >
            <TemplateDropdown />
          </div>
        </div>
        <div className="cursor-pointer text-secondary hover:text-primary">
          Pricing
        </div>
        <div className="cursor-pointer text-secondary hover:text-primary">
          Reviews
        </div>
      </div>

      <div className="hidden sm:flex">
        <button className="border-highlight border rounded text-highlight p-2 text-xs w-24 hover:bg-highlight hover:text-white transition-all duration-200 font-semibold">
          LOG IN
        </button>
        <button className="mx-3 bg-highlight border-highlight border text-white rounded text-xs p-2 w-24 hover:bg-secondaryhighlight font-semibold">
          START FREE
        </button>
      </div>
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu}>
          <img
            src={isOpen ? close : menu}
            alt="menu"
            className="w-5 h-5 transition-all duration-200 hover:scale-110"
          />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col gap-6 shadow-md sm:hidden px-12 py-10">
          {NavbarTabs.map((navbarTab) => (
            <p
              key={navbarTab.id}
              className="cursor-pointer text-secondary hover:text-primary border-b-2 pb-2"
            >
              {navbarTab.name}
            </p>
          ))}
          <button className="border-highlight border rounded text-highlight p-2 text-xs  hover:bg-highlight hover:text-white transition-all duration-200 font-semibold w-full">
            LOG IN
          </button>
          <button className="bg-highlight border-highlight border text-white rounded text-xs p-2 hover:bg-secondaryhighlight font-semibold w-full">
            START FREE
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
