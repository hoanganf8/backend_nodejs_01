//Vòng lặp reduce

var numbers = [1, 3, 5, 7, 9];

var result = numbers.reduce(function (prevValue, currentValue) {
  //   console.log(`Prev = ${prevValue}`, `Current = ${currentValue}`);
  //   return currentValue;
  console.log(`Prev = ${prevValue}`, `Current = ${prevValue + currentValue}`);
  return prevValue + currentValue;
});

console.log(result);

/*
1. element = 3
- prevValue = 1;
- currentValue = 3;
- result = prevValue + currentValue = 4

2. element = 5
- prevValue = 4;
- currentValue = 5;
- result = prevValue + currentValue = 9;

3. element = 7
- prevValue = 9;
- currentValue = 7
- result = prevValue + currentValue = 16

4. element = 9
- prevValue = 16;
- currentValue = 9
- result = prevValue + currentValue = 25
*/

//Bài tập:
var numbers = [2, 5, 9, 1, 8];

//Tìm max sử dụng reduce
var maxNumber = numbers.reduce(function (max, number) {
  //return prev > current ? prev : current;
  if (max < number) {
    return number;
  }

  return max;
});

console.log(`Max = ${maxNumber}`);

/*
Bài tập:
*/

var arr1 = [1, 2, 5, 9];

var arr2 = [2, 5, 3];

//Tìm phần tử khác nhau giữa mảng arr1 và arr2
//[1, 9]

var diff = arr1.reduce(function (prev, current) {
  //   if (!arr2.includes(current)) {
  //     prev.push(current);
  //   }

  //   return prev;
  !arr2.includes(current) && prev.push(current);
  return prev;
}, []);

console.log(diff);
