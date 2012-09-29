define(['backbone', 'model/account'], function(Backbone, Account) {
    var NavbarView = Backbone.View.extend({
        el: '#mw-navbar',
        events: {
            'click #mw-search-form>.btn': 'search'
        },
        render: function() {
        },
        search: function(event) {
            event.preventDefault();            
            var account = new Account({
                id: 'Magicwind-1120'
            });
            //account.set('id', 'Magicwind-1120');
            
            account.fetch();
            console.log(account);
            
        }
    });
    
    return NavbarView;
});