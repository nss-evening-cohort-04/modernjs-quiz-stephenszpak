"use strict";
 var Botwar = (function(weapon, playerTwoWeapon) {

 	//empty weapon var
  	let basicWeapon = function() {
    	this.weaponName = "";
    	this.addedDamage = "";
  	};

  	weapon.weaponOption = {};

 	//indiviual weapons
 	weapon.weaponOption.stick = function() {
 		this.weaponName = "Stick";
 		this.addedDamage = 25;
 	};
 	weapon.weaponOption.stick.prototype = new basicWeapon();

 	weapon.weaponOption.saw = function() {
 		this.weaponName = "Saw Blade";
 		this.addedDamage = 45;
 	};
 	weapon.weaponOption.saw.prototype = new basicWeapon();


 	weapon.weaponOption.hammer = function() {
 		this.weaponName = "Hammer";
 		this.addedDamage = 35;
 	};
 	weapon.weaponOption.hammer.prototype = new basicWeapon();


 	weapon.weaponOption.ragnarok = function() {
 		this.weaponName = "Ragnarok";
 		this.addedDamage = 150;
 	};
 	weapon.weaponOption.ragnarok.prototype = new basicWeapon();

  	return weapon;

})(Botwar || {});