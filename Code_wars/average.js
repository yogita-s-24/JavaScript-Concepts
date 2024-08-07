function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum / numbers.length;
    }
  }
  
  const numbers1 = [1, 2, 3, 4, 5];
  const numbers2 = [];
  const numbers3 = [12,34,100];
  
  console.log("Average of numbers1:", calculateAverage(numbers1)); 
  // Output: 3
  
  console.log("Average of numbers2:", calculateAverage(numbers2)); 
  // Output: 0
  
  console.log("Average of numbers3:", calculateAverage(numbers3)); 
  // Output : 48.666666666666664