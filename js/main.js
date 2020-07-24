const cells = document.querySelectorAll(".cell");

let isX = true;
const getMarker = () => {
  const marker = isX ? "X" : "O"; // X then O appear when clicked with listener
  isX = !isX;
  return marker;
};

for (let i = 0; i < cells.length; i++) {
  const currentCell = cells[i];
  const onClick = (event) => {
    currentCell.innerHTML = getMarker(); // invoked above function
    currentCell.removeEventListener("click", onClick); // stopped multy click
  };

  currentCell.addEventListener("click", onClick); // click on cells

  // function once() {
  //   currentCell.removeEventListener("click", once);
  // }
  // currentCell.addEventListener("click", once); === removeEventListener('click', onClick);

  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

  function bgChange() {
    const rndCol =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
  }

  currentCell.addEventListener("click", bgChange);
}


// track x and os
// black background color - can't see

// do we need an array?
// const arr = [X, X, X, O, O, O] ???

// currentCell.innerHTML = "X";

// let bool = true;

// if (!bool) {
//   bool = true;
//   currentCell.innerHTML = "X";
// } else {
//   bool = false;
//   currentCell.innerHTML = "O";
// }

//   currentCell.addEventListener("change", (event) => {
//     //console.log(currentCell ? currentCell.innerHTML = "O" : currentCell.innerHTML = "X");
//     // currentCell.innerHTML = "O";

// cells[3].addEventListener("click", (event) => {
//     cells[3].innerHTML = "X";
// });

//         prompt(`It's ${} turn!`);
//     } else if (userX || userO === 3 { //indexOf()?
//         prompt(`${} has Won!`)
//     }

// loop throught a array of 3 x's and 3 o's
// add text(x or o) when user clicks on any open spot on the screen

// if its not x's turn its o's turn
// when user clicks and takes there turn, no one else may use that cell