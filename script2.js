const fibonacci = function () {
  let numbers = [1, 2];   // two starting fibonacci values 
  const startingLenght = numbers.length
  for (i = 0; i < 20 - startingLenght; i++) {
    let j = i + 1;
    let nextNumber = numbers[i] + numbers[j]
    numbers.push(nextNumber);
    // console.log(nextNumber)
  }
  return function () {   //closure return function
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {  //only even numbers
        sum += numbers[i];
      }
    }
    // console.log(numbers)
    // console.log(sum)
    return sum;
  }
}

const one = fibonacci()
one()