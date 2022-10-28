import React from "react";
import styled from "styled-components";
import CommonBaseReservationWrapper from "../hoc/CommonBaseReservationWrapper";

const ReservationNotice = () => {
  return (
    <CommonBaseReservationWrapper>
      <ReservationNoticeContainer>
        <div>title</div>
        <div>상세사항</div>
        <div>유의사항</div>
      </ReservationNoticeContainer>
    </CommonBaseReservationWrapper>
  );
};

export default ReservationNotice;

const ReservationNoticeContainer = styled.div`
  width: 500px;
  margin: auto;
`;
