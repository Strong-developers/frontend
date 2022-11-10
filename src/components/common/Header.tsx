import styled from "styled-components";
import useHeader from "../../hooks/header/useHeader";
import HeaderNotification from "./HeaderNotfication";
import HeaderDropdown from "./HeaderDropdown";
import Theme from "../../util/theme";

const Header = () => {
  const { categoryItems, handleLogoImageClick, handleCategoryClick } =
    useHeader();

  return (
    <HeaderContainer>
      <HeaderLeftWrapper>
        <HeaderLogo
          src="../../src/assets/images/logo-none-bg.png"
          onClick={handleLogoImageClick}
        />
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <HeaderRightMenuSection>
          {categoryItems.map((c) => (
            <HeaderRightMenuItem
              key={c.id}
              onClick={handleCategoryClick(c.path)}
            >
              {c.name}
              <HeaderChildrenDropdown>
                <HeaderDropdown children={c.children} />
              </HeaderChildrenDropdown>
            </HeaderRightMenuItem>
          ))}
          <HeaderNotification />
        </HeaderRightMenuSection>
      </HeaderRightWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  line-height: 80px;
  color: ${Theme.colors.black};
  font-size: ${Theme.fontSize.default};
  background-color: ${Theme.colors.moreTp};
`;

const HeaderLeftWrapper = styled.div`
  width: 20%;
`;

const HeaderRightWrapper = styled.div`
  width: 60%;
`;

const HeaderRightMenuSection = styled.ul`
  display: flex;
  justify-content: center;
`;

const HeaderRightMenuItem = styled.li`
  display: block;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: ${Theme.colors.theme};
  }
`;

const HeaderLogo = styled.img`
  margin-left: 0.75rem;
  width: 90px;
  cursor: pointer;
`;

const HeaderChildrenDropdown = styled.div`
  position: absolute;
  z-index: 999;
  top: 2rem;
  display: none;
  ${HeaderRightMenuItem}:hover & {
    display: block;
    line-height: 1rem;
  }
`;

export default Header;
