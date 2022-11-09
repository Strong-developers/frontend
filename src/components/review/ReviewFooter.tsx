import styled from "styled-components";
import Theme from "../../util/theme";

interface ReviewFooterProps {
  nickname: string;
  profileUrl: string;
}

const ReviewFooter = ({ nickname, profileUrl }: ReviewFooterProps) => {
  return (
    <ReviewFooterContainer>
      <ReviewUserContainer>
        <ReviewFooterUserImg src={profileUrl} />
        <ReviewUserTextContainer>
          <ReviewUserNickname>{nickname}</ReviewUserNickname>
          <ReviewUserCity>의정부시</ReviewUserCity>
        </ReviewUserTextContainer>
      </ReviewUserContainer>
    </ReviewFooterContainer>
  );
};

const ReviewFooterContainer = styled.div`
  width: 100%;
`;

const ReviewUserContainer = styled.div`
  width: 100%;
`;

const ReviewFooterUserImg = styled.img`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
`;

const ReviewUserTextContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const ReviewUserNickname = styled.span`
  display: block;
  padding: 0 0.875rem;
  font-size: ${Theme.fontSize.littleMoreBig};
`;

const ReviewUserCity = styled.span`
  display: block;
  padding: 0 0.875rem;
  font-size: ${Theme.fontSize.small};
`;

export default ReviewFooter;
