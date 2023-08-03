//Fetch API

/*
1. Server URL
2. Method
3. Header
4. Authorization
*/

var serverUrl = `https://jsonplaceholder.typicode.com/posts`;

//Method: GET

//fetch() => Trả về 1 promise
// fetch(serverUrl)
//   .then(function (response) {
//     //Trả về response
//     console.log(response);
//     if (response.ok) {
//       return response.json(); //Trả về 1 promise
//     }

//     return Promise.reject(response.status);
//   })
//   .then(function (data) {
//     //Trả về data
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// var getPosts = async function () {
//   var res = await fetch(serverUrl);
//   console.log(res);
//   //   var posts = await res.text();
//   //   posts = JSON.parse(posts);
//   var posts = await res.json();
//   //Tự động chạy JSON.parse()
//   console.log(posts);
// };

// getPosts();

var serverUrl = "https://jsonplaceholder.typicode.com/posts";
var postData = async function (data) {
  var res = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(res);

  var data = await res.json();
  console.log(data);
};

var data = {
  name: "Hoàng An",
  email: "contact@fullstack.edu.vn",
};

postData(data);

//x-www-form-urlencoded: name=Hoàng An&email=contact@fullstack.edu.vn
/*
POST dữ liệu lên SERVER

1. Url
2. Method
3. Headers
- Content-Type
4. Body (Data)
*/

var getLocation = async function () {
  var res = await fetch(
    "https://ipfind.co/me?auth=50e887ce-e3bb-4f00-a9b9-667597db5539",
  );
  var data = await res.json();
  console.log(data);
};

getLocation();

/*
Xác thực API

1. API Key
2. Bearer Token
3. OAuth 2.0
*/
