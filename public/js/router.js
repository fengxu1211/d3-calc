define(['backbone', 'model/hero-detail'], function(Backbone, HeroDetail) {
  var AppRouter = Backbone.Router.extend({
      /* define the route and function maps for this router */
      routes: {
          "about" : "showAbout",
          /*Sample usage: http://unicorns.com/# <about*/

          "profile/:account/hero/:id" : "viewHeroProfile",
          /*This is an example of using a ":param" variable which allows us to match
          any of the components between two URL slashes*/
          /*Sample usage: http://unicorns.com/#photos/5*/

          "search/:query" : "searchPhotos",
          /*We can also define multiple routes that are bound to the same map function,
          in this case searchPhotos(). Note below how we're optionally passing in a
          reference to a page number if one is supplied*/
          /*Sample usage: http://unicorns.com/#search/lolcats*/

          "search/:query/p:page" : "searchPhotos",
          /*As we can see, URLs may contain as many ":param"s as we wish*/
          /*Sample usage: http://unicorns.com/#search/lolcats/p1*/

          "photos/:id/download/*imagePath" : "downloadPhoto",
          /*This is an example of using a *splat. splats are able to match any number of
          URL components and can be combined with ":param"s*/
          /*Sample usage: http://unicorns.com/#photos/5/download/files/lolcat-car.jpg*/

          /*If you wish to use splats for anything beyond default routing, it's probably a good
          idea to leave them at the end of a URL otherwise you may need to apply regular
          expression parsing on your fragment*/

          "*other"    : "defaultRoute"
          /*This is a default route that also uses a *splat. Consider the
          default route a wildcard for URLs that are either not matched or where
          the user has incorrectly typed in a route path manually*/
          /*Sample usage: http://unicorns.com/# <anything*/

      },

      showAbout: function(){
      },

      viewHeroProfile: function(account, id){
          /*
          Note that the id matched in the above route will be passed to this function
          */
          console.log("You are trying to view hero " + id);
          
          $('.account-summary').fadeOut();
          $('#mw-hero-list').fadeOut();
          $('#mw-hero-detail').fadeIn();
          
          var heroDetail = new HeroDetail({
            account: account,
            id: id
          });
          
          heroDetail.fetch();
      },

      searchPhotos: function(query, page){
          var page_number = page || 1;
          console.log("Page number: " + page_number + " of the results for " + query);
      },

      downloadPhoto: function(id, path){
      },

      defaultRoute: function(other){
          console.log("Invalid. You attempted to reach:" + other);
      }
  });

  /* Now that we have a router setup, remember to instantiate it*/
  return AppRouter;
});
