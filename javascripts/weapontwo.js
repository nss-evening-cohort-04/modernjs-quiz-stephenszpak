 var Botwar = (function(weapon2) {

 	//empty weapon2 var
  	let basicWeapon2 = function() {
    	this.weapon2Name = "";
    	this.addedDamage = "";
  	};

  	weapon2.weapon2Option = {};

 	//indiviual weapon2s
 	weapon2.weapon2Option.stick = function() {
 		this.weapon2Name = "Stick";
 		this.addedDamage = 25;
 	};
 	weapon2.weapon2Option.stick.prototype = new basicWeapon2();

 	weapon2.weapon2Option.saw = function() {
 		this.weapon2Name = "Saw Blade";
 		this.addedDamage = 45;
 	};
 	weapon2.weapon2Option.saw.prototype = new basicWeapon2();


 	weapon2.weapon2Option.hammer = function() {
 		this.weapon2Name = "Hammer";
 		this.addedDamage = 35;
 	};
 	weapon2.weapon2Option.hammer.prototype = new basicWeapon2();


 	weapon2.weapon2Option.ragnarok = function() {
 		this.weapon2Name = "Ragnarok";
 		this.addedDamage = 150;
 	};
 	weapon2.weapon2Option.ragnarok.prototype = new basicWeapon2();

  	return weapon2

})(Botwar || {})