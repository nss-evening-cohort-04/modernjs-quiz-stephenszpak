 var Botwar = (function(weapon2) {

 	//empty weapon2 var
  	let basicWeapon2 = function() {
    	this.weapon2Name = "";
    	this.addedDamage = "";
  	};

  	weapon2.weapon2Option = {};

 	//indiviual weapon2s
 	weapon2.weapon2Option.Golfclub = function() {
 		this.weapon2Name = "Golf club";
 		this.addedDamage = 25;
 	};
 	weapon2.weapon2Option.Golfclub.prototype = new basicWeapon2();

 	weapon2.weapon2Option.straight = function() {
 		this.weapon2Name = "straight Blade";
 		this.addedDamage = 45;
 	};
 	weapon2.weapon2Option.straight.prototype = new basicWeapon2();


 	weapon2.weapon2Option.jackhammer = function() {
 		this.weapon2Name = "jackhammer";
 		this.addedDamage = 35;
 	};
 	weapon2.weapon2Option.jackhammer.prototype = new basicWeapon2();


 	weapon2.weapon2Option.battleaxe = function() {
 		this.weapon2Name = "battleaxe";
 		this.addedDamage = 150;
 	};
 	weapon2.weapon2Option.battleaxe.prototype = new basicWeapon2();

  	return weapon2

})(Botwar || {})