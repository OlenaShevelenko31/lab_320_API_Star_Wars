import './App.css'
import GetAllStarships from './components/GetAllStarships'
import { useState, useEffect } from "react";

function App() {
  const [ships, setShips] = useState([]); 

  const getShips = async () => {  // Function to get all starships
    try {
        const response = await fetch(`https://swapi.dev/api/starships/`);
        const data = await response.json();  // Parse JSON response into a JavaScript object
        console.log(data);
        setShips(data.results);  // Set the ships state to the received data
    } catch (e) {
        console.error(e)
    }
  };

  useEffect(() => {
    getShips();  // Fetch data for all starships
  }, []);

  return (
    <>
      <h1 className='title'>Starship List</h1>
      {ships.length > 0 ? <GetAllStarships ships={ships} /> : <p>Loading starships...</p>}
    </>
  );
}

export default App;
