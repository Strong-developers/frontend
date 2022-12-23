import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import {
  CommonLabel,
  CommonInput,
  FormErrorMessage,
  FormInputContainer,
} from "../../../assets/styles/commonStyle";
import { AuthForm } from "../../../types/auth/authType";

const AuthShelterRegisterForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthForm>();
  return (
    <AuthShelterRegisterFormContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          보호소 이름
          <AuthRegisterInput {...register("name")} type="text" />
        </AuthRegisterLabel>
        {errors.name && (
          <FormErrorMessage>보호소 이름을 입력해 주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          보호소 지역
          <AuthRegisterInput {...register("region")} type="text" />
        </AuthRegisterLabel>
        {errors.region && (
          <FormErrorMessage>보호소 지역을 선택해주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          보호소 전화번호
          <AuthRegisterInput
            {...register("phoneNumber")}
            placeholder="000-0000-0000"
          />
        </AuthRegisterLabel>
        {errors.phoneNumber && (
          <FormErrorMessage>보호소 전화번호를 입력해주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          보호소 소개말
          <AuthReigsterTextarea {...register("description")} />
        </AuthRegisterLabel>
        {errors.description && (
          <FormErrorMessage>소개말을 적어주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
      <FormInputContainer>
        <AuthRegisterLabel>
          보호소 주의사항
          <AuthReigsterTextarea {...register("caution")} />
        </AuthRegisterLabel>
        {errors.caution && (
          <FormErrorMessage>주의사항을 적어주세요.</FormErrorMessage>
        )}
      </FormInputContainer>
    </AuthShelterRegisterFormContainer>
  );
};

const AuthShelterRegisterFormContainer = styled.section`
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

const AuthReigsterTextarea = styled.textarea`
  height: 15rem;
  padding: 5px 12px 5px 12px;
  margin-top: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  box-sizing: border-box;
  resize: none;
  &:focus {
    outline: 1px solid black;
  }
`;

export default AuthShelterRegisterForm;
