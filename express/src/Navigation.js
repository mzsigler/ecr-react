import React from 'react';

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <button className="navButton taxCalc" onClick={(props.taxCalcClick)}>Tax Calculator</button>
            <button className="navButton balDue" onClick={(props.balDueClick)}>Balance Due</button>
            <button className="navButton addCar" onClick={(props.addCarClick)}>Add Car</button>
            <button className="navButton">Something Else</button>
            <button className="navButton">Something Else</button>
        </div>
    );
}

export default Navigation;
