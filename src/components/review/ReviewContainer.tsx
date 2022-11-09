import styled from "styled-components";
import { GridContainer } from "../../assets/styles/commonStyle";
import ReviewCard from "./ReviewCard";
import { ReviewType } from "../../types/review/reviewType";

interface ReviewContainerProps {
  reviews: Array<ReviewType>;
}

const ReviewContainer = ({ reviews }: ReviewContainerProps) => {
  return (
    <ReviewContainerWrapper>
      <ReviewCardListContainer>
        {reviews.map((rev) => (
          <ReviewCard
            key={rev.id}
            description={rev.description}
            nickname={rev.User.nickname}
            profileUrl={rev.User.profileUrl}
          />
        ))}
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
