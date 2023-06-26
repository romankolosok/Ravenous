import './App.css';
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import React, {useState, useEffect} from "react";

const data = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

const listOfBusinesses = [data, data, data, data, data, data]

function App() {
    const [businessList, setBusinessList] = useState([])

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(()
    // }, [])

  return (
      <>
          <header>
              <h3>ravenous</h3>
          </header>
          <SearchBar fetchBusiness={setBusinessList}/>
          <BusinessList listOfBusinesses={businessList}/>
      </>
  );
}

export default App;
