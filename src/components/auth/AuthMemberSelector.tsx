import styled from "styled-components";
import Theme from "../../util/theme";

const AuthMemberSelector = () => {
  const memberSelection = ["일반 사용자", "보호소 관계자"];

  return (
    <AuthMemberSelectorContainer>
      {memberSelection.map((data, index) => (
        <AuthMemberSeletor key={index}>{data}</AuthMemberSeletor>
      ))}
    </AuthMemberSelectorContainer>
  );
};

const AuthMemberSelectorContainer = styled.ul`
  width: 100%;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: ${Theme.fontWeight.bold};
  font-size: ${Theme.fontSize.littleMoreBig};
`;

const AuthMemberSeletor = styled.li`
  width: 100%;
  display: block;
  cursor: pointer;
`;

export default AuthMemberSelector;
