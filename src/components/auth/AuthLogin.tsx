import styled from "styled-components";
import AuthCommonHeader from "./common/AuthCommonHeader";
import AuthLoginFormComponent from "./form/AuthLoginFormComponent";
import { AuthFormPropsType } from "../../types/auth/authType";

const AuthLogin = ({
  register,
  errors,
  onLoginSubmitEvent,
}: AuthFormPropsType) => {
  return (
    <AuthLoginFormContainer>
      <AuthCommonHeader />
      <AuthLoginFormComponent
        register={register}
        errors={errors}
        onLoginSubmitEvent={onLoginSubmitEvent}
      />
    </AuthLoginFormContainer>
  );
};

const AuthLoginFormContainer = styled.div`
  width: 30rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  font-weight: bold;
`;

export default AuthLogin;
