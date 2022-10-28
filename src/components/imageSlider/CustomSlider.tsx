import styled from "styled-components";
import Theme from "../../util/theme";
import useImageSlider from "../../hooks/useImageSlider";
import { createPrevButton, createNextButton } from "../icons/IconCreator";

interface CustomSliderProps {
  imageArray: Array<string>;
}

const CustomSlider = ({ imageArray }: CustomSliderProps) => {
  const { curIndex, handlePrevButtonClick, handleNextButtonClick } =
    useImageSlider(imageArray.length);

  return (
    <SliderContainer>
      <SliderImageWrapper>
        <SliderImage src={`../../src/assets/images/${imageArray[curIndex]}`} />
        <SliderPrevButton onClick={handlePrevButtonClick}>
          {createPrevButton(22, Theme.colors.silverGray)}
        </SliderPrevButton>
        <SliderNextButton onClick={handleNextButtonClick}>
          {createNextButton(22, Theme.colors.silverGray)}
        </SliderNextButton>
      </SliderImageWrapper>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
    width: 100%:
    height: 100%;
`;

const SliderImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
  overflow: hidden;
`;

const SliderImage = styled.img`
  width: auto;
  opacity: 0.92;
`;

const SliderButton = styled.button`
  colors: black;
  cursor: pointer;
  position: absolute;
  border: none;
  background-color: transparent;
`;

const SliderPrevButton = styled(SliderButton)`
  top: 70%;
  left: 0;
`;

const SliderNextButton = styled(SliderButton)`
  top: 70%;
  right: 0;
`;

export default CustomSlider;
