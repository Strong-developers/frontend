import styled from "styled-components";
import Theme from "../../../util/theme";
import {
  CommonInput,
  CommonLabel,
  ThemeButton,
  FormInputContainer,
} from "../../../assets/styles/commonStyle";

const UserReservationForm = () => {
  return (
    <UserReservationFormWrapper>
      <UserReservationFormTitle>
        상제 정보를 입력해주세요
      </UserReservationFormTitle>
      <UserReservationFormContainer>
        <FormInputContainer>
          <UserReservationFormLabel>
            이름
            <UserReservationFormInput />
          </UserReservationFormLabel>
        </FormInputContainer>
        <FormInputContainer>
          <UserReservationFormLabel>
            인원
            <UserReservationFormInput />
          </UserReservationFormLabel>
        </FormInputContainer>
        <FormInputContainer>
          <UserReservationFormLabel>
            이메일
            <UserReservationFormInput />
          </UserReservationFormLabel>
        </FormInputContainer>
        <FormInputContainer>
          <UserReservationFormLabel>
            연락처
            <UserReservationFormInput placeholder="010-1234-5678" />
          </UserReservationFormLabel>
        </FormInputContainer>
        <FormInputContainer>
          <UserReservationFormLabel>
            생년월일
            <UserReservationFormInput placeholder="2022-10-31" />
          </UserReservationFormLabel>
        </FormInputContainer>
        <ThemeButton>예약하기</ThemeButton>
      </UserReservationFormContainer>
    </UserReservationFormWrapper>
  );
};

export default UserReservationForm;

const UserReservationFormWrapper = styled.section`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

const UserReservationFormContainer = styled.form`
  margin-top: 4rem;
`;

const UserReservationFormTitle = styled.h2`
  font-size: ${Theme.fontSize.littleBig};
  margin: 0;
  color: ${Theme.colors.white};
`;

const UserReservationFormInput = styled(CommonInput)`
  margin-top: 5px;
  height: 40px;
`;

const UserReservationFormLabel = styled(CommonLabel)`
  font-size: 15px;
  text-align: left;
  color: ${Theme.colors.white};
`;
