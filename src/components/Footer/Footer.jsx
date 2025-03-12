import React from "react";
import Button from "@/components/Button/Button";
import SlideIn from "@/hooks/SlideIn";

const Footer = ({buttonText = "", callToAction = "", links = [], copyright = ""}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="py-40">
          <div className="x-margin flex flex-col justify-center text-center w-auto">
              <SlideIn classes="pb-6">
                  <Button text={buttonText} flipColor={false} invert={true} link="#"/>
              </SlideIn>
              <SlideIn delay={100}>
                <h2 className="text-5xl lg:text-7xl font-semibold uppercase">{callToAction}</h2>
              </SlideIn>
          </div>
      </div>
      <div className="pb-12">
        <div className="x-margin flex flex-row justify-between relative pt-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-orange-600 before:via-red-500 before:to-purple-400">
            <div className="flex flex-wrap flex-col sm:flex-row gap-3 sm:gap-8">
                {links.map((link, index) => (
                    <div key={index}>
                        <a href={link.url} aria-label={`Link to ${link.text}`}>{link.text}</a>
                    </div>
                ))}
            </div>
            <div className="text-right sm:text-center flex flex-col-reverse sm:flex-row gap-2">
                <p>©{currentYear}</p>
                <p>–</p>
                <p>{copyright}</p>
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
