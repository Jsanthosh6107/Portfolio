"use client"

import React from 'react';
import Button from "../Button/Button";
import SlideIn from '@/hooks/SlideIn';
import CyclingDot from '../CyclingDot/CyclingDot';

const Hero = ({heroTitle = "", heroDescription = ""}) => {
  return (
      <section className="h-[80%] sm:h-auto flex flex-col justify-center text-center x-margin px-[10%]">
        <SlideIn delay={0}>
          <h1 className="font-semibold text-5xl md:text-7xl mt-[15%]">{heroTitle}</h1>
        </SlideIn>
        <SlideIn delay={100}>
          <p className="text-2xl md:px-[20%] mt-12">{heroDescription}</p>
        </SlideIn>
        <SlideIn delay={100}>
          {/*Add a JS animation here to make it seem live*/}
          <p className='text-2xl md:px-[20%] mt-12'>
          <CyclingDot finalNumber={2} />/5 Spots Placeholder
            </p>
        </SlideIn>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <SlideIn delay={200}>
                <Button text="About Us" flipColor={false} classes="fadeUp-200" link='/about'/>
              </SlideIn>
              <SlideIn delay={300}>
                <Button text="Contact Us" flipColor={true} classes="fadeUp-300" link='/contact'/>
              </SlideIn>
          </div>
      </section>
  );
};

export default Hero;
