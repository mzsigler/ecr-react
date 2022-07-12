// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC_gL7WIHmaovydcijLecJFT2DvrbxvU5E",
  authDomain: "express-rental-apps.firebaseapp.com",
  databaseURL: "https://express-rental-apps-default-rtdb.firebaseio.com",
  projectId: "express-rental-apps",
  storageBucket: "express-rental-apps.appspot.com",
  messagingSenderId: "1069344290183",
  appId: "1:1069344290183:web:840f043d76da11d8c24f22",
  measurementId: "G-EW6JNBN8BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeCarData({inv, year, make, model, vin, id, dateAdded, miles, oilMiles, brakeMiles}){
  const db = getDatabase();
  const reference = ref(db, `cars/${id}`);

  set(reference, {
    inv, 
    year, 
    make, 
    model, 
    vin, 
    id, 
    dateAdded,
    miles, 
    oilMiles,
    brakeMiles, 

  });
}

export { writeCarData };
