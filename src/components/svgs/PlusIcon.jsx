import React from "react";

const PlusIcon = ({ classes = "" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="1" /> 
                    <stop offset="100%" stopColor="#f97316" stopOpacity="1" /> 
                </linearGradient>
            </defs>
            <path
                d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
                fill="url(#gradient)"
            />
        </svg>
    );
};

export default PlusIcon;
