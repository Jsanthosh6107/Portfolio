"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Numbers = ({ numbersList = [] }) => {
  return (
    <section className="bg-gray-200 mt-20">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center text-center x-margin justify-evenly py-20 gap-16 md:gap-8 lg:gap-0">
        {numbersList.map((number, index) => {
          // Create an Intersection Observer for each item
          const [ref, inView] = useInView({
            /* 
              triggerOnce ensures the animation 
              only plays the first time it enters the viewport 
            */
            triggerOnce: true,
            threshold: 0.3, // adjust for how much of the element is in view
          });

          return (
            <div key={index} ref={ref}>
              <p className="text-7xl font-semibold">
                {inView && (
                  <CountUp
                    start={0}
                    end={number.topNumber}
                    duration={2}
                    // add any other CountUp props you like
                  />
                )}
                {number.topSymbol}
              </p>
              <p className="text-2xl font-medium">{number.bottomString}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Numbers;