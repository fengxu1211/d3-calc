define(['backbone','views/account-summary', 'views/hero-list', 'model/hero-collection'], 
  function(Backbone, AccountSummaryView, HeroListView, HeroCollection) {
    var Account = Backbone.Model.extend({
        urlRoot: 'http://us.battle.net/api/d3/profile/',
        url: function() {
            return Account.__super__.url.call(this) + '/?callback=?';
        },
        initialize: function() {
          this.on('change', function() {
            console.log('get model', this);
                
            var accountView = new AccountSummaryView({
                model: this,
                id: "account-summary-" + this.id
            });
                
            //$('.container > .hero-unit').remove();
            accountView.render().$el.prependTo('body > .container');
                
            var heroList = new HeroListView({
              account: this.id,
              collection: new HeroCollection(this.get('heroes'))
            });
            heroList.render();
          });
            
          this.on('change:lastUpdated', function() {
            var time = this.get('lastUpdated');
            this.set({ lastUpdated : new Date(time * 1000) }, {silent: true} );
          });
        }
    });
    
    return Account;
});