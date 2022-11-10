import React from "react";
import styled from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";

const CommonBasePageComponent = ({ children }: CommonComponentType) => {
  return <CommonBaseContainer>{children}</CommonBaseContainer>;
};

const CommonBaseContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  box-sizing: border-box;
`;

export default CommonBasePageComponent;
