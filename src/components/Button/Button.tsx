import React from "react";

const Button = ({
  text = "currentText",
  flipColor = true,
  invert = false,
  classes = "",
  link = ""
}) => {
  const baseClassesParent =
    "relative inline-block py-3.5 px-10 rounded-full border border-solid overflow-hidden group duration-500";
  const baseClassesChild =
    "absolute inset-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0";

  const borderColor = invert
    ? "border-white font-medium"
    : "border-black font-semibold";

  const parentClasses = flipColor
    ? `bg-white text-black hover:text-white ${borderColor}`
    : `bg-black text-white hover:text-black ${borderColor}`;

  const childClasses = flipColor ? "bg-black text-white" : "bg-white text-black";

  if (link === "") {
    link = "#";
  }

  return (
    <a
      className={`${baseClassesParent} ${parentClasses} ${classes}`}
      href={link}
      style={{
        WebkitTapHighlightColor: "transparent", //Iphone fixes
        transform: "translateZ(0)"
      }}
    >
      <span className="relative z-10">{text}</span>
      <span className={`${baseClassesChild} ${childClasses}`}></span>
    </a>
  );
};

export default Button;
