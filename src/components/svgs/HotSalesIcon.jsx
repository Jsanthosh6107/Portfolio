import React from "react";

const HotSalesIcon = ({ classes = "" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      role="img"
    >
      <defs>
        <style>
          {`.cls-1 { fill: none; }
          .cls-1, .cls-2 {
            stroke: #000000;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          }
          .cls-2 { fill: #fff; }`}
        </style>
      </defs>

      <g>
        <path
          className="cls-1"
          d="M48.4312,43.8378c0,9.5334-8.3291,15.14-16.76,15.1622-8.68.0224-16.4919-5.8142-16.303-15.0385.1483-7.2462,9.6357-13.1925.34-19.03,0,0,1.8566-6.4984,9.2834-1.8567C20.6515,14.3794,29.265,6.5722,37.9888,8.2219c0,0-8.0384,5.2144-2.785,10.2117C48.4312,31.0161,48.4312,38.6,48.4312,43.8378Z"
        />
        <circle className="cls-1" cx="32" cy="43" r="10" />
        <line className="cls-1" x1="36" x2="28" y1="38" y2="48" />
        <circle className="cls-1" cx="28.5" cy="39.5" r="1.5" />
        <circle className="cls-1" cx="35.5" cy="46.5" r="1.5" />
        <line className="cls-1" x1="48.5509" x2="51.5509" y1="14.0547" y2="17.0547" />
        <line className="cls-1" x1="51.5509" x2="48.5509" y1="14.0547" y2="17.0547" />
        <circle className="cls-1" cx="8" cy="31" r="2" />
        <circle cx="12.0992" cy="15.5232" r="1.0691" />
        <circle cx="15.0992" cy="11.5232" r="1.0691" />
        <circle cx="19.0992" cy="15.5232" r="1.0691" />
        <circle cx="42.0992" cy="4.5232" r="1.0691" />
        <path className="cls-2" d="M22,27s2.0305,3.9756.0092,7.4406" />
      </g>
    </svg>
  );
};

export default HotSalesIcon;
