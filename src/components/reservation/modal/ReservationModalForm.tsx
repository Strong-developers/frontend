import React from "react";
import styled from "styled-components";
import Theme from "../../../util/theme";
import CommonBaseInputContainer from "../../hoc/CommonBaseInputContainer";
import CommonBaseReservationModal from "../../hoc/CommonBaseReservationModal";
import {
  CommonInput,
  CommonLabel,
  ThemeButton,
} from "../../../assets/styles/commonStyle";

const ReservationModalForm = () => {
  return (
    <CommonBaseReservationModal>
      <ReservationModalFormTitle>
        상제 정보를 입력해주세요
      </ReservationModalFormTitle>
      <ReservationModalFormContainer>
        <CommonBaseInputContainer>
          <ReservationModalFormLabel>
            이름
            <ReservationModalFormInput />
          </ReservationModalFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationModalFormLabel>
            인원
            <ReservationModalFormInput />
          </ReservationModalFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationModalFormLabel>
            이메일
            <ReservationModalFormInput />
          </ReservationModalFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationModalFormLabel>
            연락처
            <ReservationModalFormInput placeholder="010-1234-5678" />
          </ReservationModalFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationModalFormLabel>
            생년월일
            <ReservationModalFormInput placeholder="2022-10-31" />
          </ReservationModalFormLabel>
        </CommonBaseInputContainer>
        <ThemeButton>예약하기</ThemeButton>
      </ReservationModalFormContainer>
    </CommonBaseReservationModal>
  );
};

export default ReservationModalForm;

const ReservationModalFormContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const ReservationModalFormTitle = styled.div`
  font-size: ${Theme.fontSize.littleBig};
`;
const ReservationModalFormInput = styled(CommonInput)`
  margin-top: 5px;
  height: 40px;
`;

const ReservationModalFormLabel = styled(CommonLabel)`
  font-size: 15px;
  text-align: left;
`;
