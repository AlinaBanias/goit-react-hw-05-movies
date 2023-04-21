import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovie } from 'services/movieAPI';
import MovieList from 'components/MovieList';
import { Bars } from 'react-loader-spinner';
import Error from 'components/Error';
import Form from 'components/Form';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();

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
        <Bars
          height="40"
          width="40"
          color="#280232"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {movies.length > 0 && (
        <MovieList movies={movies} state={{ from: location }} />
      )}
      {errorMessage && <Error />}
    </main>
  );
};

export default Movies;
