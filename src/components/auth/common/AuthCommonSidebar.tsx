import styled from "styled-components";
import Theme from "../../../util/theme";

const AuthCommonSidebar = () => {
  return (
    <AuthCommonSidebarContainer>
      <AuthCommonSidebarUsername>
        안녕하세요. <strong>FoxMon !</strong>
      </AuthCommonSidebarUsername>
      <AuthCommonSidebarItemContainer>
        {Array.from({ length: 5 })
          .fill(0)
          .map((_, idx) => (
            <AuthCommonSidebarItemWrapper key={idx}>
              <AuthCommonSidebarItem>사이드바</AuthCommonSidebarItem>
            </AuthCommonSidebarItemWrapper>
          ))}
      </AuthCommonSidebarItemContainer>
    </AuthCommonSidebarContainer>
  );
};

const AuthCommonSidebarContainer = styled.div`
  width: 10rem;
  height: 90vh;
  padding: 1.275rem 1.2rem;
  display: flex;
  flex-direction: column;
  font-size: ${Theme.fontSize.littleMoreBigger};
`;

const AuthCommonSidebarUsername = styled.p`
  font-size: ${Theme.fontSize.littleMoreBig};
  margin-bottom: 3rem;
`;

const AuthCommonSidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AuthCommonSidebarItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

const AuthCommonSidebarItem = styled.span`
  display: inline-block;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

export default AuthCommonSidebar;
