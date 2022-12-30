import styled from "styled-components";
import Theme from "../../../util/theme";
import { createHeartIcon } from "../../icons/IconCreator";

const FeedPostMenu = () => {
  return (
    <FeedPostMenuContainer>
      <FeedPostMenuIconContainer>
        <FeedPostMenuButton>{createHeartIcon(20)}</FeedPostMenuButton>
      </FeedPostMenuIconContainer>
      <FeedPostLikeCount>좋아요 1개</FeedPostLikeCount>
      <FeedPostDate>12월 27일</FeedPostDate>
    </FeedPostMenuContainer>
  );
};

const FeedPostMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8rem;
  padding: ${Theme.spacing.default};
  box-sizing: border-box;
  border-top: 1px solid ${Theme.colors.moreTp};
`;

const FeedPostMenuIconContainer = styled.div`
  flex-shrink: 0;
  height: 2rem;
`;

const FeedPostMenuButton = styled.button`
  border: none;
  background-color: ${Theme.colors.tp};
  cursor: pointer;
  float: left;
`;

const FeedPostLikeCount = styled.p`
  flex: 1;
  margin: 0;
  text-align: left;
`;

const FeedPostDate = styled.p`
  height: 2rem;
  margin: 0;
  font-size: 0.8rem;
  text-align: left;
  color: ${Theme.colors.silverGray};
`;

export default FeedPostMenu;
