// function getA() {
//   setTimeout(function () {
//     console.log(`getA`);
//   }, 1000);
// }

// function getB() {
//   console.log(`getB`);
// }

/*
Xử lý bất đồng bộ

1. Callback Function
*/

function getA(fn) {
  setTimeout(function () {
    console.log(`getA`);
    fn();
  }, 3000);
}

function getB(fn) {
  setTimeout(function () {
    console.log(`getB`);
    fn();
  }, 1500);
}

function getC(text) {
  console.log(`getC ${text}`);
}

// getA(function () {
//   getB(function () {
//     getC("F8");
//   });
// });

//getA => getB => getC

var url = `https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new&cl=w`;

function getRandom(fn) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      fn();
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function showMessage(msg) {
  console.log(msg);
}

getRandom(function () {
  showMessage("Thành công");
});
