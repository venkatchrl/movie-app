const API_KEY = import.meta.env.VITE_API_KEY

export default {
    fetchTrending: {
      title: "Trending",
      url: `trending/all/week?api_key=${API_KEY}`,
    },
    fetchTopRated: {
      title: "TopRated",
      url: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
    fetchActionMovies: {
      title: "Action",
      url: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    },
    fetchComedyMovies: {
      title: "Comedy",
      url: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    },
    fetchHorrorMovies: {
      title: "Horror",
      url: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    },
    fetchRomanceMovies: {
      title: "Romance",
      url: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    },
    fetchMystery: {
      title: "Mystery",
      url: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
    },
  };