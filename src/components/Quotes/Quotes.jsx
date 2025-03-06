"use client"

import {React, useState, useEffect} from "react";
import { QuoteIcon } from "@/components/svgs";

const Quotes = ({ quoteList = [] }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [touchStart, setTouchStart] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quoteList.length);
    };

    const previousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + quoteList.length) % quoteList.length);
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    }

    const handleTouchEnd = (e) => {
      const endTouchX = e.changedTouches[0].clientX;
      const swipeDistance = touchStart - endTouchX;

      if (swipeDistance > 50){
        nextSlide();
      } else if (swipeDistance < -50){
        previousSlide();
      }
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!autoPlay) return; 

        const timer = setInterval(nextSlide, 7500);
        return () => clearInterval(timer);
    }, [currentIndex, autoPlay]);

  return (
    <section className="flex flex-col justify-center text-center x-margin overflow-hidden my-20">
      <div className="bg-gray-200 rounded-[20px] overflow-hidden relative">

        <div className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`}}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
          {quoteList.map((quote, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center px-16 pt-16 shrink-0 w-full gap-12"
            >
              <div>
                <QuoteIcon classes="w-24" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xl text-left">{quote.quote}</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="font-semibold text-2xl">{quote.name}</p>
                  <span>{quote.business ? "-" : ""}</span>
                  <p className="text-lg">{quote.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center my-6">
          {quoteList.map((_, index) => (
            <span key={index}
                  onClick={() => {
                    goToSlide(index);
                    setAutoPlay(!autoPlay);
                  }}
                  className={`rounded-full mx-2 bg-gray-800 ${index === currentIndex ? "w-3 h-3" : "w-2 h-2"} hover:cursor-pointer`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
