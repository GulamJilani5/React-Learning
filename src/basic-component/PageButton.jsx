import React from "react";
export default function PageButton({
  pages,
  currentPage,
  perPage,
  setPagination,
}) {
  const pageButtons = [];
  for (let i = 1; i <= Math.ceil(pages.length / perPage); i++)
    pageButtons.push(i);

  // console.log(pageButtons);
  const handleClick = (e) => {
    const currPageValue = Number(e.target.value);
    //     if (currPageValue === 1) {

    //   }
    setPagination((prevState) => ({
      ...prevState,
      currentPage: currPageValue,
    }));
  };
  function handleLeftClick(e) {
    if (currentPage === 1) {
      return;
    }
    setPagination((prevState) => ({
      ...prevState,
      currentPage: currentPage - 1,
    }));
  }
  const handleRightClick = (e) => {
    // console.log(currentPage, pageButtons.length);
    if (currentPage === pageButtons.length) {
      return;
    }
    setPagination((prevState) => ({
      ...prevState,
      currentPage: currentPage + 1,
    }));
  };
  return (
    <>
      <button onClick={handleLeftClick}> &larr;</button>
      {pageButtons.map((value, index) => {
        return (
          <button
            key={index}
            value={value}
            style={{ display: "inline-block", marginLeft: "5px" }}
            onClick={handleClick}
          >
            {value}
          </button>
        );
      })}
      <button onClick={handleRightClick} style={{ marginLeft: "5px" }}>
        &rarr;
      </button>
    </>
  );
}
