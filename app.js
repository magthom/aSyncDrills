//Timing Out
// function countdown(num, callback) {
//     console.log()
// }

// function showMessage() {
//     console.log("SUP!?");
//     setTimeout(() => {
//         console.log("hello?");
//     }, 2000);   
// }
// showMessage();

// let getWords = () => {
//     console.log("instant");
//     setTimeout(() => {
//         console.log('green');
//     }, 3000);
//     setTimeout(() => {
//         console.log('what');
//     }, 2000);
//     setTimeout(() => {
//         console.log('who?');
//     }, 1000);
// }
// getWords();

//Callbacks and Recursion

// let done = () => {
//     console.log("Job's done!");
// }

//  let countdown = (num, callback) => {
//     if(num === 1) {
//         callback();
//     } else {
//         setTimeout(() => {
//             console.log(num);
//           countdown(num - 1, callback);  
//         }, 1000);
//     }
//  }
//  countdown(3, done);

//Promises, Promises
let lunchTime = false;
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if(lunchTime) {
            let myFavLunch = {
                lunch: "food",
                drink: "soda"
            }
            resolve(myFavLunch);
        } else {
            let errMessage = new Error("It's NOT LUNCHTIME!!");
            reject(errMessage);
        }
    });
}

orderMeSomeFood()
.then(response => console.log(response)) //working
.catch(error => console.log(error)); //failing

//always go together - will not know whether it will fail or succeed due to other's code