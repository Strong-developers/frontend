import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainComponentPage = React.lazy(() => import("../pages/Main"));

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading</div>} />
      <Routes>
        <Route path="/" element={<MainComponentPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default CustomRouter;
