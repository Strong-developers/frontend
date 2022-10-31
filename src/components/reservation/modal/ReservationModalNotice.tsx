import React from "react";
import ReservationModalNoticeHeader from "./ReservationModalNoticeHeader";
import ReservationModalNoticeBody from "./ReservationModalNoticeBody";
import CommonBaseReservationModal from "../../hoc/CommonBaseReservationModal";

const ReservationNotice = () => {
  return (
    <CommonBaseReservationModal>
      <ReservationModalNoticeHeader />
      <ReservationModalNoticeBody />
    </CommonBaseReservationModal>
  );
};

export default ReservationNotice;
