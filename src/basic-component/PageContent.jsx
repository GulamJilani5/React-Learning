import React from "react";

export default function PageContent({ pages, currentPage, perPage }) {
  // Logic for displaying pages
  const indexOfLastPage = currentPage * perPage;
  const indexOfStartPage = indexOfLastPage - perPage;
  const currentDisplayPages = pages.slice(indexOfStartPage, indexOfLastPage);
  return (
    <div>
      {currentDisplayPages.map((page, index) => {
        return (
          <li style={{ display: "inline-block", margin: "5px" }} key={index}>
            {page}
          </li>
        );
      })}
    </div>
  );
}
