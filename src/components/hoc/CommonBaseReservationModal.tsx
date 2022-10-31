import React from "react";
import styled from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";

const CommonBaseReservationModal = ({ children }: CommonComponentType) => {
  return (
    <CommonBaseReservationModalStyle>
      {children}
    </CommonBaseReservationModalStyle>
  );
};

export default CommonBaseReservationModal;

const CommonBaseReservationModalStyle = styled.div`
  width: 500px;
  height: 100%;
  overflow: auto;
`;
