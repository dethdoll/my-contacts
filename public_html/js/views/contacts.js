
var app = app || {};

// Contact View
// ------------

// The DOM element for a contact element...
app.ContactView = Backbone.View.extend({
  
  // ... a list tag
  tagName: 'li',
  
  // cache the template function for a single contact
  template: _.template( $('#contact-template').html() ),
  
  // The DOM events specific to a contact
  events: {
    'click .destroy': 'clear'
  },
  
  // The ContactView listens for changes to its model, re-rendering. Since
  // there is a one-to-one correspondance between a **Contact** and a 
  // **ContactView** in this app, we will set a direct reference for experience
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },
  
  // Re-renders the titles of the conact Item
  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    
    return this;
  },
  
  
  //Remove the contact, destroy the model from the *localStorage* and delete 
  //it's view
  clear: function() {
    this.model.destroy();
  }
  
});
