var Botwar = (function(player2){

  //base Robot2 function ---!---
    let Robot2 = function(name) {
      this.attack = 50;
      this.life = 100;
      this.weapon = null;
      this.armor = 5;
      this.name = name;
    };

    //2nd tier classes -----------
      //Ground Based 
  let GroundBot2 = function(name) {
    Robot2.call(this, name);
      this.type = "Ground";
      this.atkType = "Physical";
      this.armor += 5;
    };
    GroundBot2.prototype = new Robot2();

      //Air Based
  let Airbot2 = function(name) {
    Robot2.call(this, name)
      this.type = "Air";
      this.atkType = "Ranged";
      this.armor += 2;
    };
    Airbot2.prototype = new Robot2();

      //Sneaky Based
    let SneakyBot2 = function(name) {
      Robot2.call(this, name)
      this.type = "Ground";
      this.atkType = "Poison";
      this.armor += 1;
    };  
    SneakyBot2.prototype = new Robot2();

    player2.botOption2 = {};

    //Sub-classes ---------

      //GroundBot2
    player2.botOption2.Roger = function(name) {
      GroundBot2.call(this, name);
      this.life += 400;
      this.attack += 50;
    };
    player2.botOption2.Roger.prototype = new GroundBot2();

      //Airbot2
    player2.botOption2.Wiliferd = function(name) {
      Airbot2.call(this, name);
        this.life = 150;
        this.attack += 150;
    };
    player2.botOption2.Wiliferd.prototype = new Airbot2();

      //SneakyBot2
    player2.botOption2.Hubert = function(name) {
      SneakyBot2.call(this, name)
      this.life += 200;
        this.attack += 150;
    };
    player2.botOption2.Hubert.prototype = new SneakyBot2();

  return player2

})(Botwar || {});