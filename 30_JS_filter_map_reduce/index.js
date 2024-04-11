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