//- Create a function that generates Fibonacci numbers up to N

function generateFibonacci(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = genFib(i);
  }
  return arr;
}

const genFib = (n) => {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return genFib(n - 1) + genFib(n - 2);
};
window.onload = ()=>{
    console.log(generateFibonacci(5));
}