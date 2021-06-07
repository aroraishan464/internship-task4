import React from 'react'
import scheduleActivityIcon from "../resources/ScheduleActivityIcon.svg"
import hRule from "../resources/hRule.svg"

function ActivityContainer() {
    return (
        <div>
            <h3 id="activityData">Activities | 26th Apr, 2020</h3>
            <img src={scheduleActivityIcon} className="iconsAndButtons" alt="icon" style={{ top: "258px", left: "1038px", cursor:"pointer" }} />
            <img src={hRule} className="iconsAndButtons" alt="icon" style={{ top: "277px", left: "407px" }} />
        </div>
    )
}

export default ActivityContainer
