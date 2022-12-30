import styled from "styled-components";
import useFeed from "../hooks/feed/useFeed";
import useCustomModal from "../hooks/useCustomModal";
import FeedHeader from "../components/feed/FeedHeader";
import FeedBody from "../components/feed/FeedBody";
import FeedPost from "../components/feed/post/FeedPost";
import CustomModal from "../components/modal/CustomModal";
import Theme from "../util/theme";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";

const Feed = () => {
  const { feeds, curPage, totalPage, shelterUser, setCurPage } = useFeed();
  const [isModalOpen, handleChangeModalState] = useCustomModal();
  const { region, name, profileUrl } = shelterUser;

  return (
    <CommonBasePageComponent>
      <FeedContainer>
        <FeedHeader region={region} name={name} profileUrl={profileUrl} />
        <FeedBody feeds={feeds} onFeedCardClickEvent={handleChangeModalState} />
      </FeedContainer>
      <CustomModal
        isModalOpen={isModalOpen}
        handleChangeModalState={handleChangeModalState}
      >
        <FeedPost />
      </CustomModal>
    </CommonBasePageComponent>
  );
};

export default Feed;

const FeedContainer = styled.div`
  width: 62.5rem;
  margin: auto;
  padding: ${Theme.spacing.big};
`;
