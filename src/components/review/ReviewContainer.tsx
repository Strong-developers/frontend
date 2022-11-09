import styled from "styled-components";
import { GridContainer } from "../../assets/styles/commonStyle";
import ReviewCard from "./ReviewCard";

const ReviewContainer = () => {
  return (
    <ReviewContainerWrapper>
      <ReviewCardListContainer>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ReviewCardListContainer>
    </ReviewContainerWrapper>
  );
};

const ReviewContainerWrapper = styled.div`
  width: 100%;
  display: grid;
  padding-bottom: 1rem;
`;

const ReviewCardListContainer = styled(GridContainer)`
  place-items: center;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

export default ReviewContainer;
