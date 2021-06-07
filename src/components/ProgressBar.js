import React from 'react'
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimationProgressProvider from "./AnimationProgressProvider";

function ProgressBar() {
    return (
        <AnimationProgressProvider
            valueStart={0}
            valueEnd={90}
            duration={0.5}
            easingFunction={easeQuadInOut}
        >
            {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        strokeWidth={18}
                        styles={buildStyles({
                            pathTransition: "none",
                            pathColor: `#0047B1`,
                            strokeLinecap: 'butt',
                            textSize: '17px',
                            textColor: '#515151',
                            trailColor: '#C4C4C4',
                            backgroundColor: '#C4C4C4',
                        })}
                    />
                );
            }}
        </AnimationProgressProvider>

    )
}

export default ProgressBar
