import { useState } from "react";

interface CustomModalType {
  isOpenModal: boolean;
  onClickOpenModalButtonEvent: () => void;
  onClickCloseModalButtonEvent: () => void;
}

const useCustomModal = (): CustomModalType => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onClickOpenModalButtonEvent = () => {
    setIsOpenModal(true);
  };

  const onClickCloseModalButtonEvent = () => {
    setIsOpenModal(false);
  };

  return {
    isOpenModal,
    onClickOpenModalButtonEvent,
    onClickCloseModalButtonEvent,
  };
};

export default useCustomModal;
