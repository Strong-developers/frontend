import styled from "styled-components";
import Theme from "../../util/theme";

const ChatMessage = ({ isUserChat }: { isUserChat: boolean }) => {
  return (
    <ChatMessageContainer>
      {!isUserChat && (
        <ChatMessageImg src="../../src/assets/images/main-bg-01.jpg" />
      )}
      <ChatMessageBox isUserChat={isUserChat}>
        안녕하세요 감사해요 잘 있어요 다시 만나요 안녕하세요 감사해요 잘 있어요
        다시 만나요
      </ChatMessageBox>
    </ChatMessageContainer>
  );
};

export default ChatMessage;

const ChatMessageContainer = styled.div`
  width: 100%;
  padding: ${Theme.spacing.default};
  box-sizing: border-box;
`;

const ChatMessageBox = styled.div<{ isUserChat: boolean }>`
  float: left;
  max-width: 55%;
  min-height: 2rem;
  background-color: ${Theme.colors.white};
  padding: ${Theme.spacing.default};
  box-sizing: border-box;
  border: 1px solid ${Theme.colors.littleGray};
  border-radius: 2rem;
  word-wrap: break-word;
  vertical-align: middle;
  overflow: hidden;
  ${(props) =>
    props.isUserChat &&
    `float: right; background-color: ${Theme.colors.littleGray};`}
`;

const ChatMessageImg = styled.img`
  float: left;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-top: ${Theme.spacing.big};
  margin-right: ${Theme.spacing.default};
`;
