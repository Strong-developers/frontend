import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "../components/common/headerLayout";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const MainComponentPage = React.lazy(() => import("../pages/Main"));
const LoginComponentPage = React.lazy(() => import("../pages/Login"));
const RegisterComponentPage = React.lazy(() => import("../pages/Register"));
const CalendarComponentPage = React.lazy(
  () => import("../components/calendar/Calendar")
);
const ReservationComponentPage = React.lazy(
  () => import("../pages/Reservation")
);

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <HeaderLayout />
        <Routes>
          <Route path="/" element={<MainComponentPage />} />
          <Route path="/login" element={<LoginComponentPage />} />
          <Route path="/register" element={<RegisterComponentPage />} />
          <Route path="/reserve" element={<CalendarComponentPage />} />
          <Route path="/shelters" element={<ReservationComponentPage />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default CustomRouter;
