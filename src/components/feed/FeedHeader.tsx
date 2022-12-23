import React from "react";
import styled from "styled-components";
import FeedHeaderLeft from "./FeedHeaderLeft";
import FeedHeaderRight from "./FeedHeaderRight";
import Theme from "../../util/theme";

const FeedHeader = () => {
  return (
    <FeedHeaderContainer>
      <FeedHeaderLeft />
      <FeedHeaderRight />
    </FeedHeaderContainer>
  );
};

export default FeedHeader;

const FeedHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${Theme.spacing.bigger} 0;
  border-bottom: 1px solid ${Theme.colors.silverGray};
`;
