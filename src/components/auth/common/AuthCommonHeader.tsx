import styled from "styled-components";

const AuthCommonHeader = () => {
  return (
    <AuthCommonHeaderWrapper>
      <AuthCommonHeaderLogoImage src="../../../src/assets/images/logo-none-bg.png" />
    </AuthCommonHeaderWrapper>
  );
};

const AuthCommonHeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const AuthCommonHeaderLogoImage = styled.img`
  width: 460px;
  cursor: pointer;
`;

export default AuthCommonHeader;
