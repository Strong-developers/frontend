import styled from "styled-components";
import { createBackButton, createForwardButton } from "../../icons/IconCreator";
import Theme from "../../../util/theme";
import { UserReservationButtonsProps } from "../../../types/reservation/userReservationType";

const ReservationModalButtons = ({
  start,
  end,
  currentPosition,
  onNextButtonClickEvent,
  onPrevButtonClickEvent,
}: UserReservationButtonsProps) => {
  return (
    <UserReservationButtonContainer>
      <ReservationButton
        onClick={onPrevButtonClickEvent}
        disabled={currentPosition === start && true}
      >
        {createBackButton(16)}
        이전
      </ReservationButton>
      <ReservationButton
        onClick={onNextButtonClickEvent}
        disabled={currentPosition === end && true}
      >
        다음
        {createForwardButton(16)}
      </ReservationButton>
    </UserReservationButtonContainer>
  );
};

export default ReservationModalButtons;

const UserReservationButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
`;

const ReservationButton = styled.button`
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
