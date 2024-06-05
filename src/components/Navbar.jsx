import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="p-4 flex gap-2 flex-col items-center sm:flex-row sm:justify-between    ">
      <Link to={"/"} href="" className="flex items-center gap-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-6 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>

        <span className="font-bold text-xl">groundbnb</span>
      </Link>
      <div
        className="flex overflow-hidden gap-2 sm:gap-9 border border-grey-300 rounded-full py-2 px-2  shadow-xl
        shadow-grey-300 justify-between  sm:justify-center  sm:mx-0 sm:my-2
        
           header-circle "
      >
        <div>Anywhere</div>
        <div className="border-l border-gray-800"></div>
        <div>Any week</div>
        <div className="border-l border-gray-800"></div>
        <div>Add guests</div>
        <button className="w-7 bg-primary text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w- 4h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center border border-grey-300 rounded-full py-2 px-4 gap-2  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        {user && <div className="capitalize">{user.name}</div>}
      </Link>
    </header>
  );
};

export default Navbar;
