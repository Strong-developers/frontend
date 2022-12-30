import React from "react";
import styled, { css } from "styled-components";
import { CommonComponentType } from "../../types/commonComponentType";
import Theme from "../../util/theme";

interface ModalStyleType extends CommonComponentType {
  isModalOpen: boolean;
  handleChangeModalState: () => void;
}

const CustomModal = ({
  isModalOpen,
  handleChangeModalState,
  children,
}: ModalStyleType) => {
  return (
    <CustomModalBackDrop isModalOpen={isModalOpen}>
      <CustomModalWrapper>
        <CustomModalImgContainer>
          <CustomModalImg
            src="../../src/assets/images/modal-cancel.png"
            onClick={handleChangeModalState}
          />
        </CustomModalImgContainer>
        {children}
      </CustomModalWrapper>
    </CustomModalBackDrop>
  );
};

const CustomModalBackDrop = styled.div<{ isModalOpen: boolean }>`
  ${(props) => (props.isModalOpen ? "display: block" : "display: none")};
  position: fixed;
  background-color: ${Theme.colors.littleGray};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const CustomModalWrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  padding: 1rem 1.75rem 2.5rem 1.75rem;
  top: 50%;
  left: 50%;
  text-align: center;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  background-color: ${Theme.colors.white};
`;

const CustomModalImgContainer = styled.div``;

const CustomModalImg = styled.img`
  display: block;
  margin-left: auto;
  cursor: pointer;
`;

export default CustomModal;
