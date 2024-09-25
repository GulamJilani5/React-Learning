import React, { useState, useEffect, useRef } from "react";

// LazyImage Component
const LazyImage = ({ src, alt }) => {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(imageRef.current); // Stop observing once loaded
        }
      },
      {
        threshold: 0.1, // 10% of the image is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // clean up function -It will improve the performance
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div
      ref={imageRef}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      {isInView ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default LazyImage;
