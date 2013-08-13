App.Collections.People = Backbone.Collection.extend({
    
    model: App.Models.Person,  
    
    initialize: function () {
		console.log("c.people");
		
        //console.log('initializing Person collection');
		//this.listenTo(this, 'all', function(){window.model.trigger("change");});
		//this.listenTo(this, 'all', function(){window.model.set("refresh",1);});

    }
    
   
});