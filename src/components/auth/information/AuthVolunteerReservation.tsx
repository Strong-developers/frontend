import styled from "styled-components";
import ReservationAuthDetail from "../../reservation/authReserveDetail/ReservationAuthDetail";
import ReservationAuthShelterList from "../../reservation/authReserveDetail/ResevationAuthShelterList";
import Theme from "../../../util/theme";

const AuthVolunteerReservation = () => {
  return (
    <AuthReservationContainer>
      <AuthReservationTitle>RESERVATION</AuthReservationTitle>
      <AuthReservationHeaderWrapper>
        <ReservationAuthDetail />
        <ReservationAuthShelterList />
      </AuthReservationHeaderWrapper>
    </AuthReservationContainer>
  );
};

const AuthReservationContainer = styled.div`
  width: 100%;
`;

const AuthReservationTitle = styled.p`
  text-align: center;
  font-size: ${Theme.fontSize.big};
  font-weight: ${Theme.fontWeight.bold};
`;

const AuthReservationHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;
`;

export default AuthVolunteerReservation;
