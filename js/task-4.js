// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]-- > 160(the only even number)

function findOutlier(integers) {
  let odd = [];
  let even = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 !== 0) {
      odd.push(integers[i]);
    } else {
      even.push(integers[i]);
    }
  }
  if (odd.length < even.length) return `${odd}`;
  return `${even}`;
}

console.log(findOutlier([2, 6, 8, 10, 3]));
