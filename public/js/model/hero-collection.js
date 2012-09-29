define(['backbone', 'model/hero'], 
  function(Backbone, Hero) {
    var HeroCollection = Backbone.Collection.extend({
      model: Hero
    });
    
    return HeroCollection;
});