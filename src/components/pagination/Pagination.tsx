import React from "react";
import styled from "styled-components";
import Theme from "../../util/theme";
import { createBackButton, createForwardButton } from "../icons/IconCreator";
import usePagination from "../../hooks/usePagination";

interface PaginationProps {
  totalPages: number;
  curPage: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ totalPages, curPage, setCurPage }: PaginationProps) => {
  const {
    pageList,
    handleNextPageClick,
    handlePrevPageClick,
    handlePageNumberClick,
  } = usePagination(totalPages, curPage, setCurPage);
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
        disabled={curPage === totalPages && true}
      >
        {createForwardButton(16)}
      </PageNavButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  height: 3rem;
  font-size: ${Theme.fontSize.small};
  text-align: center;
`;

const PageNumberButton = styled.button<{ pageNumber: number; curPage: number }>`
  height: 40px;
  width: 40px;
  margin: 2px;
  background-color: transparent;
  border: 1px solid ${Theme.colors.littleGray};
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    props.pageNumber === props.curPage &&
    `background-color: ${Theme.colors.theme}; color: ${Theme.colors.white}`};
  &:hover {
    background-color: ${Theme.colors.softTheme};
  }
  &:active {
    transform: scale(0.9);
  }
`;

const PageNavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
