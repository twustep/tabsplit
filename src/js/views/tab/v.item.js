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

				events: {
					'click #item-description': 'editItemDescription',
					'blur #item-edit-description':   'showItemDescription',
					'click #item-price': 'editItemPrice',
					'blur #item-edit-price':   'showItemPrice'
				},
				
				editItemDescription:function(){
					this.$el.find('#item-description').hide();
					this.$el.find('#item-edit-description').show().focus();
					console.log("edit description");
				},
				
				showItemDescription:function(){
					
					
					this.$el.find('#item-description').show();
					this.$el.find('#item-edit-description').hide();
					
					var description = this.$el.find('#item-edit-description').val();
					
					this.model.set("description", description);

					
				},
				
				editItemPrice:function(){
					this.$el.find('#item-price').hide();
					this.$el.find('#item-edit-price').show().focus();
					console.log("edit price");
				},
				
				showItemPrice:function(){
					
					
					this.$el.find('#item-price').show();
					this.$el.find('#item-edit-price').hide();
					
					var price = this.$el.find('#item-edit-price').val();
					
					this.model.set("price", price);

					
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