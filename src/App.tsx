import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./admin/page/Login/Login";
import AdminMain from "./admin/page/Main/AdminMain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/main" element={<AdminMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
