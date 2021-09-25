console.log("fetch API");

// Asynchronous
// function getData() {
//   console.log("inside function");
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       console.log("inside response");

//       return response.text();
//     })
//     .then((data) => {
//       console.log("inside data");

//       console.log(data);
//     });
// }

function getData() {
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    });
}

getData();
