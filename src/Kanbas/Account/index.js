import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../index.css";
import "./styles.css";
import AccountNavigation from "./AccountNavigation";
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";
import { account } from "./users/client";

const Account = () => {
  const [user, setUser] = useState(undefined);

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

  console.log(user);

  return (
    <div className="container main">
      {/* TODO: user not logged in login button, else display user info */}
      <div className="row root">
        <div className="mt-3">
          <i className="fa fa-bars bars color-red" aria-hidden="true"></i>
          <h4>Profile of _____USER_____</h4>
        </div>
        <hr className=" mt-4 mb-4" />
        <AccountNavigation />
        {user === undefined ? (
          <div className="col width-100 alert alert-danger" role="alert">
            User not logged in
            <button>Login here</button>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="profile" />} />
            {user ? (
              <>
                <Route path="profile" element={<Profile user={user} />} />
                <Route
                  path="edit-profile"
                  element={<EditProfile user={user} />}
                />
              </>
            ) : (
              <Route path="login" element={<Navigate to="/login" />} />
            )}
          </Routes>
        )}
      </div>
    </div>
  );
};

export default Account;
