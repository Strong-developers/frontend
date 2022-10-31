import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CommonInput,
  CommonLabel,
  ThemeButton,
} from "../../../assets/styles/commonStyle";
import CommonBaseInputContainer from "../../hoc/CommonBaseInputContainer";
import CommonBaseValidationTextContainer from "../../hoc/CommonBaseValidationTextContainer";
import { AuthFormPropsType } from "../../../types/auth/authType";
import Theme from "../../../util/theme";

const AuthLoginFormComponent = ({ register, errors }: AuthFormPropsType) => {
  return (
    <AuthLoginForm>
      <CommonBaseInputContainer>
        <AuthLoginLabel>이메일</AuthLoginLabel>
        <AuthLoginInput
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="text"
          placeholder="이메일을 입력해 주세요"
        />
        {errors.email && (
          <CommonBaseValidationTextContainer>
            올바른 이메일을 입력해주세요
          </CommonBaseValidationTextContainer>
        )}
      </CommonBaseInputContainer>
      <CommonBaseInputContainer>
        <AuthLoginLabel>비밀번호</AuthLoginLabel>
        <AuthLoginInput
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 15,
            pattern: /^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
          })}
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        />
        {errors.password && (
          <CommonBaseValidationTextContainer>
            8~15자의 영문 소문자, 숫자, 특수문자를 조합해주세요.
          </CommonBaseValidationTextContainer>
        )}
      </CommonBaseInputContainer>
      <AuthLoginButtonContainer>
        <ThemeButton type="submit">로그인</ThemeButton>
        <AuthPasswordContainer>
          <AuthPasswordForgotText>
            아직 회원이 아니신가요?
          </AuthPasswordForgotText>
          <AuthPasswordForgotLink to="/join">회원가입</AuthPasswordForgotLink>
        </AuthPasswordContainer>
      </AuthLoginButtonContainer>
    </AuthLoginForm>
  );
};

const AuthLoginForm = styled.form`
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

export default AuthLoginFormComponent;
