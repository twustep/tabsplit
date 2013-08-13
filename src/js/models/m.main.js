App.Models.MainModel = Backbone.Model.extend({
	
	initialize:function(){
		console.log("Initial Data Load");
		App.people_collection = new App.Collections.People();
	
		//***** testing data *******/
		var testItemData = new App.Collections.Items([{description: "item 1", price:"9.99"},{description: "item 2", price:"87.00"}]);
		var testItemData2 = new App.Collections.Items([{description: "item 1", price:"19.99"},{description: "item 2", price:"37.00"}]);
		var testItemData3 = new App.Collections.Items(null);
		var tempTestData = [{name: "John Doe", items: testItemData },{name: "Robert Mace",items: testItemData2},{name: "Duncan Turner", items: testItemData3}];
		App.people_collection.add(tempTestData);
		this.set('tab_people', App.people_collection);
		//***** testing data *******/
		
		//this.listenTo(this.get('tab_people'), 'all', function(){this.trigger("change");});
		//this.listenTo(this, 'change', this.recalculate);
		this.listenTo(this.get('tab_people'), 'all', this.recalculate);
		
	
		//console.log(App.people_collection);
	},
	
	recalculate:function(){
		console.log("Start Calculation!");
		//stop listening while calculating and changing the tab_people collection
		this.stopListening(this.get('tab_people'), "all");
		//example calculation
		//App.people_collection.at(1).set("name","matia2s");
		//App.people_collection.add([{name: "John Doe6", items: new App.Collections.Items(null)}]);
		//App.people_collection.at(1).get("items").add({description: "item 1", price:"123.29"});
		//App.people_collection.at(1).get("items").at(0).set("price","8.00");
		App.people_collection.at(1).set("balance","27");
		//end example calculation
		console.log("End Calculation!");
		this.get('current_view').populateView();
		//once we are done calculating we can start looking for changes (start listens)
		this.listenTo(this.get('tab_people'), 'all', this.recalculate);
		
		
	}
    
});