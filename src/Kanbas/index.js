import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./dashboard";
// import Courses from "./courses";

function Kanbas() {
  return (
    <>
      <KanbasNavigation/>

      <Routes>
        <Route path="/" element={<Navigate to="dashboard"/>}/>

        <Route path="dashboard" element={<Dashboard/>}/>

        {/* <Route path="courses/:courseId/*" element={<Courses/>} /> */}
      </Routes>

    </>
  );
}
export default Kanbas;