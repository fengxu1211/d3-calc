define(['backbone'], 
  function(Backbone) {
    var Hero = Backbone.Model.extend({
      initialize: function() {
        this.set('classname', this.get('class'));
        this.set('portrait', this.get('class') + '-' + (this.get('gender') === 0 ? 'male' : 'female'));
      }
    });
    
    return Hero;
});