import React from 'react'
import chartIcon from '../resources/chartIcon.svg';
import ProgressBar from "./ProgressBar"

function PerformanceContainer() {
    const outerContainerStyle = {
        left: "629px",
        top: "44px",
        width: "578px",
        height: "190px"
    }
    return (
        <div className="outerContainer" style={outerContainerStyle}>
            <h3 className="performanceContainerText" style={{ top: "23px", left: "74px" }}>Attendance</h3>
            <h3 className="performanceContainerText" style={{ top: "23px", left: "264px" }}>Tests</h3>
            <h3 className="performanceContainerText" style={{ top: "23px", left: "419px" }}>HW Rating</h3>

            <h3 className="performanceContainerSmallText" style={{ top: "142px", left: "57px" }}>
                Last absence<br />
                12th May, 12:00 PM
            </h3>
            <h3 className="performanceContainerSmallText" style={{ top: "142px", left: "230px" }}>
                Last Test<br />
                100 %
            </h3>
            <h3 className="performanceContainerSmallText" style={{ top: "123px", left: "400px" }}>
                Last Homework<br />
                4.5
            </h3>

            <img src={chartIcon} className="iconsAndButtons" alt="icon"
                style={{ top: "159px", left: "504.5px", width: "22px", height: "18px" }} />

            <h3 id="performanceMonth">Dec</h3>
            <div className="progressBar" style={{ top: "50px", left: "70px" }}>
                <ProgressBar />
            </div>
            <div className="progressBar" style={{ top: "50px", left: "244px" }}>
                <ProgressBar />
            </div>

            <div id="starRating">
                <div className="star-ratings-css" title=".41"></div>
            </div>

            <h3 className="performanceContainerText" style={{ top: "100px", left: "440px" }}>(4.1)</h3>
            
        </div>
    )
}

export default PerformanceContainer
