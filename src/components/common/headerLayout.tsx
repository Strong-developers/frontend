import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";

const HeaderLayout = () => {
  const menuItems = ["A", "B", "VOLUNTEERS", "C", "D"];

  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderItemSection>
          {menuItems.map((m) => (
            <HeaderItemMenu key={m}>{m}</HeaderItemMenu>
          ))}
        </HeaderItemSection>
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: transparent;
`;

const HeaderItemSection = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderItemMenu = styled.li`
  cursor: pointer;
  font-size: ${Theme.fontSize.big};
`;

export default HeaderLayout;
