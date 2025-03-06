import React from "react";
import Image from "next/image";

const CompanyGallery = ({ images = [] }) => {
  return (
    <section className="flex flex-col items-center md:flex-row justify-center x-margin my-20" id="clients">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full max-w-[200px] md:max-w-[300px] h-48 md:h-64 m-4 md:m-8 xl:m-12 flex items-center p-0 xl:p-10 grayscale opacity-70 hover:opacity-100 hover:transition"
        >
          <Image
            src={image.src}
            alt={image.alt || "Gallery Image"}
            width={image.width || 500}
            height={image.height || 300}
            priority
          />
        </div>
      ))}
    </section>
  );
};

export default CompanyGallery;
