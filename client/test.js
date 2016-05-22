import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).ready(function() {

	var body,table,tr,td;
	var i,j;

	body = document.body;
	table = document.createElement('table');
	tr = document.createElement('tr');
	td = document.createElement('td');



	for (i = 0; i < 3; i++) {
		// need to call tr here
		tr = table.insertRow();
		for(j = 0; j < 3; j++) {
			// need append td to tr here
			td = tr.insertCell();
			td.appendChild(document.createTextNode(''));
		}
	}

	console.log(table);
	//document.getElementById("#createTable").innerHTML("<p>Test</p>");

});