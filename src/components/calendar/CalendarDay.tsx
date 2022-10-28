import React from "react";
import {
  GridContainer,
  CalendarGridCell,
} from "../../assets/styles/commonStyle";

const CalendarDay = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <GridContainer>
      {days.map((day) => (
        <CalendarGridCell key={day}>{day}</CalendarGridCell>
      ))}
    </GridContainer>
  );
};

export default CalendarDay;
