// function to get a random letter from the alphabet


function getRandomLetter()
{
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerRandomLetter);
}

function resetPsychicGame()
{
    var guessesLeft = 0;
    var yourGuessesSoFar = "";

    getRandomLetter();
}


var gamesWon;
var gamesLost;
var guessesLeft;
var yourGuessesSoFar;

