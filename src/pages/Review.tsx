import styled from "styled-components";
import ReviewContainer from "../components/review/ReviewContainer";
import Theme from "../util/theme";

const Review = () => {
  return (
    <ReviewWrapper>
      <ReviewTitleContainer>
        <ReviewText>후기 게시판</ReviewText>
      </ReviewTitleContainer>
      <ReviewContainer />
    </ReviewWrapper>
  );
};

const ReviewWrapper = styled.div`
  width: 100%;
`;

const ReviewTitleContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 1rem;
  padding-left: 4rem;
`;

const ReviewText = styled.p`
  font-size: ${Theme.fontSize.big};
`;

export default Review;
