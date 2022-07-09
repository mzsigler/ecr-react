import React from 'react';
import BalanceDue from './BalanceDue';
import AddCar from './AddCar';
import NoSelection from './NoSelection';
import TaxCalc from './TaxCalc';

const Display = (props) => {
    return (
        <div>
            {props.nav === '' ? <NoSelection /> : null}
            {props.nav === 'taxCalc' ? <TaxCalc /> : null}
            {props.nav === 'balDue' ? <BalanceDue /> : null}
            {props.nav === 'addCar' ? <AddCar /> : null}
        </div>
    );
}

export default Display;
