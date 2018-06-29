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
    c_atk: 15
};

var obi = {
    name: "Obi-Wan",
    hp: 125,
    base_atk: 24,
    atk: 24,
    c_atk: 10
};

var wind = {
    name: "Mace Windu",
    hp: 150,
    base_atk: 24,
    atk: 24,
    c_atk: 20
};

var doo = {
    name: "Count Dooku",
    hp: 200,
    base_atk: 6,
    atk: 6,
    c_atk: 20
};

// Variables
var choseFighter1 = false;
var choseFighter2 = false;

var fighter1;
var fighter2;

var health1 = 0;
var health2 = 0;

// Document Ready
$(function() {

    $(".fightSprite").hide();
    $(".hpBar").hide();
    $(".atkBtn").hide();

    //Events

    $(".mugFighter").click(fighterSelect);
    $(".beginCombat").click(beginCombat);
    $(".atkBtn").click(combatCalc);

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

        $( "#anakinSprite1" ).show();
        choseFighter1 = true;
        $(this).prependTo( "#fighterText1" );
        $(this).addClass( "lock" );
        $("#fighterName1").text("ANAKIN SKYWALKER");
        return;
    }
    
     else if ( $(this).is("#mugAnakin") && choseFighter1 && !$(this).is(".lock")) {

        if (choseFighter2){
            alert("Please click begin combat.");
            return;
        };
        
        $("#anakinSprite2").show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $("#fighterName2").text("ANAKIN SKYWALKER");
        return;
    };

    if ( $(this).is("#mugAnakin") && $("#anakinSprite1").is(":visible") && $(this).is(".lock")) {

        $( "#anakinSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug1" );
        $(this).removeClass( "lock" );
        $("#fighterName1").text("FIGHTER 1");
        return;

    } else if ( $(this).is("#mugAnakin") && $("#anakinSprite2").is(":visible") && $(this).is(".lock")){

        $( "#anakinSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug1" );
        $(this).removeClass( "lock" );
        $("#fighterName2").text("FIGHTER 2");
        return;

    };

    // Obi Lock and Cancel
    if ( $(this).is("#mugObi") && !choseFighter1 && !$(this).is(".lock")) {

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

        $("#obiSprite2").show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $("#fighterName2").text("OBI-WAN KENOBI");
        return;

    };

    if ( $(this).is("#mugObi") && $("#obiSprite1").is(":visible") && $(this).is(".lock")) {

        $( "#obiSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug2" );
        $(this).removeClass( "lock" );
        $("#fighterName1").text("FIGHTER 1");
        return;

    } else if ( $(this).is("#mugObi") && $("#obiSprite2").is(":visible") && $(this).is(".lock")){

        $( "#obiSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug2" );
        $(this).removeClass( "lock" );
        $("#fighterName2").text("FIGHTER 2");
        return;

    };

    // Windu Lock and Cancel
    if ( $(this).is("#mugWind") && !choseFighter1 && !$(this).is(".lock")) {

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
        
        $( "#windSprite2" ).show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $( "#fighterName2" ).text( "MACE WINDU" );
        return;
    };

    if ( $(this).is( "#mugWind" ) && $( "#windSprite1" ).is(":visible") && $(this).is(".lock")) {

        $( "#windSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug3" );
        $(this).removeClass( "lock" );
        $("#fighterName1").text("FIGHTER 1");
        return;

    } else if ( $(this).is( "#mugWind" ) && $( "#windSprite2" ).is(":visible") && $(this).is(".lock")){

        $( "#windSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug3" );
        $(this).removeClass( "lock" );
        $("#fighterName2").text("FIGHTER 2");
        return;

    };

    // Dooku Lock and Cancel
    if ( $(this).is("#mugDoo") && !choseFighter1 && !$(this).is(".lock")) {

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
        
        $( "#dooSprite2" ).show();
        choseFighter2 = true;
        $(this).prependTo("#fighterText2");
        $(this).addClass( "lock" );
        $( "#fighterName2" ).text( "COUNT DOOKU" );
        return;
    };

    if ( $(this).is( "#mugDoo" ) && $( "#dooSprite1" ).is(":visible") && $(this).is(".lock")) {

        $( "#dooSprite1" ).hide();
        choseFighter1 = false;
        $(this).prependTo( ".mug4" );
        $(this).removeClass( "lock" );
        $("#fighterName1").text("FIGHTER 1");
        return;

    } else if ( $(this).is( "#mugDoo" ) && $( "#dooSprite2" ).is(":visible") && $(this).is(".lock")){

        $( "#dooSprite2" ).hide();
        choseFighter2 = false;
        $(this).prependTo( ".mug4" );
        $(this).removeClass( "lock" );
        $("#fighterName2").text("FIGHTER 2");
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

    $( ".combatTxt" ).text("");
    $( "#status").text("Combat");
    lockFighters();
    buildStats();
    $(this).hide();
    $(".atkBtn").fadeIn(1000);
    console.log(fighter2);

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

    fighter1.hp = fighter1.hp - fighter2.c_atk;

    $( "#combatText1" ).text(fighter2.name + " has dealt " + fighter2.c_atk + " points of damage to " + fighter1.name + "!" );

    fighter2.hp = fighter2.hp - fighter1.atk;

    $( "#combatText2" ).text(fighter1.name + " has dealt " + fighter1.atk + " points of damage to " + fighter2.name + "!" );

    (fighter1.atk+=fighter1.base_atk);

    refresh();

};
//^End of combatCalc()

function refresh(){

    $("#leftHp").text(fighter1.hp);

    $("#rightHp").text(fighter2.hp);

    if( fighter1.hp <= 0 ){

        fighter1.hp = 0;
        console.log("Game over");
        $("#rightHp").text(fighter2.hp);

        return;

    };

    if( fighter2.hp <= 0 ){

        fighter2.hp = 0;
        $("#rightHp").text(fighter2.hp);
        console.log("Victory!");
        $( "#status").text("You have defeated " + fighter2.name +"!");
        $("#fighterName2").text("FIGHTER 2");

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

        fighter1.hp = fighter1.maxHP;
        $(".beginCombat").show();
        $(".atkBtn").hide();
        choseFighter2 = false;
        $(".hpBar").fadeOut(1000);
        return;

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