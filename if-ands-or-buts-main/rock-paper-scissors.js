const prompt = require('prompt-sync')({sigint: true});

let Player1Choice = (prompt("Player 1, enter rock, paper or scissors: "));

let Player2Choice = (prompt("Player 2, enter rock, paper or scissors: ")); 



// code in favor of player 1
if (Player1Choice === "rock" && Player2Choice === "scissors"){
    console.log("Player 1 wins, you lose player 2!");
}
if (Player1Choice === "paper" && Player2Choice === "rock"){
    console.log("Player 1 wins, you lose player 2!");
}
if (Player1Choice === "scissors" && Player2Choice === "paper"){
    console.log("Player 1 wins, you lose player 2!");
}



// code in favor of player 2
if (Player2Choice === "rock" && Player1Choice === "scissors"){
    console.log("Player 2 wins, you lose player 1!");
}
if (Player2Choice === "paper" && Player1Choice === "rock"){
    console.log("Player 2 wins, you lose player 1!");
}
if (Player2Choice === "scissors" && Player1Choice === "paper"){
    console.log("Player 2 wins, you lose player 1!")
}


// code for ties 
if (Player2Choice === "rock" && Player1Choice === "rock"){
    console.log("Tie");
}
if (Player2Choice === "paper" && Player1Choice === "paper"){
    console.log("Tie");
}
if (Player2Choice === "scissors" && Player1Choice === "scissors"){
    console.log("Tie");
}


/*

// error possibilities 
if (Player1Choice !== "rock"){
    console.log("error, reentry your choices");
}
else(Player1Choice !== "paper");{
    console.log("error, reentry your choices");
}
if (Player1Choice !== "scissors"){
    console.log("error, reentry your choices");
}


if (Player2Choice !== "rock"){
    console.log("error, reentry your choices");
}
else (Player2Choice !== "paper");{
    console.log("error, reentry your choices");
}
if (Player2Choice !== "scissors"){
    console.log("error, reentry your choices");
}

*/





