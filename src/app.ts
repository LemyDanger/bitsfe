import {JsonLoader, LoaderPromise} from "./loader";
import {MovieCollection} from "./collection/movie_collection";
import {InfoView} from "./view/info_view";

const jsonUrl = './data.json';

export class App {

    private movies: MovieCollection;

    constructor() {

    }

    public run() {
        let loader = new JsonLoader(jsonUrl);

        loader.load()
            .then( (response: LoaderPromise) => {
                console.log("Done",response);
                this.movies = new MovieCollection(response.data);

                let infoView = new InfoView();

                console.log("first",this.movies.getFirstMovie());
                infoView.render(this.movies.getFirstMovie())





            })
            .catch(() => {
                console.log("Kaputt");
            })


    }


}