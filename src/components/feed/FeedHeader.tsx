import React from "react";
import styled from "styled-components";
import FeedHeaderLeft from "./FeedHeaderLeft";
import FeedHeaderRight from "./FeedHeaderRight";
import Theme from "../../util/theme";

interface FeedHeaderProps {
  region: string;
  name: string;
  profileUrl: string;
}

const FeedHeader = ({ region, name, profileUrl }: FeedHeaderProps) => {
  return (
    <FeedHeaderContainer>
      <FeedHeaderLeft region={region} name={name} profileUrl={profileUrl} />
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
