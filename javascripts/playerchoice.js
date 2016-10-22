var Botwar = (function(choice){
  let userName = $("#userName");
  let playerBtn = $(".playerBtn")
  let weaponBtn = $(".weaponBtn")
  let selected, weaponChoice

  $( "#playerOneSubmit" ).on( "click", function() {
    currentPlayer = choice.setPlayer();
    $("#weapons").slideDown();
    $("#chooser").slideUp();
  });

  $("#weaponChoice").on("click", function() {
    if (weaponChoice === undefined) {
      alert("hey, pick a weapon! You don't want to be weaponless in the fight against this chef!")
    } else {
      $("#fight").slideDown();
      $("#weapons").slideUp();
      
      currentPlayer.weapon = choice.setWeapon();
      currentEnemy = choice.generateEnemy();

      console.log("current hero", currentPlayer );
      console.log("current enemy", currentEnemy );
      Botwar.setUpGame(currentPlayer, currentEnemy);
    }
  });

  playerBtn.click(function() {
    selected = playerBtn.filter(":checked").val();
    console.log("selected", selected);
  });

  weaponBtn.click(function() {
    weaponChoice = weaponBtn.filter(":checked").val();
    console.log("weapon selected", weaponChoice);
  });

  choice.setPlayer = function() {
    let name = userName.val();
    console.log(Botwar);
    let playerSelect = new Botwar.botOption[selected](name);
    return playerSelect
  };

  choice.setWeapon = function() {
    let currentWeapon = new Botwar.weaponOption[weaponChoice]();
    return currentWeapon;
  };

  return choice;

})(Botwar || {})