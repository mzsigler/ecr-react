import React, { useState, useEffect } from 'react';
import { carFactory, testCar } from './helpers';
import { writeCarData } from './utils/base';



const AddCar = (props) => {
    const [cars, setCars] = useState([])

    const addToCars = (car) => {
        setCars([...cars, car])
    }


    
    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = e.target.form;

        const inv = formData.inv.value;
        const year = formData.year.value;
        const make = formData.make.value;
        const model = formData.model.value;
        const vin = formData.vin.value;


        const newCar = carFactory(inv, year, make, model, vin);
        
        addToCars(newCar);
        console.log(newCar);

        writeCarData(newCar);



        formData.reset();


    };







    return (
        <div className='add-car'>
            <p>Maintenance</p>
            <h3>Add a Car</h3>
            <form name="add-car" className='addCarForm'>
            <input type="text" name="inv" placeholder="Inventory Number"/>
            <input type="number" name="year" placeholder='Year'/>
            <input type="text" name="make" placeholder="Make"/>
            <input type="text" name="model" placeholder="Model"/>
            <input type="text" name="vin" placeholder="VIN"/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default AddCar;
