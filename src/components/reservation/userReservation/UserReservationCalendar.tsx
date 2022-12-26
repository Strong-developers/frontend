import styled from "styled-components";
import Theme from "../../../util/theme";
import Calendar from "../../calendar/Calendar";
import { createCalendarIcon, createTimeIcon } from "../../icons/IconCreator";
const UserReservationCalendar = () => {
  return (
    <UserReservationCalendarContainer>
      <CalendarTextContainer>
        <CalendarText>날짜를 선택해주세요</CalendarText>
        {createCalendarIcon(40, "white")}
      </CalendarTextContainer>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
      <CalendarTextContainer>
        <CalendarText>시간을 선택해주세요</CalendarText>
        {createTimeIcon(40, "white")}
      </CalendarTextContainer>
      <CalendarContainer>
        <div>오전</div>
        <div>오후</div>
      </CalendarContainer>
    </UserReservationCalendarContainer>
  );
};

export default UserReservationCalendar;

const UserReservationCalendarContainer = styled.section`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

const CalendarText = styled.h2`
  margin: 0;
  font-size: ${Theme.fontSize.littleBig};
  color: ${Theme.colors.white};
`;

const CalendarTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${Theme.spacing.small};
`;

const CalendarContainer = styled.div`
  border-radius: 4px;
  margin-bottom: ${Theme.spacing.default};
  background-color: ${Theme.colors.white};
  box-shadow: rgba(99, 99, 99) 0px 2px 8px 0px inset;
`;
