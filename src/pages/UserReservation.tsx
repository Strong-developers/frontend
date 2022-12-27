import styled from "styled-components";
import useChangePosition from "../hooks/useChangePosition";
import UserReservationNotice from "../components/reservation/userReservation/UserReservationNotice";
import UserReservationCalendar from "../components/reservation/userReservation/UserReservationCalendar";
import UserReservationForm from "../components/reservation/userReservation/UserReservationForm";
import UserReservationButtons from "../components/reservation/userReservation/UserReservationButtons";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import { ReservationComponents } from "../types/reservation/userReservationType";
import backgroundImage from "../assets/images/reservation-bg.jpg";
import Theme from "../util/theme";

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
          <UserReservationLeft>
            <UserReservationNotice />
          </UserReservationLeft>
          <UserReservationRight>
            {reservationComponents[currentPosition]}
            <UserReservationButtons
              start={start}
              end={end}
              currentPosition={currentPosition}
              onNextButtonClickEvent={handleNextButtonClick}
              onPrevButtonClickEvent={handlePrevButtonClick}
            />
          </UserReservationRight>
        </UserReservationContainer>
      </UserReservationWrapper>
    </CommonBasePageComponent>
  );
};

export default UserReservation;

const UserReservationWrapper = styled.article`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const UserReservationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const UserReservationLeft = styled.section`
  width: 50rem;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.8) 2px 2px 8px 1px;
  background-color: ${Theme.colors.moreTp};
  z-index: 2;
`;

const UserReservationRight = styled.section`
  width: 30rem;
  height: 40.625rem;
  padding: 3rem;
  border-radius: 0 0.5rem 0.5rem 0;
  box-shadow: rgba(99, 99, 99) 3px 3px 5px;
  background-color: #006680;
  z-index: 1;
`;
