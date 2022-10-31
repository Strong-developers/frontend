import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import { createBackButton, createForwardButton } from "../icons/IconCreator";
import usePagination from "../../hooks/usePagination";

const Pagination = () => {
  const totalPage = 56;
  const {
    curPage,
    pageList,
    handleNextPageClick,
    handlePrevPageClick,
    handlePageNumberClick,
  } = usePagination(totalPage);
  return (
    <PaginationContainer>
      <PageNavButton
        onClick={handlePrevPageClick}
        disabled={curPage === 1 && true}
      >
        {createBackButton(16)}
      </PageNavButton>
      {pageList.map((pageNumber) => (
        <PageNumberButton
          key={pageNumber}
          pageNumber={pageNumber}
          curPage={curPage}
          onClick={() => handlePageNumberClick(pageNumber)}
        >
          {pageNumber}
        </PageNumberButton>
      ))}
      <PageNavButton
        onClick={handleNextPageClick}
        disabled={curPage === totalPage && true}
      >
        {createForwardButton(16)}
      </PageNavButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  font-size: ${Theme.fontSize.small};
  text-align: center;
`;

const PageNumberButton = styled.button<{ pageNumber: number; curPage: number }>`
  height: 40px;
  width: 40px;
  background-color: transparent;
  border-radius: 50%;
  border: none;

  cursor: pointer;
  ${(props) =>
    props.pageNumber === props.curPage &&
    `background-color: ${Theme.colors.theme}; color: ${Theme.colors.white}`};
`;

const PageNavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;