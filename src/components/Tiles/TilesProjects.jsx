import React from "react";
import SlideIn from "@/hooks/SlideIn";
import Image from "next/image";

const TilesProjects = ({tilesHeader = "", tilesTitle = "", tiles = []}) => {
  return (
    <section className="x-margin my-40" id="benefits">
        <div className="flex flex-col justify-center text-center md:px-[10%] pb-12">
            <SlideIn>
                <p className="text-xl font-medium">{tilesHeader}</p>
            </SlideIn>
            <SlideIn delay={100}>
                <h2 className="font-semibold text-5xl px-12 pt-4">{tilesTitle}</h2>
            </SlideIn>
        </div>
        <div className="flex justify-center flex-wrap gap-6">
            {tiles.map((tile, index) => (
                    <SlideIn
                        key={index}
                        delay={(index * 100) + 200}
                        classes="w-[90%] md:w-[45%] lg:w-[30%] rounded-t-[25px] overflow-hidden relative"
                    >
                        <div className="flex flex-row items-center gap-6">
                            <div className="min-w-16">
                                <Image
                                    src={tile.image.src}
                                    alt={tile.image.alt || "Gallery Image"}
                                    width={tile.image.width || 500}
                                    height={tile.image.height || 300}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="px-8 py-6 border-x border-b rounded-b-[25px]">
                            <h3 className="font-medium text-2xl">{tile.title}</h3>
                            <p>{tile.description}</p>
                        </div>
                    </SlideIn>
            ))}
        </div>
    </section>
  );
};

export default TilesProjects;
