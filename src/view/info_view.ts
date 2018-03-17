import {BaseView} from "./base_view";


export class InfoView extends BaseView {

    constructor() {
        super();
        this.setTemplateSelector('#info-template');
        this.setOutputSelector('main div.info');


    }



}