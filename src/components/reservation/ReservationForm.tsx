import React from "react";
import styled from "styled-components";
import CommonBaseInputContainer from "../hoc/CommonBaseInputContainer";
import CommonBaseReservationWrapper from "../hoc/CommonBaseReservationWrapper";
import { CommonInput, CommonLabel } from "../../assets/styles/commonStyle";

const ReservationForm = () => {
  return (
    <CommonBaseReservationWrapper>
      <ReservationFormContainer>
        <CommonBaseInputContainer>
          <ReservationFormLabel>
            이름
            <ReservationFormInput />
          </ReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationFormLabel>
            인원
            <ReservationFormInput />
          </ReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationFormLabel>
            이메일
            <ReservationFormInput />
          </ReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationFormLabel>
            연락처
            <ReservationFormInput />
          </ReservationFormLabel>
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <ReservationFormLabel>
            생년월일
            <ReservationFormInput />
          </ReservationFormLabel>
        </CommonBaseInputContainer>
        <button>예약하기</button>
      </ReservationFormContainer>
    </CommonBaseReservationWrapper>
  );
};

export default ReservationForm;

const ReservationFormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const ReservationFormInput = styled(CommonInput)`
  margin-top: 5px;
  height: 40px;
`;

const ReservationFormLabel = styled(CommonLabel)`
  font-size: 15px;
  text-align: left;
`;
