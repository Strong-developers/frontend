import React from "react";
import styled from "styled-components";

const AuthMemberSelector = () => {
  const memberSelection = ["일반사용자", "보호소 Owner"];
  return (
    <AuthMemberSelectorContainer>
      {memberSelection.map((data, index) => {
        return <li key={index}>{data}</li>;
      })}
    </AuthMemberSelectorContainer>
  );
};

export default AuthMemberSelector;

const AuthMemberSelectorContainer = styled.ul``;
