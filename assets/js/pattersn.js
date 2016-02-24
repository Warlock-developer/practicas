/** 
 * Patterns example"  
 * @author: Dawin Valenzuela 
 * @date: 25 February 2016
 */

//Literal patterns example 1
//var myModule = {
//    name: 'Dawin',
//    age: 32,
//    sayName:function(){
//        alert(this.name);
//    },
//    setName:function(newName){
//      this.name = newName;  
//    }
//};
//
//myModule.setName('warlok');
//myModule.sayName();

//Literal patterns example 2
//var people = {
//    people: ['Will', 'Steve'],
//    init: function() {
//        this.cacheDom();
//        this.bindEvents();
//        this.render();
//    },
//    cacheDom: function() {
//        this.$el = $('#peopleModule');
//        this.$button = this.$el.find('button');
//        this.$input = this.$el.find('input');
//        this.$ul = this.$el.find('ul');
//        this.template = this.$el.find('#people-template').html();
//    },
//    bindEvents: function() {
//        this.$button.on('click', this.addPerson.bind(this));
//        this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
//    },
//    render: function() {
//       var data = {
//           people: this.people,
//       };
//       this.$ul.html(Mustache.render(this.template, data));
//    },
//    addPerson: function() {
//        this.people.push(this.$input.val());
//        this.render();
//        this.$input.val('');
//    },
//    deletePerson: function(event) {
//        var $remove = $(event.target).closest('li');
//        var i = this.$ul.find('li').index($remove);
//
//        this.people.splice(i, 1);
//        this.render();
//    }
//
//};
//
//$(function(){
//    people.init();
//});


//module pattern example 3 
var people = (function(){
    var people = ['Will', 'Steve'];

    //cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();
    
    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render();

    function _render() {
       $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();