import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "../components/common/headerLayout";

const MainComponentPage = React.lazy(() => import("../pages/Main"));

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading</div>} />
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<MainComponentPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default CustomRouter;
