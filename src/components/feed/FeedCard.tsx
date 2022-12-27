import styled from "styled-components";
import { createFillHeartIcon, createChatBubble } from "../icons/IconCreator";
import { FeedType } from "../../types/feed/feedType";
import Theme from "../../util/theme";

interface FeedCardProps {
  feed: FeedType;
  onFeedCardClickEvent: () => void;
}

const FeedCard = ({ feed, onFeedCardClickEvent }: FeedCardProps) => {
  return (
    <FeedCardWrapper onClick={onFeedCardClickEvent}>
      <FeedImgContainer>
        <FeedImgTextContainer>
          <FeedImgText>{createFillHeartIcon(20)} 250</FeedImgText>
          <FeedImgText>{createChatBubble(20)} 32</FeedImgText>
        </FeedImgTextContainer>
        <FeedImg src="../../src/assets/images/main-bg-01.jpg" />
      </FeedImgContainer>
    </FeedCardWrapper>
  );
};

export default FeedCard;

const FeedCardWrapper = styled.div`
  position: relative;
  text-align: center;
  vertical-align: middle;
  margin-bottom: ${Theme.spacing.bigger};
`;

const FeedImgContainer = styled.div`
  overflow: hidden;
  margin: auto;
  width: 18rem;
  height: 18rem;
  cursor: pointer;
`;

const FeedImg = styled.img`
  width: inherit;
  height: inherit;
`;

const FeedImgTextContainer = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  gap: ${Theme.spacing.default};
  left: 1.4rem;
  width: 18rem;
  height: 18rem;
  color: ${Theme.colors.white};
  background-color: ${Theme.colors.lessTp};
  ${FeedImgContainer}:hover & {
    display: flex;
  }
`;

const FeedImgText = styled.div``;
