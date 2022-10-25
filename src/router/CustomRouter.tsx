import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainComponentPage = React.lazy(() => import("../pages/Main"));
const LoginComponentPage = React.lazy(() => import("../pages/Login"));
const RegisterComponentPage = React.lazy(() => import("../pages/Register"));

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading</div>} />
      <Routes>
        <Route path="/" element={<MainComponentPage />} />
        <Route path="/login" element={<LoginComponentPage />} />
        <Route path="/register" element={<RegisterComponentPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default CustomRouter;
