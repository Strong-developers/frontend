import React from "react";
import styled from "styled-components";
import Calendar from "../calendar/Calendar";
import CommonBaseReservationWrapper from "../hoc/CommonBaseReservationWrapper";

const ReservationCalendar = () => {
  return (
    <CommonBaseReservationWrapper>
      <ReservationCalendarContainer>
        <CalendarContainer>
          <span>날짜를 선택해주세요.</span>
          <Calendar />
        </CalendarContainer>
        <div>시간을 선택해주세요.</div>
        <div>오전</div>
        <div>오후</div>
      </ReservationCalendarContainer>
    </CommonBaseReservationWrapper>
  );
};

export default ReservationCalendar;

const ReservationCalendarContainer = styled.div`
  width: 600px;
  margin: auto;
`;
const CalendarContainer = styled.div`
  width: 600px;
  height: 400px;

  border-bottom: 1px solid black;
`;
