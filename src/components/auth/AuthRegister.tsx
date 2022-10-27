import React from "react";
import styled from "styled-components";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import AuthMemberSelector from "./AuthMemberSelector";
import { AuthFormType } from "../../types/auth/authType";
import CommonBaseInputContainer from "../hoc/CommonBaseInputContainer";
import CommonBaseValidationTextContainer from "../hoc/CommonBaseValidationTextContainer";
import {
  CommonInput,
  CommonButton,
  CommonLabel,
} from "../../assets/styles/commonStyle";

interface AuthRegisterPropsType {
  register: UseFormRegister<AuthFormType>;
  errors: Partial<FieldErrorsImpl<AuthFormType>>;
}

const AuthRegister = ({ register, errors }: AuthRegisterPropsType) => {
  return (
    <AuthRegisterFormContainer>
      <AuthMemberSelector />
      <AuthRegisterForm>
        <CommonBaseInputContainer>
          <AuthRegisterLabel>
            이메일
            <AuthRegisterInput
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              type="text"
            />
          </AuthRegisterLabel>
          {errors.email && (
            <CommonBaseValidationTextContainer>
              올바른 이메일을 입력해주세요.
            </CommonBaseValidationTextContainer>
          )}
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <AuthRegisterLabel>
            닉네임
            <AuthRegisterInput
              {...register("nickname", {
                required: true,
                minLength: 4,
              })}
              type="text"
            />
          </AuthRegisterLabel>
          {errors.nickname && (
            <CommonBaseValidationTextContainer>
              닉네임을 4글자 이상 사용해주세요.
            </CommonBaseValidationTextContainer>
          )}
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <AuthRegisterLabel>
            비밀번호
            <AuthRegisterInput
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 15,
                pattern: /^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
              })}
              type="password"
            />
          </AuthRegisterLabel>
          {errors.password && (
            <CommonBaseValidationTextContainer>
              8~15자의 영문 소문자, 숫자, 특수문자를 조합해주세요.
            </CommonBaseValidationTextContainer>
          )}
        </CommonBaseInputContainer>
        <CommonBaseInputContainer>
          <AuthRegisterLabel>
            비밀번호확인
            <AuthRegisterInput
              {...register("confirmPassword", {
                required: true,
              })}
              type="password"
            />
          </AuthRegisterLabel>
          <CommonBaseValidationTextContainer>
            비밀번호가 일치하지 않습니다.
          </CommonBaseValidationTextContainer>
        </CommonBaseInputContainer>
        <AuthRegisterButtonContainer>
          <AuthRegisterButton>회원가입</AuthRegisterButton>
          <span>
            이미 회원이신가요?<a href="/login">로그인</a>
          </span>
        </AuthRegisterButtonContainer>
      </AuthRegisterForm>
    </AuthRegisterFormContainer>
  );
};

export default AuthRegister;

const AuthRegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;
`;
const AuthRegisterForm = styled.form``;

const AuthRegisterLabel = styled(CommonLabel)``;

const AuthRegisterInput = styled(CommonInput)`
  margin-top: 5px;
  height: 40px;
  width: 400px;
`;

const AuthRegisterButtonContainer = styled.div`
  margin-top: 30px;
`;

const AuthRegisterButton = styled(CommonButton)`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  background-color: #0a81ed;
  color: white;
`;
