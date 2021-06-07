import React from 'react'

const ActivityCards = ({cardType}) => {
    return (
        <div>
            {cardType==="homework"? 
            (
                <div className="cardContainer">
                    <h2 className="cardHeading">Homework</h2>
                    <p className="cardContent">Lorem_Lorem_Lorem_Lorem_Lorem_Lore...</p>
                    <p className="cardDateTime">Due at 12:00 AM</p>
                </div>
            ): null
            }
            {cardType==="class"? 
            (
                <div className="cardContainer">
                    <h2 className="cardHeading" style={{backgroundColor:"#04724D"}}>Class</h2>
                    <p className="cardDateTime">12:00 AM - 12:00AM</p>
                </div>
            ): null
            }
            {cardType==="test"? 
            (
                <div className="cardContainer">
                    <h2 className="cardHeading" style={{backgroundColor:"#CC2936"}}>Tests</h2>
                    <p className="cardContent">Lorem_Lorem_Lorem_Lorem_Lorem_Lore...</p>
                    <p className="cardDateTime">12:00 AM - 12:00AM</p>
                </div>
            ): null
            }
        </div>
    )
}

export default ActivityCards
