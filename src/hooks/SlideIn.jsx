"use client";

import React, { useRef, useState, useEffect } from "react";

const SlideIn = ({ children, delay = 0, flip = false, classes = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(null); // Start as `null` to avoid mismatch

  const myRef = useRef(null);
  const flipTranslate = flip ? "translateY(-50px)" : "translateY(200px)";

  // Set `isMobile` after hydration (on the client)
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      {
        threshold: 0,
        rootMargin: flip ? "50px 0px 50px 0px" : "200px 0px 200px 0px", // Fix for offset
      }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => observer.disconnect();
  }, [flip]); // Ensure it updates if `flip` changes

  return (
    <div
      style={{
        transition: `all 0.6s ease ${isMobile === null ? 0 : isMobile ? 0 : delay}ms`, // Prevent mismatch
        transform: isVisible ? "translateY(0)" : flipTranslate,
        opacity: isVisible ? 1 : 0,
      }}
      ref={myRef}
      className={classes}
    >
      {children}
    </div>
  );
};

export default SlideIn;
