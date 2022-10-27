import React from "react";
import styled from "styled-components";

const ReservationCalendar = () => {
  return (
    <ReservationCalendarWrapper>
      <ReservationCalendarContainer>
        <CalendarContainer>
          <span>날짜를 선택해주세요.</span>
        </CalendarContainer>
        <div>시간을 선택해주세요.</div>
        <div>오전</div>
        <div>오후</div>
      </ReservationCalendarContainer>
    </ReservationCalendarWrapper>
  );
};

export default ReservationCalendar;

const ReservationCalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const ReservationCalendarContainer = styled.div`
  width: 600px;
  margin: auto;
`;
const CalendarContainer = styled.div`
  width: 600px;
  height: 400px;

  border-bottom: 1px solid black;
`;
