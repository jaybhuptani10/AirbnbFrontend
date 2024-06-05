import React from "react";
import Navbar from "../Navbar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Profile from "./Profile";
import Places from "./Places";

const Account = () => {
  const { user, ready } = useContext(UserContext);
  if (!ready) {
    return <div>Loading...</div>;
  }
  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "Profile";
  }
  const linkClasses = (type = null) => {
    let classes = "py-2  sm:flex-row px-6 flex gap-1 rounded-full";
    if (type === subpage || type === "") {
      classes += " bg-primary text-white ";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  };
  return (
    <>
      <Navbar />
      <nav className="w-full justify-between gap-2 overflow-hidden p-2  flex flex-col my-2 sm:flex-row sm:justify-center sm:m-8 sm:gap-2">
        <Link className={linkClasses("Profile")} to="/Account/Profile">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p>My Profile</p>
        </Link>
        <Link className={linkClasses("Bookings")} to="/Account/Bookings">
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
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
          My Bookings
        </Link>
        <Link className={linkClasses("Places")} to="/Account/Places">
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
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          My Accomodation
        </Link>
      </nav>
      {subpage === "Profile" && <Profile user={user} />}
      {subpage === "Places" && <Places />}
    </>
  );
};

export default Account;
