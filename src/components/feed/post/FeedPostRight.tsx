import styled from "styled-components";
import FeedPostCommentForm from "./FeedPostCommentForm";
import FeedPostMenu from "./FeedPostMenu";
import FeedPostComment from "./FeedPostComment";
import Theme from "../../../util/theme";

const FeedPostRight = () => {
  return (
    <FeedPostRightContainer>
      <FeedPostHeader>
        <FeedPostShelterImg src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
        <FeedPostShelter>오늘의 보호소</FeedPostShelter>
      </FeedPostHeader>
      <FeedPostBody>
        <FeedPostMain>
          <FeedPostShelterImg src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
          <FeedPostTextContainer>
            <FeedPostTextTitle>오늘의 보호소</FeedPostTextTitle>
            <FeedPostText>
              가나다라마바사아자차카타파하가나다라마바사아자차카가나다라마바사아자차카타파하가나다라마바사아자차카가나다라마바사아자차카타파하가나다라마바사아자차카가나다라마바사아자차카타파하가나다라마바사아자차카
            </FeedPostText>
          </FeedPostTextContainer>
        </FeedPostMain>
        <FeedPostComments>
          <FeedPostComment />
          <FeedPostComment />
          <FeedPostComment />
          <FeedPostComment />
          <FeedPostComment />
          <FeedPostComment />
        </FeedPostComments>
      </FeedPostBody>
      <FeedPostMenu />
      <FeedPostCommentForm />
    </FeedPostRightContainer>
  );
};

const FeedPostRightContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  min-width: 25rem;
`;

const FeedPostHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${Theme.colors.moreTp};
`;

const FeedPostShelterImg = styled.img`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${Theme.colors.silverGray};
`;

const FeedPostShelter = styled.h2`
  margin: 0;
  padding: 0 0.5rem;
  font-size: 1rem;
`;

const FeedPostBody = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Theme.colors.silverGray};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${Theme.colors.littleGray};
    border-radius: 10px;
  }
`;

const FeedPostMain = styled.div`
  display: flex;
  padding: ${Theme.spacing.default};
`;

const FeedPostTextContainer = styled.div`
  width: 100%;
  padding: ${Theme.spacing.small} ${Theme.spacing.default};
  box-sizing: border-box;
`;

const FeedPostTextTitle = styled.h2`
  display: inline;
  margin: 0;
  margin-right: 0.25rem;
  font-size: 1rem;
  float: left;
`;

const FeedPostText = styled.p`
  text-align: left;
  margin: 0;
  white-space: pre-wrap;
`;

const FeedPostComments = styled.div``;

export default FeedPostRight;
