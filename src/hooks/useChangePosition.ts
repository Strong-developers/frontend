import { useState, useCallback } from "react";

const useChangePosition = (componentsNumber: number) => {
  const [currentPosition, setCurrentPosition] = useState(1);

  const handleNextButtonClick = useCallback(() => {
    setCurrentPosition((prev) => (prev === componentsNumber ? prev : prev + 1));
  }, [setCurrentPosition, currentPosition]);

  const handlePrevButtonClick = useCallback(() => {
    setCurrentPosition((prev) => (prev === 1 ? prev : prev - 1));
  }, [setCurrentPosition, currentPosition]);

  return {
    currentPosition,
    setCurrentPosition,
    handleNextButtonClick,
    handlePrevButtonClick,
  };
};

export default useChangePosition;
