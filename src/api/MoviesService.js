import axios from 'axios';
const API_KEY = 'b2fa59d81ba2421fc682478ab92d6e26';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {

    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id){
        console.log(id);
        return axios(withBaseUrl(`movie/${id}`));
    }
}