var request = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      const response = {
        getData: function () {
          return new Promise(function (resolve) {
            resolve("getData");
          });
        },
      };
      resolve(response);
    }, 1000);
  });
};

// request()
//   .then(function (res) {
//     //console.log(res);
//     return res.getData();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// var showData = async function () {
//   var response = await request();
//   var data = await response.getData();
//   console.log(data);
// };

// showData();

//IIFE
(async function () {
  var response = await request();
  var data = await response.getData();
  console.log(data);
})();
