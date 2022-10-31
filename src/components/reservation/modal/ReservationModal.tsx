import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ReservationCalendar from "./ReservationModalCalendar";
import ReservationModalForm from "./ReservationModalForm";
import ReservationNotice from "./ReservationModalNotice";
import ReservationModalButtonContainer from "./ReservationModalButtonContainer";
import CustomModal from "../../modal/CustomModal";
import useChangePosition from "../../../hooks/useChangePosition";

interface ReservationModalPropsType {
  isModalOpen: boolean;
  onCloseButtonClickEvent: () => void;
}

interface ComponentsType {
  [key: number]: React.ReactNode;
}

const ReservationModal = ({
  isModalOpen,
  onCloseButtonClickEvent,
}: ReservationModalPropsType) => {
  const {
    start,
    end,
    currentPosition,
    setCurrentPosition,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useChangePosition(3);
  const components: ComponentsType = {
    1: <ReservationNotice />,
    2: <ReservationCalendar />,
    3: <ReservationModalForm />,
  };

  return (
    <CustomModal
      isModalOpen={isModalOpen}
      handleChangeModalState={() => {
        setCurrentPosition(1);
        onCloseButtonClickEvent();
      }}
    >
      <ReservationModalContainer>
        {components[currentPosition]}
      </ReservationModalContainer>
      <ReservationModalButtonContainer
        start={start}
        end={end}
        currentPosition={currentPosition}
        onNextButtonClickEvent={handleNextButtonClick}
        onPrevButtonClickEvent={handlePrevButtonClick}
      />
    </CustomModal>
  );
};

export default ReservationModal;

const ReservationModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 550px;
  height: 700px;
`;
