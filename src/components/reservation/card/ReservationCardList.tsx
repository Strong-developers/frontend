import styled from "styled-components";
import { GridContainer } from "../../../assets/styles/commonStyle";
import ReservationCard from "./ReservationCard";
import { ShelterType } from "../../../types/shelter/shelterType";

interface ReservationCardListProps {
  shelters: Array<ShelterType>;
  onReservationButtonClickEvent: (uid: string) => () => void;
}

const ReservationCardList = ({
  shelters,
  onReservationButtonClickEvent,
}: ReservationCardListProps) => {
  return (
    <ReservationCardWrapper>
      <ReservationCardListContainer>
        {shelters.map((sh) => (
          <ReservationCard
            key={sh.uid}
            shelter={sh}
            onReservationButtonClickEvent={onReservationButtonClickEvent}
          />
        ))}
      </ReservationCardListContainer>
    </ReservationCardWrapper>
  );
};

const ReservationCardWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
`;

const ReservationCardListContainer = styled(GridContainer)`
  display: grid;
  place-items: center;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;

export default ReservationCardList;
