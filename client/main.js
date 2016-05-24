import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).ready(function() {

	const playerX = {
		value: 'X',
		turn: false,
		count: 0
	};
	const playerO = {
		value: 'O',
		turn: false,
		count: 0
	};


	$('#startGame').click(function() {

		$('table tr td').click(function() {

			console.log( randomPick(playerX,playerO) );

			if(playerX.turn == true) {
				writeValue(this,playerX.value);
			} else if (playerO.turn == true) {
				writeValue(this,playerO.value);
			}
			


		}); // End of table tr td click function

		function randomPick(playerX,playerO) {
			const randomNum = Math.floor((Math.random() * 2) + 1);
			if(randomNum == 1) {
				playerX.turn = true;
				return playerX;
			} else {
				playerO.turn = true;
				return playerO;
			}
		}

		function writeValue(element,player) {
			$(element).text(player);
		}

	}); // End of #startGame click function
}); // End of document ready function
