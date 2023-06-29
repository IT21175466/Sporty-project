import React from 'react'
import './ArenaCards.css';

// Define a functional component named BookSports
const BookSports = (props) => {

  const {_id, name,address,imageurl,description,location} = props.arena;
  // Return the following JSX code
  return (
   
        
        <div className='card'>
          <img src={imageurl} />
          <h3>{name}</h3>
          <p>{address}</p>
          <p>{location}</p>
          <p>{description}</p>
   

     
    </div>
  );
  
}

// Export the BookSports component as the default export
export default BookSports;
