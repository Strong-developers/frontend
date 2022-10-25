import React from "react";
import styled from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";

const CommonBaseValidationTextContainer = ({
  children,
}: CommonComponentType) => {
  return (
    <CommonBaseValidationTextContainerStyle>
      {children}
    </CommonBaseValidationTextContainerStyle>
  );
};

export default CommonBaseValidationTextContainer;

const CommonBaseValidationTextContainerStyle = styled.div`
  color: red;
  width: 100%;
`;
