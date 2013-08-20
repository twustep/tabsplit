App.Views.MainView = Backbone.View.extend({
				el:$("#main-container"),

				initialize:function(){
					console.log("Start Main View");
					//console.log(window.model);
					console.log(this.model);
				
					this.model.set('current_view',this);
					this.model.calculate();
				
				},
				
				populateView:function(){
					console.log("Start Main View Children");
					console.log(this.model);
					//starting with Tab View just for testing
					var start_view = new App.Views.TabView({model:this.model});
					this.$el.html(start_view.$el);
				}
			});