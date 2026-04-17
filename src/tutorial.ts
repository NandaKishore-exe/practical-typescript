// 1. types - string, boolean, number

// let awesomeName: string = "shakeAndBake";

// awesomeName = "something";

// awesomeName = awesomeName.toUpperCase(); //methods with respect to string only it will be available here it wont show other methods related object or arrays

// console.log(awesomeName);

// // awesomeName = 20; // it wont allow to assign a number data type to string variable.

// let num: number = 20;

// num = 20 - 1;

// // num = "ten"; // Type 'string' is not assignable to type 'number'.

// console.log(num);

// let isLogin: boolean = true;
// isLogin = false;

// console.log("islogin :", isLogin);

// 2 . union types - allows us to hold multiple types, also we have literal type

let tax: number | string = 10;
tax = 100;
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";

requestStatus = "success";

// requestStatus = "random";

// 3. Type - any - It means a variable declared with the any type can hold a value of any type.

let notSureofType: any = 4;
notSureofType = "hello";
notSureofType = false;

// Practical Application of Type Annotation

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook);

// challenge - 2:

let orderStatus: "processing" | "shipped" | "delivered" = "processing";

orderStatus = "shipped";

orderStatus = "delivered";

console.log(orderStatus);

let discount: number | string = 10;
discount = "10%";
// discount = false;

console.log(discount);

// arrays in typescript

let prices: number[] = [10, 20, 30];

let fruit: string[] = ["apple", "orange"];

// let emptyArr: [] = [1]; //  "[]" means literally empty array it will take no elements so it will declare as empty array only
// fix
// let emptyArr: number[] = [20];
// let emptyArr: number[] = [];

// union type in array - take multiple data types

let takeNumandString: (number | string)[] = [10, 20, "Apple", "Mango"];

console.log(takeNumandString);

// challenge topic in  array
let temparature: number[] = [100, 90, 80];
// temparature.push("cool") // this will result in typeError

let colors: string[] = ["red", "yellow", "green"];
//colors.push(180); // this will result in typeError

let user: (string | number)[] = ["John", "peter", 100, 90];
// usrt.push(true); // this array will take only string and number data type values not boolean which will result in typeError
