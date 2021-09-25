//promises
// a = 11;
// let p = new Promise((resolve, reject) => {
//   let i = 1 + a;
//   if (i == 12) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log("this in the then section " + message);
// }).catch((message) => {
//   console.log("this in the catch block " + message);
// });

//////////////////////////////////////////////////////////////////////

// new Promises prectice

// let userLeft = false;
// let userWatchingVideo = false;

// function watchingTutorial() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "User Left",
//         message: ":(",
//       });
//     } else if (userWatchingVideo) {
//       reject({
//         name: "User Watching Videos",
//         message: "Programming in JavaScript",
//       });
//     } else {
//       resolve("Thums up and subscribe");
//     }
//   });
// }

// watchingTutorial()
//   .then((message) => {
//     console.log("Success " + message);
//   })
//   .then(() => {
//     document.querySelector("title").innerText = "Learned promises Succesfully";
//   })
//   .then(() => {
//     document.querySelector("h1").style = "background-Color:Blue";
//   })
//   .finally(() => {
//     document.getElementById("but").style = "background-color:blue";
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

// -----------------------------------------------

// if we want to run promises simultaneously

