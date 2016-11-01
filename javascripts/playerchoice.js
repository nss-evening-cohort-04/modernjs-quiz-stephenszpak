"use strict";
var Botwar = (function(choice){
  let userName = $("#userName");
  let playerBtn = $(".playerBtn");
  let weaponBtn = $(".weaponBtn");
  let selected, weaponChoice;
  let userNameTwo = $("#userInputTwo");
  let playerBtnTwo = $(".playerTwoBtn");
  let weaponBtnTwo = $(".weaponBtnTwo");
  let playerTwoSelected, weaponChoiceTwo, currentPlayer, currentPlayerTwo;

  //players submit
  $( "#playerOneSubmit" ).on( "click", function() {
    currentPlayer = choice.setPlayer();
    currentPlayerTwo = choice.setPlayerTwo();
    $("#weapons").slideDown();
    $("#weaponsTwo").slideDown();
    $("#chooser").slideUp();
    $("#chooser2").slideUp();
  });

  //weapon submits
  $("#weaponChoice").on("click", function() {

      $("#fight").slideDown();
      $("#weapons").slideUp();
      $("#weaponsTwo").slideUp();
      
      currentPlayer.weapon = choice.setWeapon();
      currentPlayerTwo.weapon = choice.setWeaponTwo();

      Botwar.setUpGame(currentPlayer, currentPlayerTwo);
    
  });

  playerBtn.click(function() {
    selected = playerBtn.filter(":checked").val();
  });

  weaponBtn.click(function() {
    weaponChoice = weaponBtn.filter(":checked").val();
  });

  choice.setPlayer = function() {
    let name = userName.val();
    let playerSelect = new Botwar.botOption[selected](name);
    return playerSelect;
  };

  choice.setWeapon = function() {
    let currentWeapon = new Botwar.weaponOption[weaponChoice]();
    return currentWeapon;
  };

  playerBtnTwo.click(function() {
    playerTwoSelected = playerBtnTwo.filter(":checked").val();
  });

  weaponBtnTwo.click(function() {
    weaponChoiceTwo = weaponBtnTwo.filter(":checked").val();
  });

  choice.setPlayerTwo = function() {
    let nameTwo = userNameTwo.val();
    let playerTwoSelect = new Botwar.botOption2[playerTwoSelected](nameTwo);
    return playerTwoSelect;
  };

  choice.setWeaponTwo = function() {
    let currentWeaponTwo = new Botwar.weapon2Option[weaponChoiceTwo]();
    return currentWeaponTwo;
  };

  return choice;

})(Botwar || {});