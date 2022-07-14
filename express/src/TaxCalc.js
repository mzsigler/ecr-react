import React from 'react';
import { useRef, useState } from 'react';


const TaxCalc = () => {

    const salePriceRef = useRef(null);
    const cityRef = useRef(null);

    const [tax, setTax] = useState({
        localTax: 0,
        singleArticle: 0,
        stateTax: 0,
        totalTax: 0,
        total: 0,

    });

    const calculateTax = (e) => {
        e.preventDefault();

        const getLocalTax = (price, ref) => {
            if(ref.current.value === 'unincorporated' && price > 1599){
                return 36.00;
            } else if(ref.current.value === 'unincorporated' && price < 1600){
                return price * 0.0225;
            } else if(ref.current.value === 'all-other' && price > 1599) {
                return 44.00;
            } else {
                return price * 0.0275
            }
        }

        const getSingleArticle = (price) => {
            if(price < 1600.01){
                return 0.00;
            } else if(price > 3199) {
                return 44.00;
            } else {
                return (price - 1600) * 0.0275;
            }
        }



       
        const price = parseFloat(salePriceRef.current.value);
        const localTax = parseFloat(getLocalTax(price, cityRef).toFixed(2));
        const singleArticle = parseFloat(getSingleArticle(price).toFixed(2));
        const stateTax = parseFloat((price * 0.07).toFixed(2));
        const tempTotalTax = (localTax + singleArticle + stateTax).toFixed(2);
        const totalTax = parseFloat(tempTotalTax);
        const tempTotal = (price + localTax + singleArticle + stateTax).toFixed(2);
        const total = parseFloat(tempTotal);

        const newTax = {
            localTax,
            singleArticle,
            stateTax,
            totalTax,
            total,
        }

        setTax(newTax)
        
        
    }


    return (
        <div className='taxCalc'>
            <form name='taxCalcForm' className='taxCalcForm'>
                <input type='number' ref={salePriceRef} name="salePrice" placeholder='0'/>
                <select ref={cityRef} name="city">
                <option name="all-other" value="all-other">All Other</option>   
                <option name="unincorporated" value="unincorporated">Unincorporated Shelby County</option>
                </select>
                <button type="submit" onClick={calculateTax}>Calculate</button>
                <input type="reset" />
            </form>
            <div className="results">
                <p>Local Tax: ${tax.localTax}</p>
                <p>Single Article Tax: ${tax.singleArticle}</p>
                <p>State Tax: ${tax.stateTax}</p>
                <p>Total Tax: ${tax.totalTax}</p>
                <p>Total Price: ${tax.total}</p>
            </div>
        </div>
    );
}

export default TaxCalc;
