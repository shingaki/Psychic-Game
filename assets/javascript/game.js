// function to get a random letter from the alphabet


function getRandomLetter()
{
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerRandomLetter);

    return computerRandomLetter;
}


function resetPage(){

    var gamesWon = 0;
    var gamesLost = 0;
    var guessesLeft = 9;
    var yourGuessesSoFar = "";

    document.getElementById("games-won").innerHTML = "Games Won: " + gamesWon + "<br><br>";
    document.getElementById("games-lost").innerHTML = "Games Lost: " + gamesLost + "<br><br>";
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft + "<br><br>";
    document.getElementById("guesses-so-far").innerHTML = "Your Guesses So Far: " + yourGuessesSoFar + "<br>";

    var computerLetter = getRandomLetter();
    console.log(computerLetter);

}



function matchOrNot(userGuess, computerLetter) {

    console.log("inside matchOrNot function " + computerLetter);


    if (computerLetter.toLowerCase() === userGuess.toLowerCase()) {

            gamesWon = gamesWon + 1;

            resetPage();

    }
        else {

        guessesLeft = guessesLeft - 1;

        if (guessesLeft === 0) {
            gamesLost = gamesLost + 1;
            resetPage();
        }
    }
}



// var userGuess = document.getElementById("userKeyChoice").value;
// document.getElementById("userKeyChoice").innerHTML = userGuess;

function getUserKey() {
    var userChoice = document.getElementById("userKeyChoice").value;
    // document.getElementById("demo").innerHTML = x;
    console.log(userChoice);
    matchOrNot(userChoice);
}


