import * as _ from 'lodash';
import * as $ from 'jquery';

/**
 * Base-Class for views
 */
export abstract class BaseView {

    /**
     * cached output element
     */
    protected $view: JQuery;

    /**
     * Selector to load the template
     */
    protected templateSelector: string;

    /**
     * Selector to query the output element
     */
    protected templateOutputSelector: string;


    public setTemplateSelector(templateSelector) {
        this.templateSelector = templateSelector;
    }

    public setOutputSelector(templateOutputSelector) {
        this.templateOutputSelector = templateOutputSelector;
    }

    /**
     *
     * @param {{}} data
     */
    public render(data: {}) {
        this.$view = $(this.templateOutputSelector);
        let template = $(this.templateSelector).html();

        let compiledTemplate = _.template(template);
        let output = compiledTemplate(data);
        this.$view.html(output);

    }


}