import { useState, useCallback } from "react";

type CustomModalReturnType = [
  isModalOpen: boolean,
  handleChangeModalState: () => void
];

const useCustomModal = (): CustomModalReturnType => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChangeModalState = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen, setIsModalOpen]);

  return [isModalOpen, handleChangeModalState];
};

export default useCustomModal;
