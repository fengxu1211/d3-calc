define(['backbone', 'views/hero-detail'], 
  function(Backbone, HeroDetailView) {
    var HeroDetail = Backbone.Model.extend({
      urlRoot: function() {
        return 'http://us.battle.net/api/d3/profile/' + this.get('account') + '/hero/';
      },
      url: function() {
          return HeroDetail.__super__.url.call(this) + '?callback=?';
      },
      initialize: function() {
        this.on('change', function() {
          console.log('get hero data', this);
                
          var heroDetailView = new HeroDetailView({
              model: this,
              id: "hero-detail-" + this.id
          });
                
          //$('.container > .hero-unit').remove();
          heroDetailView.render().$el.prependTo('#mw-hero-detail');
        });
        
        //this.set('classname', this.get('class'));
        //this.set('portrait', this.get('class') + '-' + (this.get('gender') === 0 ? 'male' : 'female'));
      }
    });
    
    return HeroDetail;
});