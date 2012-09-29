define(['backbone', 'underscore', 'views/hero-summary'], function(Backbone, _, HeroSummaryView) {
    var HeroDetailView = Backbone.View.extend({
        
        className: 'hero-detail',
        
        events: {
        },
        
        initialize: function() {
          this.template = _.template($('#hero-detail').html());
        },
        
        render: function() {
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
    });
    
    return HeroDetailView;
});