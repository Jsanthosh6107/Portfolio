import React from "react";

const GiftSalesIcon = ({ classes = "" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      aria-label="Gift Sales Icon"
      role="img"
    >
      <defs>
        <style>
          {`.cls-1, .cls-2 {
            fill: none;
            stroke: #000000;
            stroke-linejoin: round;
            stroke-width: 2px;
          }
          .cls-1 {
            stroke-linecap: round;
          }`}
        </style>
      </defs>

      <g>
        <line className="cls-1" x1="56" x2="53" y1="7" y2="10" />
        <line className="cls-1" x1="53" x2="56" y1="7" y2="10" />
        <path
          className="cls-1"
          d="M16.3234,7H24a0,0,0,0,1,0,0V7a4,4,0,0,1-4,4H14a0,0,0,0,1,0,0V9.3234A2.3234,2.3234,0,0,1,16.3234,7Z"
        />
        <path d="M35,48a1,1,0,1,1-1-1A1,1,0,0,1,35,48Z" />
        <line className="cls-1" x1="18" x2="18" y1="43" y2="60" />
        <path
          className="cls-1"
          d="M14,11h8a0,0,0,0,1,0,0v9a0,0,0,0,1,0,0H18.1888A4.1888,4.1888,0,0,1,14,15.8112V11A0,0,0,0,1,14,11Z"
        />
        <path
          className="cls-1"
          d="M38,7h6a4,4,0,0,1,4,4v0a0,0,0,0,1,0,0H40.3234A2.3234,2.3234,0,0,1,38,8.6766V7a0,0,0,0,1,0,0Z"
          transform="translate(86 18) rotate(180)"
        />
        <line className="cls-1" x1="44" x2="44" y1="43" y2="60" />
        <path
          className="cls-1"
          d="M44.1888,11H48a0,0,0,0,1,0,0v9a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V15.1888A4.1888,4.1888,0,0,1,44.1888,11Z"
          transform="translate(88 31) rotate(180)"
        />
        <path
          className="cls-1"
          d="M39,35.1937V39.1L40,60h8l1-20.9V32h4V23.3333A3.3334,3.3334,0,0,0,49.6666,20H39.3333a3.3228,3.3228,0,0,0-2.34.96"
        />
        <line className="cls-1" x1="49" x2="49" y1="26" y2="38" />
        <path
          className="cls-1"
          d="M49,25v3.0153L43,28a2,2,0,0,0,0,4H53V25.0268"
        />
        <line className="cls-1" x1="4" x2="61" y1="60" y2="60" />
        <path
          className="cls-1"
          d="M25.016,20.9686A3.3227,3.3227,0,0,0,22.6667,20H12.3334A3.3334,3.3334,0,0,0,9,23.3333V32h4v7.1L14,60h8l1-20.9V35.2"
        />
        <path
          className="cls-1"
          d="M9,25.0268V32H19a2,2,0,0,0,0-4l-6,.0153V25"
        />
        <path
          className="cls-1"
          d="M33,35v1.2792A1.7208,1.7208,0,0,1,31.2792,38h-.5584A1.7208,1.7208,0,0,1,29,36.2792V35"
        />
        <polyline className="cls-2" points="40 24 40 35 22 35 22 24" />
        <rect className="cls-1" height="3" width="20" x="21" y="21" />
        <ellipse
          className="cls-1"
          cx="33.9639"
          cy="18.7845"
          rx="2.7005"
          ry="1.3502"
          transform="translate(-4.453 24.311) rotate(-37.1319)"
        />
        <ellipse
          className="cls-1"
          cx="28.0361"
          cy="18.7845"
          rx="1.3502"
          ry="2.7005"
          transform="translate(-3.8639 29.7969) rotate(-52.8681)"
        />
        <line className="cls-2" x1="31" x2="31" y1="35" y2="21" />
        <line className="cls-2" x1="23" x2="13" y1="38" y2="38" />
        <line className="cls-2" x1="17" x2="17" y1="28" y2="32" />
        <line className="cls-2" x1="39" x2="49" y1="38" y2="38" />
        <line className="cls-2" x1="45" x2="45" y1="28" y2="32" />
      </g>
    </svg>
  );
};

export default GiftSalesIcon;
