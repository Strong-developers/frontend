import { useState, useCallback } from "react";

interface useImageSliderReturnType {
  curIndex: number;
  handleNextButtonClick: () => void;
  handlePrevButtonClick: () => void;
}

const useImageSlider = (totalIamgeLength: number): useImageSliderReturnType => {
  const [curIndex, setCurIndex] = useState<number>(0);

  const handleNextButtonClick = useCallback(() => {
    curIndex === totalIamgeLength - 1
      ? setCurIndex(0)
      : setCurIndex((prev) => prev + 1);
  }, [curIndex, setCurIndex]);

  const handlePrevButtonClick = useCallback(() => {
    curIndex === 0
      ? setCurIndex(totalIamgeLength - 1)
      : setCurIndex((prev) => prev - 1);
  }, [curIndex, setCurIndex]);

  return {
    curIndex,
    handleNextButtonClick,
    handlePrevButtonClick,
  };
};

export default useImageSlider;
