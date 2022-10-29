import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import { createMonthName } from "../../util/dateUtil";
import { createBackButton, createForwardButton } from "../icons/IconCreator";

interface CalendarHeaderProps {
  year: number;
  month: number;
  onPrevMonthButtonClickEvent: () => void;
  onNextMonthButtonClickEvent: () => void;
}

const CalendarHeader = ({
  year,
  month,
  onPrevMonthButtonClickEvent,
  onNextMonthButtonClickEvent,
}: CalendarHeaderProps) => {
  return (
    <CalendarHeaderContainer>
      <CalendarHeaderColStart onClick={onPrevMonthButtonClickEvent}>
        {createBackButton(20)}
      </CalendarHeaderColStart>
      <CalendarHeaderColCenter>
        {year} {createMonthName(month)}
      </CalendarHeaderColCenter>
      <CalendarHeaderColEnd onClick={onNextMonthButtonClickEvent}>
        {createForwardButton(20)}
      </CalendarHeaderColEnd>
    </CalendarHeaderContainer>
  );
};

const CalendarHeaderContainer = styled.div`
  marign: 0 auto;
  padding: 1.75rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${Theme.fontSize.default};
  font-weight: ${Theme.fontWeight.bold};
  user-select: none;
`;

const CalendarColumn = styled.div`
  max-width: 100%;
`;

const CalendarHeaderColStart = styled(CalendarColumn)`
  cursor: pointer;
  justify-content: flex-start;
  text-align: left;
`;

const CalendarHeaderColCenter = styled(CalendarColumn)`
  justify-content: center;
  text-align: center;
`;

const CalendarHeaderColEnd = styled(CalendarColumn)`
  cursor: pointer;
  justify-content: flex-end;
  text-align: right;
`;

export default CalendarHeader;
