console.log("fetch API");

function getData() {
  console.log("inside function");
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      console.log("inside response");

      return response.text();
    })
    .then((data) => {
      console.log("inside data");

      console.log(data);
    });
}

console.log("before fetching data");

getData();

console.log("after fetching Data");
