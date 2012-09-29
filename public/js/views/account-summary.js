define(['backbone', 'underscore'], function(Backbone, _) {
    var AccountSummaryView = Backbone.View.extend({
        className: 'hero-unit account-summary',
        
        events: {
        },
        
        initialize: function() {
          this.template = _.template($('#account-summary').html());
        },
        
        render: function() {
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
    });
    
    return AccountSummaryView;
});