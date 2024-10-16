function squareDigits(num){
    output = ''
    let x = String(num)
    for (i=0, len = x.length; i<len; i++){
      output += Number(x[i])* Number(x[i])
    }
    return Number(output)
  }