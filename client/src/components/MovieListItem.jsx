import React from 'react';

const MovieListItem = (props) => {
  return (
    <li><div className='movie-list-item'>{props.movie.name}</div></li>
  );
}

export default MovieListItem;