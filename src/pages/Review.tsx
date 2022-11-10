import styled from "styled-components";
import useReview from "../hooks/review/useReview";
import ReviewContainer from "../components/review/ReviewContainer";
import Pagination from "../components/pagination/Pagination";
import Theme from "../util/theme";

const Review = () => {
  const { reviews, totalPages, curPage, setCurPage } = useReview();

  return (
    <ReviewWrapper>
      <ReviewTitleContainer>
        <ReviewText>후기 게시판</ReviewText>
      </ReviewTitleContainer>
      <ReviewContainer reviews={reviews} />
      <Pagination
        totalPages={totalPages}
        curPage={curPage}
        setCurPage={setCurPage}
      />
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
