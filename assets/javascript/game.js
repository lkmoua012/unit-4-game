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
    $(".mugFighter").hover(function(){

        console.log( 'hovering' );

    // If hovering over Anakin and choseFighter1 = false
       if ( $(this).is("#mugAnakin") && choseFighter1 == false ){
            $("#anakinSprite1").toggle();
    } else {
        //    $("#anakinSprite2").toggle();
    };

    /*
       if ($(this).is("#mugObi")){
           console.log ("Choose Obi");
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

   })

// End function ready //   
});