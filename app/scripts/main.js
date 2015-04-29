/*global Galorie, $*/


// window.Galorie = {
//     Models: {},
//     Collections: {},
//     Views: {},
//     Routers: {},
//     init: function () {
//         'use strict';
//         console.log('Hello from Backbone!');
//     }
// };

// $(document).ready(function () {
//     'use strict';
//     Galorie.init();
// });

//Backbone Model
var Galorie = Backbone.Model.extend({
    defaults: {
        food : '',
        portion: '',
        galorie_intake: ''
    }
});

//Backbone Collection
var Galories = Backbone.Collection.extend({})

var breakfast = new Galorie({food:'banana', portion:3, galorie_intake:10 });
var lunch = new Galorie({food:'sandwich', portion:1, galorie_intake:400 });
var dinner = new Galorie({food:'veggie_burger', portion:1, galorie_intake:250 }); 
    
//instantiate Collection
var galories = new Galorie();

//Backbone View for one calorie
var GalorieView = Backbone.View.extend({
    model: new Galorie(),
    tagName: 'tr',
    initialize: function(){
      this.template = _.template($('.calories-list-template').html())         
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
});

//Backbone View for all calories
var GaloriesView = Backbone.View.extend({
  model: galories,
  el: $('.calories-list'),
  initialize: function(){
    this.model.on('add', this.render,this);
  },
  render: function(){
    var self = this; 
    this.$el.html('');
    _.each(this.model.toArray(), function(galorie){
    // iterate through each blog in our blogs array
      self.$el.append((new GalorieView({model: galorie})).render().$el);
    });
    return this;

  }
});

var galoriesView = new GaloriesView();

$(document).ready(function(){
  $('.add-blog').on('click', function(){
    var calorie = new Galorie({
      food: $('.food-input').val(),
      portion: $('.portion-input').val(),
      galorie_intake: $('.calorie_intake-input').val()      
    });
      console.log(galorie.toJSON());
      galories.add(galorie);
  });
});  


