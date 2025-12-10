let number=[1,2,3,4,5,6,7,8,9,10];
let num=number.map((num)=>num+10);  //iterate over each and every element of the array(number) and add 10 in each element...
// console.log(num);
// num=number.map((n)=>n**2); //square of each number...
// console.log(num);

num=number
        .map((n)=>n*10)
        .map((nu)=>nu+13)
        .filter((num)=>num%3==0);
// console.log(num);


let array=[1,2,3,4,5];
let arr=array.reduce((acc,curr)=>{
    // console.log(`acc is ${acc} and curr is ${curr}`);
    //     console.log(acc+curr)
        return acc+curr;
        
},0) //here we are pasing the initial value of accumulator...
// console.log(`Final value: ${arr}`);

let shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

let amount=shoppingCart.filter((item)=>item.price>=2000);
// console.log(amount);

let am=amount.reduce((acc,curr)=>acc+curr.price,0); //Here if we try to add acc + curr, it will throw an error because curr is an object, not a number. So acc + curr results in string concatenation like: 2999 + [object Object] → "2999[object Object]", So to fix it we need to access the price property of curr:
// console.log(am);

let total=shoppingCart.reduce((acc,curr)=>acc+curr.price,0);
console.log(total);

