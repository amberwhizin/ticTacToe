const cells = document.querySelectorAll(".cell");

let isX = true;
const getMarker = () => {
  const marker = isX ? "X" : "O";
  isX = !isX;
  return marker;
};

// when I click the screen x appears in a Random cell,
// Unless I chose to be o, make those buttons x, o
// There is a computer = x and a user = o
// they have defaults
// I go first
// The computer goes next with - event input?

//user turn
for (let i = 0; i < cells.length; i++) {
  const currentCell = cells[i];
  const onClick = (event) => {
    currentCell.innerHTML = getMarker();
  };
  currentCell.addEventListener("click", onClick);
}
// computer turn
// do we need an array?
// const arr = [X, X, X, O, O, O] ???
// for loop reverse is doing to 
// for (let j = cells.length; j >= 0; j--) {
//   const currCompCell = cells[j];

//   const computerTurn = (event) => {
//     currCompCell.innerHTML = getMarker();
//   };
//   currCompCell.addEventListener("input", appear); //input?
// }

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
//     // const result = document.querySelector(".result");
//     // result.textContent = `pop${event.target.class}`;
//     //event.stopPropagation();
//   });
// }

// cells[3].addEventListener("click", (event) => {
//     cells[3].innerHTML = "X";
// });

// inputChange([x, o, x, o, x, o])


//         prompt(`It's ${} turn!`);
//     } else if (userX || userO === 3 { //indexOf()?
//         prompt(`${} has Won!`)
//     }

//     // loop throught a array of 3 x's and 3 o's
//     // when user clicks and takes there turn, no one else may use that cell
//     // add text(x or o) when user clicks on any open spot on the screen

// }

// who starts first - random
// if its not x's turn its o's turn
// loop throught a array of 3 x's and 3 o's
// when user clicks and takes there turn, no one else may use that cell
// add text when user clicks on any open spot on the
