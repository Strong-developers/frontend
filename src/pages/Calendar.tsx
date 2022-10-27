import React from "react";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarDay from "../components/calendar/CalendarDay";
import CalendarDayNumber from "../components/calendar/CalendarDayNumber";
import { startMonth } from "../util/dateUtil";

const Calendar = () => {
  const curMonth = startMonth();

  const handlePrevMonthButtonClick = () => {
    console.log("Prev");
  };

  const handleNextMonthButtonClick = () => {
    console.log("Next");
  };

  return (
    <React.Fragment>
      <CalendarHeader
        month={curMonth}
        onPrevMonthButtonClickEvent={handlePrevMonthButtonClick}
        onNextMonthButtonClickEvent={handleNextMonthButtonClick}
      />
      <CalendarDay />
      <CalendarDayNumber />
    </React.Fragment>
  );
};

export default Calendar;
