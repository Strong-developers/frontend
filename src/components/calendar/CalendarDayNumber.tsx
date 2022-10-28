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
      {days.map((day) => <CalendarGridNumberCell key={day}>{day}</CalendarGridNumberCell>)}
    </GridContainer>
  );
};

const CalendarGridNumberCell = styled(CalendarGridCell)`
  color: ${Theme.colors.black};
`;

export default CalendarDayNumber;
