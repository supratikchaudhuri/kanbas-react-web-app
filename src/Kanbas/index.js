import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./dashboard";
import Courses from "./courses";
import store from "./store";

import "./index.css";
import Account from "./Account";
import axios from "axios";
import Signin from "./Account/users/signin";
import UsersTable from "./Account/users/UsersTable";
import Signup from "./Account/users/Signup";
import UserProfile from "./Account/users/UserProfile";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const findAllCourses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/courses`);
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <>
      <Provider store={store}>
        <KanbasNavigation courses={courses} />

        <div class="container main">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />

            <Route path="account/*" element={<Account />} />

            <Route
              path="dashboard"
              element={<Dashboard courses={courses} setCourses={setCourses} />}
            />

            <Route
              path="courses/:courseId/*"
              element={<Courses courses={courses} />}
            />

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/user/:userId" element={<UserProfile />} />

            <Route path="/admin/users" element={<UsersTable />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}
export default Kanbas;
