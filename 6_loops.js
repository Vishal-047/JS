let name="Vishal Singh"
let j=1;
for(const i of name){
    if(i==" "){
        // console.log(`${j} is space`)
    }
    else
    // {console.log(`${j} element is ${i}`);}
    j++;
}
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.


let obj={
    js:'javascript',
    cpp:'c++',
    py:'python',
    java:'java',
    rb:'ruby'
}

for(const key in obj){
    // console.log(`${key} is ${obj[key]}`);
}


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
    // console.log(item.languageFileName);
} )


let num=[1,2,3,4,5,6,7,8,9,10];
let mynum=num.filter((num)=>num%5==0); //arrow function
// console.log(mynum);
let number=[];
num.forEach((ele) => { //arrow function
    if(ele%2==0) number.push(ele)
});
// console.log(number);


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

let book=books.filter(
    (book)=>{return book.genre=="History"}
)
// console.log(book);

book=books.filter(
    (book)=>book.publish>=1992 && book.edition>=2015
)
// console.log(book);

