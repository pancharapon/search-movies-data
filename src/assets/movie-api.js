const filterMovie = event.target.value

const api_key = '9238538b5ebe72a30e9b068b5771173c'

const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`

const search = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${filterMovie}`

const image = `https://image.tmdb.org/t/p/w1280/${poster_path}`

