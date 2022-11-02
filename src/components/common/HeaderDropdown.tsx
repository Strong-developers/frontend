import styled from "styled-components";
import { CommonCategoryChildrenType } from "../../types/commonCategoryType";
import Theme from "../../util/theme";

interface HeaderDropdownProps {
  children?: Array<CommonCategoryChildrenType>;
}

const HeaderDropdown = ({ children }: HeaderDropdownProps) => {
  return (
    <HeaderDropdownList>
      <GridListText>
        {children && children.map((ch) => <ListText>{ch.name}</ListText>)}
      </GridListText>
    </HeaderDropdownList>
  );
};

const HeaderDropdownList = styled.div`
  display: block;
  cursor: pointer;
  color: ${Theme.colors.black};
  width: 100%;
  font-size: ${Theme.fontSize.default};
  animation: menuDown 500ms ease-in-out;
  transform-origin: 0rem 0rem;
  @keyframes menuDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(1.1);
    }
  }
`;

const GridListText = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const ListText = styled.div`
  width: 100%;
  transition: 0.5s;
  color: ${Theme.colors.white};
  padding-top: 0.5rem;
  &:hover {
    color: ${Theme.colors.theme};
    transform: scale(1.1);
  }
`;

export default HeaderDropdown;
