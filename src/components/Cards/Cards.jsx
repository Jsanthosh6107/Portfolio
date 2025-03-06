"use client";

import Button from "../Button/Button";
import Image from "next/image";
import { React, useState, useEffect } from "react";

const Cards = ({ subTitle = "", title = "", description = "", cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endTouchX = e.changedTouches[0].clientX;
    const swipeDistance = touchStart - endTouchX;

    if (swipeDistance > 50) {
      nextSlide();
    } else if (swipeDistance < -50) {
      previousSlide();
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="bg-[url('/images/CircleBackground.png')] bg-fixed bg-cover pb-16 overflow-hidden">
      <div className="x-margin flex flex-col justify-center text-center">
        <div className="flex flex-col justify-center text-white py-12 gap-4">
          <p className="text-lg font-medium uppercase">{subTitle}</p>
          <h2 className="text-5xl font-semibold">{title}</h2>
          <p className="text-lg sm:text-2xl px-4 sm:px-[10%] text-center">{description}</p>
        </div>

        <div
          className="flex flex-row overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, slideIndex) => (
            <div
              key={slideIndex}
              className="flex flex-row transition-transform duration-700 ease-in-out shrink-0 w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="bg-white flex flex-col text-center items-center lg:flex-row p-4 sm:p-6 md:p-12 rounded-[20px] gap-2 sm:gap-4">
                <div className="flex flex-col gap-4 sm:gap-8 lg:items-start lg:text-left lg:w-[60%]">
                  <p className="text-sm sm:text-lg font-medium uppercase">{card.cardSubtitle}</p>
                  <h3 className="text-2xl sm:text-5xl font-medium break-words">{card.cardTitle}</h3>
                  <p className="text-sm sm:text-xl">{card.cardDescription}</p>
                  <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center lg:justify-start gap-3">
                    {card.cardStatistics.map((cardStatistic, statIndex) => (
                        <div
                          key={statIndex}
                          className={`min-w-[90px] sm:min-w-[150px] text-center sm:text-left ${
                              statIndex !== 0 && "sm:border-l-gray-500 sm:border-l sm:pl-3 sm:ml-3"
                            }`}
                        >
                          <h4 className="text-2xl sm:text-5xl font-medium">{cardStatistic.cardNumber}</h4>
                          <p className="text-xs sm:text-base">{cardStatistic.cardNumberText}</p>
                        </div>
                    ))}
                  </div>
                  <div>
                    <Button text={card.cardButton} flipColor={false} invert={false} />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full sm:w-[80%] lg:w-[40%]">
                  {card.imageInfo.src && (
                    <div>
                      <Image
                        src={card.imageInfo.src}
                        alt={card.imageInfo.alt || ""}
                        width={card.imageInfo.width || 300} // Reduced for smaller screens
                        height={card.imageInfo.height || 200}
                        priority={card.imageInfo.priority || false}
                        loading={card.imageInfo.priority ? 'eager' : 'lazy'}
                        className="rounded-[15px] w-auto h-auto max-w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center my-6">
          {cards.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                goToSlide(index);
                setAutoPlay(!autoPlay);
              }}
              className={`rounded-full mx-1 bg-white ${
                index === currentIndex ? "w-3 h-3" : "w-2 h-2"
              } hover:cursor-pointer`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
