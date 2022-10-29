import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../util/theme";

const HeaderLayout = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderLeftWrapper>
        <HeaderLogo
          src="../../src/assets/images/logo-none-bg.png"
          onClick={() => navigate("/")}
        />
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <HeaderRightMenuSection>
          <HeaderRightMenuItem>Menu item</HeaderRightMenuItem>
          <HeaderRightMenuItem>Menu item</HeaderRightMenuItem>
          <HeaderRightMenuItem>Menu item</HeaderRightMenuItem>
          <HeaderRightMenuItem>Menu item</HeaderRightMenuItem>
          <HeaderRightMenuItem>Menu item</HeaderRightMenuItem>
        </HeaderRightMenuSection>
      </HeaderRightWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: ${Theme.colors.white};
  font-size: ${Theme.fontSize.default};
  font-weigh: ${Theme.fontWeight.bold};
  background-color: ${Theme.colors.moreTp};
`;

const HeaderLeftWrapper = styled.div`
  width: 20%;
`;

const HeaderRightWrapper = styled.div`
  width: 60%;
`;

const HeaderRightMenuSection = styled.ul`
  margin-left: 200px;
`;

const HeaderRightMenuItem = styled.li`
  display: inline-block;
  cursor: pointer;
  margin-left: 40px;
  transition: 0.4s;
  &:hover {
    color: ${Theme.colors.theme};
  }
`;

const HeaderLogo = styled.img`
  margin-left: 10px;
  width: 90px;
  cursor: pointer;
`;

export default HeaderLayout;
