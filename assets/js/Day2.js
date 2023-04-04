export default function day2() {
  // Find the Kth largest element from an array without sorting
  const array = [10, 3, 11, 2];
  const k = 2;
  // 1st approach
  //   let count = 0;
  //   const sortedValue = array.sort((a, b) => a - b);
  //   console.log(sortedValue);
  //   for (let i = sortedValue.length - 1; i >= 0; i--) {
  //     count += 1;
  //     if (count === k) {
  //       console.log(sortedValue[i]);
  //     }
  //   }
  // 2nd Approach
  let arrayTemp = array;
  console.log(arrayTemp, k);
  let max = Math.max.apply(null, arrayTemp);
  let count = 0;

  while (arrayTemp.length > 0 && count !== arrayTemp.length - 1) {
    for (let i = arrayTemp.length - 1; i >= 0; i--) {
      max = Math.max.apply(null, arrayTemp);
      if (max === arrayTemp[i]) {
        console.log(arrayTemp.slice(i, 1), i);
        arrayTemp = arrayTemp.slice(i, 1);
        count += 1;
        console.log('inside', arrayTemp);
        if (count === k) {
          console.log('inside');
          return arrayTemp[i];
        }
      }
    }
  }

  return count;

  //  group anagram
  //   input - ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
  //   Output: [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat'], ['foo']];
  //   const input = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
  //   const anSortedOne = input.map((item) => item.split('').sort().join(''));
  //   console.log(anSortedOne);
  //   const obj = {};
  //   for (let i = 0; i < input.length; i++) {
  //     if (obj[anSortedOne[i]]) {
  //       console.log(obj[anSortedOne[i]]);
  //       obj[anSortedOne[i]].push(input[i]);
  //     } else {
  //       obj[anSortedOne[i]] = [input[i]];
  //     }
  //   }
  //   return Object.values(obj);
}
