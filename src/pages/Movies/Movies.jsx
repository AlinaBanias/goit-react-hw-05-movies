import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/movieAPI';
import MovieList from 'components/MovieList';
import Loader from "components/Loader";
import Error from 'components/Error';
import Form from 'components/Form';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchParams({ query });
    e.target.reset();
  };

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const getMovie = async () => {
      setIsLoading(true);
      try {
        const response = await searchMovie(query);

        setMovies(response.data.results);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [query]);

  return (
    <main>
      <Form 
      searchForm={handleSubmit}/>
      {isLoading && (
       <Loader 
       isLoading={isLoading}
       />
      )}
      {movies.length > 0 && (
        <MovieList movies={movies} />
      )}
      {errorMessage && <Error />}
    </main>
  );
};

export default Movies;
