// function to get a random letter from the alphabet

var computerGuess;
var userGuess;


document.onkeyup = function(event) {

    // Determines which key was pressed.
    userGuess = event.key;

    if (userGuess !== computerGuess) {
        alert("userGuess =" + userGuess);
        alert("computerGuess = " + computerGuess);

        guessesLeft = (guessesLeft - 1);
        document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft + "<br><br>";

        if (guessesLeft === 0)
        {
            gamesLost = (gamesLost + 1);
            resetPage();
        }
    }
    else if
        (userGuess === computerGuess)
    {
        alert("userGuess = computerGuess");

        gamesWon = (gamesWon + 1);
        resetPage()
    }
};

var gamesWon = 0;
var gamesLost = 0;
var guessesLeft;
var yourGuessesSoFar;

function resetPage(){

    guessesLeft = 9;
    yourGuessesSoFar = "";

    document.getElementById("games-won").innerHTML = "Games Won: " + gamesWon + "<br><br>";
    document.getElementById("games-lost").innerHTML = "Games Lost: " + gamesLost + "<br><br>";
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft + "<br><br>";
    document.getElementById("guesses-so-far").innerHTML = "Your Guesses So Far: " + yourGuessesSoFar + "<br>";

    computerGuess = getRandomLetter();
    console.log(computerGuess);


    return guessesLeft;
    return yourGuessesSoFar;

}


function getRandomLetter()
{
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);

    return computerGuess;
}



function matchOrNot() {

    console.log("inside matchOrNot function " + computerGuess);


    if (computerGuess.toLowerCase() === userGuess.toLowerCase()) {

        gamesWon = gamesWon + 1;

        resetPage();

    }
    else {

        guessesLeft = guessesLeft - 1;
        alert(guessesLeft);

        if (guessesLeft === 0) {
            gamesLost = gamesLost + 1;
            resetPage();
        }
    }
}








