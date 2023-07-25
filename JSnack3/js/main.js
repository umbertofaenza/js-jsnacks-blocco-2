const intNumbers = [5, 10, 15, 20, 25];
let evenIndexNumber;
let totalNumber = 0;

for (let i = 0; i < intNumbers.length; i++) {
  if (i % 2 == 0) {
    evenIndexNumber = intNumbers[i];
    totalNumber += evenIndexNumber;
  }
}

console.log(totalNumber);
