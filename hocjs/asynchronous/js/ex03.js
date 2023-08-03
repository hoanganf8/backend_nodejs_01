//Async Function

// var getMessage = async function () {
//   return "Xin chào F8";
// };

// getMessage().then(function (msg) {
//   console.log(msg);
// });

// var getA = function () {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       //   resolve("Xin chào F8");
//       reject("Error 500");
//     }, 1000);
//   });
// };

// var getB = function () {
//   return "Hiển thị kết quả";
// };

// var showResult = async function () {
//   try {
//     var response = await getA();
//     var response2 = getB();
//     console.log(response);
//     console.log(response2);
//   } catch (e) {
//     console.log(e);
//   }
// };

// showResult();

function getA() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("getA");
      //   reject("Error 500");
    }, 1000);
  });
}

function getB() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`getB`);
      //   reject("Error 500");
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

//getA => getB => getC

var getResult = async function () {
  try {
    var resA = await getA();
    console.log(resA);
    var resB = await getB();
    console.log(resB);
    var resC = await getC();
    console.log(resC);
  } catch (e) {
    console.log(e);
  }
};

getResult();
