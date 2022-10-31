import styled from "styled-components";
import Theme from "../../../util/theme";

const AuthVolunteerReservation = () => {
  return (
    <AuthReservationContainer>
      <AuthReservationTitle>RESERVATION</AuthReservationTitle>
      <AuthReservationHeaderWrapper>Detail</AuthReservationHeaderWrapper>
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
  margin-top: 2rem;
  text-align: center;
`;

export default AuthVolunteerReservation;
