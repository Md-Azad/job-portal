import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-white text-xl">
          Home
        </NavLink>
      </li>

      <li className="text-white text-xl">
        <NavLink to="/Job-application">Job Application</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-cyan-600 to-blue-600 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img src={logo} className="w-8 md:w-12 " alt="" />
          <p className="text-3xl text-yellow-300 hidden md:inline-block">
            Job Portal
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 items-center">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2 ">
        <Link to="/login" className="btn btn-accent text-white">
          Login
        </Link>
        <Link className="btn btn-warning text-white ">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
