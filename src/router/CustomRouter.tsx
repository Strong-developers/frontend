import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
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
const FeedComponentPage = React.lazy(() => import("../pages/Feed"));
const MyInformationComponentPage = React.lazy(() => import("../pages/MyPage"));
const ReviewComponentPage = React.lazy(() => import("../pages/Review"));

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<MainComponentPage />} />
          <Route path="/login" element={<LoginComponentPage />} />
          <Route path="/join" element={<RegisterComponentPage />} />
          <Route path="/reservation" element={<CalendarComponentPage />} />
          <Route path="/shelter" element={<ReservationComponentPage />} />
          <Route path="/feed" element={<FeedComponentPage />} />
          <Route path="/mypage" element={<MyInformationComponentPage />} />
          <Route path="/review" element={<ReviewComponentPage />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default CustomRouter;
