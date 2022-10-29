import styled from "styled-components";
import AuthCommonHeader from "./common/AuthCommonHeader";
import AuthMemberSelector from "./AuthMemberSelector";
import AuthRegisterFormComponent from "./form/AuthRegisterFormComponent";
import { AuthFormPropsType } from "../../types/auth/authType";
import Theme from "../../util/theme";

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
  border: 1px solid ${Theme.colors.black};
  border-radius: 8px;
`;
