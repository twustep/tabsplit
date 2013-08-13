App.Views.Person = Backbone.View.extend({
				
				className:"person",
				template: _.template($('#person-template').html()),

				initialize:function(){
					//console.log("person view");
					//console.log(window.model);
					//console.log("peron view view");
					//this.listenTo(window.model.get("tab_people"), 'all', this.populateView);
					//this.listenTo(window.model, 'change', this.populateView);
					this.populateView();
						
				},

				populateView:function(){
					this.render();
					
					var personal_items = this.model.attributes.items;
					
					var $container = this.$('#item-list');
					
					for (var i=0;i<personal_items.length;i++)
					{ 
					
						//console.log(this.model.attributes.items);
						var itemCollection = personal_items.models[i];
						var newElement = new App.Views.Item({model: itemCollection});
						//newElement.listenTo(itemCollection, 'all', newElement.populateView);
					
						
						$container.append( newElement.$el);
						
						
					}
					
				},


				render:function(){
					console.log("rendering v.person");
					this.$el.html(this.template(this.model.attributes));
					return this;

				}

			});