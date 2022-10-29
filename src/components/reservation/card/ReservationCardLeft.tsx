import styled from "styled-components";

const ReservationCardLeft = () => {
  return (
    <ReservationCardLeftWrapper>
      <ReservationCardImage src="../../../src/assets/images/logo-bg.png" />
    </ReservationCardLeftWrapper>
  );
};

const ReservationCardLeftWrapper = styled.div`
  width: auto;
  text-align: center;
  align-items: center;
`;

const ReservationCardImage = styled.img`
  width: 12.5rem;
`;

export default ReservationCardLeft;
