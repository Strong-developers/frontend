import styled from "styled-components";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import CustomSlider from "../components/imageSlider/CustomSlider";
import Theme from "../util/theme";

const Main = () => {
  const imageArray = ["main-bg-01.jpg", "main-bg-02.jpg", "main-bg-03.jpg"];

  return (
    <CommonBasePageComponent>
      <CustomSlider imageArray={imageArray} />
      <MainLogoText>VOLUNTEERS</MainLogoText>
      <MainTextOne>SHELTER FOR ABANDONED DOG</MainTextOne>
      <MainTextTwo>CREATIVE & EXPRERIENCE</MainTextTwo>
      <MainTextThree>
        WE ARE THE ONE OF THE WORLD'S TOP CREATIVE DESIGN AGENCIES
      </MainTextThree>
      <MainExploreButton>EXPLORE</MainExploreButton>
      <MainRegisterButton>REGISTER</MainRegisterButton>
    </CommonBasePageComponent>
  );
};

const MainText = styled.p`
  position: absolute;
  color: ${Theme.colors.white};
`;

const MainLogoText = styled(MainText)`
  left: 50%;
  top: 22%;
  transform: translate(-50%, -22%);
  font-size: 5rem;
`;

const MainTextOne = styled(MainText)`
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
  font-size: ${Theme.fontSize.littleBig};
`;

const MainTextTwo = styled(MainText)`
  left: 50%;
  top: 53%;
  transform: translate(-50%, -53%);
  font-size: 3.25rem;
  font-weight: ${Theme.fontWeight.bold};
`;

const MainTextThree = styled(MainText)`
  left: 50%;
  top: 65%;
  transform: translate(-50%, -65%);
  font-size: ${Theme.fontSize.default};
`;

const MainExploreButton = styled.button`
  position: absolute;
  padding: 1rem 1.5rem;
  left: 38%;
  top: 80%;
  transform: translate(-40%, -80%);
  color: ${Theme.colors.white};
  font-size: 1.5rem;
  font-weight: ${Theme.fontWeight.bold};
  border: 1px solid ${Theme.colors.white};
  border-radius: 8px;
  background-color: ${Theme.colors.tp};
  transition: 1s;
  cursor: pointer;
  &:hover {
    color: ${Theme.colors.black};
    background-color: ${Theme.colors.white};
  }
`;

const MainRegisterButton = styled.button`
  position: absolute;
  padding: 1rem 1.5rem;
  left: 62%;
  top: 80%;
  transform: translate(-60%, -80%);
  color: ${Theme.colors.white};
  font-size: 1.5rem;
  font-weight: ${Theme.fontWeight.bold};
  border: 1px solid ${Theme.colors.white};
  border-radius: 8px;
  background-color: ${Theme.colors.tp};
  transition: 1s;
  cursor: pointer;
  &:hover {
    color: ${Theme.colors.black};
    background-color: ${Theme.colors.white};
  }
`;

export default Main;
