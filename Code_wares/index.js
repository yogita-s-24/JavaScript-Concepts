String.prototype.isUpperCase = function () {
  //String.prototype.isUpperCase: This is defining a new method named isUpperCase on the String prototype. By doing this, all string instances will have access to this method.
  // function(): This is the function definition for the isUpperCase method. The method does not take any parameters.
  return this.toString() === this.toUpperCase();
};
//     return: This keyword is used to return a value from the function. The value returned will be either true or false, depending on the evaluation of the expression following it.
// this.toString(): this refers to the current string object on which the isUpperCase method is called. The toString() method converts this string object to a primitive string value. However, since this is already a string, toString() here is somewhat redundant but ensures the value is indeed a string.
// ===: This is the strict equality operator. It checks if the value on the left side is exactly equal to the value on the right side, both in terms of value and type.
// this.toUpperCase(): This method converts the entire string to uppercase and returns the resulting string.
// So, the expression this.toString() === this.toUpperCase() compares the original string with its uppercase version.

// If the original string is already fully in uppercase, this.toString() will be equal to this.toUpperCase(), and the method will return true.
// If the original string contains any lowercase letters, this.toString() will not be equal to this.toUpperCase(), and the method will return false.

//     In these examples:

// "HELLO".isUpperCase() returns true because "HELLO" is already in uppercase.
// "Hello".isUpperCase() returns false because "Hello" contains a lowercase "e".
// "hello".isUpperCase() returns false because "hello" is all lowercase.
// "123".isUpperCase() returns true because numeric characters are not affected by casing, so they are considered as uppercase.
// "".isUpperCase() returns true because an empty string is trivially considered uppercase.
