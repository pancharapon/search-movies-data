import React, { useState, useEffect, useCallback } from 'react';
import MovieList from '../components/movieList/movieList';
import Search from '../components/search/search';
import ModalVideo from '../components/ui/modal/modalVideo';
import axios from 'axios';

const api_key = '9238538b5ebe72a30e9b068b5771173c';

const MovieApp = React.memo((props) => {
  const [movies, setMovies] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [video, setVideo] = useState('');
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateListMovie = useCallback((filterMovie) => {
    setMovies(filterMovie);
  }, []);

  const openVideoHandler = (id) => {
    setShowVideo(true);
    // setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
      )
      .then((response) => {
        // setLoading(false)
        setVideo(response.data.results[0].key);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearModal = () => {
    setVideo('');
    setShowVideo(false);
  };

  return (
    <React.Fragment>
      <div className="bg-blue-50 p-6">
        <ModalVideo show={showVideo} clicked={clearModal} video={video} />
        <Search filterMovie={updateListMovie} />
        <MovieList movies={movies} openVideoHandler={openVideoHandler} />
      </div>
    </React.Fragment>
  );
});

export default MovieApp;
