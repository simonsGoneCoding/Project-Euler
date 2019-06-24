const fibonacci = function () {
  let numbers = [1, 2]; // two starting fibonacci values 
  const startingLenght = numbers.length
  let nextNumber = 0;
  for (i = 0; i < 1000 - startingLenght; i++) {
    if (nextNumber < 4000000) {
      let j = i + 1;
      nextNumber = numbers[i] + numbers[j]
      numbers.push(nextNumber);
    }
  }
  numbers.pop() //last index in array has value grater than 4000000
  return function () { //closure return function
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) { //only even numbers
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