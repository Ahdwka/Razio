import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bgHeader lg:w-[800px] shadow-md m-auto mt-2 rounded-4xl
    md:w-[600px]
    md:mt-6
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#">
            <img src="/src/assets/razio-transp.png" className="h-8 w-auto" alt="logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="hover:text-red-600" size={24} /> : <Menu className="hover:shad" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center w-full bg-bgHeader shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
        }`}
      >
        <div className="w-full py-4">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
