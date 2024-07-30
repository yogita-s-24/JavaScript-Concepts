// const str = 'Hello World!'

// const regex = '/Hello/';

// console.log(regex.test(str));  // true


// .: Any character except newline.
// \d: Digit (0-9).
// \w: Word character (alphanumeric + underscore).
// \s: Whitespace character.
// \b: Word boundary.
// ^: Start of string.
// $: End of string.
// +: One or more.
// *: Zero or more.
// ?: Zero or one.
// {n}: Exactly n occurrences.
// {n,}: n or more occurrences.
// {n,m}: Between n and m occurrences.


// const str = "Hello, hello, HELLO!";
// const regex = /hello/gi;
// const matches = str.match(regex);
// console.log(matches);  



// const str = "I love JavaScript. JavaScript is awesome!";
// const reg = /JavaScript/g;
// const newStr = str.replace(reg, "JS");
// console.log(newStr);  // "I love JS. JS is awesome!"


// const str = "The quick brown fox jumps over 12 lazy dogs.";
// const regex = /\b\w{4}\b/g;  // Words with exactly 4 letters
// const matches = str.match(regex);
// console.log(matches);  // ["quick", "jumps", "over", "lazy"]



// const str = "I love JavaScript. JavaScript is awesome!";
// const regex = /JavaScript/g;
// const newStr = str.replace(regex, "JS");
// console.log(newStr);  // "I love JS. JS is awesome!"


// const str = "My email is example@example.com.";
// const regex = /(\w+)@(\w+)\.(\w+)/;
// const matches = str.match(regex);
// console.log(matches);  
// ["example@example.com", "example", "example", "com"]
// Entire match and groups



// const str = "Hello, World!";
// const regex = new RegExp("hello", "i");
// console.log(regex.test(str));  // true

