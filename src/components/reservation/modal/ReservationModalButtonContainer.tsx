import React from "react";
import styled from "styled-components";
import { createBackButton, createForwardButton } from "../../icons/IconCreator";
import Theme from "../../../util/theme";

interface ReservationModalButtonContainerPropsType {
  start: number;
  end: number;
  currentPosition: number;
  onNextButtonClickEvent: () => void;
  onPrevButtonClickEvent: () => void;
}

const ReservationModalButtonContainer = ({
  start,
  end,
  currentPosition,
  onNextButtonClickEvent,
  onPrevButtonClickEvent,
}: ReservationModalButtonContainerPropsType) => {
  return (
    <ReservationModalButtonContainerStyle>
      <ModalButton
        onClick={onPrevButtonClickEvent}
        disabled={currentPosition === start && true}
      >
        {createBackButton(16)}
        이전
      </ModalButton>
      <ModalButton
        onClick={onNextButtonClickEvent}
        disabled={currentPosition === end && true}
      >
        다음
        {createForwardButton(16)}
      </ModalButton>
    </ReservationModalButtonContainerStyle>
  );
};

export default ReservationModalButtonContainer;

const ReservationModalButtonContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${Theme.fontSize.default};
  color: ${Theme.colors.theme};
  cursor: pointer;
  &:disabled {
    color: ${Theme.colors.silverGray};
    cursor: default;
  }
`;
