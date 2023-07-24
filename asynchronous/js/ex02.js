// function getA() {
//   var myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       var data = "getA";
//       resolve(data); //Chạy khi then()
//       reject("Lỗi");
//     }, 1000);
//   });

//   return myPromise;
// }

// function getB() {
//   console.log(`getB`);
// }

// console.log(getA());

// getA()
//   .then(function (response) {
//     console.log(response);
//     getB();
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//Promise Status

//1. pending
//2. fulfilled
//3. reject

function getA() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("");
      reject("Error");
    }, 1000);
  });
}

function getB() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`getB`);
    }, 1000);
  });
}

function getC() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`getC`);
    }, 1000);
  });
}

//Chưa gọi then, catch => pending
getA()
  .then(function (data) {
    //fulfilled
    console.log(data);
  })
  .catch(function (error) {
    //reject
    console.log(error);
  });

//getA => getB => getC

// getA().then(function (response) {
//   console.log(response);
//   getB().then(function (response) {
//     console.log(response);
//     getC().then(function (response) {
//       console.log(response);
//     });
//   });
// });

//Promise Chaining

// getA()
//   .then(function (response) {
//     console.log(response);
//     return getB();
//   })
//   .then(function (response) {
//     console.log(response);
//     return getC();
//   })
//   .then(function (response) {
//     console.log(response);
//   });

/*
Call API => Status
- 200 => Gọi resolve
- 500 => Gọi reject
*/
