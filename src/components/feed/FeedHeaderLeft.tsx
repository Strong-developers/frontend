import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import { CommonTitle, CommonSubTitle } from "../../assets/styles/commonStyle";

const FeedHeaderLeft = () => {
  return (
    <FeedHeaderLeftContainer>
      <FeedHeaderImg src="../../src/assets/images/main-bg-01.jpg" />
      <FeedHeaderTitleContainer>
        <FeedHeaderLocation>경기 의정부시</FeedHeaderLocation>
        <FeedHeaderTitle>오늘의 보호소</FeedHeaderTitle>
      </FeedHeaderTitleContainer>
    </FeedHeaderLeftContainer>
  );
};

export default FeedHeaderLeft;

const FeedHeaderLeftContainer = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  align-items: center;
`;

const FeedHeaderTitleContainer = styled.div`
  margin-left: ${Theme.spacing.bigger};
`;

const FeedHeaderImg = styled.img`
  width: 10rem;
  height: 10rem;
  border: 3px solid ${Theme.colors.theme};
  border-radius: 50%;
  overflow: hidden;
`;

const FeedHeaderTitle = styled(CommonTitle)`
  width: 30rem;
`;

const FeedHeaderLocation = styled(CommonSubTitle)``;
