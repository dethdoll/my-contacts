

var app = app || {};

// Contacts book collection
// -----------------------

// The collection of the contacts book is backed by **localStorage** instead
// of using a remote server
var ContactsList = Backbone.Collection.extend({
  
  // Needs to reference the collection's model
  model: app.Contact,
  
  // save all the contacts under the 'contacts-backbone' namespace.
  localStorage: new Backbone.LocalStorage('contacts-backbone')
  
  
});


// Create our global collection of **Contacts**
app.Contacts = new ContactsList();

