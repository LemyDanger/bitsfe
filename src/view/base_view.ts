import * as _ from 'lodash';
import * as $ from 'jquery';

export abstract class BaseView {

    protected template: string;
    protected templateSelector: string;
    protected templateOutputSelector: string;


    public setTemplateSelector(templateSelector) {
        this.templateSelector = templateSelector;
    }

    public setOutputSelector(templateOutputSelector) {
        this.templateOutputSelector = templateOutputSelector;
    }

    public render(data: {}) {
        try {
            let template = $(this.templateSelector).html();
            let compiledTemplate = _.template(template);
            let output = compiledTemplate({hahn : 'ja'});
            $(this.templateOutputSelector).html(output);
        } catch(e) {
            console.error(e);
        }
    }




}