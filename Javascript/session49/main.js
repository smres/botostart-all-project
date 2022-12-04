const secretPhrases = ["never", "you", "that", "bullet", "break"];

let randomItem = "";
let checkedClick = [];
let result = "";
let mistakes = 0;

function setRandomItem() {
  randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
  document.getElementById("letters").addEventListener("click", buttonHandler);
  console.log(randomItem);
}

function setUnderScores() {
  let splitedWord = randomItem.split("");
  let mappedWord = splitedWord.map((letter) => {
    return checkedClick.indexOf(letter) >= 0 ? letter : "_";
  });
  result = mappedWord.join("");
  document.getElementById("clue").innerHTML = `<p>${result}</p>`;
  console.log("sss", mappedWord);
}

function checkIfWon() {
  if (randomItem === result) {
    document.getElementById("gameover").querySelector("p").style.display =
      "block";
    document.getElementById("gameover").innerText = "YOU WIN..."
    document.getElementById("image").querySelector("img").src = `/assets/winner.png`;
  }
}

function checkIfLost() {
  if (mistakes === 6) {
    document.getElementById("gameover").querySelector("p").style.display =
      "block";
    document.getElementById(
      "clue"
    ).innerHTML = `<p>Random word is: ${randomItem}</p>`;
  }
}

function buttonHandler(event) {
  console.log(event.target.id);
  letterHandler(event.target.id);
}

function updateHangmanPicture() {
document.getElementById("image").querySelector("img").src = `/assets/hangman${mistakes}.png`;
}

function letterHandler(letter) {
  letter = letter.toLowerCase();
  checkedClick.indexOf(letter) >= 0 ? null : checkedClick.push(letter);
  document.getElementById(letter.toUpperCase()).classList.add("used");

  if (randomItem.indexOf(letter) >= 0) {
    setUnderScores();
    checkIfWon();
  } else if (randomItem.indexOf(letter) === -1) {
    mistakes++;
    checkIfLost();
    updateHangmanPicture();
  }
  console.log(checkedClick);
}

setRandomItem();
setUnderScores();

// ====================================================================
// ====================================================================

// const secretPhrases = ["never", "you", "that", "bullet", "break"];

// let randomItem = "";
// let clicked = [];
// let result = "";
// let mistakes = 0;

// function selectRandomItem() {
//   randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
//   document.getElementById("letters").addEventListener("click", buttonHandler);
//   window.addEventListener("keydown", keyHandler);
//   console.log(randomItem);
// }

// function setUnderScores() {
//   let splitedWord = randomItem.split("");
//   let mappedWord = splitedWord.map((letter) =>
//     clicked.indexOf(letter) >= 0 ? letter : "_"
//   );
//   result = mappedWord.join("");
//   document.getElementById("clue").innerHTML = `<p>${result}</p>`;
//   console.log(mappedWord);
// }

// function checkIfWon() {
//   if (randomItem === result) {
//     document.getElementById("gameover").querySelector("p").style.display =
//       "block";
//     document.getElementById("gameover").innerText = "YOU WIN..."
//     document.getElementById("image").querySelector("img").src =
//       "assets/winner.png";
//   }
// }

// function checkIfLost() {
//   if (mistakes === 6) {
//     document.getElementById("gameover").querySelector("p").style.display =
//       "block";
//     document.getElementById(
//       "clue"
//     ).innerHTML = `<p>Random word is: ${randomItem}</p>`;
//   }
// }

// function updateHangmanPicture() {
//   let image = document.getElementById("image").querySelector("img");
//   image.src = `assets/hangman${mistakes}.png`;
// }

// function letterHandler(letter) {
//   letter = letter.toLowerCase();
//   clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
//   document.getElementById(letter.toUpperCase()).className = "used";
//   // document.getElementById(letter.toUpperCase()).classList.add("used");

//   if (randomItem.indexOf(letter) >= 0) {
//     setUnderScores();
//     checkIfWon();
//   } else if (randomItem.indexOf(letter) === -1) {
//     mistakes++;
//     checkIfLost();
//     updateHangmanPicture();
//   }
// }

// function buttonHandler(event) {
//   letterHandler(event.target.id);
// }

// function keyHandler(event) {
//   letterHandler(event.key);
// }

// selectRandomItem();
// setUnderScores();
