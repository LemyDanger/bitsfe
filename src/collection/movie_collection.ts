import {Movie} from "../model/movie_model";

export class MovieCollection {

    movies: {};

    constructor(data) {
        this.movies = {};

        for (let movie of data) {
            this.movies[movie.id] = movie;
        }
    }

    public getFirstMovie() {
        let firstKey = Object.keys(this.movies)[0];
        return this.getMovie(firstKey);

    }

    public getMovie(id: string): Movie | null {
        return this.movies.hasOwnProperty(id) ? this.movies[id] : null;
    }




}