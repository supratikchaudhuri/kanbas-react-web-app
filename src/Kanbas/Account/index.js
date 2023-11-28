import React, { useEffect, useState } from "react";
import "../index.css";
import "./styles.css";
import AccountNavigation from "./AccountNavigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";
import { account } from "../users/client";

const Account = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const loggedInUser = await account();
    return loggedInUser;
  };

  useEffect(() => {
    const fetchData = async () => {
      const _user = await getUser();
      setUser(_user);
    };

    fetchData();
  }, []);

  return (
    <div className="container main">
      {/* TODO: user not loggeg in login button, wlse display user info */}
      <div className="row root">
        <div className="mt-3">
          <i className="fa fa-bars bars color-red" aria-hidden="true"></i>
          <h4>Supratik Chaudhuri's Profile</h4>
        </div>

        <hr className=" mt-4 mb-4" />

        <AccountNavigation />

        <Routes>
          <Route path="/" element={<Navigate to="profile" />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
