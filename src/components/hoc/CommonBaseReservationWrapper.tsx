import React from "react";
import styled from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";

const CommonBaseReservationWrapper = ({ children }: CommonComponentType) => {
  return (
    <CommonBaseReservationWrapperStyle>
      {children}
    </CommonBaseReservationWrapperStyle>
  );
};

export default CommonBaseReservationWrapper;

const CommonBaseReservationWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
