import {
  format,
  getMonth,
  getYear,
  startOfWeek,
  getDaysInMonth,
} from "date-fns";

export function startMonth(): number {
  return getMonth(new Date()) + 1;
}

export function startYear(): number {
  return getYear(new Date());
}

export function startDate(month: number): string {
  return format(startOfWeek(month), "d");
}

export function daysInMonth(curYear: number, curMonth: number) {
  const days = getDaysInMonth(new Date(curYear, curMonth - 1));
  return (() =>
    Array.from({ length: days })
      .fill(0)
      .map((_, index) => index + 1))();
}

export function createMonthName(month: number) {
  switch (month) {
    case 1:
      return "Jan";

    case 2:
      return "Feb";

    case 3:
      return "Mar";

    case 4:
      return "Apr";

    case 5:
      return "May";

    case 6:
      return "Jun";

    case 7:
      return "Jul";

    case 8:
      return "Aug";

    case 9:
      return "Sep";

    case 10:
      return "Oct";

    case 11:
      return "Nov";

    case 12:
      return "Dec";

    default:
      throw new Error("Not implemented");
  }
}