import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';

const BalanceDue = () => {

    const [customer, setCustomer ] = useState('');

    return (
        <div>
         <Header />
         <Navigation />
         <p>I'm the Balance Due App!</p>
        </div>
    );
}

export default BalanceDue;
