function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
  
    let countPositives = 0;
    let sumNegatives = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositives++;
      } else if (input[i] < 0) {
        sumNegatives += input[i];
      }
    }
  
    return [countPositives, sumNegatives];
  }