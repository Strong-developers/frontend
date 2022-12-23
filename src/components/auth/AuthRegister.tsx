import styled from "styled-components";
import useChangePosition from "../../hooks/useChangePosition";
import AuthCommonHeader from "./common/AuthCommonHeader";
import AuthRoleSelector from "./AuthRoleSelector";
import AuthRegisterForm from "./form/AuthRegisterForm";
import AuthShelterRegisterForm from "./form/AuthShelterRegisterForm";
import AuthRegisterButtons from "./form/AuthRegisterFormButtons";
import {
  AuthRegisterProps,
  AuthRegisterForms,
} from "../../types/auth/authType";

const AuthRegister = ({
  selectedRole,
  setSelectedRole,
  onRegisterSubmitEvent,
}: AuthRegisterProps) => {
  const {
    currentPosition,
    resetPosition,
    handleNextButtonClick,
    handlePrevButtonClick,
  } = useChangePosition(2);
  const authRegisterForms: AuthRegisterForms = {
    1: <AuthRegisterForm />,
    2: <AuthShelterRegisterForm />,
  };
  return (
    <AuthRegisterontainer onSubmit={onRegisterSubmitEvent}>
      <AuthCommonHeader />
      <AuthRoleSelector
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        resetPosition={resetPosition}
      />
      {selectedRole === 2 ? (
        authRegisterForms[currentPosition]
      ) : (
        <AuthRegisterForm />
      )}
      <AuthRegisterButtons
        selectedRole={selectedRole}
        currentPosition={currentPosition}
        onNextButtonClick={handleNextButtonClick}
        onPrevButtonClick={handlePrevButtonClick}
      />
    </AuthRegisterontainer>
  );
};

export default AuthRegister;

const AuthRegisterontainer = styled.form`
  width: 30rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  font-weight: bold;
`;
