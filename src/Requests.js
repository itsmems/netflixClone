const key = '401dea9884f055ff9022d7695c0b7df1';

const requests = {
    requestPopular: `
    https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    // requestHorror: ``,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestRecommendations: `https://api.themoviedb.org/3/movie/{id}/recommendations?api_key=401dea9884f055ff9022d7695c0b7df1`,
};

export default requests;