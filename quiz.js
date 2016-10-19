"use strict"

function Robot() {
  this.baseDamage = Math.floor(Math.random() * 10);
  this.life = 100;
  this.weapon = null;
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
  this.life = Math.random() * (550 - 150) + 100;
  this.baseDamage += 50;
};
Roger.prototype = new GroundBot();

let newRoger = new Roger();
console.log("roger", newRoger.life);

//Air Based Robots
function AirBot() {
  this.type = "Air";
  this.atkType = "Ranged";
};
AirBot.prototype = new Robot();

function Wiliferd() {
    this.life = Math.random() * (250 - 100) + 100;
    this.baseDamage += 100;
};
Wiliferd.prototype = new AirBot();

//Sneaky Robots
function SneakyBot() {
  this.type = "Ground";
  this.atkType = "Poison";
};  
SneakyBot.prototype = new Robot();

function Hubert() {
    this.life = Math.random() * (275 - 124) + 100;
    this.baseDamage += 150;
};
Hubert.prototype = new SneakyBot();
