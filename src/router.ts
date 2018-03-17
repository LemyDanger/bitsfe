import * as EventEmitter from 'last-eventemitter';

/**
 * Simple Router for movie app
 * Uses a event emitter to propagade change
 */
export default class Router {

    private emitter;

    constructor() {
        this.emitter = new EventEmitter();
    }

    public getEventEmitter() {
        return this.emitter;
    }

    private router() {
        this.emitter.emit('route', {movie: this.getMovie()});
    }

    public getMovie() {
        let movie = location.hash;
        movie = movie.substr(1);
        return movie;
    }

    public goMovie(movie: string) {
        location.hash = movie;
    }

    public listen() {
        window.addEventListener('hashchange', () => {
            this.router()
        });
        window.addEventListener('load', () => {
            this.router()
        });


    }
}

