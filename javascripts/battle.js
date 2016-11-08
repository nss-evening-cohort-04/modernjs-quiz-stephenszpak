"use strict";
var Botwar = (function(battle) {
	let player, player2, currentPlayerLife, currentplayer2Life;
	let gameResult = $("#result");

		//initialize game
	battle.setUpGame = function(currentPlayer, currentPlayerTwo) {
		player = currentPlayer;
		player2 = currentPlayerTwo;

		$("#playerStats").html (`
			<h1>${player.name}</h1>
			<h3>Current Life: <span id="currentPlayerLife"></span></h3>
			<h3>${player.weapon.weaponName}</h3>
			<h3>${player.atkType}</h3>
			<h3>${player.type}</h3>
			`);

		$("#player2Stats").html (`
			<h1>${player2.name}</h1>
			<h3>Current Life: <span id="currentplayer2Life"></span></h3>
			<h3>${player2.weapon.weapon2Name}</h3>
			<h3>${player2.atkType}</h3>
			<h3>${player2.type}</h3>
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
		let player2Attack = Math.floor(Math.random()* (player2.attack + player.weapon.addedDamage));
		console.log("player attack", playerAttack);
		console.log("player2 attack", player2Attack);

		//update Life after attack
		battle.updatePlayerLife(player2Attack);
		battle.updateplayer2Life(playerAttack);

		//update DOM
		battle.updateLife();
		battle.combatText(playerAttack, player2Attack);
		battle.defeatCheck(player, player2, currentPlayerLife, currentplayer2Life);

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

  		let combatLog = $(`<p><span>${player.name}</span> attacks <span>${player2.name}</span> with <span>${player.weapon.weaponName}</span> dealing <span>${playerAttack}</span> damage plus an additional <span>${player.poisonAtk}</span> poison damage</p>`);
  		combatLog.hide().appendTo("#battletext").fadeIn();
	};

	battle.defeatCheck = function(player, player2, currentPlayerLife, currentplayer2Life) {
		if (currentPlayerLife <= 0 || currentplayer2Life <= 0) {
			if(currentPlayerLife <= 0 && currentplayer2Life <= 0) {
				gameResult.html(`<h2>DRAW! No Winner!</h2>`);
				$("#fight").slideUp();
				$("#chooser").slideDown();
    			$("#chooser2").slideDown();
			}
			else if (currentPlayerLife <= 0) {
				gameResult.html(`<h3>YOU LOSEEE!</h3>`);
				$("#fight").slideUp();
				$("#chooser").slideDown();
    			$("#chooser2").slideDown();
			}
			else if(currentplayer2Life <= 0) {
				gameResult.html(`<h3>You have defeated ${player2.name}!</h3>`);
				$("#fight").slideUp();
				$("#chooser").slideDown();
    			$("#chooser2").slideDown();
			}
		}
	};
  return battle;

})(Botwar || {});