import React from 'react'
import scheduleActivityIcon from "../resources/ScheduleActivityIcon.svg"
import hRule from "../resources/hRule.svg"
import ActivityCards from "../components/ActivityCards"
import data from "../components/dayData"

function ActivityContainer() {
    return (
        <div>
            <h3 id="activityData">Activities | 26th Apr, 2020</h3>
            <img src={scheduleActivityIcon} className="iconsAndButtons" alt="icon" style={{ top: "258px", left: "1038px", cursor: "pointer" }} />
            <img src={hRule} className="iconsAndButtons" alt="icon" style={{ top: "277px", left: "407px" }} />

            <div id="dayMenu">
                <div className="days">Mon</div>
                <div className="days">Tue</div>
                <div className="days">Wed</div>
                <div className="days">Thu</div>
                <div className="days" style={{ backgroundColor: "#3F0E40", color: "white" }}>Fri</div>
                <div className="days">Sat</div>
                <div className="days">Sun</div>
            </div>

            <div className="daysCardsContainer">
                {data.map((anObjectMapped, index) => {
                    if(anObjectMapped.linkActive === "false"){
                        return (
                            <div className="daywiseActivities">
                                {anObjectMapped.activities.map((activity, index) => {
                                    return (
                                        <ActivityCards cardType={activity} />
                                    );
                                })}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="daywiseActivities" style={{backgroundColor:"#E7D2E8"}}>
                                {anObjectMapped.activities.map((activity, index) => {
                                    return (
                                        <ActivityCards cardType={activity} />
                                    );
                                })}
                            </div>
                        )
                    }
                })
                }
            </div>
        </div>
    )
}

export default ActivityContainer
