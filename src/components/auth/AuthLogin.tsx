import styled from "styled-components";
import AuthCommonHeader from "./common/AuthCommonHeader";
import AuthLoginForm from "./form/AuthLoginForm";
import { AuthFormProps } from "../../types/auth/authType";

const AuthLogin = ({ onLoginSubmitEvent }: AuthFormProps) => {
  return (
    <AuthLoginContainer onSubmit={onLoginSubmitEvent}>
      <AuthCommonHeader />
      <AuthLoginForm />
    </AuthLoginContainer>
  );
};

const AuthLoginContainer = styled.form`
  width: 30rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  font-weight: bold;
`;

export default AuthLogin;
