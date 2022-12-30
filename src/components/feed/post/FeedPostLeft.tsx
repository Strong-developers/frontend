import styled from "styled-components";
import Theme from "../../../util/theme";

const FeedPostLeft = () => {
  return (
    <FeedPostLeftContainer>
      <FeedPostImg src="https://images.unsplash.com/photo-1672075886513-1e2c6acfd378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
    </FeedPostLeftContainer>
  );
};

const FeedPostLeftContainer = styled.section`
  width: 75%;
  height: 100%;
  background-color: ${Theme.colors.black};
`;

const FeedPostImg = styled.img`
  height: 100%;
`;

export default FeedPostLeft;
