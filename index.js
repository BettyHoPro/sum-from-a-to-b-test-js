function sum(fromN, toN) {
  if (fromN < toN) {
    return fromN + sum(fromN + 1, toN);
  }
  return fromN;
};
console.log(sum(5,3));

// function sum(fromN, toN) {
//   let sumN = 0;
//   if (fromN === toN) {
//     return fromN;
//   }
//   if (fromN < toN) {
//      sumN += sum(fromN + 1);
//   }
//   return sumN
// };
//console.log(sum(fromN, toN));
sum(3,7);
//console.log(sum(3, 7));

module.exports = sum;

// const sumToOne = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sumToOne(n - 1);
// };

// console.log(sumToOne(4));
