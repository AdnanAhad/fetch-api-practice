console.log("fetch API");

function getData() {
  url = "adu.txt";
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    });
}

console.log("before fetching data");

getData();

console.log("after fetching Data");
