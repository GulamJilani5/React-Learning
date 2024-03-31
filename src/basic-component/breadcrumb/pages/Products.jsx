import React from "react";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="bg-[#EDBB99] p-2 w-70 h-80 flex flex-col items-center">
      <h1>Products Page</h1>
      <Outlet />
    </div>
  );
}
