import React from "react";
import { OneIcon, TwoIcon, ThreeIcon } from "@/components/svgs";
import SlideIn from "@/hooks/SlideIn";

const Shelf = ({headers = [], text = []}) => {
    const divClasses = "flex flex-col items-center xl:flex-1"
  return (
        <SlideIn delay={500}>
            <section className="flex flex-row flex-wrap xl:flex-nowrap justify-center text-center x-margin mt-40 full-box-shadow px-12 rounded-[50px] pb-20 bg-white">
                <div className={`${divClasses}`}>
                    <OneIcon aria-label="One Symbol" classes="w-16 py-8"/>
                    <h3 className="text-2xl font-medium">{headers[0]}</h3>
                    <p className="pt-4 md:px-14">{text[0]}</p>
                </div>
                <div className={`${divClasses}`}>
                    <TwoIcon aria-label="Two Symbol" classes="w-16 py-8"/>
                    <h3 className="text-2xl font-medium">{headers[1]}</h3>
                    <p className="pt-4 md:px-14">{text[1]}</p>
                </div>
                <div className={`${divClasses}`}>
                    <ThreeIcon aria-label="Three Symbol" classes="w-16 py-8"/>
                    <h3 className="text-2xl font-medium">{headers[2]}</h3>
                    <p className="pt-4 md:px-14">{text[2]}</p>
                </div>
            </section>
        </SlideIn>
  );
};

export default Shelf;
