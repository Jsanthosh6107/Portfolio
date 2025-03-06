import React from "react";

const BlobIcon = ({classes = ""}) => {
    return (
        <svg 
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            href="http://www.w3.org/1999/xlink"
            role="img"
            aria-labelledby="blobTitle blobDesc"
            className={classes}
        >
            <title>Decorative Blob Icon</title>
            <desc>A blob-shaped gray graphic used as a decorative element.</desc>
            <path fill="#959595" d="M428,330Q384,420,293,414.5Q202,409,116,375Q30,341,36.5,243Q43,145,116,81Q189,17,288.5,35.5Q388,54,430,147Q472,240,428,330Z" />
        </svg>
    );
  };
  
  export default BlobIcon;
