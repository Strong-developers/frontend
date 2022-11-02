import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderNotification from "./HeaderNotfication";
import { getCategoryRequest } from "../../api/mainFetcher";
import { CommonCategoryType } from "../../types/commonCategoryType";
import Theme from "../../util/theme";

const Header = () => {
  const [categoryItems, setCategoryItems] = useState<Array<CommonCategoryType>>(
    []
  );

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { result } = await getCategoryRequest("/category/main");
      setCategoryItems(
        result.map((c: CommonCategoryType) => {
          return {
            id: c.id,
            name: c.name,
            path: c.path,
          };
        })
      );
    })();
  }, []);

  const handleLogoImageClick = () => {
    navigate("/");
  };

  const handleCategoryClick = (path: string) => () => {
    navigate(path);
  };

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
            </HeaderRightMenuItem>
          ))}
          <HeaderNotification />
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
  color: ${Theme.colors.black};
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
  display: flex;
  justify-content: center;
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

export default Header;
