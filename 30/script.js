let boxes = [...document.querySelectorAll(".box")];
let resetBtn = document.querySelector("#reset");
let turnO = true; // O starts
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "greeen";
      turnO = false;
      box.disabled = true;
      checkWinner();
    } else {
      box.innerText = "X";
      box.style.color = "black";
      turnO = true;
      box.disabled = true;
      checkWinner();
    }
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = " ";
  }
};


