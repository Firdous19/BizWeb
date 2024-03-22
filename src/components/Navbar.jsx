import { NavLink } from "react-router-dom";

function NavElement({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? "border-b-2 border-gray-600 text-black" : "text-gray-500"
        }`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  return (
    <nav className=" flex justify-between items-center px-10 py-5 w-[90%] mx-auto">
      <div className="text-4xl">
        <h1>biZweB</h1>
      </div>
      <div className="space-x-7 text-[17px] navbar text-gray-500">
        <NavElement to="/">Home</NavElement>
        <NavElement to="/services">Services</NavElement>
        <NavElement to="/about">About</NavElement>
        <NavElement to="/contact">Contact</NavElement>
      </div>
    </nav>
  );
}

export default Navbar;
