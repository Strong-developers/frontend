import React from "react";
import useCalendar from "../hooks/useCalendar";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarDay from "../components/calendar/CalendarDay";
import CalendarDayNumber from "../components/calendar/CalendarDayNumber";

const Calendar = () => {
  const {
    curYear,
    curMonth,
    curDays,
    handleNextMonthButtonClick,
    handlePrevMonthButtonClick,
  } = useCalendar();

  return (
    <React.Fragment>
      <CalendarHeader
        year={curYear}
        month={curMonth}
        onPrevMonthButtonClickEvent={handlePrevMonthButtonClick}
        onNextMonthButtonClickEvent={handleNextMonthButtonClick}
      />
      <CalendarDay />
      <CalendarDayNumber days={curDays} />
    </React.Fragment>
  );
};

export default Calendar;
