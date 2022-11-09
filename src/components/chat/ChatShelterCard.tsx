import styled from "styled-components";
import ChatShelterInfo from "./ChatShelterInfo";
import Theme from "../../util/theme";

const ChatShelterCard = () => {
  return (
    <ChatShelterCardContainer>
      <ChatShelterInfo />
    </ChatShelterCardContainer>
  );
};

export default ChatShelterCard;

const ChatShelterCardContainer = styled.div`
  width: 100%;
  height: 5rem;
  padding: ${Theme.spacing.default};
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: ${Theme.colors.littleGray};
  }
`;
