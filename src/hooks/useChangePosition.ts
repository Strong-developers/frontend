import { useState, useCallback } from "react";

const useChangePosition = (componentsNumber: number) => {
  const [currentPosition, setCurrentPosition] = useState(1);
  const start = 1;
  const end = componentsNumber;
  const handleNextButtonClick = useCallback(() => {
    setCurrentPosition((prev) => (prev === componentsNumber ? prev : prev + 1));
  }, [setCurrentPosition, currentPosition]);

  const handlePrevButtonClick = useCallback(() => {
    setCurrentPosition((prev) => (prev === 1 ? prev : prev - 1));
  }, [setCurrentPosition, currentPosition]);

  return {
    start,
    end,
    currentPosition,
    setCurrentPosition,
    handleNextButtonClick,
    handlePrevButtonClick,
  };
};

export default useChangePosition;
