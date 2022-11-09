import Theme from "../../util/theme";
import styled from "styled-components";
import { CommonSubTitle } from "../../assets/styles/commonStyle";

const ChatShelterInfo = () => {
  return (
    <ShelterInfoContainer>
      <ShelterImg src="../../src/assets/images/main-bg-01.jpg" />
      <ShelterTitle>오늘의 보호소</ShelterTitle>
      <ShelterLocation>경기 의정부시</ShelterLocation>
    </ShelterInfoContainer>
  );
};

export default ChatShelterInfo;

const ShelterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Theme.spacing.default};
  height: 100%;
`;

const ShelterTitle = styled(CommonSubTitle)`
  color: ${Theme.colors.black};
`;

const ShelterLocation = styled(CommonSubTitle)`
  font-size: ${Theme.fontSize.small};
`;

const ShelterImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
