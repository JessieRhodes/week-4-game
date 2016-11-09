  
  var gameStart = true
  //player score, wins and losses starts at 0//
  var playernumber = 0;
  var wins = 0;
  var losses = 0;
  
  

  //create a random target number// 
  var targetNumber = Math.floor((Math.random() * 120) + 19);
   console.log(targetNumber);

  //insert it in the number to guess header//
  $("#numberToGuess").text(targetNumber);

  //create variables for each crystal//
  
  //assign new random number values to each crystal at the start of each game//

  //function for random number for blue crystal//
    var blueCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("blue crystal number " + blueCrystal);
  //green crystal//
    var greenCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("green crystal number " + greenCrystal); 
  //purple crystal//
    var purpleCrystal = Math.floor((Math.random() * 22) + 1);
    console.log("purple crystal number " + purpleCrystal);
  //yellow crystal//
    var yellowCrystal = Math.floor((Math.random() * 12) + 1);
    console.log("yellow crystal number " + yellowCrystal);

    function Restart(){
        
        //loss restart
        if (losses === 1) {
          losses = 0;
          $("#losses").html("Losses: " + losses);
          console.log(losses);
          alert("You lose! Your total has been reset. Try again!");
          $("#numberToGuess").text(Math.floor((Math.random() * 120) + 19));
          playernumber = 0;
          $("#playernumber").html("Player Number: " + 0);
          console.log(playernumber);
        }

        //win restart
        else if (wins === 1) {
          wins = 0;
          $("#wins").html("Wins: " + wins);
          alert("You win! Your total has been reset. Go for another win!");
        }
        
        
      }

  //initialize game with first player click//
  
  if (gameStart = true) {  
  //player chooses a blue crystal; create click function//
    $("#blue").on("click", function() {
        playernumber = playernumber + blueCrystal;
        console.log(playernumber);
        if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#playernumber").text("Player Number: " + playernumber);
        }
          else if (playernumber === targetNumber) {
          wins++;
          $("#wins").text("Wins: " + wins);
          gameStart = false;
          console.log("win" + gameStart);
          } 
          else {
          losses++;
          gameStart = false;
          console.log("Loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          $("#playernumber").text("Player Number: " + playernumber);
          Restart();
          }
    });
  //player chooses green crystal//
  $("#green").on("click", function() {
      playernumber = playernumber + greenCrystal;
      console.log(playernumber);
      if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#playernumber").text("Player Number: " + playernumber);

      }
      else if (playernumber === targetNumber) {
          wins++;
          $("#wins").text("Wins: " + wins);
          gameStart = false;
          console.log("win" + gameStart);
      } 
          else {
          losses++;
          gameStart = false;
          console.log("loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          //$("#losses").addClass("p");
          $("#playernumber").text("Player Number: " + playernumber);
          Restart();
          };
  });
  //player chooses purple crystal//
  $("#purple").on("click", function() {
      playernumber = playernumber + purpleCrystal;
      console.log(playernumber);
      if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#playernumber").text("Player Number: " + playernumber);
      }
      else if (playernumber === targetNumber) {
          wins++;
          $("#wins").text("Wins: " + wins);
          gameStart = false;
          console.log("win" + gameStart);
      } 
          else {
          gameStart = false;
          losses++;
          console.log("Loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          $("#playernumber").text("Player Number: " + playernumber);
          Restart();
          }
    });
  //player chooses yellow crystal//
  $("#yellow").on("click", function() {
      playernumber = playernumber + yellowCrystal;
      console.log(playernumber);
      if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#playernumber").text("Player Number: " + playernumber);
      }
      else if (playernumber === targetNumber) {
          wins++;
          $("#wins").text("Wins: " + wins);
          gameStart = false
          console.log("win" + gameStart);
          } 
          else {
          losses++;
          gameStart = false
          console.log("loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          $("#playernumber").text("Player Number: " + playernumber);
          Restart();
          }
      
      // function Restart(){
        
      //   //loss restart
      //   if (losses === 1) {
      //     losses = 0;
      //     $("#losses").html("Losses: " + losses);
      //     console.log(losses);
      //     alert("You lose! Your total has been reset. Try again!");
      //     $("#numberToGuess").text(targetNumber);
      //     playernumber = 0;
      //     $("#playernumber").html("Player Number: " + 0);
      //     console.log(playernumber);
      //   }

      //   //win restart
      //   else if (wins === 1) {
      //     wins = 0;
      //     $("#wins").html("Wins: " + wins);
      //     alert("You win! Your total has been reset. Go for another win!");
      //   }
        
        
      // }
  });
        
}
        //display sum of values of crystals clicked by player with "Your Total"//
        $("#playernumber").text("Player Number: " + playernumber);





