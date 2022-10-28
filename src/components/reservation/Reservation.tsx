import React from "react";
import styled from "styled-components";
import ReservationCalendar from "./ReservationCalendar";
import ReservationForm from "./ReservationForm";
import ReservationNotice from "./ReservationNotice";
import CustomModal from "../modal/CustomModal";
import useChangePosition from "../../hooks/useChangePosition";

interface ReservationPropsType {
  isModalOpen: boolean;
  onCloseButtonClickEvent: () => void;
}

interface ComponentsType {
  [key: number]: React.ReactNode;
}

const Reservation = ({
  isModalOpen,
  onCloseButtonClickEvent,
}: ReservationPropsType) => {
  const {
    currentPosition,
    setCurrentPosition,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useChangePosition(3);
  const components: ComponentsType = {
    1: <ReservationNotice />,
    2: <ReservationCalendar />,
    3: <ReservationForm />,
  };

  return (
    <CustomModal isModalOpen={isModalOpen}>
      <CloseButton
        onClick={() => {
          setCurrentPosition(1);
          onCloseButtonClickEvent();
        }}
      >
        X
      </CloseButton>
      <ReservationContainer>{components[currentPosition]}</ReservationContainer>
      <ButtonContainer>
        <button onClick={handlePrevButtonClick}>이전</button>
        <button onClick={handleNextButtonClick}>다음</button>
      </ButtonContainer>
    </CustomModal>
  );
};

export default Reservation;

const ReservationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 700px;
  height: 600px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin: auto;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
