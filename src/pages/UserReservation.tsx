import styled from "styled-components";
import useChangePosition from "../hooks/useChangePosition";
import UserReservationNotice from "../components/reservation/userReservation/UserReservationNotice";
import UserReservationCalendar from "../components/reservation/userReservation/UserReservationCalendar";
import UserReservationForm from "../components/reservation/userReservation/UserReservationForm";
import UserReservationButtons from "../components/reservation/userReservation/UserReservationButtons";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import { ReservationComponents } from "../types/reservation/userReservationType";
const UserReservation = () => {
  const reservationComponents: ReservationComponents = {
    1: <UserReservationCalendar />,
    2: <UserReservationForm />,
  };
  const {
    start,
    end,
    currentPosition,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useChangePosition(2);
  return (
    <CommonBasePageComponent>
      <UserReservationWrapper>
        <UserReservationContainer>
          <UserReservationNotice />
          {reservationComponents[currentPosition]}
        </UserReservationContainer>
        <UserReservationButtons
          start={start}
          end={end}
          currentPosition={currentPosition}
          onNextButtonClickEvent={handleNextButtonClick}
          onPrevButtonClickEvent={handlePrevButtonClick}
        />
      </UserReservationWrapper>
    </CommonBasePageComponent>
  );
};

export default UserReservation;

const UserReservationWrapper = styled.article`
  margin: 0 auto;
  width: 70%;
`;

const UserReservationContainer = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 100%;
`;
