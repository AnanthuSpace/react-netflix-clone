const baseUrl = "https://api.themoviedb.org/3/"
const imageUrl = 'https://image.tmdb.org/t/p/';
const API_KEY = "a77847dd1102b80ed996464a8b7c357d"


const Anime = `discover/movie?api_key=${API_KEY}&with_genres=16&with_original_language=ja&page=3`
const originals = `discover/tv?api_key=${API_KEY}&with_networks=213&page=1`;
const action = `discover/movie?api_key=${API_KEY}&with_genres=28&page=2`;
const horror = `discover/movie?api_key=${API_KEY}&with_genres=27&page=2`;
const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749&page=3`;
const animeMovies = `discover/movie?api_key=${API_KEY}&with_genres=16&page=2`;


export {
    baseUrl,
    API_KEY,
    imageUrl,
    Anime,
    originals,
    action,
    horror,
    romance,
    animeMovies
}