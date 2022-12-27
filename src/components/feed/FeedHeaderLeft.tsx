import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import { CommonTitle, CommonSubTitle } from "../../assets/styles/commonStyle";

interface FeedHeaderLeftProps {
  region: string;
  name: string;
  profileUrl: string;
}

const FeedHeaderLeft = ({ region, name, profileUrl }: FeedHeaderLeftProps) => {
  return (
    <FeedHeaderLeftContainer>
      <FeedHeaderImg src={profileUrl} />
      <FeedHeaderTitleContainer>
        <FeedHeaderLocation>{region}</FeedHeaderLocation>
        <FeedHeaderTitle>{name}</FeedHeaderTitle>
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
