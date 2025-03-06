import React from "react";
import { WrongIcon, RightIcon } from "@/components/svgs";

const Comparison = ({headerOne = "", headerTwo  = "", listOne = [], listTwo = []}) => {
    return (
        <section className="flex flex-col text-center sm:text-left md:flex-row justify-center x-margin my-20 gap-8 lg:gap-0">
            <div className="rounded-[30px] border border-gray-400 flex-1 md:m-2 lg:m-10 p-10 flex flex-col gap-6 ">
                <h2 className="font-semibold text-5xl text-center">{headerOne}</h2>
                {listOne.map((list, index) => (
                    <div key={index} className="flex items-center flex-col sm:flex-row gap-4">
                        <WrongIcon classes="w-8 flex-shrink-0"/>
                        <p className="text-xl font-normal">{list}</p>
                    </div>
                ))}
            </div>
            <div className="bg-black text-white rounded-[30px] flex-1 md:m-2 lg:m-10 p-10 flex flex-col gap-6">
                <h2 className="font-semibold text-5xl text-center">{headerTwo}</h2>
                {listTwo.map((list, index) => (
                    <div key={index} className="flex items-center flex-col sm:flex-row gap-4">
                        <RightIcon classes="w-8 flex-shrink-0"/>
                        <p className="text-xl font-normal">{list}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Comparison;
