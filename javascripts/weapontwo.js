 var Botwar = (function(weapon2) {

 	//empty weapon2 var
  	let basicWeapon2 = function() {
    	this.weapon2Name = "";
    	this.addedDamage = "";
  	};

  	weapon2.weapon2Option = {};

 	//indiviual weapon2s
 	weapon2.weapon2Option.golfclub = function() {
 		this.weapon2Name = "Golf club";
 		this.addedDamage = 25;
 	};
 	weapon2.weapon2Option.golfclub.prototype = new basicWeapon2();

 	weapon2.weapon2Option.straight = function() {
 		this.weapon2Name = "Straight Blade";
 		this.addedDamage = 45;
 	};
 	weapon2.weapon2Option.straight.prototype = new basicWeapon2();


 	weapon2.weapon2Option.jackhammer = function() {
 		this.weapon2Name = "Jack Hammer";
 		this.addedDamage = 35;
 	};
 	weapon2.weapon2Option.jackhammer.prototype = new basicWeapon2();


 	weapon2.weapon2Option.battleaxe = function() {
 		this.weapon2Name = "Battle Axe";
 		this.addedDamage = 150;
 	};
 	weapon2.weapon2Option.battleaxe.prototype = new basicWeapon2();

  	return weapon2

})(Botwar || {})