import { Comment } from "react-loader-spinner";
import styled from "styled-components";
import Theme from "../../util/theme";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerWrapper>
        <Comment
          visible={true}
          height="138"
          width="138"
          color={Theme.colors.white}
          backgroundColor={Theme.colors.theme}
        />
        <SpinnerText>Loading</SpinnerText>
      </SpinnerWrapper>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerWrapper = styled.div`
  width: auto;
  text-align: center;
`;

const SpinnerText = styled.p`
  font-weight: ${Theme.fontWeight.bold};
  font-size: ${Theme.fontSize.littleBig};
`;

export default LoadingSpinner;
