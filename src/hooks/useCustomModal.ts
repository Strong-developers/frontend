import { useState, useCallback } from "react";

interface CustomModalType {
  isOpenModal: boolean;
  onClickOpenModalButtonEvent: () => void;
  onClickCloseModalButtonEvent: () => void;
}

const useCustomModal = (): CustomModalType => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onClickOpenModalButtonEvent = useCallback(() => {
    setIsOpenModal(true);
  }, [setIsOpenModal]);

  const onClickCloseModalButtonEvent = useCallback(() => {
    setIsOpenModal(false);
  }, [setIsOpenModal]);

  return {
    isOpenModal,
    onClickOpenModalButtonEvent,
    onClickCloseModalButtonEvent,
  };
};

export default useCustomModal;
