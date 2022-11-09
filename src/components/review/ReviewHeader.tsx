import styled from "styled-components";

const ReviewHeader = () => {
  return (
    <ReviewCardHeaderContainer>
      <ReviewCardHeaderImg src="../../src/assets/images/quote-orange.png" />
    </ReviewCardHeaderContainer>
  );
};

const ReviewCardHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const ReviewCardHeaderImg = styled.img`
  width: 7rem;
`;

export default ReviewHeader;
