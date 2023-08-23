import React, { useState } from "react";
import PageContent from "./PageContent";
import PageButton from "./PageButton";

export default function Pagination() {
  const totalPages = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  const [paginaton, setPagination] = useState({
    pages: totalPages,
    currentPage: 1,
    perPage: 3,
  });
  return (
    <div>
      <PageContent
        pages={paginaton.pages}
        currentPage={paginaton.currentPage}
        perPage={paginaton.perPage}
      />
      <PageButton
        pages={paginaton.pages}
        currentPage={paginaton.currentPage}
        perPage={paginaton.perPage}
        setPagination={setPagination}
      />
    </div>
  );
}
