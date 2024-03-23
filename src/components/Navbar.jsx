import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";

function NavElement({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? "border-b-2 border-gray-600 text-black" : "text-gray-600"
        } hover:text-black transition-all duration-150d`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flex justify-between items-center px-10 py-5 md:w-[90%] mx-auto ">
      <div className="text-4xl">
        <NavLink to="/">
          <h1>
            bi<span className="text-blue-500">Z</span>we
            <span className="text-blue-500">B</span>
          </h1>
        </NavLink>
      </div>
      <div className="space-x-7 text-[17px] navbar text-gray-500 custom1:hidden">
        <NavElement to="/">Home</NavElement>
        <NavElement to="/services">Services</NavElement>
        <NavElement to="/about">About</NavElement>
        <NavElement to="/contact">Contact</NavElement>
      </div>

      <div className="-mr-2 -my-2 md:hidden">
        {!isOpen && (
          <button
            onClick={toggleMenu}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-500"
        enterFrom="right-72 opacity-0"
        enterTo="right-0 opacity-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="right-0 opacity-100"
        leaveTo="right-72 opacity-0"
      >
        {() => (
          <div
            ref={ref}
            className="fixed inset-y-0 right-0 max-w-xs w-full h-full bg-white transition transform duration-200 ease-in-out sm:pl-16 border-l-[1px] border-gray-200 z-10"
          >
            <div className="h-full flex flex-col space-y-8 py-6 pr-6 pl-8 overflow-y-auto">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={toggleMenu}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/* Close icon */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <NavElement to="/">Home</NavElement>
                <NavElement to="/services">Services</NavElement>
                <NavElement to="/about">About</NavElement>
                <NavElement to="/contact">Contact</NavElement>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
