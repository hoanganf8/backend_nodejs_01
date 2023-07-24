console.log(`Bước 1`);
console.log(`Bước 2`);
try {
  var a = 15;
  console.log(a);
  //   console.log(b);
  if (a < 15) {
    throw new Error("a phải từ 15 trở lên");
  }
} catch (exception) {
  console.log(exception.message);
} finally {
  console.log(`Xong rồi`);
}
console.log(`Bước 3`);
