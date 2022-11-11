import styled from "styled-components";
import useReview from "../hooks/review/useReview";
import ReviewContainer from "../components/review/ReviewContainer";
import Pagination from "../components/pagination/Pagination";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import Theme from "../util/theme";

const Review = () => {
  const { reviews, totalPages, curPage, setCurPage } = useReview();

  return (
    <CommonBasePageComponent>
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
    </CommonBasePageComponent>
  );
};

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 70%;
  height: 100%;
`;

const ReviewTitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`;

const ReviewText = styled.p`
  font-size: ${Theme.fontSize.big};
`;

export default Review;
