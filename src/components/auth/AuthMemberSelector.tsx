import styled from "styled-components";

const AuthMemberSelector = () => {
  const memberSelection = ["Volunteer", "Shelter"];

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
`;

const AuthMemberSeletor = styled.li`
  width: 100%;
  display: block;
  cursor: pointer;
`;

export default AuthMemberSelector;
