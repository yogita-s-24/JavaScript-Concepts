const coding = ['js', 'ruby', 'java', 'python', 'cpp']

const value = coding.forEach((item)=>{
    // console.log(item);
    // return item
})

// console.log(value);


const myNum = [1,24,5,3,4,5,6,7,8];

const newNums = myNum.filter((num)=>{
    return num > 4
})

// console.log(newNums);


const myNumber = [12,24,5,32,4,53,6,7,8];

const newNumbers = myNumber.filter((num)=>{
    return num % 2 
})

// console.log(newNumbers);

const myNo = [2,4,5,3,4,5,6];

const newnums = [];
myNo.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);