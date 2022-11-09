import { useState, useEffect } from "react";
import { ReviewType } from "../../types/review/reviewType";
import { reviewListRequest } from "../../api/reviewFetcher";

const useReview = () => {
  const [reviews, setReviews] = useState<Array<ReviewType>>([]);

  useEffect(() => {
    (async () => {
      const res = await reviewListRequest("/review/posts?page=1");
      setReviews(res.reviews);
    })();
  }, []);

  return {
    reviews,
  };
};

export default useReview;
