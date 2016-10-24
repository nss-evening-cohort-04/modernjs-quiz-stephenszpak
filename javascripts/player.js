var Botwar = (function(player){

	//base robot function ---!---
    let Robot = function(name) {
      this.attack = 25;
      this.life = 100;
      this.weapon = null;
      this.armor = 5;
      this.name = name;
    };

    //2nd tier classes -----------
    //Ground Based 
    let GroundBot = function(name) {
      Robot.call(this, name);
      this.type = "Ground";
      this.atkType = "Physical";
      this.armor += 5;
    };
    GroundBot.prototype = new Robot();

    //Air Based
    let AirBot = function(name) {
      Robot.call(this, name)
      this.type = "Air";
      this.atkType = "Ranged";
      this.armor += 2;
    };
    AirBot.prototype = new Robot();

    //Sneaky Based
    let SneakyBot = function(name) {
      Robot.call(this, name)
      this.type = "Ground";
      this.atkType = "Poison";
      this.armor += 1;
    };  
    SneakyBot.prototype = new Robot();

    player.botOption = {};

    //Sub-classes ---------

    //groundbot
    player.botOption.Roger = function(name) {
      GroundBot.call(this, name);
      this.life += 700;
      this.attack += 25;
    };
    player.botOption.Roger.prototype = new GroundBot();

    //airbot
    player.botOption.Wiliferd = function(name) {
      AirBot.call(this, name);
      this.life = 500;
      this.attack += 100;
    };
    player.botOption.Wiliferd.prototype = new AirBot();

    //sneakybot
    player.botOption.Hubert = function(name) {
      SneakyBot.call(this, name)
      this.life += 500;
    	this.attack += 100;
      this.poisonAtk = this.attack + 4;
    };
    player.botOption.Hubert.prototype = new SneakyBot();

    return player

})(Botwar || {});