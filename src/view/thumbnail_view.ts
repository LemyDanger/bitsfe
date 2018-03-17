import {BaseView} from "./base_view";
import * as _ from "lodash";

/**
 * Thumbnail View Class
 */
export class ThumbnailView extends BaseView {

    constructor() {
        super();
        this.setTemplateSelector('#thumbnail-template');
        this.setOutputSelector('main ul.thumbnails');
    }

    public render(data: {}) {
        super.render(data);
        this.update(data);
    }

    /**
     * Deselect all and select aktive movie
     * @param {{}} data
     */
    public update(data: {}) {
        this.$view.find('li.thumbnail.highlighted').removeClass('highlighted');
        if(data['active']) {
            this.$view.find('[data-id="'+data['active']+'"]').addClass('highlighted')
        }
    }
}