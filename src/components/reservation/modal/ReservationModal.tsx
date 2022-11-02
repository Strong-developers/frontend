import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useChangePosition from "../../../hooks/useChangePosition";
import ReservationCalendar from "./ReservationModalCalendar";
import ReservationModalForm from "./ReservationModalForm";
import ReservationNotice from "./ReservationModalNotice";
import ReservationModalButtonContainer from "./ReservationModalButtonContainer";
import CustomModal from "../../modal/CustomModal";
import { ShelterType } from "../../../types/shelter/shelterType";
import Theme from "../../../util/theme";

interface ReservationModalPropsType {
  isModalOpen: boolean;
  selectedShelter?: ShelterType;
  onCloseButtonClickEvent: () => void;
}

interface ComponentsType {
  [key: number]: React.ReactNode;
}

const ReservationModal = ({
  isModalOpen,
  selectedShelter,
  onCloseButtonClickEvent,
}: ReservationModalPropsType) => {
  const {
    start,
    end,
    currentPosition,
    setCurrentPosition,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useChangePosition(2);
  const components: ComponentsType = {
    1: <ReservationCalendar />,
    2: <ReservationModalForm />,
  };

  // 선택된 shelter
  console.log(selectedShelter);

  return (
    <CustomModal
      isModalOpen={isModalOpen}
      handleChangeModalState={() => {
        setCurrentPosition(1);
        onCloseButtonClickEvent();
      }}
    >
      <ReservationModalContainer>
        <ReservationNotice />
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
  gap: ${Theme.spacing.big};
  position: relative;
  overflow: hidden;
  width: 1100px;
  height: 700px;
`;
