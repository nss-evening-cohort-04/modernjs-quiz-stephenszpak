"use strict";
var Botwar = (function(battle) {
	let player, enemy, currentPlayerLife, currentEnemyLife;
		//initialize game
	battle.setUpGame = function(currentPlayer, currentEnemy) {
		player = currentPlayer;
		enemy = currentEnemy;

		$("#playerStats").html (`
			<h1>${player.name}</h1>
			<h3>Current Health: <span id="currentPlayerLife"></span></h3>
			<h3>${player.weapon.weaponName}</h3>
			<h3>${player.atkType}</h3>
			<h3>${player.type}</h3
			`);

		$("#enemyStats").html (`
			<h1>${enemy.name}</h1>
			<h3>Current Health: <span id="currentEnemyLife"></span></h3>
			<h3>${enemy.attack}</h3>
			`);

		currentPlayerLife = player.life;
		currentEnemyLife = enemy.life;

		battle.updateLife();
	};

		//update hp info
	battle.updateLife = function() {
		let replacePlayerLife = $(`<span id="currentPlayerLife">${currentPlayerLife}</span>`).hide();
		let replaceEnemyLife = $(`<span id="currentEnemyLife">${currentEnemyLife}</span>`).hide();
		$("#currentPlayerLife").fadeOut();
		$("#currentPlayerLife").replaceWith(replacePlayerLife);
		$("#currentPlayerLife").fadeIn();
		$("#currentEnemyLife").fadeOut();
		$("#currentEnemyLife").replaceWith(replaceEnemyLife);
		$("#currentEnemyLife").fadeIn();
	};

	  //battle function
	$("#attackButton").on("click", function() {
		let playerAttack = Math.floor(Math.random() * (player.attack + player.weapon.addedDamage));
		let enemyAttack = Math.floor(Math.random()* (enemy.attack + 25));
		console.log("player attack", playerAttack);
		console.log("enemy attack", enemyAttack);

		//update health after attack
		battle.updatePlayerLife(enemyAttack);
		battle.updateEnemyLife(playerAttack);

		//update DOM
		battle.updateLife();
		battle.combatText(playerAttack, enemyAttack);
	});

	battle.updatePlayerLife = function(enemyAttack) {
		currentPlayerLife -= enemyAttack;
		return currentPlayerLife;
	};

	battle.updateEnemyLife = function(playerAttack) {
		currentEnemyLife -= playerAttack;
		return currentEnemyLife;
  	};

  	battle.combatText = function(playerAttack, enemyAttack) {
  		$("#battletext").text("");

  		let combatLog = $(`<p><span>${player.name}</span> attacks <span>${enemy.name}</span> with <span>${player.weapon.weaponName}</span> dealing <span>${playerAttack}</span> damage</p>`);
  		combatLog.hide().appendTo("#battletext").fadeIn();

	};

  return battle;

})(Botwar || {}); //document ready function end