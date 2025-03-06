"use client"; // so it can use React state/hooks in Next.js

import React, { useState, useEffect } from "react";

const CyclingDot = ({ finalNumber = 2, cycleTime = 3000 }) => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const dotCycle = [".", "..", "..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dotCycle.length);
    }, 150);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, cycleTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [dotCycle.length, cycleTime]);

  return (
    <>
      {loading ? (
        <span>{dotCycle[index]}</span>
      ) : (
        <span className="text-orange-600">{finalNumber}</span>
      )}
    </>
  );
};

export default CyclingDot;
