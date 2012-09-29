define(['views/navbarview', 'router'], function(NavbarView, AppRouter) {
    return {
        start: function() {
            var view = new NavbarView();
            var router = new AppRouter();
            Backbone.history.start();
        }
    }
});