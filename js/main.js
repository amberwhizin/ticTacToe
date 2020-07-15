let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(arr) {

    for (i = 0; i < arr.length; i++) {
        const currEl = arr[i]
         log.textContent = `${currEl}, ${currEl})`;
         console.log(currEl);
}
    }
inputChange([x, o, x, o, x, o])


// a function that loops through and arr and grabs and x or an o and applys it to the board
// const xoxo = (arr) => {
//     // who starts first - random method x or o
//     let userX = [];
//     let userO = [];
//     const letters = [x, o, x, o, x, o];
//     // if its not xs turn its o's turn
//     for (i = 0; i < letters.length; i++) {
//         const currentEl = letters[i];

//         if (currentEl !== 'x') {
//             userO.push(currentEl);
//         } else {
//             userX.push(currentEl);
//         }
//     }
//     if (userX || userO < 3) { //indexOf()?
//         prompt(`It's ${} turn!`);
//     } else if (userX || userO === 3 { //indexOf()?
//         prompt(`${} has Won!`)
//     }
    
    
//     // loop throught a array of 3 x's and 3 o's
//     // when user clicks and takes there turn, no one else may use that cell
//     // add text(x or o) when user clicks on any open spot on the screen

// }

// who starts first - random
// if its not xs turn its o's turn
// loop throught a array of 3 x's and 3 o's
// when user clicks and takes there turn, no one else may use that cell
// add text when user clicks on any open spot on the screen
