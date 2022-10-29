import styled from "styled-components";
import AuthCommonHeader from "./common/AuthCommonHeader";
import AuthLoginFormComponent from "./form/AuthLoginFormComponent";
import { AuthFormPropsType } from "../../types/auth/authType";
import Theme from "../../util/theme";

const AuthLogin = ({ register, errors }: AuthFormPropsType) => {
  return (
    <AuthLoginFormContainer>
      <AuthCommonHeader />
      <AuthLoginFormComponent register={register} errors={errors} />
    </AuthLoginFormContainer>
  );
};

const AuthLoginFormContainer = styled.div`
  width: 30rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  font-weight: bold;
  border: 1px solid ${Theme.colors.black};
  border-radius: 8px;
`;

export default AuthLogin;
