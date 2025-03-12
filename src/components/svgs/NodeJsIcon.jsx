import React from "react";

const NodeJsIcon = ({ classes = "" }) => {
    return (
        <svg 
            viewBox="-3.8 -1.5 40.921 40.921" 
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
        >
            {/* Gradient Definition */}
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="1" /> {/* Purple-400 */}
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="1" /> {/* Red-500 */}
                    <stop offset="100%" stopColor="#f97316" stopOpacity="1" /> {/* Orange-600 */}
                </linearGradient>

                <clipPath id="a">
                    <path d="m239.03 226.605-42.13 24.317a5.085 5.085 0 0 0-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336a5.1 5.1 0 0 0 5.09 0l42.126-24.336a5.096 5.096 0 0 0 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317a5.123 5.123 0 0 0-5.1 0"/>
                </clipPath>

                <clipPath id="c">
                    <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39a5.318 5.318 0 0 0-1.32-.53zm0 0"/>
                </clipPath>

                <clipPath id="e">
                    <path d="M241.066 225.953a5.14 5.14 0 0 0-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336a5.105 5.105 0 0 0 2.46-3.476l-46.18-78.89a5.29 5.29 0 0 0-1.03-.102l-.42.02"/>
                </clipPath>
            </defs>

            {/* Applying the Gradient Fill */}
            <g clipPath="url(#a)" transform="translate(-68.564 -79.701) scale(.35278)">
                <path fill="url(#gradient)" d="m331.363 246.793-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"/>
            </g>

            <g clipPath="url(#c)" transform="translate(-68.564 -79.701) scale(.35278)">
                <path fill="url(#gradient)" d="m144.07 264.004 83.825 113.453 110.86-81.906-83.83-113.45zm0 0"/>
            </g>

            <g clipPath="url(#e)" transform="translate(-68.564 -79.701) scale(.35278)">
                <path fill="url(#gradient)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0"/>
            </g>

        </svg>
    );
};

export default NodeJsIcon;
