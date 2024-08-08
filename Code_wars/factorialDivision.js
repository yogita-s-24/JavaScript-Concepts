function factorialDivision(n, d) {
  
    n = BigInt(n);
    d = BigInt(d);
    
    let result = BigInt(1);
  
    for (let i = d + BigInt(1); i <= n; i++) {
        result *= i;
    }
    return result;
}