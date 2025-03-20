const tailFactorial = (num, totalSoFar = 1) => {
  if (num === 0) return totalSoFar;
  else return tailFactorial(num - 1, totalSoFar * num);
};

console.log(tailFactorial(6));
