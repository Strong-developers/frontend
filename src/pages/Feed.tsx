import React from "react";
import styled from "styled-components";
import FeedHeader from "../components/feed/FeedHeader";
import FeedBody from "../components/feed/FeedBody";
import ReservationModal from "../components/reservation/modal/ReservationModal";
import useCustomModal from "../hooks/useCustomModal";
import Theme from "../util/theme";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";

const Feed = () => {
  const [isModalOpen, handleModalState] = useCustomModal();
  return (
    <CommonBasePageComponent>
      <FeedContainer>
        <FeedHeader onReservationModalOpenEvent={handleModalState} />
        <FeedBody />
      </FeedContainer>
      <ReservationModal
        isModalOpen={isModalOpen}
        onCloseButtonClickEvent={handleModalState}
      />
    </CommonBasePageComponent>
  );
};

export default Feed;

const FeedContainer = styled.div`
  width: 62.5rem;
  margin: auto;
  padding: ${Theme.spacing.big};
`;
