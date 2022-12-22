import styled from "styled-components";
import FeedHeader from "../components/feed/FeedHeader";
import FeedBody from "../components/feed/FeedBody";
import Theme from "../util/theme";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";

const Feed = () => {
  return (
    <CommonBasePageComponent>
      <FeedContainer>
        <FeedHeader />
        <FeedBody />
      </FeedContainer>
    </CommonBasePageComponent>
  );
};

export default Feed;

const FeedContainer = styled.div`
  width: 62.5rem;
  margin: auto;
  padding: ${Theme.spacing.big};
`;
