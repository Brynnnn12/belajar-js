/**
 * CONTOH KODE: Looping (Perulangan)
 * ================================
 * File ini berisi contoh berbagai macam looping di JavaScript
 */

function contohForLoop() {
  console.log("=== FOR LOOP ===");

  // Basic for loop
  console.log("Basic for loop:");
  for (let i = 0; i < 5; i++) {
    console.log(`Iterasi ke-${i + 1}`);
  }

  // For loop dengan array
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  console.log("\nLooping array dengan for:");
  for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
  }

  // For loop dengan break
  console.log("\nFor loop dengan break:");
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      console.log("Berhenti di angka 5");
      break;
    }
    console.log(`Angka: ${i}`);
  }

  // For loop dengan continue
  console.log("\nFor loop dengan continue:");
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; // Skip angka genap
    }
    console.log(`Angka ganjil: ${i}`);
  }

  // Nested for loops
  console.log("\nNested for loops (perkalian):");
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
  }
}

// ================ WHILE LOOP ================
function contohWhileLoop() {
  console.log("\n=== WHILE LOOP ===");

  // Basic while loop
  console.log("Basic while loop:");
  let counter = 1;
  while (counter <= 5) {
    console.log(`Counter: ${counter}`);
    counter++;
  }

  // While loop dengan user input simulation
  console.log("\nWhile loop dengan kondisi dinamis:");
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    attempts++;
    console.log(`Percobaan ke-${attempts}`);

    // Simulasi success/failure
    const success = Math.random() > 0.5;
    if (success) {
      console.log("Berhasil!");
      break;
    } else {
      console.log("Gagal, mencoba lagi...");
    }
  }

  if (attempts === maxAttempts) {
    console.log("Maksimal percobaan tercapai");
  }

  // Do-while loop
  console.log("\nDo-while loop (minimal 1 iterasi):");
  let num = 1;
  do {
    console.log(`Angka: ${num}`);
    num++;
  } while (num <= 3);
}

// ================ FOR-OF LOOP ================
function contohForOfLoop() {
  console.log("\n=== FOR-OF LOOP ===");

  // For-of dengan array
  const colors = ["Red", "Green", "Blue", "Yellow"];
  console.log("Looping array dengan for-of:");
  for (const color of colors) {
    console.log(`Color: ${color}`);
  }

  // For-of dengan string
  const text = "JavaScript";
  console.log("\nLooping string dengan for-of:");
  for (const char of text) {
    console.log(`Character: ${char}`);
  }

  // For-of dengan Set
  const uniqueNumbers = new Set([1, 2, 3, 3, 2, 1, 4]);
  console.log("\nLooping Set dengan for-of:");
  for (const num of uniqueNumbers) {
    console.log(`Unique number: ${num}`);
  }

  // For-of dengan Map
  const userMap = new Map([
    ["john", { name: "John", age: 25 }],
    ["jane", { name: "Jane", age: 30 }],
    ["bob", { name: "Bob", age: 35 }],
  ]);
  console.log("\nLooping Map dengan for-of:");
  for (const [key, value] of userMap) {
    console.log(`${key}: ${value.name} (${value.age} tahun)`);
  }
}

// ================ FOR-IN LOOP ================
function contohForInLoop() {
  console.log("\n=== FOR-IN LOOP ===");

  // For-in dengan object
  const person = {
    name: "John Doe",
    age: 25,
    city: "Jakarta",
    occupation: "Developer",
  };

  console.log("Looping object properties dengan for-in:");
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  // For-in dengan array (tidak recommended)
  const numbers = [10, 20, 30, 40];
  console.log("\nLooping array dengan for-in (kurang recommended):");
  for (const index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`);
  }

  // Check hasOwnProperty
  console.log("\nFor-in dengan hasOwnProperty check:");
  function CustomObject() {
    this.prop1 = "value1";
    this.prop2 = "value2";
  }
  CustomObject.prototype.inheritedProp = "inherited";

  const obj = new CustomObject();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Own property: ${key} = ${obj[key]}`);
    } else {
      console.log(`Inherited property: ${key} = ${obj[key]}`);
    }
  }
}

// ================ ARRAY METHODS ================
function contohArrayMethods() {
  console.log("\n=== ARRAY METHODS FOR LOOPING ===");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // forEach
  console.log("forEach:");
  numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
  });

  // map
  console.log("\nmap (transform array):");
  const doubled = numbers.map((num) => num * 2);
  console.log("Original:", numbers);
  console.log("Doubled:", doubled);

  // filter
  console.log("\nfilter (filter elements):");
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log("Even numbers:", evenNumbers);

  // reduce
  console.log("\nreduce (accumulate values):");
  const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  console.log("Sum of all numbers:", sum);

  const max = numbers.reduce((max, current) => (current > max ? current : max));
  console.log("Max number:", max);

  // some
  console.log("\nsome (check if any element matches):");
  const hasEven = numbers.some((num) => num % 2 === 0);
  console.log("Has even number:", hasEven);

  const hasNegative = numbers.some((num) => num < 0);
  console.log("Has negative number:", hasNegative);

  // every
  console.log("\nevery (check if all elements match):");
  const allPositive = numbers.every((num) => num > 0);
  console.log("All positive:", allPositive);

  const allEven = numbers.every((num) => num % 2 === 0);
  console.log("All even:", allEven);

  // find
  console.log("\nfind (find first matching element):");
  const firstEven = numbers.find((num) => num % 2 === 0);
  console.log("First even number:", firstEven);

  const firstGreaterThan5 = numbers.find((num) => num > 5);
  console.log("First number > 5:", firstGreaterThan5);

  // findIndex
  console.log("\nfindIndex (find index of first matching element):");
  const indexOfFirstEven = numbers.findIndex((num) => num % 2 === 0);
  console.log("Index of first even number:", indexOfFirstEven);
}

// ================ OBJECT LOOPING ================
function contohObjectLooping() {
  console.log("\n=== OBJECT LOOPING ===");

  const user = {
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    address: {
      street: "Jl. Sudirman",
      city: "Jakarta",
      country: "Indonesia",
    },
    hobbies: ["reading", "coding", "gaming"],
  };

  // Object.keys()
  console.log("Object.keys():");
  Object.keys(user).forEach((key) => {
    console.log(`${key}: ${JSON.stringify(user[key])}`);
  });

  // Object.values()
  console.log("\nObject.values():");
  Object.values(user).forEach((value) => {
    console.log(`Value: ${JSON.stringify(value)}`);
  });

  // Object.entries()
  console.log("\nObject.entries():");
  Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${JSON.stringify(value)}`);
  });

  // Modern for-in dengan guard
  console.log("\nModern for-in dengan hasOwnProperty:");
  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      console.log(`${key}: ${JSON.stringify(user[key])}`);
    }
  }
}

// ================ ADVANCED LOOPING PATTERNS ================
function contohAdvancedLooping() {
  console.log("\n=== ADVANCED LOOPING PATTERNS ===");

  // Loop dengan destructuring
  const users = [
    { id: 1, name: "John", scores: [85, 90, 88] },
    { id: 2, name: "Jane", scores: [92, 87, 95] },
    { id: 3, name: "Bob", scores: [78, 82, 80] },
  ];

  console.log("Loop dengan destructuring:");
  users.forEach(({ id, name, scores }) => {
    const average =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;
    console.log(`${name} (ID: ${id}): Average score = ${average.toFixed(2)}`);
  });

  // Async looping dengan Promise.all
  console.log("\nAsync looping:");
  async function processUsersAsync(users) {
    const promises = users.map(async (user, index) => {
      // Simulasi async operation
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
      return `${index + 1}. Processed ${user.name}`;
    });

    const results = await Promise.all(promises);
    results.forEach((result) => console.log(result));
  }

  processUsersAsync(users);

  // Recursive loop untuk nested structures
  function processNestedData(data, level = 0) {
    const indent = "  ".repeat(level);

    if (Array.isArray(data)) {
      console.log(`${indent}Array with ${data.length} items:`);
      data.forEach((item, index) => {
        console.log(`${indent}[${index}]:`);
        processNestedData(item, level + 1);
      });
    } else if (typeof data === "object" && data !== null) {
      console.log(`${indent}Object:`);
      Object.entries(data).forEach(([key, value]) => {
        console.log(`${indent}${key}:`);
        processNestedData(value, level + 1);
      });
    } else {
      console.log(`${indent}${data}`);
    }
  }

  console.log("\nRecursive processing of nested data:");
  const nestedData = {
    company: "Tech Corp",
    employees: [
      { name: "John", skills: ["JS", "React"] },
      { name: "Jane", skills: ["Python", "Django"] },
    ],
  };
  processNestedData(nestedData);
}

// ================ LOOPING PERFORMANCE ================
function contohLoopingPerformance() {
  console.log("\n=== LOOPING PERFORMANCE ===");

  const largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);

  console.log("Comparing loop performance (100k elements)...");

  // Traditional for loop
  console.time("Traditional for loop");
  let sum1 = 0;
  for (let i = 0; i < largeArray.length; i++) {
    sum1 += largeArray[i];
  }
  console.timeEnd("Traditional for loop");

  // for-of loop
  console.time("for-of loop");
  let sum2 = 0;
  for (const num of largeArray) {
    sum2 += num;
  }
  console.timeEnd("for-of loop");

  // forEach
  console.time("forEach");
  let sum3 = 0;
  largeArray.forEach((num) => (sum3 += num));
  console.timeEnd("forEach");

  // reduce
  console.time("reduce");
  const sum4 = largeArray.reduce((acc, num) => acc + num, 0);
  console.timeEnd("reduce");

  console.log(
    `All sums equal: ${sum1 === sum2 && sum2 === sum3 && sum3 === sum4}`
  );

  // Performance tips
  console.log("\nPerformance tips:");
  console.log("1. Use traditional for loop for large arrays");
  console.log("2. Cache array.length in traditional for loops");
  console.log("3. Use for-of for readability when performance isn't critical");
  console.log("4. Avoid for-in for arrays");
  console.log(
    "5. Consider functional methods (map, filter, reduce) for complex operations"
  );
}

// ================ LOOP CONTROL ================
function contohLoopControl() {
  console.log("\n=== LOOP CONTROL ===");

  // Break dan continue
  console.log("Break and continue:");
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      console.log("Skipping 5 with continue");
      continue;
    }
    if (i === 8) {
      console.log("Breaking at 8");
      break;
    }
    console.log(`Number: ${i}`);
  }

  // Labelled loops
  console.log("\nLabelled loops:");
  outerLoop: for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop: ${i}`);

    for (let j = 1; j <= 3; j++) {
      console.log(`  Inner loop: ${j}`);

      if (i === 2 && j === 2) {
        console.log("Breaking out of both loops");
        break outerLoop;
      }
    }
  }

  // Return from function
  function findFirstEven(numbers) {
    for (const num of numbers) {
      if (num % 2 === 0) {
        return num; // Return exits the function
      }
    }
    return null;
  }

  const numbers = [1, 3, 5, 6, 7, 9];
  const firstEven = findFirstEven(numbers);
  console.log(`\nFirst even number: ${firstEven}`);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH LOOPING\n");

contohForLoop();
contohWhileLoop();
contohForOfLoop();
contohForInLoop();
contohArrayMethods();
contohObjectLooping();
contohAdvancedLooping();
contohLoopingPerformance();
contohLoopControl();

console.log("\n✅ SELESAI CONTOH LOOPING");

// ================ TIPS LOOPING ================
/*
TIPS LOOPING:

1. FOR LOOP
   - Use untuk known number of iterations
   - Cache array.length untuk performance
   - Use let untuk block scope
   - Break/continue untuk control flow

2. WHILE LOOP
   - Use untuk unknown number of iterations
   - Condition checked before each iteration
   - Risk of infinite loops
   - Do-while minimal 1 iteration

3. FOR-OF LOOP
   - Modern, clean syntax
   - Works dengan arrays, strings, Sets, Maps
   - No index access
   - Can't modify array during iteration

4. FOR-IN LOOP
   - For object properties
   - Includes inherited properties
   - Use hasOwnProperty() check
   - Not recommended untuk arrays

5. ARRAY METHODS
   - forEach: side effects
   - map: transform elements
   - filter: select elements
   - reduce: accumulate values
   - find/findIndex: search elements
   - some/every: test conditions

6. PERFORMANCE
   - Traditional for loop fastest untuk large arrays
   - for-of good balance readability/performance
   - forEach slower karena function calls
   - Cache length untuk traditional for loops

7. BEST PRACTICES
   - Choose right loop untuk job
   - Avoid modifying array during iteration
   - Use meaningful variable names
   - Consider functional programming approach
   - Handle edge cases (empty arrays, etc.)

8. COMMON PATTERNS
   - Loop with index: traditional for
   - Loop with values: for-of
   - Loop with condition: while
   - Transform data: map/filter/reduce
   - Search: find/some/every
   - Side effects: forEach
*/
