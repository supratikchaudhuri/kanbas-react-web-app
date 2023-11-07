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

function Kanbas() {
  const [courses, setCourses] = useState([]);

  const findAllCourses = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/courses");
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
        <KanbasNavigation />

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
          </Routes>
        </div>
      </Provider>
    </>
  );
}
export default Kanbas;
