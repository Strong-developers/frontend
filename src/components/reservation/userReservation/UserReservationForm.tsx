import styled from "styled-components";
import Theme from "../../../util/theme";
import CommonBaseInputContainer from "../../hoc/CommonBaseInputContainer";
import CommonBaseReservationModal from "../../hoc/CommonBaseReservationModal";
import {
  CommonInput,
  CommonLabel,
  ThemeButton,
} from "../../../assets/styles/commonStyle";

const UserReservationForm = () => {
  return (
    <UserReservationFormWrapper>
      <UserReservationFormTitle>
        상제 정보를 입력해주세요
      </UserReservationFormTitle>
      <UserReservationFormContainer>
        <CommonBaseInputContainer>
          <UserReservationFormLabel>
            이름
            <UserReservationFormInput />
          </UserReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <UserReservationFormLabel>
            인원
            <UserReservationFormInput />
          </UserReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <UserReservationFormLabel>
            이메일
            <UserReservationFormInput />
          </UserReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <UserReservationFormLabel>
            연락처
            <UserReservationFormInput placeholder="010-1234-5678" />
          </UserReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <UserReservationFormLabel>
            생년월일
            <UserReservationFormInput placeholder="2022-10-31" />
          </UserReservationFormLabel>
        </CommonBaseInputContainer>
        <ThemeButton>예약하기</ThemeButton>
      </UserReservationFormContainer>
    </UserReservationFormWrapper>
  );
};

export default UserReservationForm;

const UserReservationFormWrapper = styled.section``;

const UserReservationFormContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const UserReservationFormTitle = styled.h2`
  font-size: ${Theme.fontSize.littleBig};
`;

const UserReservationFormInput = styled(CommonInput)`
  margin-top: 5px;
  height: 40px;
`;

const UserReservationFormLabel = styled(CommonLabel)`
  font-size: 15px;
  text-align: left;
`;
