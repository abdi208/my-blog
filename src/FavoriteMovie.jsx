import React from 'react';

function FaveMovie(props) {
    var mappedMovie = props.movies.map( movie => <li>{movie}</li>)
    return(
        <div>
            <h1>My Fave Movies</h1>
            <ul>
                {mappedMovie}
            </ul>

        </div>
    
    )
}

export default FaveMovie;