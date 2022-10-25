import React from "react";
import styled from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";

const CommonBaseInputContainer = ({ children }: CommonComponentType) => {
  return (
    <CommonBaseInputContainerStyle>{children}</CommonBaseInputContainerStyle>
  );
};

const CommonBaseInputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

export default CommonBaseInputContainer;
