define(['jquery',
        'handlebars',
        'text!faostat_ui_analysis/html/templates.html',
        'i18n!faostat_ui_analysis/nls/translate',
        'FAOSTAT_UI_COMMONS',
        'bootstrap',
        'sweetAlert',
        'amplify'], function ($, Handlebars, templates, translate, Commons) {

    'use strict';

    function ANALYSIS() {

        this.CONFIG = {
            lang: 'en',
            group: null,
            domain: null,
            lang_faostat: 'E',
            datasource: 'faostatdb',
            prefix: 'faostat_ui_download_',
            placeholder_id: 'faostat_ui_download'
        };

    }

    ANALYSIS.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'en';

        /* Store FAOSTAT language. */
        this.CONFIG.lang_faostat = Commons.iso2faostat(this.CONFIG.lang);

    };

    return ANALYSIS;

});