
var app = app || {};


// Contact Model
// -------------
// My basic contacts book has 'name' and 'phone number' attributes

app.Contact = Backbone.Model.extend({
  
  // I need to use defaults, to make sure that every contact created, has
  // a name and a phone number keys
  defaults: {
    name: '',
    phone: ''
  }
  
});

