import styled from "styled-components";
import Theme from "../../util/theme";

// const MAX_STRING_LENGTH = 60
// TODO: 추후에 넘어온 TEXT의 길이가 60을 넘을 경우 ...으로 최대 길이 제한 걸어두기

const ReviewBody = () => {
  return (
    <ReviewBodyContainer>
      <ReviewBodyText>
        이 보호소에서 봉사를 해봤는데요. 너무 좋았어요. 또 하고 싶고 가족이나
        친구를 데리고 와서 하고싶어요!!
      </ReviewBodyText>
    </ReviewBodyContainer>
  );
};

const ReviewBodyContainer = styled.div`
  width: 100%;
  margin-top: -2rem;
  margin-bottom: 1rem;
`;

const ReviewBodyText = styled.p`
  width: 16rem;
  font-size: ${Theme.fontSize.small};
  padding: 1rem 0.875rem;
  border-bottom: 2px solid ${Theme.colors.moreTp};
`;

export default ReviewBody;
