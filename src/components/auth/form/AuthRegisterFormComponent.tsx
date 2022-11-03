import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CommonLabel,
  CommonInput,
  ThemeButton,
} from "../../../assets/styles/commonStyle";
import CommonBaseInputContainer from "../../hoc/CommonBaseInputContainer";
import CommonBaseValidationTextContainer from "../../hoc/CommonBaseValidationTextContainer";
import { AuthFormPropsType } from "../../../types/auth/authType";
import Theme from "../../../util/theme";

const AuthRegisterFormComponent = ({
  register,
  errors,
  onRegisterSubmitEvent,
}: AuthFormPropsType) => {
  return (
    <AuthRegisterForm onSubmit={onRegisterSubmitEvent}>
      <CommonBaseInputContainer>
        <AuthRegisterLabel>
          이메일
          <AuthRegisterInput
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            type="text"
            placeholder="이메일을 입력해 주세요"
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
            placeholder="닉네임을 입력해 주세요"
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
          <AuthRegisterPasswordInput
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 15,
              pattern: /^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
            })}
            placeholder="비밀번호를 입력해 주세요"
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
          비밀번호 확인
          <AuthRegisterPasswordInput
            {...register("confirmPassword", {
              required: true,
            })}
            placeholder="비밀번호를 입력해 주세요"
          />
        </AuthRegisterLabel>
        <CommonBaseValidationTextContainer>
          비밀번호가 일치하지 않습니다.
        </CommonBaseValidationTextContainer>
      </CommonBaseInputContainer>
      <ThemeButton>회원가입</ThemeButton>
      <AuthRegisterButtonContainer>
        <AuthRegisterText>이미 회원이신가요?</AuthRegisterText>
        <AuthRegisterLink to="/login">로그인</AuthRegisterLink>
      </AuthRegisterButtonContainer>
    </AuthRegisterForm>
  );
};

const AuthRegisterForm = styled.form`
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

export default AuthRegisterFormComponent;
