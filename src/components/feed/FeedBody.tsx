import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import FeedCard from "./FeedCard";

const FeedBody = () => {
  return (
    <FeedBodyContainer>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </FeedBodyContainer>
  );
};

export default FeedBody;

const FeedBodyContainer = styled.div`
  padding: ${Theme.spacing.bigger} 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
