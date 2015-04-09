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
            section: null,
            module: null,
            lang_faostat: 'E',
            datasource: 'faostatdb',
            prefix: 'faostat_ui_analysis_',
            placeholder_id: 'faostat_ui_analysis'
        };

    }

    ANALYSIS.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'en';

        /* Store FAOSTAT language. */
        this.CONFIG.lang_faostat = Commons.iso2faostat(this.CONFIG.lang);

        /* This... */
        var _this = this;

        require(['FENIX_UI_TILES_MANAGER'], function (TILES_MANAGER) {
            var mgr = new TILES_MANAGER();
            mgr.init({
                lang: _this.CONFIG.lang,
                module: _this.CONFIG.module,
                section: _this.CONFIG.section,
                datasource: _this.CONFIG.datasource,
                placeholder_id: _this.CONFIG.placeholder_id
            });
        });

    };

    return ANALYSIS;

});