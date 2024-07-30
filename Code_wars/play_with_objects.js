function duplicateCount(text){
    console.log(text)
    let obj = {}
    if (text.length == 0){
      return 0
      }
    else{
    for(let char of text.toLowerCase()){
      if (Object.keys(obj).includes(char)){
        obj[char] += 1
      }
      else{
        obj[char] = 1
      }
    }
   }
    console.log(obj)
    let count = 0
    for (let key of Object.keys(obj)){
      console.log(obj[key])
      if (obj[key] > 1){
        count +=1
      }
    }
    return count
  }