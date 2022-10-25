import React, { useCallback } from "react";

interface CustomModalType {
  handleModalOpenClick: () => void;
  handleModalCloseClick: () => void;
}

const useCustomModal = (
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
): CustomModalType => {
  const handleModalOpenClick = useCallback(() => {
    setIsOpenModal(true);
  }, [setIsOpenModal]);

  const handleModalCloseClick = useCallback(() => {
    setIsOpenModal(false);
  }, [setIsOpenModal]);

  return {
    handleModalOpenClick,
    handleModalCloseClick,
  };
};

export default useCustomModal;
