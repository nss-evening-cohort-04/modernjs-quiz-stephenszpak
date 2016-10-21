"use strict";
$(document).ready(function(){
  //weapons
  function Stick() {
    this.damage = 25;
  };

  function Bulldozer() {
    this.damage = 75;
  };

  //base robot function
  function Robot() {
    this.baseDamage = Math.floor(Math.random() * 10);
    this.life = Math.floor(Math.random(50-79));
    this.weapon = null;
    console.log(this.life);
  };

  Robot.prototype.attack = function (target) {
    this.totalDamage = this.baseDamage + this.weapon.damage;
    target.life -= this.totalDamage;
  };

  //Ground Based Robots
  function GroundBot() {
    this.type = "Ground";
    this.atkType = "Physical";
  };
  GroundBot.prototype = new Robot();

  function Roger() {
    this.life += 400;
    this.baseDamage += 50;
  };
  Roger.prototype = new GroundBot();

  //Air Based Robots
  function AirBot() {
    this.type = "Air";
    this.atkType = "Ranged";
  };
  AirBot.prototype = new Robot();

//solo bot
  function Wiliferd() {
      this.life = 150;
      this.baseDamage += 150;
  };
  Wiliferd.prototype = new AirBot();

  function SneakyBot() {
    this.type = "Ground";
    this.atkType = "Poison";
  };  
  SneakyBot.prototype = new Robot();
//solo bot
  function Hubert() {
      this.life += 200;
      this.baseDamage += 150;
  };
  Hubert.prototype = new SneakyBot();

  //battle function for updating hp


  //battle functioning test
  $("#attackButton").on("click", function() {
      let rooger = new Roger();
      let bozo = new Wiliferd();
      bozo.weapon = new Stick();
      rooger.weapon = new Bulldozer();
      console.log("roger", rooger);
      console.log("bozo", bozo);
      bozo.attack(rooger);
      rooger.attack(bozo)
      console.log("roger life", rooger.life);
      console.log("bozo life", bozo.life);

      $("#fight").html(
      `<h1>rooger hits bozo for ${rooger.totalDamage}</h1><h1>bozo has ${bozo.life} hp left</h1>`
      );    


  });






  //Sneaky Robots

});