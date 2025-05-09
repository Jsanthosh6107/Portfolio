import React from "react";

const AccessibleIcon = ({ classes = "" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      aria-labelledby="accessibleIconTitle"
      role="img"
    >
      <title>Accessible Icon</title>
      <defs>
        <style>{`.cls-1,.cls-2{fill:none;stroke:#000000;stroke-linejoin:round;stroke-width:2px;}.cls-1{stroke-linecap:round;}`}</style>
      </defs>
      <g>
        <line className="cls-1" x1="41.5858" x2="44.4142" y1="5.0858" y2="7.9142" />
        <line className="cls-1" x1="44.4142" x2="41.5858" y1="5.0858" y2="7.9142" />
        <path
          className="cls-1"
          d="M49.4822,14,46,26V51.2321A2.768,2.768,0,0,0,48.7679,54h1.4642A2.768,2.768,0,0,0,53,51.2321V26Z"
        />
        <line className="cls-2" x1="47.1607" x2="51.8274" y1="22" y2="22" />
        <polyline className="cls-1" points="33.176 15 40 15 40 55 35 60 7 60 7 15 13.884 15" />
        <line className="cls-1" x1="25.2218" x2="29.8438" y1="15" y2="15" />
        <line className="cls-1" x1="17.2002" x2="21.906" y1="15" y2="15" />
        <polyline className="cls-2" points="40 55 35 55 35 60" />
        <rect className="cls-1" height="8" rx="1.5" width="3" x="14" y="11" />
        <rect className="cls-1" height="8" rx="1.5" width="3" x="22" y="11" />
        <rect className="cls-1" height="8" rx="1.5" width="3" x="30" y="11" />
        <path
          className="cls-1"
          d="M25.4554,22.1667a2.6035,2.6035,0,0,0-1.8443.771,2.6033,2.6033,0,0,0-1.8443-.771,2.6989,2.6989,0,0,0-2.6557,2.74c0,2.2835,4.5,5.0932,4.5,5.0932s4.5-2.81,4.5-5.0932A2.6989,2.6989,0,0,0,25.4554,22.1667Z"
        />
        <line className="cls-1" x1="11" x2="12" y1="35" y2="35" />
        <line className="cls-1" x1="15" x2="31" y1="35" y2="35" />
        <line className="cls-1" x1="11" x2="12" y1="39" y2="39" />
        <line className="cls-1" x1="15" x2="24" y1="39" y2="39" />
        <line className="cls-1" x1="11" x2="12" y1="43" y2="43" />
        <line className="cls-1" x1="15" x2="21" y1="43" y2="43" />
        <line className="cls-1" x1="11" x2="12" y1="47" y2="47" />
        <line className="cls-1" x1="15" x2="37" y1="47" y2="47" />
        <line className="cls-1" x1="11" x2="12" y1="51" y2="51" />
        <line className="cls-1" x1="15" x2="29" y1="51" y2="51" />
        <line className="cls-1" x1="24" x2="34" y1="43" y2="43" />
        <circle cx="53.0821" cy="9.0978" r="1.0691" />
        <line className="cls-2" x1="46" x2="53" y1="49" y2="49" />
        <line className="cls-2" x1="53" x2="46" y1="26" y2="26" />
      </g>
    </svg>
  );
};

export default AccessibleIcon;
