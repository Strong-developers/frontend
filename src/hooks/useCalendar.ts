import { useState, useMemo, useCallback } from "react";
import { startYear, startMonth, daysInMonth } from "../util/dateUtil";

interface UseCalendarReturnType {
  curYear: number;
  curMonth: number;
  curDays: Array<number>;
  handlePrevMonthButtonClick: () => void;
  handleNextMonthButtonClick: () => void;
}

const useCalendar = (): UseCalendarReturnType => {
  const [curYear, setCurYear] = useState<number>(startYear());
  const [curMonth, setCurMonth] = useState<number>(startMonth());

  const curDays = useMemo(
    () => daysInMonth(curYear, curMonth),
    [curYear, curMonth]
  );

  const handlePrevMonthButtonClick = useCallback(() => {
    if (curMonth - 1 < 1) {
      setCurYear((prev) => prev - 1);
      setCurMonth(12);
    } else {
      setCurMonth((prev) => prev - 1);
    }
  }, [curMonth, setCurYear, setCurMonth]);

  const handleNextMonthButtonClick = useCallback(() => {
    if (curMonth + 1 > 12) {
      setCurYear((prev) => prev + 1);
      setCurMonth(1);
    } else {
      setCurMonth((prev) => prev + 1);
    }
  }, [curMonth, setCurYear, setCurMonth]);

  return {
    curYear,
    curMonth,
    curDays,
    handlePrevMonthButtonClick,
    handleNextMonthButtonClick,
  };
};

export default useCalendar;
