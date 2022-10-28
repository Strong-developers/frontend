import styled from "styled-components";
import Theme from "../../util/theme";

const HeaderLayout = () => {
  return (
    <HeaderContainer>
      <HeaderLeftWrapper>Logo</HeaderLeftWrapper>
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
  float: left;
`;

const HeaderRightWrapper = styled.div`
  width: 60%;
  float: right;
`;

const HeaderRightMenuSection = styled.ul`
  margin-left: 200px;
`;

const HeaderRightMenuItem = styled.li`
  display: inline-block;
  cursor: pointer;
  margin-left: 40px;
  transition: 0.5s;
  &:hover {
    color: ${Theme.colors.theme};
  }
`;

export default HeaderLayout;
