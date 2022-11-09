import styled from "styled-components";
import Theme from "../../util/theme";

interface ReviewBodyProps {
  description: string;
}

const ReviewBody = ({ description }: ReviewBodyProps) => {
  return (
    <ReviewBodyContainer>
      <ReviewBodyText>{description}</ReviewBodyText>
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
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default ReviewBody;
