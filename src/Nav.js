import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';


const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h3>Kelar Crisp</h3>
            <p>list of Movies: {movies.length}</p>
        </div>
    );
}
export default Nav;