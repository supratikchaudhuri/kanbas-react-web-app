import Kanbas from "./Kanbas";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/kanbas/account" />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/labs/*" element={<Labs />} />
        <Route path="/kanbas/*" element={<Kanbas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
