//===================================================
//
//===================================================
const firstSection = document.querySelector(".first-section");
const secondSection = document.querySelector(".second-section");
const thirdSection = document.querySelector(".third-section");

//===================================================
//
//===================================================
const btnx = document.querySelector(".first-section .button-x");
const btno = document.querySelector(".first-section .button-o");

//===================================================
//
//===================================================
let i;
let player;
let computer;
btnx.onclick = () => nxtSection("x");
btno.onclick = () => nxtSection("o");
function nxtSection(value) {
  player = value;
  i = player == "x" ? 1 : 0;
  indicator();
  firstSection.classList.add("display-none");
  secondSection.classList.add("display-flex");
}

//===================================================
//
//===================================================
const secondSectionTop = document.querySelector(".second-section .top");
function indicator() {
  i++;
  i % 2 != 0
    ? secondSectionTop.classList.add("active")
    : secondSectionTop.classList.remove("active");
}

//===================================================
//
//===================================================
const box = document.querySelectorAll(
  ".second-section .box-conn .bottom > div"
);
for (let i = 0; i < box.length; i++) {
  box[i].onclick = function () {
    if (this.innerText == "") {
      this.innerText = player;
      [indicator(), winner()];
      setTimeout(() => {
        computerPick();
      }, 750);
    }
  };
}
//===================================================
//
//===================================================
function computerPick() {
  computer = player == "x" ? "o" : "x";
  pick();
  function pick() {
    const b = box[Math.floor(Math.random() * box.length)];
    if (b.innerText != "") {
      pick();
    } else {
      b.innerText = computer;
      [indicator(), winner()];
    }
  }
}

//===================================================
//
//===================================================
function winner() {
  console.log(computer);
  const a = [
    box1.innerText,
    box2.innerText,
    box3.innerText,
    box4.innerText,
    box5.innerText,
    box6.innerText,
    box7.innerText,
    box8.innerText,
    box9.innerText,
  ];

  if (
    (a[0] == "x" && a[1] == "x" && a[2] == "x") ||
    (a[3] == "x" && a[4] == "x" && a[5] == "x") ||
    (a[6] == "x" && a[7] == "x" && a[8] == "x") ||
    (a[0] == "x" && a[3] == "x" && a[6] == "x") ||
    (a[1] == "x" && a[4] == "x" && a[7] == "x") ||
    (a[2] == "x" && a[5] == "x" && a[8] == "x") ||
    (a[0] == "x" && a[4] == "x" && a[8] == "x") ||
    (a[2] == "x" && a[4] == "x" && a[6] == "x")
  ) {
    whoWon("x");
  } else if (
    (a[0] == "o" && a[1] == "o" && a[2] == "o") ||
    (a[3] == "o" && a[4] == "o" && a[5] == "o") ||
    (a[6] == "o" && a[7] == "o" && a[8] == "o") ||
    (a[0] == "o" && a[3] == "o" && a[6] == "o") ||
    (a[1] == "o" && a[4] == "o" && a[7] == "o") ||
    (a[2] == "o" && a[5] == "o" && a[8] == "o") ||
    (a[0] == "o" && a[4] == "o" && a[8] == "o") ||
    (a[2] == "o" && a[4] == "o" && a[6] == "o")) {
    whoWon("o");
  } else if (
    (a[0] && a[1] && a[2] && a[3] && a[4] && a[5] && a[6] && a[7] && a[8]) != ""
  ) {
    whoWon("darw");
  }
}

//===================================================
//
//===================================================
const div = document.querySelector(".third-section .who-won");
function whoWon(v) {
  secondSection.classList.remove("display-flex");
  thirdSection.classList.add("display-flex");
  console.log(computer);
  div.innerText = v == player ? "You won!" : v == computer ? "Computer won" : "The game have been drawn!";
}

//===================================================
//
//===================================================
const replayBtn = document.querySelector(".third-section .replay");
replayBtn.onclick = () => {
  firstSection.classList.remove("display-none");
  thirdSection.classList.remove("display-flex");
  for (let i = 0; i < box.length; i++) {
    const element = box[i];
    element.innerText = "";
  }
};
