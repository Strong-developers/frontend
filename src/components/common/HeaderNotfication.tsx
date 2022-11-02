import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import { createNotification } from "../icons/IconCreator";

const HeaderNotification = () => {
  return (
    <HeaderNotificationContainer>
      {createNotification(32)}
      <NotificationBadge>1</NotificationBadge>
      <HeaderNotificationModal></HeaderNotificationModal>
    </HeaderNotificationContainer>
  );
};

export default HeaderNotification;

const HeaderNotificationContainer = styled.div`
  position: relative;
  height: 100%;
  margin-right: ${Theme.spacing.big};
  cursor: pointer;
`;

const HeaderNotificationModal = styled.div`
  position: absolute;
  width: 20rem;
  height: 30rem;
  left: -20rem;
  top: 4rem;
  padding: ${Theme.spacing.default};
  background-color: ${Theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  transform: scale(0);
  transform-origin: 21rem -1rem;
  transition: all 0.2s ease;
  ${HeaderNotificationContainer}:hover & {
    transform: scale(1);
  }
  z-index: 999;
`;

const NotificationBadge = styled.div`
  position: absolute;
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  right: -0.2rem;
  top: 0.8rem;
  border-radius: 50%;
  background-color: red;
  font-size: 0.7rem;
  color: ${Theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;
