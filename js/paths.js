define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_ANALYSIS: 'faostat-ui-analysis',
            faostat_ui_analysis: '../'
        },
        shim: {
            FAOSTAT_DOWNLOAD_UI: {
                deps: ['jquery']
            }
        }
    };

    return config;

});