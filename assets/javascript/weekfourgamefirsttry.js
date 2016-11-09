//create a random target number// 
  var targetNumber = Math.floor((Math.random() * 100) + 1);
   console.log(targetNumber);
  //insert it in the number to guess header//
  $("#numberToGuess").text(targetNumber);

  //create variables for each crystal//
  
  //assign new random number values to each crystal at the start of each game//

  //function for random number for blue crystal//
    var blueCrystal = Math.floor((Math.random() * 25) + 1);
    console.log("blue crystal number " + blueCrystal);
  //green crystal//
    var greenCrystal = Math.floor((Math.random() * 10) + 1);
    console.log("green crystal number " + greenCrystal); 
  //purple crystal//
    var purpleCrystal = Math.floor((Math.random() * 20) + 1);
    console.log("purple crystal number " + purpleCrystal);
  //yellow crystal//
    var yellowCrystal = Math.floor((Math.random() * 15) + 1);
    console.log("yellow crystal number " + yellowCrystal);

  //initialize game with first player click//
  
  if (gameStart = true) {  
  //player chooses a blue crystal; create click function//
  $("#blue").on("click", function() {
      playernumber = playernumber + blueCrystal;
      console.log(playernumber);
      if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#wins").text("Wins: " + wins);
          $("#playernumber").text("Player Number: " + playernumber);
      }
      else if (playernumber === targetNumber) {
          gameStart = false
          console.log("win" + gameStart);
          } else {
          gameStart = false
          console.log("Loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          losses++;
          //$("#losses").addClass("p");
          //$("#yourTotal").text();
          $("#playernumber").text("Player Number: " + playernumber);
          
        }
      });
  //player chooses green crystal//
  $("#green").on("click", function() {
      playernumber = playernumber + greenCrystal;
      console.log(playernumber);
      if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#wins").text("Wins: " + wins);
          $("#playernumber").text("Player Number: " + playernumber);

      }
      else if (playernumber === targetNumber) {
          gameStart = false
          console.log("win" + gameStart);
          } else {
          gameStart = false
          console.log("loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          losses++;
          //$("#losses").addClass("p");
          $("#playernumber").text("Player Number: " + playernumber);
        };
    });
  //player chooses purple crystal//
  $("#purple").on("click", function() {
      playernumber = playernumber + purpleCrystal;
      console.log(playernumber);
      if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#wins").text("Wins: " + wins);
          $("#playernumber").text("Player Number: " + playernumber);
      }
      else if (playernumber === targetNumber) {
          gameStart = false
          console.log("win" + gameStart);
          } else {
          gameStart = false
          console.log("Loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          losses++;
          //$("#losses").addClass("p");
          $("#playernumber").text("Player Number: " + playernumber);
        };
    });
  //player chooses yellow crystal//
  $("#yellow").on("click", function() {
      playernumber = playernumber + yellowCrystal;
      console.log(playernumber);
      if (playernumber < targetNumber) {
          gameStart = true;
          console.log("game start" + gameStart);
          $("#wins").text("Wins: " + wins);
          $("#playernumber").text("Player Number: " + playernumber);
      }
      else if (playernumber === targetNumber) {
          gameStart = false
          console.log("win" + gameStart);
          } else {
          gameStart = false
          console.log("loss" + gameStart);
          $("#losses").text("Losses: " + losses);
          losses++;
          //$("#losses").addClass("p");
          $("#playernumber").text("Player Number: " + playernumber);
        
          
        
        };

        //update losses or wins
        //function updateLosses() {
          //playernumber != targetNumber {
          //losses++
          //console.log("you lose");
          //};
        //};
  $("#losses").html("Losses: " + 1);
  });
        
  
    
}
//display sum of values of crystals clicked by player with "Your Total"//
    $("#playernumber").text("Player Number: " + playernumber);

    //$("#losses").text("Losses: " + losses);


  
  
    

//alert player of win or loss

      






  
  //create an alert for player win//

  //create an alert for player loss//

  //reset game without refreshing page//

      //reset score//

      //reset target number//

      //rest crystal value numbers//
  





