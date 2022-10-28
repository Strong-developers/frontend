import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import {
  GridContainer,
  CalendarGridCell,
} from "../../assets/styles/commonStyle";

interface CalendarDayNumberProps {
  days: Array<number>;
}

const CalendarDayNumber = ({ days }: CalendarDayNumberProps) => {
  return (
    <GridContainer>
      {days.map((day, idx) => (
        <CalendarGridNumberCell key={idx}>
          {day !== 0 && (
            <CalendarGridNumberStyle>{day}</CalendarGridNumberStyle>
          )}
        </CalendarGridNumberCell>
      ))}
    </GridContainer>
  );
};

const CalendarGridNumberCell = styled(CalendarGridCell)`
  color: ${Theme.colors.black};
`;

const CalendarGridNumberStyle = styled.span`
  display: inline-block;
  cursor: pointer;
`;

export default CalendarDayNumber;
