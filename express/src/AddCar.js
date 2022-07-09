import React, { useState } from 'react';
import { carFactory, testCar } from './helpers';


const AddCar = () => {

    const [cars, setCars] = useState([]);

    const testCar2 = { inv: "A02"};
    
    const addCar = (e) => {
        e.preventDefault();
        const formData = e.target.form;

        const inv = formData.inv.value;
        const year = formData.year.value;
        const make = formData.make.value;
        const model = formData.model.value;
        const vin = formData.vin.value;

        console.log(inv, year, make, model, vin);

        const newCar = carFactory(inv, year, make, model, vin);
        setCars([...cars, newCar])

        formData.reset();

    };





    return (
        <div>
            <p>Maintenance</p>
            <h3>Add a Car</h3>
            <form name="add-car" className='addCarForm'>
            <input type="text" name="inv" placeholder="Inventory Number"/>
            <input type="number" name="year" placeholder='Year'/>
            <input type="text" name="make" placeholder="Make"/>
            <input type="text" name="model" placeholder="Model"/>
            <input type="text" name="vin" placeholder="VIN"/>
            <button type="submit" onClick={addCar}>Submit</button>
            </form>
        </div>
    );
}

export default AddCar;
