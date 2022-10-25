import React from "react";
import styled from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";
import theme from "../../util/theme";

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
  font-size: ${theme.fontSize.smaller};
`;
