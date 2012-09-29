define(['backbone', 'underscore'], function(Backbone, _) {
    var HeroSummaryView = Backbone.View.extend({
        className: 'span4',
        
        events: {
          'click .btn': 'viewProfile'
        },
        
        initialize: function() {
          this.template = _.template($('#hero-summary').html());
        },
        
        render: function() {
          console.log('hero', this.model.toJSON());
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        },
        
        viewProfile: function() {
          
        }
    });
    
    return HeroSummaryView;
});