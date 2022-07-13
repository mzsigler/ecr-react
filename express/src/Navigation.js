import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <ul>
                <li><Link to="/taxCalc">Tax Calculator</Link></li>
                <li><Link to="/addCar">Add Car</Link></li>
                <li><Link to="/viewCars">View Cars</Link></li>
                <li><Link to="/balDue">Balance Due</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;
