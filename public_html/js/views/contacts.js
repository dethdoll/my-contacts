
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
    'click .destroy': 'clear',
    'dblclick label.name': 'editName',
    'dblclick label.phone': 'editPhone',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },
  
  // The ContactView listens for changes to its model, re-rendering. Since
  // there is a one-to-one correspondance between a **Contact** and a 
  // **ContactView** in this app, we will set a direct reference for experience
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
  },
  
  // Re-renders the titles of the contact Item
  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    this.$inputname = this.$('.edit.name');
    this.$inputphone = this.$('.edit.phone');
    return this;
  },
  
  // switch this view into 'editing' mode, displaying the input field
  editName: function() {
    this.$el.addClass('editing');
    this.$inputname.focus();
  },
  
    // switch this view into 'editing' mode, displaying the input field
  editPhone: function() {
    this.$el.addClass('editing');
    this.$inputphone.focus();
  },
  
  // Close the 'editing' mode, saving changes to the contacts
  close: function() {
    var value = this.$inputname.val().trim();
    console.log(value); // this is called twice!
    
    if (value) {
      this.model.save( {name: value} );
    }
    
    this.$el.removeClass('editing');
  },
  
  //If you hit 'enter', we're through editing the contact
  updateOnEnter: function(e) {
    if ( e.which === ENTER_KEY ) {
        this.close();
    }
  },
  
  //Remove the contact, destroy the model from the *localStorage* and delete 
  //it's view
  clear: function() {
    this.model.destroy();
  }
  
});
