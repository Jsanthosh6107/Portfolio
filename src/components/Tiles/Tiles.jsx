import React from "react";
import SlideIn from "@/hooks/SlideIn";

const Tiles = ({tilesHeader = "", tilesTitle = "", tiles = []}) => {
  return (
    <section className="x-margin my-40" id="skills">
        <div className="flex flex-col justify-center text-center md:px-[10%] pb-12">
            <SlideIn>
                <p className="text-xl font-medium bg-gradient-to-r from-orange-600 via-red-500 to-purple-400 bg-clip-text text-transparent uppercase inline-block">{tilesHeader}</p>
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
                        classes="w-[90%] md:w-[45%] lg:w-[30%] border-2 border-gray-400 rounded-[25px] p-8 shadow-2xl bg-white"
                    >
                        <div className="flex flex-row items-center gap-6 pb-4">
                            <div className="min-w-16">{tile.svg}</div>
                            <h3 className="font-medium text-2xl">{tile.title}</h3>
                        </div>
                        <p>{tile.description}</p>
                    </SlideIn>
            ))}
        </div>
    </section>
  );
};

export default Tiles;
