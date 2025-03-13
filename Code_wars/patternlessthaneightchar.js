function password(str) {
    if(/[A-Z]/.test(str) && 
       /[a-z]/.test(str) && 
       /\d/.test(str) && 
       str.length>=8)
       {
      return true
    }
    else{
      return false
    }
}