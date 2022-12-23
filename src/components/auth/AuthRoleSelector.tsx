import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import Theme from "../../util/theme";
import { AuthForm, AuthRoleSelectorProps } from "../../types/auth/authType";

const AuthRoleSelector = ({
  selectedRole,
  setSelectedRole,
  resetPosition,
}: AuthRoleSelectorProps) => {
  const { reset } = useFormContext<AuthForm>();
  const roles = [
    { role: "일반 사용자", number: 1 },
    { role: "보호소 관계자", number: 2 },
  ];

  return (
    <AuthRoleSelectorContainer>
      {roles.map((item, index) => {
        const { role, number } = item;
        return (
          <AuthRoleSeletor
            key={index}
            type="button"
            isSelected={selectedRole === number && true}
            onClick={() => {
              setSelectedRole(number);
              resetPosition();
              reset();
            }}
          >
            <AuthRoleText>{role}</AuthRoleText>
          </AuthRoleSeletor>
        );
      })}
    </AuthRoleSelectorContainer>
  );
};

const AuthRoleSelectorContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: ${Theme.fontWeight.bold};
  font-size: ${Theme.fontSize.littleMoreBig};
  background-color: ${Theme.colors.littleGray};
`;

const AuthRoleSeletor = styled.a<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  color: ${Theme.colors.black};
  text-decoration: none;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    `color: ${Theme.colors.white}; background-color: ${Theme.colors.theme}`};
  transition: all 0.3s;
`;

const AuthRoleText = styled.span`
  line-height: 3rem;
`;

export default AuthRoleSelector;
