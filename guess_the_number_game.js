let rnd = Math.floor(Math.random() * 100);
no_of_guesses = 0;
let num;
do {
  num = prompt("Enter the number: ");
  num = Number.parseInt(num);
  if (num > rnd) {
    console.log("Entered number is greater than the actual number");
  }
  else if (num < rnd) {
    console.log("Entered number is smaller than the actual number");
  }
  else {
    console.log("Congratulations! You guessed the number correctly");
  }
  no_of_guesses = no_of_guesses + 1;
} while (num != rnd);
score = 100 - no_of_guesses;
console.log("Your Score: " + score);