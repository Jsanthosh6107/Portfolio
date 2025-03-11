"use client"

import React from 'react';
import SlideIn from '@/hooks/SlideIn';
import Image from 'next/image';
import Button from '../Button/Button';

const HeroFace = ({heroTitle = "", heroSpanTitle = "", heroDescription = "", heroImage, heroButton = ""}) => {
  return (
      <section className="h-[80%] sm:h-auto flex flex-row-reverse justify-center x-margin my-20 gap-8" id='hero'>
        <SlideIn classes='flex justify-center items-center w-[40%]'>
            <div className="p-2 bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 text-transparent rounded-full">
                <Image
                    src={heroImage.src}
                    alt={heroImage.alt || "Gallery Image"}
                    width={heroImage.width || 500}
                    height={heroImage.height || 300}
                    priority
                    className='rounded-full bg-white'
                />
            </div>
        </SlideIn>
        <div className='flex flex-col w-[60%]'>
        <SlideIn delay={0}>
          <h1 className="font-semibold text-7xl mt-[5%] leading-[1.15]">
            <div className='bg-gradient-to-r from-purple-400 via-red-500 bg-clip-text text-transparent to-orange-600'>{heroSpanTitle}</div>
            {heroTitle}
          </h1>
        </SlideIn>
        <SlideIn delay={100}>
          <p className="text-2xl mt-4 text-gray-600">{heroDescription}</p>
        </SlideIn>
        <SlideIn classes='mt-8' delay={200}>
          <Button text={heroButton} flipColor={false} />
        </SlideIn>
        </div>
      </section>
  );
};

export default HeroFace;
