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

// 4. arrays in typescript

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
// user.push(true); // this array will take only string and number data type values not boolean which will result in typeError

// 5. objects in typescript

let car: { brand: string; year: number } = { brand: "hyundai", year: 2020 };

// car.color = "red" // Property 'color' does not exist on type '{ brand: string; year: number; }'.

let book = { title: "typescript", cost: 20 };
let pen = { title: "bluepen", cost: 10 };
let notebook = { title: "classmate" };

// let items: { title: string; cost: number }[] = [book, pen, notebook];
// when we try to add notebook it will throw an error: Property 'cost' is missing in type '{ title: string; }' but required in type '{ title: string; cost: number; }'.

// NOTE : to fix this issue we can add "?" before the cost where typescript treats cost property has an optional value.
// let items: { title: string; cost?: number }[] = [book, pen, notebook];

// 5 - readonly in typescript - In TypeScript, readonly is used to make a property immutable after it’s initialized. Once a value is set, you can’t change it later.

let items2: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items2[0].title = "javascript"; // Cannot assign to 'title' because it is a read-only property.

// challenge topic

let bike: { brand: string; year: number } = { brand: "KTM", year: 2023 };
// bike.year = "2023" // Type 'string' is not assignable to type 'number'.

let laptop: { brand: string; year: number } = { brand: "asus", year: 2022 };

let user2: { name: string; age: number }[] = [
  { name: "john", age: 20 },
  { name: "peter", age: 28 },
];

// 6 - Functions in typescript

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
// NOTE: If no parameter type is defined, TypeScript will default to using any.

function sayHello(name: string) {
  console.log(`Hello ${name} !!!`);
}

sayHello("nanda");

// Return Type - The type of the value returned by the function can be explicitly defined.

function calculateDiscount(price: number): number {
  return price * 0.9;
}

const finalprice = calculateDiscount(200);

// Challenge in functions

const names: string[] = ["john", "peter", "nanda"];

function checkName(name: string, arr: string[]): boolean | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (name.toLowerCase() === arr[i].toLowerCase()) {
      return true;
    }
  }
  return false;
}

console.log(checkName("kevin", names));

// optional and default parameters

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0); // to handle undefined in discount we can make it 0 since there is no discount value
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(points: number, penalty: number = 0): string {
  let finalScore = points - penalty;
  return `The final score is ${finalScore}`;
}

let score: string = calculateScore(100);

console.log(score);

// Function rest parameter

function sumOfN(...args: number[]): number {
  let total = args.reduce((acc, num) => acc + num, 0);
  return total;
}

console.log(sumOfN(1, 2, 3, 4, 5));

// void - we can use void when function does not have to return any value.

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!");

// object as parameter

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);
