import styled from "styled-components";
import Theme from "../../../util/theme";

const UserReservationNoticeHeader = () => {
  return (
    <UserReservationNoticeHeaderContainer>
      <ShelterTitle>오늘의 보호소</ShelterTitle>
      <ShelterLocation>경기도 의정부시</ShelterLocation>
    </UserReservationNoticeHeaderContainer>
  );
};

export default UserReservationNoticeHeader;
const UserReservationNoticeHeaderContainer = styled.div`
  text-align: left;
`;
const ShelterTitle = styled.h2`
  font-size: ${Theme.fontSize.moreBig};
  font-weight: ${Theme.fontWeight.bold};
  margin: 0;
  padding: 0;
`;

const ShelterLocation = styled.p`
  color: ${Theme.colors.silverGray};
`;
