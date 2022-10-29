import styled from "styled-components";
import { GridContainer } from "../../../assets/styles/commonStyle";
import ReservationCard from "./ReservationCard";

const ReservationCardList = () => {
  return (
    <ReservationCardWrapper>
      <ReservationCardListContainer>
        {Array.from({ length: 3 }).map((_, idx) => (
          <ReservationCard key={idx} />
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
