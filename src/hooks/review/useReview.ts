import { useState, useEffect } from "react";
import { ReviewType } from "../../types/review/reviewType";
import { reviewListRequest } from "../../api/reviewFetcher";

const useReview = () => {
  const [reviews, setReviews] = useState<Array<ReviewType>>([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await reviewListRequest(`/review/posts?page=${curPage}`);
      setReviews(res.reviews);
      setTotalPages(res.reviewPageCount);
    })();
  }, [curPage]);

  return {
    reviews,
    totalPages,
    curPage,
    setCurPage,
  };
};

export default useReview;
