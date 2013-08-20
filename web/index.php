<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7 ie"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8 ie7 ie"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9 ie8 ie"><![endif]-->
<!--[if IE 9]><html class="no-js ie9 ie"><![endif]-->
<!--[if gt IE 9]><!--><html class="no-js"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title></title>
		<meta name="description" content="">
		<meta name="author" content="">
		<!--<link rel="stylesheet" href="assets/css/styles.css">-->	
	</head>
	<body id="tabsplit_app">
   	<!--
		***************************************
		***** Main Container: Where the magic happens
		***************************************
		-->
		<div id="main-container"></div>
		<!--
		***************************************
		***** Template: Main Interface
		***************************************
		-->
		<script type="text/template" id="home-template">
			test
		</script>
			<!--
			***************************************
			***** Template: Tab (Contains People)
			***************************************
			-->
			<script type="text/template" id="tab-template">
					Open Tab: <%= model.get("current_tab").attributes.name %><br/><br/>
					<div id="people-list"></div>
					Add Person:
					<input value="" id="add-person-input"><button id="add-person">Add</button>
					Total: <%= model.get("current_tab").attributes.total %><br>
					Each Total: <%= model.get("current_tab").attributes.each_total %>
			</script>
		<!--
		***************************************
		***** Template: People View
		***************************************
		-->
		<script type="text/template" id="person-template">	
			<%= name %> <%= balance %>
			<ul id="item-list"></ul>
			<input value="" id="add-item-name-input"><input value="" id="add-item-price-input"><button id="add-item">Add</button>
		</script>
		<!--
		***************************************
		***** Template: Items View
		***************************************
		-->
		<script type="text/template" id="item-template">
			<li><input id="item-edit-description" value="<%= description %>" style="display: none"><span id="item-description"><%= description %></span> <input id="item-edit-price" value="<%= price %>" style="display: none"><span id="item-price"><%= price %></span></li>
		</script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script src="assets/js/scripts.min.js"></script>
		
	</body>
</html>