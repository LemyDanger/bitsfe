export interface LoaderPromise {
    loaded: boolean;
    data: {};
};

export class JsonLoader {

    private dataUrl: string;

    constructor(dataUrl: string) {
        this.dataUrl = dataUrl;
    }

    public load(): Promise<LoaderPromise> {

        let loaded: Promise<LoaderPromise>;

        loaded = new Promise<LoaderPromise>((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this.dataUrl);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);
                    console.log("Data", data);
                    resolve({loaded: true, data: data});
                }
                else {
                    reject({loaded: false, data: {}})
                }
            };
            xhr.send();
        });
        return loaded;
    }
};

