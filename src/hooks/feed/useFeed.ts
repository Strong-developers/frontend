import { useState, useEffect } from "react";
import { feedListRequest } from "../../api/feedFetcher";

const useFeed = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await feedListRequest(`/feed`);
    })();
  }, []);
};

export default useFeed;
