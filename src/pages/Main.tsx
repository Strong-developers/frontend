import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import CustomSlider from "../components/imageSlider/CustomSlider";

const Main = () => {
  const imageArray = ["main-bg-01.jpg", "main-bg-02.jpg", "main-bg-03.jpg"];

  return (
    <CommonBasePageComponent>
      <CustomSlider imageArray={imageArray} />
    </CommonBasePageComponent>
  );
};

export default Main;
