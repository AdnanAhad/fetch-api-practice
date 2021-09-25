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

// get data
// function getData() {
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// getData();

//post data

// function postData() {
//   url = "http://dummy.restapiexample.com/api/v1/create";
//   data = '{"name":"test45678","salary":"123","age":"23"}';
//   params = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data,
//   };

//   fetch(url, params)
//     .then((response) => {
//       return response.json();
//     })
//     .then((dat) => {
//       console.log(dat);
//     });
// }

// postData();


