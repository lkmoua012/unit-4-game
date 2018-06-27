/*

var Anakin {
    hp: 125
    atk: 12
    c_atk: 15
}

var Obi-Wan {
    hp: 150
    atk: 18
    c_atk: 20
}

var Windu {
    hp: 175
    atk: 21
    c_atk: 30
}

var Dooku {
    hp: 200
    atk: 25
    c_atk: 40
}

var fighter1 = what user picked.

var fighter2 = what user picked for opponent.

progress bars for hp?
have progress bar 100% = total hp

button that calls combat function

COMBAT FUNCTION // Don't display until combatStart = true;
Applies damage to both fighters.
Display combat text.


Function that runs RNG and stores it into a variable

Function for each animation play.
Have combat randomize animation function.

--- Game Flow ---

1 - Choose fighter.
    - Create an undo function.
2 - Choose opponent.
    - Create an undo function.
3 - Click "fight" to initiate combat.
4 - Click "attack" to reduce opponent's hp.
5 - If opponent hp <= 0
    - Player wins, update status text.
    - Restore player hp.
    - Choose new opponent.
    - Trophy +1.
  - If player hp <= 0
    - Game Over.
    - Click "New Game."


*/

var anakin = {
    hp: 100,
    atk: 12,
    c_atk: 15
};

var obi = {
    hp: 150,
    atk: 18,
    c_atk: 20
};

var choseFighter1 = false;
var choseFighter2 = false;

$(function() {

    $(".fightSprite").hide();

    // Choose Fighter 1

/*
    $(".mugFighter").hover(function(){

    // If hovering over Anakin and choseFighter1 = false
       if ( $(this).is("#mugAnakin") && choseFighter1 == false ){
            $("#anakinSprite1").toggle();
    // When player is choosing opponent
    } else if ( $(this).is("#mugAnakin") && choseFighter1 == true){
            $("#anakinSprite2").toggle();
    };

    // If hover over Obi and choseFighter1 = false
        if ( $(this).is("#mugObi") && choseFighter1 == false ){
           $("#obiSprite1").toggle();
    // Choosing opponent
    } else if ( $(this).is("#mugObi") ){
            $("#obiSprite2").toggle();
    };

    
       if ($(this).is("#mugWindu")){
           console.log ("Choose Windu");
    };

       if ($(this).is("#mugDooku")){
           console.log ("Choose Dooku");
    };
    */
    //End Hover Function
   });

   $(".mugFighter").click(function(){

    console.log("Fighter Chosen");

    // Anakin
    if ( $(this).is("#mugAnakin") && choseFighter1 == false) {

        $("#anakinSprite1").show();
        choseFighter1 = true;
        $(this).appendTo("#fighterText1");

    } else if ( $(this).is("#mugAnakin") && choseFighter1 == true) {
        
        $("#anakinSprite2").show();
        choseFighter2 = true;
        $(this).appendTo("#fighterText2");

    };

    // Obi
    if ( $(this).is("#mugObi") && choseFighter1 == false) {

        $("#obiSprite1").show();
        choseFighter1 = true;
        $(this).appendTo("#fighterText1");

    } else if ( $(this).is("#mugObi") && choseFighter1 == true) {
        
        $("#obiSprite2").show();
        choseFighter2 = true;
        $(this).appendTo("#fighterText2");

    };

    // if Windu

    // if Dooku

   });

   function undoFighter() {
        if ( $(this).is("#fighterButton1, #mugAnakin")){
            $("anakinSprite1").hide();
            choseFighter1 = false;
            $("#mugAnakin").prependTo("#fighterSelect");
        }
        else if ( $(this).is("#fighterButton2, #mugAnakin")){
            $("anakinSprite2").hide();
            choseFighter2 = false;
            $("#mugAnakin").prependTo("#fighterSelect");
        };
    

   };



// End function ready //   