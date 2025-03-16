import React from "react";

const VercelIcon = ({ classes = "" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
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
                d="M12 1L24 22H0L12 1Z"
                fill="url(#gradient)"
            />
        </svg>
    );
};

export default VercelIcon;
