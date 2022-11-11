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
            nickname={rev.user.nickname}
            profileUrl={rev.user.profileUrl}
          />
        ))}
      </ReviewCardListContainer>
    </ReviewContainerWrapper>
  );
};

const ReviewContainerWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: grid;
  box-sizing: border-box;
`;

const ReviewCardListContainer = styled(GridContainer)`
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export default ReviewContainer;
