import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import {
  CommonLabel,
  CommonInput,
  FormErrorMessage,
  FormInputContainer,
} from "../../../assets/styles/commonStyle";
import { AuthForm } from "../../../types/auth/authType";

const AuthRegisterForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthForm>();
  console.log(errors.confirmPassword);
  return (
    <AuthRegisterFormContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          이메일
          <AuthRegisterInput
            {...register("email")}
            type="text"
            placeholder="이메일을 입력해 주세요"
          />
        </AuthRegisterLabel>
        {errors.email && (
          <FormErrorMessage>올바른 이메일을 입력해주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          닉네임
          <AuthRegisterInput
            {...register("nickname")}
            type="text"
            placeholder="닉네임을 입력해 주세요"
          />
        </AuthRegisterLabel>
        {errors.nickname && (
          <FormErrorMessage>닉네임을 4글자 이상 사용해주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          비밀번호
          <AuthRegisterPasswordInput
            {...register("password")}
            placeholder="비밀번호를 입력해 주세요"
          />
        </AuthRegisterLabel>
        {errors.password && (
          <FormErrorMessage>
            8~15자의 영문 소문자, 숫자, 특수문자를 조합해주세요.
          </FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          비밀번호 확인
          <AuthRegisterPasswordInput
            {...register("confirmPassword")}
            placeholder="비밀번호를 입력해 주세요"
          />
        </AuthRegisterLabel>
        {errors.confirmPassword && (
          <FormErrorMessage>비밀번호가 일치하지 않습니다.</FormErrorMessage>
        )}
      </FormInputContainer>
    </AuthRegisterFormContainer>
  );
};

const AuthRegisterFormContainer = styled.section`
  width: auto;
`;

const AuthRegisterLabel = styled(CommonLabel)`
  font-size: 1rem;
`;

const AuthRegisterInput = styled(CommonInput)`
  width: 100%;
  margin-top: 0.5rem;
  height: 2.5rem;
`;

const AuthRegisterPasswordInput = styled(AuthRegisterInput)`
  -webkit-text-security: square;
`;

export default AuthRegisterForm;
