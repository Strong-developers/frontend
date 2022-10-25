import React from "react";
import styled from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";

const CommonBasePageComponent = ({ children }: CommonComponentType) => {
  return <CommonBaseContainer>{children}</CommonBaseContainer>;
};

const CommonBaseContainer = styled.div`
  width: 100%;
`;

export default CommonBasePageComponent;
