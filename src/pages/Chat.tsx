import React from "react";
import styled from "styled-components";
import Theme from "../util/theme";
import ChatLeft from "../components/chat/ChatLeft";
import ChatRight from "../components/chat/ChatRight";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";

const Chat = () => {
  return (
    <CommonBasePageComponent>
      <ChatWrapper>
        <ChatContainer>
          <ChatLeft />
          <ChatRight />
        </ChatContainer>
      </ChatWrapper>
    </CommonBasePageComponent>
  );
};

export default Chat;

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;

const ChatContainer = styled.div`
  display: flex;
  width: 100rem;
  height: 100%;
  margin: auto;
  border: 1px solid ${Theme.colors.littleGray};
  border-radius: 1rem;
  background-color: #fafafa;
`;
