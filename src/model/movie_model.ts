interface MovieData {
    "id": string;
    "source": string;
    "title": string;
    "poster": string;
    "year": number;
    "director": string;
    "actor": string;
    "tagline": string;
    "synopsis": string;
}

/**
 * A very simple model. All movie data are in one attribute object
 */
export class Movie {

    public data: MovieData;

    constructor(data: {}) {
        let parts;
        // Todo: Hard casting, make a better check
        this.data = <MovieData>data;
    }
}