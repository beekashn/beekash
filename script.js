"use strict";

const gameSpace = document.querySelectorAll(".game-space");
const gameBody = document.querySelectorAll(".game-body");
const player = document.querySelector(".player");
const player1 = document.getElementById("player--0");
const player2 = document.getElementById("player--1");
const resetBtn = document.querySelector(".reset-btn");
const result = document.querySelector("#msg");

let state = 0; //first plater turn
gameSpace.forEach(function (space) {
  // console.log(space);
  space.addEventListener("click", function (event1) {
    // console.log(event1);
    // console.log("ji");
    // player1.innerText = "";
    if (state === 0) {
      result.innerText = "Playing...";
      player1.innerText = "";
      player2.innerText = "player 2 turn";
      player2.style.backgroundColor = "green";
      player1.style.backgroundColor = "transparent";
      player2.style.color = "white";
      space.style.boxShadow = "inset -2px 2px 10px black";
      space.style.borderRadius = "20px";
      space.style.transition = "all ease 0.2s";
      space.style.backgroundColor = "blue";
      space.disabled = true;
      space.innerText = "O";
      space.style.color = "white";
      space.style.fontSize = "1.5rem";
      state = 1; // pass the turn to 2nd player

      // result.innerText = "Playing...";
      // player.innerText = "";
      // player.innerText = "player 2 turn";
      // player.style.backgroundColor = "green";
      // player.style.backgroundColor = "transparent";
      // player.style.color = "white";
      // space.style.boxShadow = "inset -2px 2px 10px black";
      // space.style.borderRadius = "20px";
      // space.style.transition = "all ease 0.2s";
      // space.style.backgroundColor = "blue";
      // space.disabled = true;
      // space.innerText = "O";
      // space.style.color = "white";
      // space.style.fontSize = "1.5rem";
      // state = 1; // pass the turn to 2nd player
    } else {
      player2.innerText = "";
      player1.innerText = "player 1 turn";
      player1.style.backgroundColor = "blue";
      player2.style.backgroundColor = "transparent";
      player1.style.color = "white";
      space.style.boxShadow = "inset -2px 2px 10px black";
      space.style.borderRadius = "20px";
      space.style.transition = "all ease 0.2s";
      space.style.backgroundColor = "green";
      space.disabled = true;
      space.innerText = "X";
      space.style.color = "white";
      space.style.fontSize = "1.5rem";

      state = 0; // past the turn to 1st player again

      // player.innerText = "";
      // player.innerText = "player 1 turn";
      // player.style.backgroundColor = "blue";
      // player.style.backgroundColor = "transparent";
      // player.style.color = "white";
      // space.style.boxShadow = "inset -2px 2px 10px black";
      // space.style.borderRadius = "20px";
      // space.style.transition = "all ease 0.2s";
      // space.style.backgroundColor = "green";
      // space.disabled = true;
      // space.innerText = "X";
      // space.style.color = "white";
      // space.style.fontSize = "1.5rem";

      // state = 0;
    }

    checkWinner();
  });
});

const gameReset = function () {
  gameSpace.forEach(function (space) {
    // console.log('reset');
    state = 0;
    space.innerText = "";
    space.innerText = "";
    space.disabled = false;
    space.style.backgroundColor = "transparent";
    space.style.backgroundColor = "transparent";
    player1.style.backgroundColor = "transparent";
    player2.style.backgroundColor = "transparent";
    space.style.borderRadius = "0";
    player1.innerText = "Player 1 : O";
    player2.innerText = "Player 2 : X";
    player1.style.color = "black";
    player2.style.color = "black";
  });

  // result.innerHTML='Congratulation you won'
};
resetBtn.addEventListener("click", gameReset);

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = function () {
  for (let pattern of winningPatterns) {
    const position1 = gameSpace[pattern[0]].innerText;
    const position2 = gameSpace[pattern[1]].innerText;
    const position3 = gameSpace[pattern[2]].innerText;
    // console.log(position1);
    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (position1 === position2 && position2 === position3) {
        // console.log("winner");
        // gameSpace.disabled = true;
        result.innerText = `Congratulation !🥇`;
        player1.innerText = `player ${position1} won`;
        player2.innerText = `player ${position1} won`;

        gameSpace.forEach(function (space) {
          // console.log(space.innerText);

          space.disabled = true;
          resetBtn.innerText = "New Game";

          resetBtn.addEventListener("click", function () {
            resetBtn.innerText = "Reset Game";
            result.innerText = `Let's Play`;
            // player1.innerText = `Player 1 : O`;
            // player2.innerText = `Player 1 : X`;
            gameReset();
          });
        });
        // resetBtn.innerText = "Reset Game";
        // gameSpace.disabled = true;
      }
    }
  }
};
