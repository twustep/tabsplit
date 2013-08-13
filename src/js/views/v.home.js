App.Views.HomeView = Backbone.View.extend({
				
				id:"home",
				template: _.template($('#home-template').html()),

				initialize:function(){
					console.log("home view");
					this.render();	
					
						
				},


				render:function(){
					//console.log(this.model.get("facebookProxy").attributes);
					this.$el.html(this.template());
					return this;

				}

			});