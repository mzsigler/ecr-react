function carFactory(inv, year, make, model, vin) {
    const today = new Date();
    return {
    inv: inv,
    year: year,
    make: make, 
    model: model,
    vin: vin, 
    id: Math.floor(Math.random() * 16777215).toString(16),
    dateAdded: today.toString(),
    miles: 0,
    oilMiles: 0,
    brakeMiles: 0,
    }
    
};

const testCar = carFactory("A01", 2011, "Chevrolet", "Impala", 1234);


export { carFactory, testCar };