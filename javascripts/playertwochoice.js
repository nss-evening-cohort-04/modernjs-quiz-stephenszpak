var Botwar = (function(playerTwoChoice){
  let userNameTwo = $("#userInputTwo");
  let playerBtnTwo = $(".playerTwoBtn")
  let weaponBtnTwo = $(".weaponBtnTwo")
  let playerTwoSelected, weaponChoiceTwo
  let currentPlayerTwo = {}

  $( "#playerTwoSubmit" ).on( "click", function() {
    currentPlayerTwo = playerTwoChoice.setPlayer();
    $("#weaponsTwo").slideDown();
    $("#chooser2").slideUp();
    console.log("player two", currentPlayerTwo);
  });

  $("#weaponChoiceTwo").on("click", function() {
    if (weaponChoiceTwo === undefined) {
      alert("hey, pick a weapon!")
    } else {
      $("#fight").slideDown();
      $("#weaponsTwo").slideUp();
      
      currentPlayerTwo.weapon = playerTwoChoice.setWeapon();

      console.log("current two hero", currentPlayerTwo );
      Botwar.setUpGame(currentPlayerTwo);
    }
  });

  playerBtnTwo.click(function() {
   	playerTwoSelected = playerBtnTwo.filter(":checked").val();
    console.log("selected two", playerTwoSelected);
  });

  weaponBtnTwo.click(function() {
    weaponChoiceTwo = weaponBtnTwo.filter(":checked").val();
    console.log("weapon selected two", weaponChoiceTwo);
  });

  playerTwoChoice.setPlayer = function() {
    let nameTwo = userNameTwo.val();
    let playerTwoSelect = new Botwar.botOption2[playerTwoselected](nameTwo);
    return playerTwoSelect
  };

  playerTwoChoice.setWeapon = function() {
    let currentWeaponTwo = new Botwar.weapon2Option[weaponChoiceTwo]();
    return currentWeaponTwo;
  };

  return playerTwoChoice;

})(Botwar || {});