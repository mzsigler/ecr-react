import React from 'react';
import { useRef, useState } from 'react';

const TaxCalc = () => {

    const salePriceRef = useRef(null);

    const [tax, setTax] = useState(0);

    const calculateTax = (e) => {
        e.preventDefault();
        if(!salePriceRef.current.value){
            return; 
        }
        const price = parseFloat(salePriceRef.current.value);
        const tax =  (price * 0.0975).toFixed(2);
        setTax(tax)
        
        
    }

    return (
        <div>
            <form name='taxCalcForm'>
                <input type='number' ref={salePriceRef} name="salePrice" placeholder='0' onKeyUp={calculateTax}/>
            </form>
            <p>Sales Tax: {tax}</p>
        </div>
    );
}

export default TaxCalc;
