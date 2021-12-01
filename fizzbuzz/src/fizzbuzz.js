export default () => {
  const elList = [];

  for (let x=1; x<=100; x++) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
      elList.push("FizzBuzz")
    }
    else if ((x % 3 ) === 0) {
      elList.push("Fizz")
    }
    else if ((x % 5 ) === 0) {
      elList.push("Buzz")
    }
    else {
      elList.push(x)
    }
  }
  console.log('elList: ', elList);
  return elList;
}
