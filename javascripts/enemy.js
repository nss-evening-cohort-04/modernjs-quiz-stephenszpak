var Botwar = (function(enemy){

	enemy.Cpu = function (name) {
		this.name = name;
		this.life = 250;
		this.attack = 75;
		this.allowedEnemies = [enemy.Roofus, enemy.Nuk, enemy.Rufio, enemy.Dilly];

		//weapons object
		this.allowedWeapon = ['stick', 'saw', 'hammer', 'ragnarok'];

		//function to randomize the object
		this.generateWeapon = function() {
			let random = Math.round(Math.random() * (this.allowedWeapon.length -1));
			let randomWeapon = this.allowedWeapon[random];
			this.weapon = new Botwar.weaponOptions[randomWeapon]();
		};

		//generate a random enemy to fight
		this.generateEnemy = function() {
			let random = Math.round(Math.random() * (this.allowedEnemies.length -1));
			let randomEnemy = this.allowedEnemies[random];
			return randomEnemy;
		};

		this.generateAttack = function() {
			let random = Math.round(Math.random() * (this.attackSpecialty.length -1));
		};
	};

  	enemy.Nuk = new enemy.Cpu("Nuk Dean");
  	enemy.Nuk.attack += 35;

    enemy.Roofus = new enemy.Cpu("Roofus Doofus");
    enemy.Roofus.attack += 14;

    enemy.Rufio = new enemy.Cpu("Rufio Bangarang");
    enemy.Rufio.attack += 23;

    enemy.Dilly = new enemy.Cpu("Dilly Nilly");
    enemy.Dilly.attack += 50;

    enemy.enemyPlayer = Botwar.Cpu();

	return enemy

})(Botwar || {});