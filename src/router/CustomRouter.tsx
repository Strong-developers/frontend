import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "../components/common/headerLayout";

const MainComponentPage = React.lazy(() => import("../pages/Main"));
const LoginComponentPage = React.lazy(() => import("../pages/Login"));
const RegisterComponentPage = React.lazy(() => import("../pages/Register"));
const CalendarComponentPage = React.lazy(() => import("../pages/Calendar"));

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading</div>} />
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<MainComponentPage />} />
        <Route path="/login" element={<LoginComponentPage />} />
        <Route path="/register" element={<RegisterComponentPage />} />
        <Route path="/calendar" element={<CalendarComponentPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default CustomRouter;
