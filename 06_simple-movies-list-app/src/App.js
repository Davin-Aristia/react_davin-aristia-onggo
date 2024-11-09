import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies("man");
  }, [])

  const fetchMovies = (search) => {
    axios.get("https://www.omdbapi.com", {
      params: {
        "s": search,
        "apikey": process.env.REACT_APP_MOVIES_KEY,
      }
    })
    .then(results => {
      const searchResults = results.data.Search;
      const tempMovies = searchResults
        ? searchResults.map((result) => ({
            id: result.imdbID,
            image: result.Poster,
            title: result.Title,
          }))
        : [];
      setMovies(tempMovies);
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      setMovies([]);
    });
  }

  const handleSearch = (event) => {
    event.preventDefault();
    fetchMovies(searchTerm || "man");
  };

  return (
    <div className="App">
      <nav className="navbar background-orange">
        <div className="container">
          <Header title="FinProH8" />
          <Search handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </nav>

      <div className="container">
        <h1 className="my-3 text-primary">Show your favorite movies</h1>

        <div className="row">
          {
            movies.map((movie) => (
              <Movie key={movie.id} image={movie.image} title={movie.title} />
            ))
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
