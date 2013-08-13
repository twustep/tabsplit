App.Views.Item = Backbone.View.extend({
				
				className:"item",
				template: _.template($('#item-template').html()),

				initialize:function(){
					//console.log("item view");
					//console.log(window.model);
					//this.listenTo(window.model.get("tab_people"), 'all', this.populateView);
					//this.listenTo(window.model.get("tab_people")., 'all', this.populateView);
					//this.listenTo(window.model, 'change', this.populateView);
					this.populateView();
							
				},
				
				populateView:function(){
				
					this.render();
				},
				
			

				render:function(){
					//console.log(this.model);
					console.log("rendering v.item");
					//console.log("render item");
					//console.log("i am an item");
					//console.log(this.$el.html());
					this.$el.html(this.template(this.model.attributes));
					//this.$el.html(this.template());
					return this;

				}

			});