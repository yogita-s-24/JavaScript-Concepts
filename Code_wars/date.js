let date = new Date();
let formattedDate = new Intl.DateTimeFormat('en-US').format(date);
console.log(formattedDate); 

// Output: "8/24/2024" (assuming today's date is Aug 24, 2024)