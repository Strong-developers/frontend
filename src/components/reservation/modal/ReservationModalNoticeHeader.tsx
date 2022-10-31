import React from "react";
import styled from "styled-components";
import Theme from "../../../util/theme";

const ReservationModalNoticeHeader = () => {
  return (
    <ReservationModalNoticeHeaderContainer>
      <ShelterTitle>오늘의 보호소</ShelterTitle>
      <ShelterLocation>경기도 의정부시</ShelterLocation>
    </ReservationModalNoticeHeaderContainer>
  );
};

export default ReservationModalNoticeHeader;
const ReservationModalNoticeHeaderContainer = styled.div`
  text-align: left;
`;
const ShelterTitle = styled.div`
  font-size: ${Theme.fontSize.moreBig};
  font-weight: ${Theme.fontWeight.bold};
`;

const ShelterLocation = styled.div`
  color: ${Theme.colors.silverGray};
`;
