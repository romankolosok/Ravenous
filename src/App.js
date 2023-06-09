import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <header>
        <h3>ravenous</h3>
      </header>
  );
}

function SearchBar(){
    return (
        <form action="send" className="search-form">
            <ul>
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Viewed</li>
            </ul>
            <div className="search-fields">
                <input type="text" placeholder="Search Buisnesses"/>
                <input type="text" placeholder="Where?"/>
            </div>
            <button type="submit">Let's Go</button>
        </form>
    )
}

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

function Business(data){
  return (
      <div className="business">
        <img src={data.imageSrc} alt="image"/>
        <h4 className="business-name">{data.name}</h4>
        <div className="business-info">
            <div className="address">
                <p>{data.address}</p>
                <p>{data.city}</p>
                <p>{`${data.state} ${data.zipCode}`}</p>
            </div>
            <div className="rating">
                <h5>{data.category}</h5>
                <h6>{`${data.rating} stars`}</h6>
                <p>{`${data.reviewCount} reviews`}</p>
            </div>
        </div>
      </div>
  )
}

function BusinessList(){
    const businessList = listOfBusinesses.map(element => Business(element))
    return <div className="businesses">{businessList}</div>
}

export {BusinessList, SearchBar};
export default App;
