import React, { useState, useMemo, useCallback } from "react";

const usePagination = (
  totalPages: number,
  curPage: number,
  setCurPage: React.Dispatch<React.SetStateAction<number>>,
  page: number = 1,
  divider: number = 10
) => {
  const pageLength = useMemo(
    () => Math.ceil(totalPages / divider),
    [totalPages, divider]
  );

  const firstPageNumber = useMemo(
    () => Math.ceil(curPage / divider - 1) * divider + 1,
    [curPage, divider]
  );

  const handleNextPageClick = useCallback(() => {
    setCurPage((prev) => (prev === totalPages ? prev : prev + 1));
  }, [setCurPage, totalPages]);

  const handlePrevPageClick = useCallback(() => {
    setCurPage((prev) => (prev === page ? prev : prev - 1));
  }, [setCurPage, totalPages]);

  const handlePageNumberClick = useCallback(
    (number: number) => {
      setCurPage(number);
    },
    [setCurPage]
  );

  const pageList = useMemo(() => {
    const temp = Array(divider)
      .fill(0)
      .map((_, index) => {
        return firstPageNumber + index <= totalPages
          ? firstPageNumber + index
          : null;
      });
    return temp.filter((page): page is number => typeof page === "number");
  }, [firstPageNumber, pageLength]);
  return {
    curPage,
    pageList,
    handleNextPageClick,
    handlePrevPageClick,
    handlePageNumberClick,
  };
};

export default usePagination;
