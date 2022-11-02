import React, { useRef } from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import FeedCard from "./FeedCard";

const FeedBody = () => {
  const obsRef = useRef<HTMLDivElement>(null);
  return (
    <FeedBodyContainer>
      <FeedCardContainer>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedCardContainer>
      <ObserverBottom ref={obsRef}>아래로</ObserverBottom>
    </FeedBodyContainer>
  );
};

export default FeedBody;

const FeedBodyContainer = styled.div``;

const FeedCardContainer = styled.div`
  padding: ${Theme.spacing.bigger} 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ObserverBottom = styled.div``;
