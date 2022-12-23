import styled from "styled-components";
import ReviewHeader from "./ReviewHeader";
import ReviewBody from "./ReviewBody";
import ReviewFooter from "./ReviewFooter";
import Theme from "../../util/theme";

interface ReviewCardProps {
  description: string;
  nickname: string;
  profileUrl: string;
}

const ReviewCard = ({ description, nickname, profileUrl }: ReviewCardProps) => {
  return (
    <ReviewCardContainer>
      <ReviewHeader />
      <ReviewBody description={description} />
      <ReviewFooter nickname={nickname} profileUrl={profileUrl} />
    </ReviewCardContainer>
  );
};

const ReviewCardContainer = styled.div`
  width: 20rem;
  padding: ${Theme.spacing.default};
  border-radius: 8px;
  background-color: ${Theme.colors.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.05);
  }
  box-sizing: border-box;
`;

export default ReviewCard;
