import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
const Profile = ({ user }) => {
  const navigate = useNavigate();
  async function logout() {
    await axios.post("/api/users/logout");
    navigate("/Login");
  }
  return (
    <div className="text-center mb-8 mx-auto">
      Logged in as {user.name}
      <br />
      <button onClick={logout} className="primary max-w-sm mt-2">
        Logout
      </button>
    </div>
  );
};

export default Profile;
