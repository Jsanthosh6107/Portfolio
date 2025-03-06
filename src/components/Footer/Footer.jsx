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
                  <Button text={buttonText} flipColor={false} invert={true} link="/contact"/>
              </SlideIn>
              <SlideIn delay={100}>
                <h2 className="text-8xl font-semibold uppercase">{callToAction}</h2>
              </SlideIn>
          </div>
      </div>
      <div className="pb-12">
          <div className="x-margin flex flex-row justify-between border-gray-700 border-t-[1px] pt-10">
              <div className="flex flex-wrap flex-col sm:flex-row gap-3 sm:gap-8">
                  {links.map((link, index) => (
                      <div
                          key={index}
                      >
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
