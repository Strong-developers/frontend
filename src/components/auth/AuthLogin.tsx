import React from "react";
import styled from "styled-components";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { AuthFormType } from "../../types/auth/authType";
import CommonBaseInputContainer from "../hoc/CommonBaseInputContainer";
import CommonBaseValidationTextContainer from "../hoc/CommonBaseValidationTextContainer";
import {
  CommonInput,
  CommonButton,
  CommonLabel,
} from "../../assets/styles/commonStyle";

interface AuthLoginPropsType {
  register: UseFormRegister<AuthFormType>;
  errors: Partial<FieldErrorsImpl<AuthFormType>>;
}

const AuthLogin = ({ register, errors }: AuthLoginPropsType) => {
  return (
    <AuthLoginFormContainer>
      <AuthLoginForm>
        <CommonBaseInputContainer>
          <AuthLoginLabel>이메일</AuthLoginLabel>
          <AuthLoginInput
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="text"
          />
          {errors.email && (
            <CommonBaseValidationTextContainer>
              올바른 이메일을 입력해주세요.
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
          />
          {errors.password && (
            <CommonBaseValidationTextContainer>
              8~15자의 영문 소문자, 숫자, 특수문자를 조합해주세요.
            </CommonBaseValidationTextContainer>
          )}
        </CommonBaseInputContainer>
        <AuthLoginButtonContainer>
          <AuthLoginButton type="submit">로그인</AuthLoginButton>
          <span>
            아직 회원이 아니신가요?<a href="/register">회원가입</a>
          </span>
        </AuthLoginButtonContainer>
      </AuthLoginForm>
    </AuthLoginFormContainer>
  );
};

export default AuthLogin;

const AuthLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;
`;
const AuthLoginForm = styled.form``;
const AuthLoginLabel = styled(CommonLabel)``;
const AuthLoginInput = styled(CommonInput)`
  margin-top: 5px;
  height: 40px;
  width: 400px;
`;

const AuthLoginButtonContainer = styled.div`
  margin-top: 30px;
`;

const AuthLoginButton = styled(CommonButton)`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  background-color: #0a81ed;
  color: white;
`;
