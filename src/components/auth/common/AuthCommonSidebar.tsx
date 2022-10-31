import styled from "styled-components";
import Theme from "../../../util/theme";

const AuthCommonSidebar = () => {
  return (
    <AuthCommonSidebarContainer>
      <AuthCommonSidebarUsername>
        안녕하세요. <strong>FoxMon !</strong>
      </AuthCommonSidebarUsername>
      {Array.from({ length: 5 })
        .fill(0)
        .map((_, idx) => (
          <AuthCommonSidebarItemWrapper key={idx}>
            <AuthCommonSidebarItem>사이드바</AuthCommonSidebarItem>
          </AuthCommonSidebarItemWrapper>
        ))}
    </AuthCommonSidebarContainer>
  );
};

const AuthCommonSidebarContainer = styled.div`
  width: 11rem;
  height: 100%;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  font-size: ${Theme.fontSize.default};
`;

const AuthCommonSidebarUsername = styled.p`
  font-size: ${Theme.fontSize.littleMoreBig};
`;

const AuthCommonSidebarItemWrapper = styled.div`
  margin-bottom: 2rem;
`;

const AuthCommonSidebarItem = styled.span`
  display: inline-block;
  margin: 0 auto;
  cursor: pointer;
`;

export default AuthCommonSidebar;
