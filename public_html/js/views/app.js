
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
  
  // Delegated events for creating new items, and clearing completed ones.
  events: {
    'click #add-contact': 'createOnClick'
  }, 
  
  // At initialization we bind to the relevant events on the 'Todos'
  // collection, when items are added or changed
  initialize: function() {
    
    this.$input = this.$('#new-contact-name');
    //this.$button = this.$('#add-contact');
    this.$main = this.$('#main');
    
    this.listenTo(app.Contacts, 'add', this.addContact);
    
    app.Contacts.fetch();
    
  },
  
  // Re-rendering teh App just means refreshing the statistics -- the rest 
  // of the app doesn't change
  render: function() {
    this.$main.show();
  },
  
  // Add a single contact to the list by creating a view for it, and appending
  // its elements to the '<ul>'
  addContact: function( contact ) {
    var view = new app.ContactView({ model: contact });
    $('#contacts-list').append(view.render().el);
  },
  
  newAttributes: function() {
    return {
      name: this.$input.val().trim()
    };
  },
  
  // If you click the button, it will create a new contact in the book, 
  // persisting it to localStorage
  createOnClick: function( event ) {
    if (!this.$input.val().trim()) {
      return;
    }
    
    app.Todos.create(this.newAttributes());
    this.$input.val(''); // sets the value to empty after creating the contact
  }
  
});

