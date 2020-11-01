var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1++;
var location3 = location2++;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  /* prompt (assigned to variable guess) is returned in the form of a string. not a number. If cancelled/returned blank, null is returned instead. */
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guess++;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits++;

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

var stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${
  3 / guesses
}.`;
