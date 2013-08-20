App.Views.TabView = Backbone.View.extend({
				
				id:"tab",
				template: _.template($('#tab-template').html()),

				initialize:function(){
					//console.log("tab view");
					//console.log(window.model);
					//this.listenTo(window.model, 'change', this.populateView);
		
					this.populateView();
					
			
						
				},
				
				events: {
					'click #add-person': 'addPerson'
				},
				
				addPerson:function(){
					var personName = this.$el.find('#add-person-input').val();
					
					App.people_collection.add([{name: personName, items: new App.Collections.Items(null)}]);
				},
				
				populateView:function(){
					
					this.render();
					var people = this.model.get('tab_people');

					//this.$('#people-list').html(new App.Views.Person().$el);
					var $container = this.$('#people-list');
					
					for (var i=0;i<people.models.length;i++)
					{ 
						var person = people.models[i];
						var newElement = new App.Views.Person({model: person});	
						$container.append( newElement.$el);
						
						
					
						
					}
					console.log("Tab View and its children have finished!");
				},


				render:function(){
					console.log("rendering v.tab");
					//console.log(this.model.get("facebookProxy").attributes);
					this.$el.html(this.template());
					return this;

				}

			});