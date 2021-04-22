const APIKEY = "a0db103332850aeb276206221f66ddd2";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/tv?api_key=${APIKEY}&with_genres=10749`,
  fetchocumentaries: `/discover/tv?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
