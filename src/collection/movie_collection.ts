import {Movie} from "../model/movie_model";

type MovieList = { [key: string]: Movie };

/**
 * A Collection class for movies
 */
export class MovieCollection {

    movies: MovieList;

    constructor(data) {
        this.movies = {};

        for (let movie of data) {
            this.movies[movie.id] = new Movie(movie);
        }
    }

    /**
     * Determines the first movie in list
     * @returns {Movie | null}
     */
    public getFirstMovie() {
        let firstKey = Object.keys(this.movies)[0];
        return this.getMovie(firstKey);

    }

    /**
     * Gets a movie by id
     * @param {string} id
     * @returns {Movie | null}
     */
    public getMovie(id: string): Movie | null {
        return this.movies.hasOwnProperty(id) ? this.movies[id] : null;
    }

    /**
     * Returns all movies
     * @returns {MovieList}
     */
    public getMovies(): MovieList {
        return this.movies;
    }

    /**
     * Generates detail data for a moview
     * @param {Movie} movie
     * @returns {{actor: any[]; director: any[]}}
     */
    public getDetailData(movie: Movie) {
        let data = {
            actor: [],
            director: []
        };

        let actor = movie.data.actor;
        let director = movie.data.director;

        for (let key in this.movies) {
            if (actor == this.movies[key].data.actor) {
                data.actor.push(this.movies[key].data.title)
            }
            if (director == this.movies[key].data.director) {
                data.director.push(this.movies[key].data.title)
            }
        }
        return data;
    }
}