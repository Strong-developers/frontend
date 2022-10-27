import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import {
  GridContainer,
  CalendarGridCell,
} from "../../assets/styles/commonStyle";

const CalendarDayNumber = () => {
  return (
    <GridContainer>
      <CalendarGridNumberCell>1</CalendarGridNumberCell>
    </GridContainer>
  );
};

const CalendarGridNumberCell = styled(CalendarGridCell)`
  color: ${Theme.colors.black};
`;

export default CalendarDayNumber;
