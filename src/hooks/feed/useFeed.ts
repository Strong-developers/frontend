import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { feedListRequest } from "../../api/feedFetcher";
import { FeedShelterUserType } from "../../types/feed/feedType";

const useFeed = () => {
  const [feeds, setFeeds] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [shelterUser, setShelterUser] = useState<FeedShelterUserType>({
    region: "",
    name: "",
    profileUrl: "",
  });

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        const { feedPageCount, selectedPosts, foundShelter } =
          await feedListRequest(id, curPage);
        setTotalPage(feedPageCount);
        setFeeds(selectedPosts);
        setShelterUser({
          region: foundShelter.region,
          name: foundShelter.name,
          profileUrl: foundShelter.User.profileUrl,
        });
      }
    })();
  }, [id, curPage]);

  return {
    feeds,
    curPage,
    totalPage,
    shelterUser,
    setCurPage,
  };
};

export default useFeed;
