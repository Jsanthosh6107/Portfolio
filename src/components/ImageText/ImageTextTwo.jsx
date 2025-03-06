import React from "react";
import Button from "@/components/Button/Button";
import SlideIn from "@/hooks/SlideIn";
import Image from "next/image";

const ImageTextTwo = ({ITTitle = "", ITSubTitle = "", SVGImage, PixelImage, Title = "", Description = "", ButtonText = ""}) => {

  return (
    <section className="flex flex-col justify-center text-center x-margin my-20">
        {(ITTitle || ITSubTitle) && ( 
            <div className="px-[10%]">
            <SlideIn>
                <h2 className="font-semibold text-5xl mt-[10%]">{ITTitle}</h2>
            </SlideIn>
            <SlideIn delay={100}>
                <p className="text-2xl mt-4">{ITSubTitle}</p>
            </SlideIn>
            </div>
        )}
        <div className="flex flex-col md:flex-row items-center pt-8 gap-4 md:gap-0">
            <div className={`${SVGImage ? "w-[80%]" : "w-[90%]"} md:w-[50%] flex justify-center`}>
                <div className={`w-full ${SVGImage ? "md:w-[50%]" : "md:w-[90%]"}`}>
                    <SlideIn delay={200}>
                        {SVGImage ? (
                            SVGImage
                        ) : (
                            <Image 
                                src={PixelImage.src}
                                alt={PixelImage.alt || ""}
                                width={PixelImage.width || 500} 
                                height={PixelImage.height || 300}
                                className="rounded-[15px]"
                            />
                        )}
                    </SlideIn>
                </div>
            </div>
            <div className="md:w-[50%] flex flex-col text-center md:text-left items-center md:items-start gap-8">
                <SlideIn delay={200}>
                    <h2 className="text-4xl font-medium md:pr-[20%]">{Title}</h2>
                </SlideIn>
                <SlideIn delay={300}>
                    <p className="text-lg">{Description}</p>
                </SlideIn>
                <SlideIn delay={400}>
                    <Button text={ButtonText} flipColor={false} link="/contact"/>
                </SlideIn>
            </div>
        </div>
    </section>
  );
};

export default ImageTextTwo;
