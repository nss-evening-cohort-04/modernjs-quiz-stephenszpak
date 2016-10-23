"use strict";
var Botwar = (function(battle) {
	let player, player2, currentPlayerLife, currentplayer2Life;
		//initialize game
	battle.setUpGame = function(currentPlayer, currentPlayerTwo) {
		player = currentPlayer;
		player2 = currentPlayerTwo;

		$("#playerStats").html (`
			<h1>${player.name}</h1>
			<h3>Current Health: <span id="currentPlayerLife"></span></h3>
			<h3>${player.weapon.weaponName}</h3>
			<h3>${player.atkType}</h3>
			<h3>${player.type}</h3
			`);

		$("#player2Stats").html (`
			<h1>${player2.name}</h1>
			<h3>Current Health: <span id="currentplayer2Life"></span></h3>
			<h3>${player2.attack}</h3>
			`);

		currentPlayerLife = player.life;
		currentplayer2Life = player2.life;

		battle.updateLife();
	};

		//update hp info
	battle.updateLife = function() {
		let replacePlayerLife = $(`<span id="currentPlayerLife">${currentPlayerLife}</span>`).hide();
		let replaceplayer2Life = $(`<span id="currentplayer2Life">${currentplayer2Life}</span>`).hide();
		$("#currentPlayerLife").fadeOut();
		$("#currentPlayerLife").replaceWith(replacePlayerLife);
		$("#currentPlayerLife").fadeIn();
		$("#currentplayer2Life").fadeOut();
		$("#currentplayer2Life").replaceWith(replaceplayer2Life);
		$("#currentplayer2Life").fadeIn();
	};

	  //battle function
	$("#attackButton").on("click", function() {
		let playerAttack = Math.floor(Math.random() * (player.attack + player.weapon.addedDamage));
		let player2Attack = Math.floor(Math.random()* (player2.attack + 25));
		console.log("player attack", playerAttack);
		console.log("player2 attack", player2Attack);

		//update health after attack
		battle.updatePlayerLife(player2Attack);
		battle.updateplayer2Life(playerAttack);

		//update DOM
		battle.updateLife();
		battle.combatText(playerAttack, player2Attack);
	});

	battle.updatePlayerLife = function(player2Attack) {
		currentPlayerLife -= player2Attack;
		return currentPlayerLife;
	};

	battle.updateplayer2Life = function(playerAttack) {
		currentplayer2Life -= playerAttack;
		return currentplayer2Life;
  	};

  	battle.combatText = function(playerAttack, player2Attack) {
  		$("#battletext").text("");

  		let combatLog = $(`<p><span>${player.name}</span> attacks <span>${player2.name}</span> with <span>${player.weapon.weaponName}</span> dealing <span>${playerAttack}</span> damage</p>`);
  		combatLog.hide().appendTo("#battletext").fadeIn();

	};

  return battle;

})(Botwar || {});