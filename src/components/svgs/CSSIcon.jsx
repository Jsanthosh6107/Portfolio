import React from "react";

const CSSIcon = ({ classes = "" }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
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
                d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302
                H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606
                l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062
                l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"
                fill="url(#gradient)"
            />
        </svg>
    );
};

export default CSSIcon;
