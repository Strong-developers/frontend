import styled from "styled-components";
import Theme from "../../../util/theme";

const AuthCommonSidebar = () => {
  return (
    <AuthCommonSidebarContainer>
      <div>사이드바</div>
    </AuthCommonSidebarContainer>
  );
};

const AuthCommonSidebarContainer = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.white};
`;

export default AuthCommonSidebar;
