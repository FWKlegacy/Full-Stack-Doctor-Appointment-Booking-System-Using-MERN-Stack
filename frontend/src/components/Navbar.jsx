import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  //const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className=" hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/home">
          <li className="py-2">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m- hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-2">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m- hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-2">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m- hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-2">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m- hidden" />
        </NavLink>
      </ul>
      {token ? (
        <div className="flex items-center cursor-pointer group relative gap-2 ">
          <img src={assets.profile_pic} alt="" className="rounded-full w-8" />
          <img src={assets.dropdown_icon} alt="" className="w-2.5" />
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p
                className="hover:text-black cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                My Profile
              </p>
              <p
                className="hover:text-black cursor-pointer"
                onClick={() => navigate("/myappointments")}
              >
                My Appointments
              </p>
              <p
                className="hover:text-black cursor-pointer"
                onClick={() => setToken(false)}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button
            className="bg-primary text-white rounded-full md:block hidden px-8 py-3 font-light"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
