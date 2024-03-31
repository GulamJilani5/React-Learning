import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LocationHome from "./locationHome";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Homepage from "../pages/HomePage";
import Contact from "../pages/Contact";

export default function LocationRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="/" element={<LocationHome />}>
          <Route path="home" element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
