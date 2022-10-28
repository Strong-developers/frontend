import React, { useState, useMemo } from "react";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarDay from "../components/calendar/CalendarDay";
import CalendarDayNumber from "../components/calendar/CalendarDayNumber";
import { startYear, startMonth, daysInMonth } from "../util/dateUtil";

const Calendar = () => {
  const [curYear, setCurYear] = useState<number>(startYear());
  const [curMonth, setCurMonth] = useState<number>(startMonth());

  const curDays = useMemo(
    () => daysInMonth(curYear, curMonth),
    [curYear, curMonth]
  );

  const handlePrevMonthButtonClick = () => {
    if (curMonth - 1 < 1) {
      setCurYear((prev) => prev - 1);
      setCurMonth(12);
    } else {
      setCurMonth((prev) => prev - 1);
    }
  };

  const handleNextMonthButtonClick = () => {
    if (curMonth + 1 > 12) {
      setCurYear((prev) => prev + 1);
      setCurMonth(1);
    } else {
      setCurMonth((prev) => prev + 1);
    }
  };

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
