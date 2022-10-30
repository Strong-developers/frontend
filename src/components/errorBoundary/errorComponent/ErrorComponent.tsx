import styled from "styled-components";
import Theme from "../../../util/theme";

const ErrorComponent = () => {
  return (
    <ErrorComponentContainer>
      <ErrorComponentImageWrapper>
        <ErrorComponentImage src="../../../src/assets/images/logo-bg.png" />
      </ErrorComponentImageWrapper>
      <ErrorComponentWrapper>
        <ErrorComponentTitle>
          예상치 못한 오류가 발생했습니다 !
        </ErrorComponentTitle>
        <ErrorComponentLink href="/">GO BACK</ErrorComponentLink>
      </ErrorComponentWrapper>
    </ErrorComponentContainer>
  );
};

const ErrorComponentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ErrorComponentImageWrapper = styled.div`
  width: auto;
  margin-top: 1rem;
`;

const ErrorComponentImage = styled.img`
  width: 620px;
`;

const ErrorComponentWrapper = styled.div`
  width: auto;
`;

const ErrorComponentTitle = styled.p`
  font-size: ${Theme.fontSize.littleBig};
  font-weight: ${Theme.fontWeight.bold};
  margin-top: -3rem;
`;

const ErrorComponentLink = styled.a`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  color: ${Theme.colors.black};
  font-size: ${Theme.fontSize.littleMoreBig};
  font-weight: ${Theme.fontWeight.bold};
  border-bottom: 3px solid ${Theme.colors.black};
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default ErrorComponent;
