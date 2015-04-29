/*global Galorie, $*/


window.Galorie = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    Galorie.init();
});

//Backbone Model
var Calorie = Backbone.Model.extend({
    defaults: {
        food : '',
        portion: '',
        calorie_intake: ''
    }
});

//Backbone Collection
var Calories = Backbone.Collection.extend({})

var breakfast = new Calorie({food:'banana', portion:3, calorie_intake:10 });
var lunch = new Calorie({food:'sandwich', portion:1, calorie_intake:400 });
var dinner = new Calorie({food:'veggie_burger', portion:1, calorie_intake:250 }); 
    
//instantiate Collection
var calories = new Calorie();

//Backbone View for one calorie
var CalorieView = Backbone.View.extend({
    model: new Calorie(),
    tagName: ‘tr’,
    initialize: function(){
      this.template = _.template($('.calories-list-template').html())         
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
});



