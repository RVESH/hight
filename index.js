 // const myFirstObject = ["2","2"];
// console.log(myFirstObject);
// let person = {
//     name: "John",
//     age: 25,
//     city: "New York"
// };
// console.log(person);  // Output: { name: "John", age: 25, city: "New York" }
//
// // function counter() {
// //   let count = 0;
// //   return () => ++count;
// // }
// // const counting = counter();
// // console.log(counting());
// //
// // for (i = 0 ; 6 > i ; i ++) {
// //   console.log(i);
// // }
//


  // function greetUser(name, callback) {
  //     console.log("Hello, " + name);
  //     callback();
  // }
  //
  // greetUser("Alice", function() {
  //     console.log("This is a callback!");
  // });

  //
  // let age = 18;
  //
  // if (age >= 18) {
  //     console.log("You are an adult.");
  // } else {
  //     console.log("You are a minor.");
  // }
//
//   function greet(name) {
//     return "Hello, " + name + "!";
// }
// console.log(greet("Alice"));

// // # arrow function
// const add = (a, b) => a + b;
// console.log(add(5, 3));
// //
// let money = ["1m", "2m", "3rd", "4th"] ;
//  money.push("5th");
// console.log(money);
//
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num * 2));


// {
// let numbers =  5;

// Using forEach
// numbers.forEach(num => console.log(num * 2));

// // Using map
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);
//
// // Using filter
// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);
//

// if (numbers >= 5){
//   console.log("he is adult");
// }

// }
// function comboPlus(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }
// //
// comboPlus("Alice", function() {
//
//
//     console.log("This is a callback!");
// });

// function tryIng(first ,callback){
//    console.log("my," + first);
//    callback();
// }
//  tryIng("Rishabh" ,function(){
// console.log("im trying to write code");
//  })



// console.log("Start");
//
// setTimeout(() => console.log(letTest()), 2000);
//
// console.log("End");
//

// function letTest(myself , callback){
//   console.log("myself:" + myself);
//   callback();
//
// }
// letTest("RISHABH"  ,function(){
//
//   console.log("this is log");
//
//   setTimeout(() =>{
//
//      // console.log(letTest()), 2000);}
//      letTest("coder RISHABH", () => console.log("Callback after delay"));
//  }, 9000);
// } )

const student={
               name:"rishabh",
               age:"",
               course:"javascript"
}

const array = ["one","two","three","four","five"];

let num = 10;
if (num % 2 ===0 ) {
  console.log("odd");
} else {
  console.log("even");
}

// for (let i = 0; i < 100000000; i++) {
// console.log(i);
// }


// const randomValue = (max=100) => Math.round(Math.random()*max);
//
// let marks = randomValue();
// let grade = (marks >= 90) ? "A+" :
//             (marks >= 75) ? "A" :
//             (marks >= 60) ? "B" : "Fail";
// console.log(marks,grade);
//


// let marks =  Math.round(Math.random()*100);
// let grade = (marks >= 90) ? "A+" :
//             (marks >= 75) ? "A" :
//             (marks >= 35) ? "B" : "Fail";
// console.log(marks,grade);
//
//
// let person = {
//   name: "Rishabh",
//   age: 22,
//   isDeveloper: true
// };

// console.log(person);  // Output: Rishabh
// console.log(person["age"]);  // Output: 22
// console.log(typeof person);  // Output: object
    // const ready = ["ready","for" ,"tour", "from","school"];
    // let trying = Math.round(Math.random()*ready.length);
    // let final = (trying <= 1) ? "cancel" :
    //             (trying <= 3) ? "wait"   :  "lets go";
    // // console.log(ready);
    // console.log(trying,final,ready);


              // const ready = ["ready", "for", "tour", "from", "school"];
              // let trying = Math.round(Math.random() * ready.length);
              // let final;
              //
              // if (trying <= 1) {
              //     final = "cancel";
              // } else if (trying <= 3) {
              //     final = "wait";
              // } else {
              //     final = "lets go";
              // }
              //
              // console.log(trying, final, ready);


//     const ready = ["ready", "for", "tour", "from", "school"];
//     let tryIng = Math.round(Math.random()*ready.length);
//     let final;
//     if (tryIng <= 1) {
//        final = "cancel";
//     }else if (tryIng <= 3) {
//         final = "wait";
//     }else if (tryIng >= 4) {
//       final = "super ready";
//     }
//
//       console.log(tryIng, final, ready);
//
//                 let favoouratecolor = "blue";
//                 console.log("mu favourate color is", favoouratecolor);
// let a = 10 , b = 2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
//
// const fruit =["apple" ,"banana" ,"grapes"];
// console.log(fruit[1]);
//
//
// let myself = { name: "rishabh" , age:"20" , city:"patna"};
// console.log(myself);
//
//
//
// // Student Mark Sheet Generator in Node.js (Native JavaScript)
//
// // List of students
// const students = ["Amit", "Priya", "Rahul", "Sneha", "Vikram"];
// const subjects = ["Hindi", "English", "Math", "Science", "Social Science"];
//
// // Function to generate random marks between 30 and 100
// function getRandomMarks() {
//     return Math.floor(Math.random() * (100 - 30 + 1)) + 30;
// }
//
// // Function to calculate grade based on percentage
// function getGrade(percentage) {
//     if (percentage >= 90) return "A+";
//     if (percentage >= 80) return "A";
//     if (percentage >= 70) return "B";
//     if (percentage >= 60) return "C";
//     if (percentage >= 50) return "D";
//     return "F"; // Fail
// }
//
// // Generate mark sheets
// let markSheets = students.map(student => {
//     let marks = subjects.map(() => getRandomMarks());
//     let total = marks.reduce((sum, mark) => sum + mark, 0);
//     let percentage = (total / (subjects.length * 100)) * 100;
//     let grade = getGrade(percentage);
//
//     return { student, marks, total, percentage: percentage.toFixed(2), grade };
// });
//
// // Display the results
// console.log("Student Mark Sheet:");
// console.log("-----------------------------------------------------------");
// console.log("Name\t\tHindi\tEnglish\tMath\tScience\tSocial\tTotal\t%age\tGrade");
// console.log("-----------------------------------------------------------");
//
// markSheets.forEach(({ student, marks, total, percentage, grade }) => {
//     console.log(
//         `${student.padEnd(10)}\t${marks.join("\t")}\t${total}\t${percentage}%\t${grade}`
//     );
// });
//
// console.log("-----------------------------------------------------------");


// Uniswap-like DeFi Swap System in Node.js (Constant Product: A * B = k)
                          //
                          // class Token {
                          //  constructor(name, symbol, totalSupply) {
                          //      this.name = name;
                          //      this.symbol = symbol;
                          //      this.totalSupply = totalSupply;
                          //      this.balances = {}; // Mapping of user balances
                          //  }
                          //
                          //  // Transfer tokens from one user to another
                          //  transfer(from, to, amount) {
                          //      if (!this.balances[from] || this.balances[from] < amount) {
                          //          console.log(`❌ Transfer Failed: ${from} has insufficient ${this.symbol}`);
                          //          return false;
                          //      }
                          //      this.balances[from] -= amount;
                          //      this.balances[to] = (this.balances[to] || 0) + amount;
                          //      console.log(`✅ ${amount} ${this.symbol} transferred from ${from} to ${to}`);
                          //      return true;
                          //  }
                          // }
                          //
                          // class DeFiSwap {
                          //  constructor(tokenA, tokenB) {
                          //      this.tokenA = tokenA;
                          //      this.tokenB = tokenB;
                          //      this.reserveA = 0;
                          //      this.reserveB = 0;
                          //      this.k = 0; // Constant product reserve
                          //      this.liquidityProviders = {}; // Tracks LP contributions
                          //      this.events = []; // Stores transaction history
                          //  }
                          //
                          //  // Add liquidity to the pool
                          //  addLiquidity(user, amountA, amountB) {
                          //      if (this.tokenA.transfer(user, "Pool", amountA) && this.tokenB.transfer(user, "Pool", amountB)) {
                          //          this.reserveA += amountA;
                          //          this.reserveB += amountB;
                          //          this.k = this.reserveA * this.reserveB; // Maintain A * B = k
                          //
                          //          this.liquidityProviders[user] = (this.liquidityProviders[user] || 0) + amountA + amountB;
                          //          this.logEvent("LiquidityAdded", `${user} added ${amountA} ${this.tokenA.symbol} & ${amountB} ${this.tokenB.symbol}`);
                          //      }
                          //  }
                          //
                          //  // Swap function based on A * B = k
                          //  swap(from, amountAIn, amountBIn) {
                          //      if (amountAIn > 0) {
                          //          // Swap A for B
                          //          let amountBOut = this.getSwapOutput(amountAIn, this.reserveA, this.reserveB);
                          //          if (this.tokenA.transfer(from, "Pool", amountAIn) && this.tokenB.transfer("Pool", from, amountBOut)) {
                          //              this.reserveA += amountAIn;
                          //              this.reserveB -= amountBOut;
                          //              this.k = this.reserveA * this.reserveB;
                          //              this.logEvent("Swap", `${from} swapped ${amountAIn} ${this.tokenA.symbol} for ${amountBOut} ${this.tokenB.symbol}`);
                          //          }
                          //      } else if (amountBIn > 0) {
                          //          // Swap B for A
                          //          let amountAOut = this.getSwapOutput(amountBIn, this.reserveB, this.reserveA);
                          //          if (this.tokenB.transfer(from, "Pool", amountBIn) && this.tokenA.transfer("Pool", from, amountAOut)) {
                          //              this.reserveB += amountBIn;
                          //              this.reserveA -= amountAOut;
                          //              this.k = this.reserveA * this.reserveB;
                          //              this.logEvent("Swap", `${from} swapped ${amountBIn} ${this.tokenB.symbol} for ${amountAOut} ${this.tokenA.symbol}`);
                          //          }
                          //      }
                          //  }
                          //
                          //  // Get output amount based on formula: ΔB = (reserveB * ΔA) / (reserveA + ΔA)
                          //  getSwapOutput(inputAmount, inputReserve, outputReserve) {
                          //      let outputAmount = (outputReserve * inputAmount) / (inputReserve + inputAmount);
                          //      return Math.floor(outputAmount); // Simulate integer-based token system
                          //  }
                          //
                          //  // Remove liquidity
                          //  removeLiquidity(user, amount) {
                          //      if (this.liquidityProviders[user] < amount) {
                          //          console.log(`❌ ${user} does not have enough liquidity to remove.`);
                          //          return;
                          //      }
                          //
                          //      let share = amount / (this.reserveA + this.reserveB);
                          //      let amountAOut = Math.floor(this.reserveA * share);
                          //      let amountBOut = Math.floor(this.reserveB * share);
                          //
                          //      this.reserveA -= amountAOut;
                          //      this.reserveB -= amountBOut;
                          //      this.k = this.reserveA * this.reserveB;
                          //
                          //      this.tokenA.transfer("Pool", user, amountAOut);
                          //      this.tokenB.transfer("Pool", user, amountBOut);
                          //      this.liquidityProviders[user] -= amount;
                          //
                          //      this.logEvent("LiquidityRemoved", `${user} removed ${amountAOut} ${this.tokenA.symbol} & ${amountBOut} ${this.tokenB.symbol}`);
                          //  }
                          //
                          //  // Log events
                          //  logEvent(type, message) {
                          //      let event = { type, message, timestamp: new Date().toISOString() };
                          //      this.events.push(event);
                          //      console.log(`[EVENT] ${type}: ${message}`);
                          //  }
                          //
                          //  // Show current pool reserves
                          //  showReserves() {
                          //      console.log(`📊 Pool Reserves: ${this.reserveA} ${this.tokenA.symbol} | ${this.reserveB} ${this.tokenB.symbol}`);
                          //  }
                          //
                          //  // Show transaction history
                          //  showEvents() {
                          //      console.log("📜 Transaction History:");
                          //      this.events.forEach(event => console.log(`[${event.timestamp}] ${event.type}: ${event.message}`));
                          //  }
                          // }
                          //
                          // // Create tokens
                          // let tokenA = new Token("TokenA", "A", 10000);
                          // let tokenB = new Token("TokenB", "B", 10000);
                          //
                          // // Assign balances to users
                          // tokenA.balances["Alice"] = 1000;
                          // tokenB.balances["Alice"] = 1000;
                          // tokenA.balances["Bob"] = 500;
                          // tokenB.balances["Bob"] = 500;
                          //
                          // // Create swap system
                           // let defiSwap = new DeFiSwap(tokenA, tokenB);
                          //
                          // // Add liquidity
                          // defiSwap.addLiquidity("Alice", 500, 500);
                          //
                          // // Show reserves
                          // defiSwap.showReserves();
                          //
                          // // Swap tokens
                          // defiSwap.swap("Bob", 100, 0); // Bob swaps 100 A for B
                          // defiSwap.swap("Alice", 0, 50); // Alice swaps 50 B for A
                          //
                          // // Remove liquidity
                          // defiSwap.removeLiquidity("Alice", 200);
                          //
                          // // Show all transactions
                          // defiSwap.showEvents();


  const numbers = [5, 10, 15, 20];
  const square = numbers.map(num => num**2);
  console.log(square);

const number = [2,3,4];
const product = number.reduce((acc,curr) => acc*curr);
console.log(product);

const marks =[45, 78, 89, 96, 32];
const max = marks.reduce((acc , curr) => curr > acc ? curr : acc,);
console.log(max);

  const score =[80, 90 ,100];
  const avg = score.reduce((acc,curr) =>acc+curr );
  const devide = avg / score.length;
  console.log(devide);


    const nums = [12, 56, 3, 89, 4, 99, 1];
    const trying0 = nums.reduce((arr , curr) => arr > curr ? arr : curr);
    console.log(trying0);


    const students = [
      { name: "Aman", marks: 85 },
      { name: "Riya", marks: 92 },
      { name: "Kabir", marks: 78 }
    ];
    const reduce1 = students.reduce((acc , curr) => acc + curr.marks,0);
    console.log(reduce1);

const words = ["JavaScript", "is", "awesome"];
// const string = words.reduce((acc , curr) =>acc + " " + curr );
// console.log(string);

const string = words.reduce((acc, curr) => acc + " " + curr, "");
console.log(string.trim()); // Removes first extra space if needed


const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mobile", price: 20000 },
  { item: "Headphones", price: 5000 }
];
const totalpay = cart.reduce((acc, curr) => acc + curr.price,0);
console.log(totalpay);


// const transactions = [
// "apple", "banana", "apple", "orange",
// "banana", "apple", "banana", "orange"
// ];
// const purches = transactions.reduce((acc , curr) =>{
//   if (acc[curr]) {
//     acc[curr] += 1;
//   }else {
//       acc[curr] = 1
//   }
//   return acc;
// } ,{} );
// console.log(purches);



const transactions = [
"apple", "banana", "apple", "orange",
"banana", "apple", "banana", "orange"
];
const purches = transactions.reduce((acc , curr) =>{
  acc[curr] = (acc[curr] || 0) + 1 ;
  return acc;
},{});
console.log(purches);

// const sentence = "web development is fun and web development is challenging";
//
// const warnrds = sentence.split(" ");
//
// const frequency = warnrds.reduce((acc, warnrds) => {
//   acc[warnrds] = (acc[warnrds] || 0) + 1;
//   return acc;
// }, {});
//
// console.log(warnrds);



const paragraph = "code never lies comments sometimes do code is fun code is life";
const finding = paragraph.split(" ");
const code = finding.reduce((acc , finding) =>{
   acc[finding] = (acc[finding] || 0) +1;
   return acc ;
 },{} );
console.log(code);




    const sentence = "the quick brown fox jumps over the lazy dog the fox is quick and smart";
    const unstring = sentence.split(" ");
    const tryal2 = unstring.reduce((acc , curr) =>{
      acc[curr] = (acc[curr] ||0) +1;
      return acc;
    },{});
console.log(tryal2);

let Newstudents = ["Ravi", "Seema", "Aman"];
 Newstudents.forEach((item, i) => {
  console.log(` hello ${item}!`);
});

// forEach() ➤ har element ke liye ek baar callback function run karega.
  // item ➤ ye current student ka naam hai.
  // i ➤ ye uska index hai (0, 1, 2).


  const users = [
    { name: "Ravi", active: true },
    { name: "Seema", active: false },
    { name: "Kabir", active: true }
  ];

  const activeUsers = users.filter(user => user.active);

  console.log(activeUsers);

  const products = [
    { id: 1, name: "Phone", price: 30000 },
    { id: 2, name: "Laptop", price: 60000 },
    { id: 3, name: "Tablet", price: 20000 },
  ];

  // Find the first product with price > 25000
let product2 = products.filter(pro => pro.price > 25000 );
console.log(product2);



const students1 = [
  { name: "Ravi", marks: 89 },
  { name: "Seema", marks: 95 },
  { name: "Kabir", marks: 67 },
];

// 🟡 Find the first student who scored more than 90 marks
let scored = students1.find(learn => learn.marks > 90  );
console.log(scored);


const users1 = [
  { name: "Ravi", age: 17 },
  { name: "Seema", age: 19 },
  { name: "Aman", age: 16 }
];

// Find the first user whose age is 18 or above
let scored1 = users1.find(puchi => puchi.age >= 18);
console.log(scored1);


const products3 = [
  { name: "Phone", price: 30000 },
  { name: "Laptop", price: 70000 },
  { name: "Tablet", price: 20000 }
];

// 🧠 Find the first product whose price is above 25000
let scored3 = products3.filter(puchi => puchi.price > 25000);
console.log(scored3);



let movies = [
  { title: "Avengers", rating: 8.5 },
  { title: "Batman", rating: 7.2 },
  { title: "Superman", rating: 6.9 },
  { title: "Ironman", rating: 9.0 }
];
let movies1 = movies.filter(watch => watch.rating >= 8.5 );
console.log(movies1);



let books = [
  { title: "JS Basics", published: true },
  { title: "React Guide", published: false },
  { title: "Node Mastery", published: true },
];
let iSavailable = books.filter(book => book.published);
console.log(iSavailable);


let products4 = [
  { name: "Phone", price: 30000 },
  { name: "Laptop", price: 70000 },
  { name: "Headphones", price: 5000 }
];

// ✅ Task 1: Ek naya array banao jisme price ke sath "₹" sign ho
// ✅ Task 2: Sirf product names ka ek array banao
let order3 = products4.map(product3 => `${product3.price }₹ - ${product3.name}`);
console.log(order3);
// let order4 = products4.map(product3 => product3.name);
// console.log(order4);

let userss = [
  { name: "Ravi", age: 22, role: "Admin" },
  { name: "Seema", age: 19, role: "User" },
  { name: "Kabir", age: 25, role: "Moderator" }
];
let user4 = userss.map(user3 => `${user3.name}  (${user3.age})  ${user3.role}`);
console.log(user4);

let cartItems = [
  { name: "Phone", price: 30000, quantity: 2 },
  { name: "Shoes", price: 2500, quantity: 3 },
  { name: "Watch", price: 1500, quantity: 1 }
];

// 👇 Task: Ek naya array banao jisme har product ka name aur uska total price ho (price * quantity)
let finalCart = cartItems.map(item => {
  return `${item.name} - ₹${item.price * item.quantity}`;
});

console.log(finalCart);

let users4 = [
  { name: "Ravi", avatar: "ravi.jpg" },
  { name: "Seema", avatar: "seema.jpg" },
  { name: "Aman", avatar: "aman.jpg" }
];

// 👇 Task: Ek array banao jisme har element HTML ke image tag jaisa string ho
let profileImages = users4.map(user => `<img src="${user.avatar}" alt="${user.name}" />`);
console.log(profileImages);


let user5 = [
  { firstName: "Ravi", lastName: "Kumar", age: 22 },
  { firstName: "Seema", lastName: "Sharma", age: 17 },
  { firstName: "Kabir", lastName: "Verma", age: 25 },
];
let users5 = user5
.filter(useing => useing )
.map(useing =>{
return  `displayName:${useing.firstName} ${useing.lastName}, canVote:${useing.age.filter() >17}`;
});
console.log(users5);
