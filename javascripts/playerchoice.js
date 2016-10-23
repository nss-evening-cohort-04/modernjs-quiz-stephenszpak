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
      alert("hey, pick a weapon!")
    } else {
      $("#fight").slideDown();
      $("#weapons").slideUp();
      
      currentPlayer.weapon = choice.setWeapon();
      // currentEnemy = choice.generateEnemy();

      console.log("current hero", currentPlayer );
      // console.log("current enemy", currentEnemy );
      Botwar.setUpGame(currentPlayer, currentPlayerTwo);
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
    let playerSelect = new Botwar.botOption[selected](name);
    console.log("player one", playerSelect);
    return playerSelect
  };

  choice.setWeapon = function() {
    let currentWeapon = new Botwar.weaponOption[weaponChoice]();
    return currentWeapon;
  };

  return choice;

})(Botwar || {})