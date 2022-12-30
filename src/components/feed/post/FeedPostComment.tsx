import styled from "styled-components";
import Theme from "../../../util/theme";

const FeedPostComment = () => {
  return (
    <FeedPostCommentContainer>
      <FeedPostCommentImg />
      <FeedPostCommentTextContainer>
        <FeedPostCommentTitle>taekyung</FeedPostCommentTitle>
        <FeedPostCommentText>Hi</FeedPostCommentText>
        <FeedPostCommentDate>1일전</FeedPostCommentDate>
      </FeedPostCommentTextContainer>
    </FeedPostCommentContainer>
  );
};

const FeedPostCommentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${Theme.spacing.default};
  padding: ${Theme.spacing.default};
`;

const FeedPostCommentImg = styled.img`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${Theme.colors.silverGray};
`;

const FeedPostCommentTextContainer = styled.div`
  width: 100%;
  padding: ${Theme.spacing.small} ${Theme.spacing.default};
  box-sizing: border-box;
`;

const FeedPostCommentTitle = styled.h2`
  display: inline;
  margin: 0;
  margin-right: 0.25rem;
  font-size: 1rem;
  float: left;
`;

const FeedPostCommentText = styled.p`
  text-align: left;
  margin: 0;
  white-space: pre-wrap;
`;

const FeedPostCommentDate = styled.div`
  font-size: ${Theme.fontSize.small};
  text-align: left;
  color: ${Theme.colors.silverGray};
`;

export default FeedPostComment;
