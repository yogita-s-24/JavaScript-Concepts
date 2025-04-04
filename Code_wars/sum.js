function sequenceSum(begin, end, step) {
    if (begin > end) {
      return 0;
    } else {
      let temp = 0;
      for (let i = begin; i <= end; i += step) {
        temp += i;
      }
      return temp;
    }
  }
  
  // Example usage:
  console.log(sequenceSum(2, 10, 2)); // Output: 30 (2 + 4 + 6 + 8 + 10)
  