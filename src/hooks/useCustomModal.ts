import { useState, useCallback } from "react";

const useCustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChangeModalState = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [setIsModalOpen]);

  return [isModalOpen, handleChangeModalState];
};

export default useCustomModal;
