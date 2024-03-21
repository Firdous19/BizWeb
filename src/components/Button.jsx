import { NavLink } from "react-router-dom";

function Button({ buttonText, redirectLink }) {
  return (
    <>
      <NavLink to={redirectLink}>
        <button className="bg-blue-500 border-[2px] border-blue-500 px-5 py-[6px] rounded-full text-white hover:bg-transparent hover:text-blue-500 transition-all duration-200 ease-in-out">
          {buttonText}
        </button>
      </NavLink>
    </>
  );
}

export default Button;
