import React from "react";

const ContactIcon = ({ classes = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 64 64"
      className={classes}
      aria-labelledby="contactIconTitle"
      role="img"
    >
      <title>Contact Icon</title>
      <circle cx="14.5" cy="24.5" r="9.5" fill="none" stroke="#030303" strokeMiterlimit="10" strokeWidth="4" />
      <path fill="none" stroke="#030303" strokeMiterlimit="10" strokeWidth="4" d="M1 49A14.74 14.74 0 0 1 15.48 34M29 49A14.74 14.74 0 0 0 14.52 34" />
      <line x1="35" x2="63" y1="15" y2="15" fill="none" stroke="#030303" strokeMiterlimit="10" strokeWidth="4" />
      <line x1="35" x2="63" y1="31" y2="31" fill="none" stroke="#030303" strokeMiterlimit="10" strokeWidth="4" />
      <line x1="35" x2="63" y1="47" y2="47" fill="none" stroke="#030303" strokeMiterlimit="10" strokeWidth="4" />
    </svg>
  );
};

export default ContactIcon;
