define(['backbone', 'underscore', 'views/hero-summary'], function(Backbone, _, HeroSummaryView) {
    var HeroListView = Backbone.View.extend({
        el: '#mw-hero-list',
        
        events: {
        },
        
        initialize: function() {
          
        },
        
        render: function() {
          var self = this;
          
          _.each(this.collection.models, function(hero) {
            // set account field for all heros
            hero.set('account', self.options.account);
            
            var heroSummary = new HeroSummaryView({
              model: hero
            });

            heroSummary.render().$el.appendTo(self.el);
          });
          
          return this;
        }
    });
    
    return HeroListView;
});