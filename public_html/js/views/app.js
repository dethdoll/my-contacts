
var app = app || {};

// The Application
// ---------------

// Our overall **Appview** is the top level piece of the UI
app.AppView = Backbone.View.extend({
  
  // Instead of generating a new element, bind to the existing skeleton of the 
  // App already presents in the HTML
  el: '#my-contacts',
  
  // TODO the bottom of the contacts to organize by gender and/or alphabetical
  // bottomTemplate = _.template .... call the bottom template which will have the filters
  
  // At initialization we bind to the relevant events on the 'Todos'
  // collection, when items are added or changed
  initialize: function() {
    
    this.$button = this.$('#add-contact');
    
    this.listentTo(app.Contacts, 'add', this.addContact);
  },
  
  // Add a single contact to the list by creating a view for it, and appending
  // its elements to the '<ul>'
  addContact: function( contact ) {
    var view = new app.ContactView({ model: contact });
    $('#contacts-list').append( view.render().el );
  }
  
});

