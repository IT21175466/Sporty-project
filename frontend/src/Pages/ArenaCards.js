import React, { useEffect, useState } from 'react'
import './Main.css'
import SportButtons from './SportButtons'; 
import './ExpolertPart.css'; 
import BookSports from './BookSports';
import SearchBox from "./SearchBox";
import './ArenaCards.css';
import axios from 'axios'


console.log('arenas');

const fetchHandler = async () => {
  return await axios.get('http://localhost:8081/arenas').then((res) => res.data);
};

const ArenaCard = () => {

  const [arenas, setArenas] = useState();

  useEffect(() => {

    fetchHandler().then((data) => setArenas(data.arenas));
  },[]);
  console.log(arenas);
  // Component rendering Explore by Sports topic, SportButtons component, and BookSports component
  return (

        <div>
          <ul>
            {arenas && arenas.map((arena, i) => (
              <div className='j' key={i}>
                  <BookSports arena={arena}/>
              </div>
            ))}
          </ul>
        </div>
        

  );
}

export default ArenaCard; // Exporting the component
