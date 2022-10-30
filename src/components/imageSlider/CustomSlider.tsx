import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import useImageSlider from "../../hooks/useImageSlider";

interface CustomSliderProps {
  imageArray: Array<string>;
}

const CustomSlider = ({ imageArray }: CustomSliderProps) => {
  const { width, height, imageUrls } = useImageSlider(imageArray);

  return (
    <SliderContainer>
      <SimpleImageSlider
        width={width}
        height={height}
        images={imageUrls}
        showBullets={false}
        showNavs={true}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
    width: 100%:
    height: 100%;
`;

export default CustomSlider;
