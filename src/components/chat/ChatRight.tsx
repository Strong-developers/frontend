import styled from "styled-components";
import ChatShelterInfo from "./ChatShelterInfo";
import ChatMessage from "./ChatMessage";
import Theme from "../../util/theme";
import { CommonInput, ChatHeader } from "../../assets/styles/commonStyle";
import { createSendIcon } from "../icons/IconCreator";

const ChatRight = () => {
  return (
    <ChatRightContainer>
      <ChatRightHeader>
        <ChatShelterInfo />
      </ChatRightHeader>
      <ChatRightBody>
        <FlexBox />
        <ChatMessage isUserChat={true} />
        <ChatMessage isUserChat={false} />
        <ChatMessage isUserChat={true} />
        <ChatMessage isUserChat={false} />
        <ChatMessage isUserChat={true} />
        <ChatMessage isUserChat={false} />
        <ChatMessage isUserChat={true} />
        <ChatMessage isUserChat={false} />
        <ChatMessage isUserChat={true} />
        <ChatMessage isUserChat={false} />
        <ChatMessage isUserChat={false} />
      </ChatRightBody>
      <ChatRightFooter>
        <ChatInputContainer>
          <ChatInput placeholder="메시지를 입력하세요"></ChatInput>
          <ChatSendButton type="submit">{createSendIcon(32)}</ChatSendButton>
        </ChatInputContainer>
      </ChatRightFooter>
    </ChatRightContainer>
  );
};

export default ChatRight;

const ChatRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
`;

const ChatRightHeader = styled(ChatHeader)`
  border-radius: 0 1rem 0 0;
  border-left: 1px solid ${Theme.colors.white};
`;

const ChatRightBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ChatRightFooter = styled.div`
  height: 5rem;
  flex-shrink: 0;
`;
const FlexBox = styled.div`
  flex: 1;
`;

const ChatInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${Theme.spacing.default};
  box-sizing: border-box;
`;

const ChatInput = styled(CommonInput)`
  width: 100%;
  height: 100%;
`;

const ChatSendButton = styled.button`
  position: absolute;
  right: ${Theme.spacing.big};
  background-color: ${Theme.colors.tp};
  color: ${Theme.colors.theme};
  border: none;
  cursor: pointer;
`;
