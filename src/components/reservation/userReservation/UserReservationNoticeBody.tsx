import styled from "styled-components";
import { CommonTextBox } from "../../../assets/styles/commonStyle";
import Theme from "../../../util/theme";

const ReservationModalNoticeBody = () => {
  return (
    <UserReservationNoticeBodyContainer>
      <ShelterDescription>
        안녕하세요! 경기유기견보호소 리얼쉘터입니다! 유기견보호소를 가장한 PET
        SHOP이 아닌, 무료로 입소가 가능한 무료로 입양이 가능한 진짜 보호소 REAL
        SHELTER
      </ShelterDescription>
      <ShelterNotice>
        <ShelterNoticeTitle>유의사항</ShelterNoticeTitle>
      </ShelterNotice>
    </UserReservationNoticeBodyContainer>
  );
};

export default ReservationModalNoticeBody;

const UserReservationNoticeBodyContainer = styled.div`
  width: 100%;
`;

const ShelterDescription = styled(CommonTextBox)`
  height: 250px;
  background-color: white;
`;

const ShelterNotice = styled(CommonTextBox)`
  height: 280px;
  background-color: white;
`;

const ShelterNoticeTitle = styled.div`
  height: 25px;
  margin-bottom: 8px;
  padding: 0;
  border-bottom: 1px solid ${Theme.colors.silverGray};
  line-height: 25px;
  text-align: center;
`;
