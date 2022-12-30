import styled from "styled-components";
import FeedPostLeft from "./FeedPostLeft";
import FeedPostRight from "./FeedPostRight";

const FeedPost = () => {
  return (
    <FeedPostContainer>
      <FeedPostLeft />
      <FeedPostRight />
    </FeedPostContainer>
  );
};

const FeedPostContainer = styled.article`
  display: flex;
  width: 80vw;
  height: 80vh;
`;

export default FeedPost;
