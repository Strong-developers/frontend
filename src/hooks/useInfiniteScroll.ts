import React, { useState, useEffect, useCallback } from "react";

const useInfiniteScroll = (
  fetchCallback: () => void,
  target: React.RefObject<HTMLDivElement>,
  totalPages: number
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const observerCallback = useCallback(
    (entry: IntersectionObserverEntry[]) => {
      const target = entry[0];
      if (page === totalPages) return;
      if (target.isIntersecting && !isLoading) {
        setPage((prev) => prev + 1);
      }
    },
    [setPage, page, isLoading]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (target.current) observer.observe(target.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetchCallback();
  }, [page]);

  return { isLoading, setIsLoading, page };
};

export default useInfiniteScroll;
