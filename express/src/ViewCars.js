import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const ViewCars = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <p>You're viewing a car right now, vroom!</p>
        </div>
    );
}

export default ViewCars;
