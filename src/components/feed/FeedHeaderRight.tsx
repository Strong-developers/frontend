import React from "react";
import styled from "styled-components";
import {
  BorderDarkBlackButton,
  ThemeBorderButton,
} from "../../assets/styles/commonStyle";

const FeedHeaderRight = ({
  onReservationModalOpenEvent,
}: {
  onReservationModalOpenEvent: () => void;
}) => {
  return (
    <FeedHeaderRightContainer>
      <BorderDarkBlackButton>실시간 채팅</BorderDarkBlackButton>
      <ThemeBorderButton onClick={onReservationModalOpenEvent}>
        예약하기
      </ThemeBorderButton>
    </FeedHeaderRightContainer>
  );
};

export default FeedHeaderRight;

const FeedHeaderRightContainer = styled.div`
  display: flex;
  width: 30%;
  gap: 50px;
`;
