import styled from "styled-components";
import { CommonInput } from "../../../assets/styles/commonStyle";
import { createSendIcon } from "../../icons/IconCreator";
import Theme from "../../../util/theme";

const FeedPostCommentForm = () => {
  return (
    <FeedPostCommentFormContainer>
      <FeedPostCommentInput placeholder="댓글달기" />
      <FeedPostCommentSend type="submit">
        {createSendIcon(25)}
      </FeedPostCommentSend>
    </FeedPostCommentFormContainer>
  );
};

const FeedPostCommentFormContainer = styled.form`
  position: relative;
  width: 100%;
  height: 3rem;
  border-top: 1px solid ${Theme.colors.moreTp};
`;

const FeedPostCommentInput = styled(CommonInput)`
  width: 100%;
  height: 100%;
  border: none;
  padding-right: 2rem;

  &:focus {
    outline: none;
  }
`;

const FeedPostCommentSend = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  border: none;
  background-color: ${Theme.colors.tp};
  color: ${Theme.colors.theme};
  cursor: pointer;
`;

export default FeedPostCommentForm;
