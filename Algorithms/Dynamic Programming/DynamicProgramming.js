// Dynamic programming is a technique for solving problems
// by breaking them down into smaller subproblems and storing
// the solutions to these subproblems to avoid redundant computation.
// The Fibonacci sequence is a classic example of a problem that
// can be solved using dynamic programmings

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10));
