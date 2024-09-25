import LazyImage from "./LazyImage";
import React, { useState, useEffect, useRef } from "react";

import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";

// Main component
const LazyLoadImages = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div>
      {images.map((image, index) => (
        <LazyImage key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default LazyLoadImages;
