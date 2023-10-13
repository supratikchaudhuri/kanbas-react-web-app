import db from "../Database/index.js";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import "./styles.css"

import CourseNavigation from "./CourseNavigation.jsx";
import Home from "./Home.jsx";
import Modules from "./modules/index.js";
import Assignments from "./assignemnts/index.js";
import AssignmentEditor from "./assignemnts/AssignmentEditor.jsx";
import Grades from "./grades/index.js";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div className="main">
      <div className="row root">

        <div className="breadcrumb">
          <i className="fa-solid fa-bars color-red"></i>
          <nav aria-label="breadcrumb" className="ms-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="hover-underline color-red" href=".">{course.name}</a></li>
              <li className="breadcrumb-item color-black" aria-current="page">{useParams()['*']}</li>
            </ol>
          </nav>
        </div>
            
        <hr/>

        <CourseNavigation/>

        <Routes>

          <Route path="/" element={<Navigate to = "home"/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="modules" element={<Modules/>}/>
          <Route path="assignments" element={<Assignments/>}/>
          <Route path="assignments/:assignmentId" element={<AssignmentEditor/>}/>
          <Route path="grades" element={<Grades/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default Courses;