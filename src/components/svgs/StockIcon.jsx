import React from "react";

const StockIcon = ({ fill = "", stroke = "", classes = ""}) => {
  return (
    <svg
      viewBox="16 21 42 34"
      xmlns="http://www.w3.org/2000/svg"
      href="http://www.w3.org/1999/xlink"
      fill={fill}
      stroke={stroke}
      className={classes}
      role="img"      
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          fill={fill}
          fillOpacity="1"
          strokeWidth="0.2"
          strokeLinejoin="round"
          d="M 15.8332,47.5002L 15.8332,40.1901L 25.3332,31.6669L 30.0832,36.4169L 34.8331,20.5836L 44.3331,31.6669L 50.6664,25.3336L 45.9164,20.5836L 58.583,20.5836L 58.583,33.2502L 53.8331,28.5003L 44.3331,38.0002L 36.4165,28.5003L 31.6665,44.3335L 25.3332,38.0002L 15.8332,47.5002 Z "
        ></path>
        <path
          fill={fill}
          fillOpacity="1"
          strokeWidth="0.2"
          strokeLinejoin="round"
          d="M 58.5833,55.4167L 53.8333,55.4167L 53.8333,34.8333L 58.5833,39.5833L 58.5833,55.4167 Z M 49.0833,55.4167L 44.3333,55.4167L 44.3333,44.3333L 49.0833,39.5834L 49.0833,55.4167 Z M 39.5833,55.4167L 34.8333,55.4167L 34.8333,45.9167L 37.2083,36.4167L 39.5833,39.5833L 39.5833,55.4167 Z M 30.0833,55.4167L 25.3333,55.4167L 25.3333,44.3333L 30.0833,49.0833L 30.0833,55.4167 Z M 20.5833,55.4167L 15.8333,55.4167L 15.8333,53.8334L 20.5833,49.0834L 20.5833,55.4167 Z "
        ></path>
      </g>
    </svg>
  );
};

export default StockIcon;
