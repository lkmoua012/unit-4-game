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

// Characters
var anakin = {
    name: "Anakin",
    hp: 100,
    base_atk: 15,
    atk: 15,
    c_atk: 15,
    gifIdle: "assets/images/anaIdle.gif",
    gifAtk1: "assets/images/anaAtk1.gif",
    gifHurt: "assets/images/anaHurt.gif",
    gifDeath: "assets/images/anaDeath.gif",
    animAtk1: 900,
};

var obi = {
    name: "Obi-Wan",
    hp: 125,
    base_atk: 24,
    atk: 24,
    c_atk: 10,
    gifIdle: "assets/images/obiIdle.gif",
    gifAtk1: "assets/images/obiAtk1.gif",
    gifHurt: "assets/images/obiHurt.gif",
    gifDeath: "assets/images/obiDeath.gif",
    animAtk1: 1000,
};

var wind = {
    name: "Mace Windu",
    hp: 150,
    base_atk: 24,
    atk: 24,
    c_atk: 20,
    gifIdle: "assets/images/windIdle.gif",
    gifAtk1: "assets/images/windAtk1.gif",
    gifHurt: "assets/images/idleWindu.png",
    gifDeath: "assets/images/idleWindu.png"
};

var doo = {
    name: "Count Dooku",
    hp: 200,
    base_atk: 6,
    atk: 6,
    c_atk: 20,
    gifIdle: "assets/images/idleDooku.png",
    gifAtk1: "assets/images/idleDooku.png",
    gifHurt: "assets/images/idleDooku.png",
    gifDeath: "assets/images/idleDooku.png",
};

// Variables
var choseFighter1 = false;
var choseFighter2 = false;

var fighter1;
var fighter2;

var health1 = 0;
var health2 = 0;

// Audio Bank

var anaSelect = new Audio("assets/sounds/ignite1.wav");
var obiSelect = new Audio("assets/sounds/ignite2.wav");
var windSelect = new Audio("assets/sounds/ignite3.wav");
var dooSelect = new Audio("assets/sounds/ignite4.wav");
var deact = new Audio("assets/sounds/deact.wav");
var confirm = new Audio("assets/sounds/confirm.wav");
var swing1 = new Audio("assets/sounds/swing1.wav");
var death = new Audio("assets/sounds/death.wav");
var hit = new Audio("assets/sounds/hit.wav");


// Document Ready
$(function() {

    $(".fightSprite").hide();
    $(".atkBtn").hide();
    $(".contBtn").hide();
    $(".contBtn2").hide();

    //Events

    $(".mugFighter").click(fighterSelect);
    $(".beginCombat").click(beginCombat);
    $(".atkBtn").click(combatCalc);
    $(".contBtn").click(combatCalc2);
    $(".contBtn2").click(refresh);

    //

    // Choose Fighter 1


/*function hoverFighter(){

    // If hovering over Anakin and choseFighter1 = false
        if ( $(this).is("#mugAnakin") && choseFighter1 == false ){
            $("#anakinSprite1").toggle();
    // When player is choosing opponent
    }   else if ( $(this).is("#mugAnakin") && choseFighter1 == true){
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
    //End Hover Function
};
*/


// Functions
function fighterSelect(){

    // Anakin Lock and Cancel
    if ( $(this).is("#mugAnakin") && !choseFighter1 && !$(this).is(".lock")) {

        anaSelect.play();
        $( "#anakinSprite1" ).show();
        choseFighter1 = true;
        $(this).prependTo( "#fighterText1" );
        $(this).addClass( "lock" );
        $(this).css("transform", "rotateY(180deg)");
        $("#fighterName1").text("ANAKIN SKYWALKER");
        return;
    }
    
     else if ( $(this).is("#mugAnakin") && choseFighter1 && !$(this).is(".lock")) {

        if (choseFighter2){
            alert("Please click begin combat.");
            return;
        };

        anaSelect.play();
        $("#anakinSprite2").show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $("#fighterName2").text("ANAKIN SKYWALKER");
        return;
    };

    if ( $(this).is("#mugAnakin") && $("#anakinSprite1").is(":visible") && $(this).is(".lock")) {

        deact.play();
        $( "#anakinSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug1" );
        $(this).removeClass( "lock" );
        $(this).css("transform", "none");
        $("#fighterName1").text("");
        return;

    } else if ( $(this).is("#mugAnakin") && $("#anakinSprite2").is(":visible") && $(this).is(".lock")){

        deact.play();
        $( "#anakinSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug1" );
        $(this).removeClass( "lock" );
        $("#fighterName2").text("");
        return;

    };

    // Obi Lock and Cancel
    if ( $(this).is("#mugObi") && !choseFighter1 && !$(this).is(".lock")) {

        obiSelect.play();
        $("#obiSprite1").show();
        choseFighter1 = true;
        $(this).prependTo("#fighterText1");
        $(this).addClass( "lock" );
        $("#fighterName1").text("OBI-WAN KENOBI");
        return;

    }
    
    else if ( $(this).is("#mugObi") && choseFighter1 && !$(this).is(".lock")) {

        if (choseFighter2){
            alert("Please click begin combat.");
            return;
        };

        obiSelect.play();
        $("#obiSprite2").show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $(this).css("transform", "rotateY(180deg)");
        $("#fighterName2").text("OBI-WAN KENOBI");
        return;

    };

    if ( $(this).is("#mugObi") && $("#obiSprite1").is(":visible") && $(this).is(".lock")) {

        deact.play();
        $( "#obiSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug2" );
        $(this).removeClass( "lock" );
        $("#fighterName1").text("");
        return;

    } else if ( $(this).is("#mugObi") && $("#obiSprite2").is(":visible") && $(this).is(".lock")){

        deact.play();
        $( "#obiSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug2" );
        $(this).removeClass( "lock" );
        $(this).css("transform", "none");
        $("#fighterName2").text("");
        return;

    };

    // Windu Lock and Cancel
    if ( $(this).is("#mugWind") && !choseFighter1 && !$(this).is(".lock")) {

        windSelect.play();
        $( "#windSprite1" ).show();
        choseFighter1 = true;
        $(this).prependTo( "#fighterText1" );
        $(this).addClass( "lock" );
        $( "#fighterName1" ).text( "MACE WINDU" );
        return;
    }
    
     else if ( $(this).is("#mugWind") && choseFighter1 && !$(this).is(".lock")) {

        if (choseFighter2){
            alert("Please click begin combat.");
            return;
        };
        
        windSelect.play();
        $( "#windSprite2" ).show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $( "#fighterName2" ).text( "MACE WINDU" );
        return;
    };

    if ( $(this).is( "#mugWind" ) && $( "#windSprite1" ).is(":visible") && $(this).is(".lock")) {

        deact.play();
        $( "#windSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug3" );
        $(this).removeClass( "lock" );
        $("#fighterName1").text("");
        return;

    } else if ( $(this).is( "#mugWind" ) && $( "#windSprite2" ).is(":visible") && $(this).is(".lock")){

        deact.play();
        $( "#windSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug3" );
        $(this).removeClass( "lock" );
        $("#fighterName2").text("");
        return;

    };

    // Dooku Lock and Cancel
    if ( $(this).is("#mugDoo") && !choseFighter1 && !$(this).is(".lock")) {

        dooSelect.play();
        $( "#dooSprite1" ).show();
        choseFighter1 = true;
        $(this).prependTo( "#fighterText1" );
        $(this).addClass( "lock" );
        $( "#fighterName1" ).text( "COUNT DOOKU" );
        return;
    }
    
     else if ( $(this).is("#mugDoo") && choseFighter1 && !$(this).is(".lock")) {

        if (choseFighter2){
            alert("Please click begin combat.");
            return;
        };
        
        dooSelect.play();
        $( "#dooSprite2" ).show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $( "#fighterName2" ).text( "COUNT DOOKU" );
        return;
    };

    if ( $(this).is( "#mugDoo" ) && $( "#dooSprite1" ).is(":visible") && $(this).is(".lock")) {

        deact.play();
        $( "#dooSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug4" );
        $(this).removeClass( "lock" );
        $("#fighterName1").text("");
        return;

    } else if ( $(this).is( "#mugDoo" ) && $( "#dooSprite2" ).is(":visible") && $(this).is(".lock")){

        deact.play();
        $( "#dooSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug4" );
        $(this).removeClass( "lock" );
        $("#fighterName2").text("");
        return;

    };

};
// ^ End of fighterSelect()


function beginCombat(){

    if (!choseFighter1 && !choseFighter2) {
        alert("Please choose your fighters.");
        return false;
    };

    if (choseFighter1 && !choseFighter2) {
        alert("Please choose your opponent.");
        return false;
    };

    confirm.play();
    $( ".combatTxt" ).text("");
    $( "#status").text("Combat");
    lockFighters();
    buildStats();
    $(this).hide();
    $(".atkBtn").fadeIn(500);

};
// ^End of beginCombat()

function lockFighters(){

    if ($("#anakinSprite1").is(":visible")){
        fighter1 = anakin;
    };

    if ($("#obiSprite1").is(":visible")){
        fighter1 = obi;
    };

    if ($("#windSprite1").is(":visible")){
        fighter1 = wind;
    };

    if ($("#dooSprite1").is(":visible")){
        fighter1 = doo;
    };


    if ($("#anakinSprite2").is(":visible")){
        fighter2 = anakin;
    };

    if ($("#obiSprite2").is(":visible")){
        fighter2 = obi;
    };

    if ($("#windSprite2").is(":visible")){
        fighter2 = wind;
    };

    if ($("#dooSprite2").is(":visible")){
        fighter2 = doo;
    };

};
//^End of lockFighters()

function buildStats(){

    if (fighter1 == anakin){
        $("#leftHp").text(anakin.hp);
    };

    if (fighter1 == obi){
        $("#leftHp").text(obi.hp);
    };

    if (fighter1 == wind){
        $("#leftHp").text(wind.hp);
    };

    if (fighter1 == doo){
        $("#leftHp").text(doo.hp);
    };


    if (fighter2 == anakin){
        $("#leftHp").text(anakin.hp);
    };

    if (fighter2 == obi){
        $("#rightHp").text(obi.hp);
    };

    if (fighter2 == wind){
        $("#leftHp").text(wind.hp);
    };

    if (fighter2 == doo){
        $("#rightHp").text(doo.hp);
    };

};
//^End of buildStats()

function combatCalc(){

    $(".atkBtn").hide();

    swing1.play();
    $(".sprite2").attr("src", fighter2.gifAtk1);
    $(".sprite1").attr("src", fighter1.gifHurt);

    setTimeout(function(){

        hit.play();

    }, 200);

    setTimeout(function(){

        $(".sprite1").attr("src", fighter1.gifIdle);

    }, 500);

    setTimeout(function() {

        $(".sprite2").attr("src", fighter2.gifIdle);
        $(".contBtn").show();

    }, fighter2.animAtk1);

    fighter1.hp = fighter1.hp - fighter2.c_atk;

    $( "#combatText1" ).text(fighter2.name + " has dealt " + fighter2.c_atk + " points of damage to " + fighter1.name + "!" );

};
//^End of combatCalc1()

function combatCalc2(){

    $(".contBtn").hide();

    swing1.play();
    $(".sprite1").attr("src", fighter1.gifAtk1);
    $(".sprite2").attr("src", fighter2.gifHurt);

    setTimeout(function(){

        hit.play();

    }, 200);

    setTimeout(function(){

        $(".sprite2").attr("src", fighter2.gifIdle);

    }, 500);

    setTimeout(function() {

        $(".sprite1").attr("src", fighter1.gifIdle);

    }, fighter1.animAtk1);

    fighter2.hp = fighter2.hp - fighter1.atk;

    $( "#combatText1" ).text(fighter1.name + " has dealt " + fighter1.atk + " points of damage to " + fighter2.name + "!" );

    (fighter1.atk+=fighter1.base_atk);

    window.setTimeout(refresh, 1100);

};
//^End of combatCalc2()

function refresh(){

    $(".atkBtn").show();

    $("#leftHp").text(fighter1.hp);

    $("#rightHp").text(fighter2.hp);

    if( fighter1.hp <= 0 ){

        fighter1.hp = 0;
        death.play();
        $(".sprite1").attr("src", fighter1.gifDeath);
        $("#leftHp").text(fighter1.hp);
        $( "#status").text("You have been defeated. Game over!");

        return;

    };

    if( fighter2.hp <= 0 ){

        $(".atkBtn").hide();
        death.play();
        $(".sprite2").attr("src", fighter2.gifDeath);
        fighter2.hp = 0;
        $("#rightHp").text(fighter2.hp);
        $( "#status").text("You have defeated " + fighter2.name +"!");

        setTimeout(function(){

            if (fighter2==anakin){
                $( ".anaSprite" ).remove();
            };
    
            if (fighter2==obi){
                $( ".obiSprite" ).remove();
            };
    
            if (fighter2==wind){
                $( ".windSprite" ).remove();
            };
    
            if (fighter2==doo){
                $( ".dooSprite" ).remove();
            };
    
            $("#anakinSprite2").attr("src", anakin.gifIdle);
            $("#obiSprite2").attr("src", obi.gifIdle);
            $("#windSprite2").attr("src", wind.gifIdle);
            $("#dooSprite2").attr("src", doo.gifIdle);
            $("#fighterName2").text("");
            fighter1.hp = fighter1.maxHP;
            $(".beginCombat").fadeIn();
            choseFighter2 = false;
            return;
    
        }, 3000);

    };

};
//^End of refresh()

/*function newGame(){
    $(".fightSprite").hide();
};
*/



// DO NOT REMOVE - END OF READY FUNCTION
});


/* TO DO

- Game Balance
    - Media query for consistent background game screen?
- Polish
- Gifs!

*/