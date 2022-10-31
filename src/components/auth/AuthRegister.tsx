import styled from "styled-components";
import AuthCommonHeader from "./common/AuthCommonHeader";
import AuthMemberSelector from "./AuthMemberSelector";
import AuthRegisterFormComponent from "./form/AuthRegisterFormComponent";
import { AuthFormPropsType } from "../../types/auth/authType";

const AuthRegister = ({ register, errors }: AuthFormPropsType) => {
  return (
    <AuthRegisterFormContainer>
      <AuthCommonHeader />
      <AuthMemberSelector />
      <AuthRegisterFormComponent register={register} errors={errors} />
    </AuthRegisterFormContainer>
  );
};

export default AuthRegister;

const AuthRegisterFormContainer = styled.div`
  width: 30rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  font-weight: bold;
`;
