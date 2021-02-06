const doubleIt = num => num *2;
const result = doubleIt(12);
console.log(result);


const add = (x,y) => x*y;
const result1 = add(2,3);
 console.log(result1);

 const doMath = (x,y) => {
     const sum = x+y;
     const diff = x-y;
     const result = sum/diff;
     return  result;
 }

 const result3 = doMath(4,2);
 console.log(result3)

 const age = [1,2,3,4]
 const age1 = [3,4,5,6]
 const allAge = [...age, 67, ...age1]
 console.log(allAge)

 const takaPoysha = [23,45,67]
 const maximum = Math.max(...takaPoysha);
 console.log(maximum);