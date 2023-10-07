import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./dashboard";

function Kanbas() {
  return (
    <>

    <KanbasNavigation/>

      <Routes>
        <Route path="/" element={<Navigate to="Dashboard"/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>

      </>
  );
}
export default Kanbas;