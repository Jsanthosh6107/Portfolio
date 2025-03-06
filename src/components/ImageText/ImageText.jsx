import React from "react";
import Image from "next/image";
import SlideIn from "@/hooks/SlideIn";

const ImageText = ({imageInfo = {}, textContent = [], inverted = true}) => {
  
  const defaultClasses = "flex-col-reverse md:flex-row";
  const invertedClasses = "flex-col-reverse md:flex-row-reverse";

  let finalClasses = inverted ? invertedClasses : defaultClasses;
  finalClasses = `${finalClasses} px-8 text-center md:text-left flex justify-center items-center x-margin my-20`;

  if (!imageInfo) {
    return null;
  }

  return (
    <section>
      <div className={`${finalClasses}`}>

        <div>
          {textContent.map((text, index) => (
            <div
              key={index}
              className={`${inverted ? "md:pl-16" : "md:pr-16"} py-3`}
            >
              <SlideIn delay={index * 100}>
                <p className="text-xl">{text}</p>
              </SlideIn>
            </div>
          ))}
        </div>

        {imageInfo.src && (
          <div>
            <Image 
              src={imageInfo.src}
              alt={imageInfo.alt || ""}
              width={imageInfo.width || 500} 
              height={imageInfo.height || 300}
              className="rounded-[15px]"
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default ImageText;
