App.Models.MainModel = Backbone.Model.extend({
	
	initialize:function(){
		console.log("Initial Data Load");
		App.people_collection = new App.Collections.People();
		App.tab_collection = new App.Collections.Tabs();
	
		//***** testing data *******/
		var testItemData = new App.Collections.Items([{description: "item 1", price:"9.99"},{description: "item 2", price:"87.00"}]);
		var testItemData2 = new App.Collections.Items([{description: "item 1", price:"19.99"},{description: "item 2", price:"37.00"}]);
		var testItemData3 = new App.Collections.Items(null);
		var tempTestData = [{name: "John Doe", items: testItemData },{name: "Robert Mace",items: testItemData2},{name: "Duncan Turner", items: testItemData3}];
		App.people_collection.add(tempTestData);
		this.set('tab_people', App.people_collection);
		
		var tempTabs = [{name: "My Hawaii Tab", people:tempTestData}];
		App.tab_collection.add(tempTabs);
		
		//***** testing data *******/
		
		//setting current tab as the first one
		//TO DO: change this to real seleted tab
		this.set('current_tab', App.tab_collection.at(0));
	
		//this.listenTo(this.get('tab_people'), 'all', function(){this.trigger("change");});
		//this.listenTo(this, 'change', this.calculate);
		this.listenTo(this.get('tab_people'), 'all', this.calculate);
		
	},
	

	
	calculate:function(){
		console.log("Start Calculation!");
		
		//stop listening while calculating and changing the tab_people collection
		this.stopListening(this.get('tab_people'), "all");
		
		var currentTab = this.get('current_tab');
		var tabTotal = 0;
		var tabTotalPeople = App.people_collection.length;
		var tabEachTotal = 0;
		
		//loop through people
		for (var i=0;i<tabTotalPeople;i++)
		{ 
			var person = App.people_collection.at(i);
			var personTotal = 0;
			
			for (var x=0;x<person.attributes.items.length;x++)
			{			
				//console.log(this.model.attributes.items);
				var item = person.attributes.items.at(x);
				var itemPrice = parseFloat(item.get("price"));
				personTotal += itemPrice; 
			
			}
			
			tabTotal += this.roundToDollar(personTotal);
			//update personal balance	
			person.set("balance",personTotal);
			
		}
		
		tabEachTotal = this.roundToDollar(tabTotal/tabTotalPeople);
	
		//loop to update person total
		for (var y=0;y<tabTotalPeople;y++)
		{ 
			var person2 = App.people_collection.at(y);
			var finalBalance = person2.get("balance")-tabEachTotal;
			finalBalance = this.roundToDollar(finalBalance);		
			person2.set("balance",finalBalance);	
		}
		
		//example calculation
		//App.people_collection.at(1).set("name","matia2s");
		//App.people_collection.add([{name: "John Doe6", items: new App.Collections.Items(null)}]);
		//App.people_collection.at(1).get("items").add({description: "item 1", price:"123.29"});
		//App.people_collection.at(1).get("items").at(0).set("price","8.00");
		//App.people_collection.at(1).set("balance","27");
		//end example calculation
		
		currentTab.set("total", this.roundToDollar(tabTotal));
		currentTab.set("each_total", tabEachTotal);
		console.log("End Calculation!");
		this.get('current_view').populateView();
		//once we are done calculating we can start looking for changes (start listens)
		this.listenTo(this.get('tab_people'), 'all', this.calculate);
		
		
	},
	
	roundToDollar:function(amt){
		amt = Math.round(amt * 100) / 100;
		return amt;
	}
    
});