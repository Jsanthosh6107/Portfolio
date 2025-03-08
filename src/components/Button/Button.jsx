import React from "react";

const Button = ({
  text = "currentText",
  flipColor = true,
  invert = false,
  classes = "",
  link = ""
}) => {
  const parentClasses = flipColor
    ? `bg-white text-black hover:text-white`
    : `bg-black text-white hover:text-black`;

  const childClasses = flipColor
    ? "bg-black text-white"
    : "bg-white text-black";

  const borderClasses = invert
    ? "border-white font-medium"
    : "border-black font-semibold";

  if (link === "") {
    link = "#";
  }

  return (
    <a
      className={`relative inline-block py-3.5 px-10 rounded-full border border-solid overflow-hidden group duration-500 ${parentClasses} ${borderClasses} ${classes}`}
      href={link}
      style={{
        WebkitTapHighlightColor: "transparent",
        transform: "translateZ(0)"
      }}
    >
      <span className="relative z-10">{text}</span>
      <span className={`absolute inset-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 ${childClasses}`}></span>
    </a>
  );
};

export default Button;
