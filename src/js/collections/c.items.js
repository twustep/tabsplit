App.Collections.Items = Backbone.Collection.extend({
    
    model: App.Models.Item,  
    
    initialize: function () {
        console.log('c.items');
		
		this.listenTo(this, 'all', function(){window.model.get('tab_people').trigger('change');});
    }
    
   
});