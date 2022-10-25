import React from "react";
import styled, { css } from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";
import Theme from "../../util/theme";

interface ModalStyleType extends CommonComponentType {
  isModalOpen: boolean;
}

const CustomModal = ({ children, isModalOpen }: ModalStyleType) => {
  return (
    <CustomModalBackDrop isModalOpen={isModalOpen}>
      <CustomModalWrapper isModalOpen={isModalOpen}>
        {children}
      </CustomModalWrapper>
    </CustomModalBackDrop>
  );
};

const isModalVisible = css<ModalStyleType>`
  ${(props) =>
    props.isModalOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const CustomModalBackDrop = styled.div`
  position: fixed;
  background-color: ${Theme.colors.littleGray};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  ${isModalVisible};
`;

const CustomModalWrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  padding: 1rem 1.75rem 1rem 1.75rem;
  top: 50%;
  left: 50%;
  text-align: center;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  ${isModalVisible};
`;

export default CustomModal;
