import styled from "styled-components";
import Theme from "../../util/theme";
import ChatShelterCard from "./ChatShelterCard";
import { CommonSubTitle, ChatHeader } from "../../assets/styles/commonStyle";
const ChatLeft = () => {
  return (
    <ChatLeftContainer>
      <ChatLeftHeader>
        <ChatLeftHeaderTitle>TaeKyung</ChatLeftHeaderTitle>
      </ChatLeftHeader>
      <ChatLeftBody>
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
        <ChatShelterCard />
      </ChatLeftBody>
    </ChatLeftContainer>
  );
};

export default ChatLeft;

const ChatLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 35%;
  height: 100%;
  border-right: 1px solid ${Theme.colors.littleGray};
`;

const ChatLeftHeader = styled(ChatHeader)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem 0 0 0;
`;

const ChatLeftHeaderTitle = styled(CommonSubTitle)`
  color: ${Theme.colors.black};
`;

const ChatLeftBody = styled.div`
  height: 100%;
  overflow: auto;
`;
