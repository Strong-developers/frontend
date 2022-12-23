import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import Theme from "../../../util/theme";
import {
  ThemeButton,
  ThemeBorderButton,
} from "../../../assets/styles/commonStyle";
import {
  AuthForm,
  AuthRegisterButtonsProps,
} from "../../../types/auth/authType";

const AuthRegisterButtons = ({
  selectedRole,
  currentPosition,
  onNextButtonClick,
  onPrevButtonClick,
}: AuthRegisterButtonsProps) => {
  const { trigger } = useFormContext<AuthForm>();
  return (
    <>
      {selectedRole === 2 ? (
        currentPosition === 1 ? (
          <ThemeBorderButton
            type="button"
            onClick={async () => {
              const isValidate = await trigger([
                "email",
                "nickname",
                "password",
                "confirmPassword",
              ]);
              isValidate && onNextButtonClick();
            }}
          >
            다음으로
          </ThemeBorderButton>
        ) : (
          <>
            <ThemeBorderButton type="button" onClick={onPrevButtonClick}>
              이전으로
            </ThemeBorderButton>
            <ThemeButton type="submit">회원가입</ThemeButton>
          </>
        )
      ) : (
        <ThemeButton type="submit">회원가입</ThemeButton>
      )}
      <AuthRegisterButtonContainer>
        <AuthRegisterText>이미 회원이신가요?</AuthRegisterText>
        <AuthRegisterLink to="/login">로그인</AuthRegisterLink>
      </AuthRegisterButtonContainer>
    </>
  );
};

const AuthRegisterButtonContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const AuthRegisterText = styled.span`
  display: block;
`;

const AuthRegisterLink = styled(Link)`
  display: block;
  color: ${Theme.colors.black};
  text-decoration: none;
`;

export default AuthRegisterButtons;
