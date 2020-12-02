import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const Search = React.memo((props) => {
  const { filterMovie } = props
  const [enteredFilter, setEnteredFilter] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter !== '' && enteredFilter === inputRef.current.value) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9238538b5ebe72a30e9b068b5771173c&query=${enteredFilter}`)
        .then(response => {
          const updateFilterMovie = response.data.results
          filterMovie(updateFilterMovie)
          console.log(updateFilterMovie)
        }).catch(error => {
          console.log(error)
        })
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, inputRef, filterMovie])

  return (
    <div className="mb-6 flex justify-center">
      <input
        onChange={(event) => setEnteredFilter(event.target.value)}
        ref={inputRef}
        className="text-lg px-4 py-2 rounded-xl block border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent shadow-xl min-w-max md:w-64 xl:w-80"
        type="text"
        placeholder="search movie..."
      />
    </div>
  );
});

export default Search;
