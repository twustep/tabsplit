var App = {
	Models : {},
	Collections : {},
	Views: {},

	initFramework : function(){

			//error status definitions

	},

	initApp:function(){

		window.model = new App.Models.MainModel();
		window.view = new App.Views.MainView({model:window.model});
	}
};



$(function(){
	App.initFramework();
	App.initApp();
});