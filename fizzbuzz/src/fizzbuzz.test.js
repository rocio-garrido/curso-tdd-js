import fizzbuzz from "./fizzbuzz";

test("canary test", () => {
  expect(fizzbuzz().length).toEqual(100);
});

test("should print Fizz", () => {
  expect(fizzbuzz()[2]).toEqual("Fizz");
});

test("should print Buzz", () => {
  expect(fizzbuzz()[4]).toEqual("Buzz");
});

test("should print FizzBuzz", () => {
  expect(fizzbuzz()[14]).toEqual("FizzBuzz");
});