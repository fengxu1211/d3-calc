requirejs.config({
    //By default load any module IDs from js/
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            deps: [],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: '_'
        },
    }
});

require(['ui', 'underscore'], function(ui) {
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };
    
    console.log('started');
    ui.start();
});
