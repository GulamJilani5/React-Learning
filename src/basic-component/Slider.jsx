import React, { useState } from "react";

export default function Slider({ slidePages }) {
  const [page, setPage] = useState(0);

  const leftSlide = () => {
    if (page === 0) {
      //   if (page < 1) {
      setPage(slidePages.length - 1);
    } else setPage(page - 1);
  };
  const rightSlide = () => {
    if (page === slidePages.length - 1) {
      // if (page > slidePages.length - 2) {
      setPage(0);
    } else setPage(page + 1);
  };
  return (
    <>
      <div className="slider-container">
        <button onClick={leftSlide}>&lt;</button>
        <p>{slidePages[page]}</p>
        <button onClick={rightSlide}>&gt;</button>
      </div>
      <p>
        Showing {page + 1} / {slidePages.length}
      </p>
    </>
  );
}
