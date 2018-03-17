import {JsonLoader, LoaderPromise} from "./loader";
import {MovieCollection} from "./collection/movie_collection";
import {InfoView} from "./view/info_view";
import {ThumbnailView} from "./view/thumbnail_view";
import Router from './router';

const jsonUrl = './data.json';

/**
 * Main App Class
 */
export class App {

    private movies: MovieCollection;
    private router: Router;

    /**
     * Start the app
     */
    public run() {
        let loader = new JsonLoader(jsonUrl);

        loader.load()
            .then((response: LoaderPromise) => {
                this.movies = new MovieCollection(response.data);
                this.router = new Router();
                this.router.getEventEmitter().on('route', (data) => {
                    this.dispatch(data)
                });
                this.router.listen();
                this.dispatch();
            })
            .catch(() => {
                console.error("Unable to start app");
            })
    }

    /**
     * Builds the ui
     * @param {any} movie
     */
    public dispatch(movie = null) {

        let thumbnailView = new ThumbnailView();
        let infoView = new InfoView();
        let movies = this.movies.getMovies();

        if (!movie) {

            movie = this.router.getMovie();

            if (movie && this.movies.getMovie(movie)) {
                movie = this.movies.getMovie(movie)
            } else {
                movie = this.movies.getFirstMovie();
            }
        } else {
            movie = this.movies.getMovie(movie.movie);
        }

        // Todo: Only render view first time, after that just update
        thumbnailView.render({movies: movies, active: movie.data.id});
        if (movie) {
            infoView.render({movie: movie, detail: this.movies.getDetailData(movie)});
        }

    }
}