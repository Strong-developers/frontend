import styled from "styled-components";
import Theme from "../../../util/theme";
import Calendar from "../../calendar/Calendar";
import { createCalendarIcon, createTimeIcon } from "../../icons/IconCreator";
const UserReservationCalendar = () => {
  return (
    <UserReservationCalendarContainer>
      <CalendarTextContainer>
        <CalendarText>날짜를 선택해주세요</CalendarText>
        {createCalendarIcon(40)}
      </CalendarTextContainer>
      <Calendar />
      <CalendarTextContainer>
        <CalendarText>시간을 선택해주세요</CalendarText>
        {createTimeIcon(30)}
      </CalendarTextContainer>
      <div>오전</div>
      <div>오후</div>
    </UserReservationCalendarContainer>
  );
};

export default UserReservationCalendar;

const UserReservationCalendarContainer = styled.section`
  width: 100%;
`;

const CalendarText = styled.div`
  font-size: ${Theme.fontSize.littleBig};
`;

const CalendarTextContainer = styled.div`
  dispay: flex;
  flex-direction: column;
`;
