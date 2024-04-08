// const programming = ["js", "c", "c++"];

// programming.forEach(function(val){
//     console.log(val);
// })

// programming.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
    {
        languageName : 'cpp',
        languageFileName : 'c++'
    },
];

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
    console.log(item.languageName)
})