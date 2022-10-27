import React from "react";
import styled from "styled-components";
import CommonBaseInputContainer from "../hoc/CommonBaseInputContainer";
import { CommonInput, CommonLabel } from "../../assets/styles/commonStyle";

const ReservationForm = () => {
  return (
    <ReservationFormWrapper>
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
    </ReservationFormWrapper>
  );
};

export default ReservationForm;

const ReservationFormWrapper = styled.div`
  width: 600px;
`;

const ReservationFormContainer = styled.div`
  width: 100%;
`;

const ReservationFormInput = styled(CommonInput)`
  margin-top: 5px;
  height: 40px;
`;

const ReservationFormLabel = styled(CommonLabel)`
  font-size: 15px;
  text-align: left;
`;
