import React from 'react'
import editIcon from '../resources/editButton.svg';
import addIcon from '../resources/addButton.svg';
import profileIcon from '../resources/profileIcon.svg';
import activityIcon from '../resources/activityIcon.svg';
import profilePic from '../resources/profilePic.svg';

function StudentInfoContainer() {

    return (
        <div className="outerContainer">
            <h3 className="containerText" style={{ top: "13px", left: "29px" }}>Batch Name | PHY_B1</h3>

            <img src={editIcon} className="iconsAndButtons" alt="icon" style={{ top: "13px", right: "13px", cursor:"pointer" }} />
            <img src={addIcon} className="iconsAndButtons" alt="icon" style={{ top: "55px", right: "12.73px" , cursor:"pointer"}} />

            <img src={profileIcon} className="iconsAndButtons" alt="icon" style={{ top: "79px", left: "41px" }} />
            <h4 className="containerText" style={{ top: "47px", left: "79px", fontWeight: "500" }}>Marvin McKinney</h4>
            
            <img src={profilePic} className="iconsAndButtons" alt="icon" style={{ top: "41px", left: "41px" }} />
            <h4 className="containerText" style={{ top: "87px", left: "79px", fontWeight: "500" }}>125 Students</h4>

            <img src={activityIcon} className="iconsAndButtons" alt="icon" style={{ top: "122px", left: "41px" }} />
            <h4 className="containerText" style={{ top: "122.5px", left: "79px", fontWeight: "500" }}>
                Upcoming &#60;Activity&#62;<br />
                Thu, 25th May<br />
                <strong>12:00 PM - 12:00 PM</strong>
            </h4>

            <button id="viewButton">View</button>

        </div>
    )
}

export default StudentInfoContainer
