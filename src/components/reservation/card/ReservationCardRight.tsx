import styled from "styled-components";
import Theme from "../../../util/theme";

const ReservationCardRight = () => {
  return (
    <ReservationCardRightContainer>
      <ReservationCardRightWrapper>
        <ReservationCardTitle>경기도 의정부시</ReservationCardTitle>
        <ReservationCardBody>오늘의 보호소</ReservationCardBody>
        <ReservationCardFooter>
          <ReservationCardFooterText>Read more</ReservationCardFooterText>
          <ReservationCardFooterText>Read more</ReservationCardFooterText>
        </ReservationCardFooter>
      </ReservationCardRightWrapper>
    </ReservationCardRightContainer>
  );
};

const ReservationCardRightContainer = styled.div`
  width: 24rem;
`;

const ReservationCardRightWrapper = styled.div`
  padding: 1rem;
`;

const ReservationCardTitle = styled.div`
  padding-top: 1rem;
  font-size: ${Theme.fontSize.littleMoreBig};
  font-weight: ${Theme.fontWeight.bold};
`;

const ReservationCardBody = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: ${Theme.fontSize.moreBig};
`;

const ReservationCardFooter = styled.div`
  display: flex;
  color: ${Theme.colors.theme};
  justify-content: space-between;
`;

const ReservationCardFooterText = styled.div`
  font-weight: ${Theme.fontWeight.bold};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default ReservationCardRight;
