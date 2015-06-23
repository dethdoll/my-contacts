
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
    
    this.$inputname = this.$('#new-contact-name');
    this.$inputphone = this.$('#new-contact-phone');
    this.$main = this.$('#main');
    
    this.listenTo(app.Contacts, 'add', this.addContact);
    
    app.Contacts.fetch();
    
  },
  
  // Re-rendering the App just means refreshing the statistics -- the rest 
  // of the app doesn't change
  render: function() {
    this.$main.show();
  },
  
  // Add a single contact to the list by creating a view for it, and appending
  // its elements to the '<ul>'
  addContact: function( contact ) {
    var view = new app.ContactView({ model: contact });
    console.log(view);
    $('#contacts-list').append(view.render().el);
  },
  
  newAttributes: function() {
    return {
      name: this.$inputname.val().trim(),
      phone: this.$inputphone.val().trim(),
      gender: this.$('input[name=gender]:checked').val()
    };
  },
  
  // If you click the button, it will create a new contact in the book, 
  // persisting it to localStorage
  createOnClick: function( event ) {
    if (!this.$inputname.val().trim() || !this.$inputphone.val().trim()) {
      return;
    }
    
    app.Contacts.create(this.newAttributes());
    this.$inputname.val(''); // sets the value to empty after creating the contact
    this.$inputphone.val('');
  }
  
});

