import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  const navLinks = (
    <>
      <li
        data-aos="fade-left"
        className="flex items-center"
        data-aos-duration="500"
      >
        <NavLink
          to="/"
          className={`mx-3 duration-300 hover:bg-red-400 rounded hover:text-slate-200 px-[10px] py-[4px] ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/allToys"
          className={`mx-3 duration-300 hover:bg-red-400 rounded hover:text-slate-200 px-[10px] py-[4px] ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          All Toys
        </NavLink>
        <NavLink
          to="/blog"
          className={`mx-3 duration-300 hover:bg-red-400 rounded hover:text-slate-200 px-[10px] py-[4px] ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Blog
        </NavLink>
        {/* ============================ Toys  =============================== */}

        <NavLink
          to="/myToys"
          className={`mx-3 duration-300 hover:bg-red-400 rounded hover:text-slate-200 px-[10px] py-[4px] ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          My Toys
        </NavLink>
        <NavLink
          to="/addToys"
          className={`mx-3 duration-300 hover:bg-red-400 rounded hover:text-slate-200 px-[10px] py-[4px] ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Add a Toy
        </NavLink>

        {/* ======================== sign in and sign up =============================== */}
        {user ? (
          <>
            <div data-tip="Log Out" className="tooltip tooltip-bottom" >
              <FaSignOutAlt
                onClick={handleLogout}
                className={`text-red-500 text-4xl px-[10px] py-[4px] `}
              ></FaSignOutAlt>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/signIn"
              className={`mx-3 duration-300 hover:bg-red-400 rounded hover:text-slate-200 px-[10px] py-[4px] ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signUp"
              className={`mx-3 duration-300 hover:bg-red-400 rounded hover:text-slate-200 px-[10px] py-[4px] ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
            >
              Sign up
            </NavLink>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="  flex justify-between  items-center  text-red-500 px-3 py-2 w-full md:w-[1280px] mx-auto rounded">
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
          <ul className="menu menu-compact dropdown-content text-black mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
          {/* ul for phone ends */}
        </div>
        {/* logo  */}
        <Link to="/">
          <div
            data-aos-duration="1000"
            data-aos="fade-right"
            className="flex items-center"
            style={{ fontFamily: "Bangers, cursive" }}
          >
            <img
              className="w-14 order-2 md:order-1 bg-[#ffffffab] md:mr-2 rounded-full md:block hidden"
              src="/src/assets/logo_cropped.png"
              alt=""
            />
            <div className="md:text-3xl website-name text-slate-800 md:order-2 order-1 text-xl flex ">
              Toy <span className="text-red-500 website-name ml-1">Smash</span>
            </div>
          </div>
        </Link>
        {/* logo end */}
      </div>
      <div className="hidden lg:flex ">
        {/* ul for pc */}
        <ul className=" text-sm font-semibold px-1">{navLinks}</ul>
        {/* ul for pc ends */}
      </div>
      {/* 
      <div className="tooltip" data-tip="hello">
  <button className="btn">Hover me</button>
</div>
      */}

      {/* avatar here */}
      <div
        data-tip={user?.displayName}
        className="avatar px-3 text-sm font-semibold tooltip tooltip-bottom"
      >
        <div className="md:w-14 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {user ? (
            <div className="relative">
              <div className="hover:bg-[#00000086] p-5 duration-500 absolute inset-0 text-transparent hover:text-white ">
                <FaSignOutAlt
                  title="logout"
                  onClick={handleLogout}
                ></FaSignOutAlt>
              </div>
              {user.photoURL ? (
                <img src={user?.photoURL} />
              ) : (
                <img src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"></img>
              )}
            </div>
          ) : (
            <img src="data:image/jpeg;base64,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" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
