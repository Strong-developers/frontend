import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  BorderDarkBlackButton,
  ThemeBorderButton,
} from "../../assets/styles/commonStyle";

const FeedHeaderRight = () => {
  const navigate = useNavigate();
  return (
    <FeedHeaderRightContainer>
      <BorderDarkBlackButton onClick={() => navigate("/chat")}>
        실시간 채팅
      </BorderDarkBlackButton>
      <ThemeBorderButton>예약하기</ThemeBorderButton>
    </FeedHeaderRightContainer>
  );
};

export default FeedHeaderRight;

const FeedHeaderRightContainer = styled.div`
  display: flex;
  width: 30%;
  gap: 50px;
`;
