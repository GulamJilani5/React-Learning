import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PathHome from "./pathHome";
import Homepage from "../pages/HomePage";
import Products from "../pages/Products";
import SingleProduct from "../pages/single-product";

export default function PathRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="/" element={<PathHome />}>
          <Route path="home" element={<Homepage />} />
          <Route path="products" element={<Products />}>
            <Route path=":productId" element={<SingleProduct />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
