import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "color: text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "color: text-red-500 font-bold" : "")}
        >
          All Toys
        </NavLink>
        <NavLink
          to="/myToys"
          className={({ isActive }) => (isActive ? "color: text-red-500 font-bold" : "")}
        >
          My Toys
        </NavLink>
        <NavLink
          to="/addToys"
          className={({ isActive }) => (isActive ? "color: text-red-500 font-bold" : "")}
        >
          Add a Toy
        </NavLink>
        <NavLink
          to="/signIn"
          className={({ isActive }) => (isActive ? "color: text-red-500 font-bold" : "")}
        >
          Sign in
        </NavLink>
        <NavLink
          to="/signUp"
          className={({ isActive }) => (isActive ? "color: text-red-500 font-bold" : "")}
        >
          Sign up
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="  flex justify-between  items-center  bg-yellow-400 px-3 py-2 w-full md:w-[1280px] mx-auto rounded">
      <div className="flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          {/* ul for phone*/}
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
          {/* ul for phone ends */}
        </div>
        {/* logo  */}
        <Link to="/">
          <div
            className="flex items-center"
            style={{ fontFamily: "Bangers, cursive" }}
          >
            <img
              className="w-14 order-2 md:order-1 rounded-full md:block hidden"
              src="/src/assets/logo-cropped.png"
              alt=""
            />
            <div className="md:text-3xl md:order-2 order-1 text-xl flex ">
              {" "}
              Toy <span className="text-red-500 ml-1">Smash</span>
            </div>
          </div>
        </Link>
        {/* logo end */}
      </div>
      <div className="hidden lg:flex ">
        {/* ul for pc */}
        <ul className="menu menu-horizontal text-sm font-semibold px-1">
          {navLinks}
        </ul>
        {/* ul for pc ends */}
      </div>
      {/* avatar here */}
      <div className="avatar px-3 py-1 ">
        <div className="md:w-14 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
