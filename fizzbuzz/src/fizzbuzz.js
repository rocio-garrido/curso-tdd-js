export default () => {
  const elList = [];

  for (let number = 1; number <= 100; number++) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      elList.push("FizzBuzz")
    }
    else if ((number % 3 ) === 0) {
      elList.push("Fizz")
    }
    else if ((number % 5 ) === 0) {
      elList.push("Buzz")
    }
    else {
      elList.push(number)
    }
  }
  console.log('elList: ', elList);
  return elList;
}
