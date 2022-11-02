import styled from "styled-components";
import { ShelterType } from "../../../types/shelter/shelterType";
import Theme from "../../../util/theme";

interface ReservationCardRightProps {
  shelter: ShelterType;
  onReservationButtonClickEvent: (uid: string) => () => void;
}

const ReservationCardRight = ({
  shelter,
  onReservationButtonClickEvent,
}: ReservationCardRightProps) => {
  return (
    <ReservationCardRightContainer>
      <ReservationCardRightWrapper>
        <ReservationCardTitle>{shelter.region}</ReservationCardTitle>
        <ReservationCardBody>{shelter.name}</ReservationCardBody>
        <ReservationCardFooter>
          <ReservationCardFooterText>READ MORE →</ReservationCardFooterText>
          <ReservationCardFooterText
            onClick={onReservationButtonClickEvent(shelter.uid)}
          >
            RESERVATION
          </ReservationCardFooterText>
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
  color: ${Theme.colors.silverGray};
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
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
`;

export default ReservationCardRight;
