import React from 'react';
import './style.css';

const Genres = ({ genres }) => {
  return (
    <div className='genres'>
      {genres?.map((genre) => (
        <div key={genre.id} className='genre'>
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
