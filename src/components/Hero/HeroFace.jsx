"use client"

import React from 'react';
import SlideIn from '@/hooks/SlideIn';
import Image from 'next/image';

const HeroFace = ({heroTitle = "", heroDescription = "", heroImage}) => {
  return (
      <section className="h-[80%] sm:h-auto flex flex-col justify-center text-center x-margin px-[10%]">
        <div className='flex justify-center mt-[30%] md:mt-[10%]'>
                <Image
                    src={heroImage.src}
                    alt={heroImage.alt || "Gallery Image"}
                    width={heroImage.width || 500}
                    height={heroImage.height || 300}
                    priority
                    className='border-8 border-black rounded-full md:w-[30%]'
                />
        </div>
        <SlideIn delay={0}>
          <h1 className="font-semibold text-5xl md:text-5xl mt-[5%]">{heroTitle}</h1>
        </SlideIn>
        <SlideIn delay={100}>
          <p className="text-2xl md:px-[20%] mt-8">{heroDescription}</p>
        </SlideIn>
        <SlideIn delay={100}>
          <p className='text-2xl md:px-[20%] mt-12'>
            </p>
        </SlideIn>
      </section>
  );
};

export default HeroFace;
