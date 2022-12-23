import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import {
  CommonInput,
  CommonLabel,
  ThemeButton,
  FormErrorMessage,
  FormInputContainer,
} from "../../../assets/styles/commonStyle";
import { AuthForm } from "../../../types/auth/authType";
import Theme from "../../../util/theme";

const AuthLoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthForm>();
  return (
    <AuthLoginFormContainer>
      <FormInputContainer>
        <AuthLoginLabel>이메일</AuthLoginLabel>
        <AuthLoginInput
          {...register("email")}
          type="email"
          placeholder="이메일을 입력해 주세요"
        />
        {errors.email && (
          <FormErrorMessage>올바른 이메일을 입력해주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthLoginLabel>비밀번호</AuthLoginLabel>
        <AuthLoginInputPasswordInput
          {...register("password")}
          placeholder="비밀번호를 입력해 주세요"
        />
        {errors.password && (
          <FormErrorMessage>
            8~15자의 영문 소문자, 숫자, 특수문자를 조합해주세요.
          </FormErrorMessage>
        )}
      </FormInputContainer>
      <AuthLoginButtonContainer>
        <ThemeButton type="submit">로그인</ThemeButton>
        <AuthPasswordContainer>
          <AuthPasswordForgotText>
            아직 회원이 아니신가요?
          </AuthPasswordForgotText>
          <AuthPasswordForgotLink to="/join">회원가입</AuthPasswordForgotLink>
        </AuthPasswordContainer>
      </AuthLoginButtonContainer>
    </AuthLoginFormContainer>
  );
};

const AuthLoginFormContainer = styled.div`
  width: auto;
`;

const AuthLoginLabel = styled(CommonLabel)`
  font-size: 1rem;
`;

const AuthLoginInput = styled(CommonInput)`
  margin-top: 0.5rem;
  height: 2.5rem;
  width: 100%;
`;

const AuthLoginInputPasswordInput = styled(AuthLoginInput)`
  -webkit-text-security: square;
`;

const AuthLoginButtonContainer = styled.div`
  margin-top: 2rem;
`;

const AuthPasswordContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const AuthPasswordForgotText = styled.span`
  display: block;
`;

const AuthPasswordForgotLink = styled(Link)`
  display: block;
  color: ${Theme.colors.black};
  text-decoration: none;
`;

export default AuthLoginForm;
