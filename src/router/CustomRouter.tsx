import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const MainComponentPage = lazy(() => import("../pages/Main"));
const LoginComponentPage = lazy(() => import("../pages/Login"));
const LogoutComponentPage = lazy(() => import("../pages/Logout"));
const RegisterComponentPage = lazy(() => import("../pages/Register"));
const CalendarComponentPage = lazy(
  () => import("../components/calendar/Calendar")
);
const ReservationComponentPage = lazy(() => import("../pages/Reservation"));
const FeedComponentPage = lazy(() => import("../pages/Feed"));
const MyInformationComponentPage = lazy(() => import("../pages/MyPage"));
const ChatComponentPage = lazy(() => import("../pages/Chat"));
const ReviewComponentPage = lazy(() => import("../pages/Review"));
const UserReservationComponentPage = lazy(
  () => import("../pages/UserReservation")
);

const CustomRouter = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<MainComponentPage />} />
          <Route path="/login" element={<LoginComponentPage />} />
          <Route path="/logout" element={<LogoutComponentPage />} />
          <Route path="/join" element={<RegisterComponentPage />} />
          <Route path="/reservation" element={<CalendarComponentPage />} />
          <Route path="/shelter" element={<ReservationComponentPage />} />
          <Route path="/feed/:id" element={<FeedComponentPage />} />
          <Route path="/mypage" element={<MyInformationComponentPage />} />
          <Route path="/chat" element={<ChatComponentPage />} />
          <Route path="/review" element={<ReviewComponentPage />} />
          <Route
            path="/reservation/:shelterId"
            element={<UserReservationComponentPage />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default CustomRouter;
