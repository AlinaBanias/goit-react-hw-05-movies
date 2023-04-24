import { useState, useEffect } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'services';
import { Bars } from 'react-loader-spinner';
import { MovieCard, MovieInfo, GoBackLink } from './MovieDetails.styled';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Suspense } from 'react';

import Error from 'components/Error';



const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  

  const backLinkHref = location.state?.from ?? '/';
  

  useEffect(() => {
    const fetchMovieById = async () => {
      setIsLoading(true);
      try {
        const movieData = await getMovieById(movieId);
        const { genres, vote_average, overview, original_title, poster_path } =
          movieData;
        setMovieInfo({
          genres,
          vote_average,
          overview,
          original_title,
          poster_path,
        });
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieById();
  }, [movieId]);

  const { genres, vote_average, overview, original_title, poster_path } =
    movieInfo;

  return (
    <>
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
      {Object.keys(movieInfo).length > 0 && (
        <>
          <GoBackLink to={backLinkHref}>
            <HiArrowSmLeft /> Go back
          </GoBackLink>
          <MovieCard>
              <img
                src={poster_path ? (`https://image.tmdb.org/t/p/w300${poster_path}`) : ("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg")}
                alt={original_title}
                width="200"
              />
            <MovieInfo>
              <h2>{original_title}</h2>
              <p>User score: {vote_average}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieCard>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          {errorMessage && <Error errorMessage={errorMessage} />}
          <Suspense
            fallback={
              <Bars
                height="40"
                width="40"
                color="#280232"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;