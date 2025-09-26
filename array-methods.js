/**
 * CONTOH KODE: Array Methods
 * =========================
 * File ini berisi contoh lengkap penggunaan array methods di JavaScript
 */

function contohArrayBasics() {
  console.log("=== ARRAY BASICS ===");

  // Membuat array
  const numbers = [1, 2, 3, 4, 5];
  const fruits = ["Apple", "Banana", "Orange"];
  const mixed = [1, "hello", true, null, { name: "John" }];

  console.log("Numbers array:", numbers);
  console.log("Fruits array:", fruits);
  console.log("Mixed array:", mixed);

  // Array properties
  console.log("Numbers length:", numbers.length);
  console.log("Fruits length:", fruits.length);

  // Accessing elements
  console.log("First element:", numbers[0]);
  console.log("Last element:", numbers[numbers.length - 1]);
  console.log("Element at index 2:", numbers[2]);

  // Modifying elements
  numbers[0] = 10;
  console.log("After modifying first element:", numbers);

  // Adding elements
  numbers.push(6); // Add to end
  console.log("After push:", numbers);

  numbers.unshift(0); // Add to beginning
  console.log("After unshift:", numbers);

  // Removing elements
  const last = numbers.pop(); // Remove from end
  console.log("Popped element:", last);
  console.log("After pop:", numbers);

  const first = numbers.shift(); // Remove from beginning
  console.log("Shifted element:", first);
  console.log("After shift:", numbers);
}

// ================ MUTATING METHODS ================
function contohMutatingMethods() {
  console.log("\n=== MUTATING METHODS ===");

  let numbers = [1, 2, 3, 4, 5];
  console.log("Original array:", numbers);

  // push() - add to end
  numbers.push(6, 7);
  console.log("After push(6, 7):", numbers);

  // pop() - remove from end
  const popped = numbers.pop();
  console.log("Popped:", popped, "Array:", numbers);

  // unshift() - add to beginning
  numbers.unshift(0);
  console.log("After unshift(0):", numbers);

  // shift() - remove from beginning
  const shifted = numbers.shift();
  console.log("Shifted:", shifted, "Array:", numbers);

  // splice() - add/remove elements at specific position
  numbers.splice(2, 1, 99, 100); // Remove 1 element at index 2, add 99, 100
  console.log("After splice(2, 1, 99, 100):", numbers);

  // sort() - sort array (mutates original)
  const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
  unsorted.sort();
  console.log("After sort():", unsorted);

  // reverse() - reverse array
  const reversed = [1, 2, 3, 4, 5];
  reversed.reverse();
  console.log("After reverse():", reversed);

  // fill() - fill array with value
  const filled = [1, 2, 3, 4, 5];
  filled.fill(0, 1, 4); // Fill with 0 from index 1 to 4
  console.log("After fill(0, 1, 4):", filled);
}

// ================ NON-MUTATING METHODS ================
function contohNonMutatingMethods() {
  console.log("\n=== NON-MUTATING METHODS ===");

  const numbers = [1, 2, 3, 4, 5];
  console.log("Original array:", numbers);

  // slice() - extract portion of array
  const sliced = numbers.slice(1, 4);
  console.log("slice(1, 4):", sliced);
  console.log("Original unchanged:", numbers);

  // concat() - merge arrays
  const moreNumbers = [6, 7, 8];
  const concatenated = numbers.concat(moreNumbers);
  console.log("concat([6, 7, 8]):", concatenated);

  // join() - convert to string
  const joined = numbers.join(" - ");
  console.log("join(' - '):", joined);

  // toString() - convert to string
  const stringified = numbers.toString();
  console.log("toString():", stringified);

  // indexOf() - find index of element
  const index = numbers.indexOf(3);
  console.log("indexOf(3):", index);

  // lastIndexOf() - find last index of element
  const repeated = [1, 2, 3, 2, 1];
  const lastIndex = repeated.lastIndexOf(2);
  console.log("lastIndexOf(2) in [1,2,3,2,1]:", lastIndex);

  // includes() - check if element exists
  const includes = numbers.includes(3);
  console.log("includes(3):", includes);
  console.log("includes(10):", numbers.includes(10));
}

// ================ ITERATION METHODS ================
function contohIterationMethods() {
  console.log("\n=== ITERATION METHODS ===");

  const numbers = [1, 2, 3, 4, 5];
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  // forEach() - execute function for each element
  console.log("forEach:");
  numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
  });

  // map() - transform each element
  const doubled = numbers.map((num) => num * 2);
  console.log("map (double):", doubled);

  const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
  console.log("map (uppercase):", fruitsUpper);

  // filter() - filter elements based on condition
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log("filter (even numbers):", evenNumbers);

  const longFruits = fruits.filter((fruit) => fruit.length > 5);
  console.log("filter (long names):", longFruits);

  // reduce() - reduce array to single value
  const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  console.log("reduce (sum):", sum);

  const product = numbers.reduce((acc, curr) => acc * curr, 1);
  console.log("reduce (product):", product);

  const max = numbers.reduce((max, curr) => (curr > max ? curr : max));
  console.log("reduce (max):", max);

  // reduce untuk object
  const fruitLengths = fruits.reduce((acc, fruit) => {
    acc[fruit] = fruit.length;
    return acc;
  }, {});
  console.log("reduce (fruit lengths):", fruitLengths);
}

// ================ SEARCH METHODS ================
function contohSearchMethods() {
  console.log("\n=== SEARCH METHODS ===");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
  ];

  // find() - find first element that matches condition
  const firstEven = numbers.find((num) => num % 2 === 0);
  console.log("find (first even):", firstEven);

  const userJane = users.find((user) => user.name === "Jane");
  console.log("find (user Jane):", userJane);

  // findIndex() - find index of first element that matches
  const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
  console.log("findIndex (first even):", firstEvenIndex);

  const janeIndex = users.findIndex((user) => user.name === "Jane");
  console.log("findIndex (Jane):", janeIndex);

  // some() - check if at least one element matches
  const hasEven = numbers.some((num) => num % 2 === 0);
  console.log("some (has even):", hasEven);

  const hasAdult = users.some((user) => user.age >= 18);
  console.log("some (has adult):", hasAdult);

  // every() - check if all elements match
  const allEven = numbers.every((num) => num % 2 === 0);
  console.log("every (all even):", allEven);

  const allAdults = users.every((user) => user.age >= 18);
  console.log("every (all adults):", allAdults);
}

// ================ SORTING & ORDERING ================
function contohSorting() {
  console.log("\n=== SORTING & ORDERING ===");

  // sort() - sort array
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  console.log("sort numbers ascending:", sortedNumbers);

  const sortedDescending = [...numbers].sort((a, b) => b - a);
  console.log("sort numbers descending:", sortedDescending);

  // Sort strings
  const fruits = ["Banana", "Apple", "Orange", "Mango"];
  const sortedFruits = [...fruits].sort();
  console.log("sort fruits:", sortedFruits);

  // Sort objects
  const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 },
  ];

  const sortedByAge = [...users].sort((a, b) => a.age - b.age);
  console.log(
    "sort by age:",
    sortedByAge.map((u) => `${u.name}(${u.age})`)
  );

  const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
  console.log(
    "sort by name:",
    sortedByName.map((u) => u.name)
  );

  // reverse() - reverse array order
  const reversed = [1, 2, 3, 4, 5].reverse();
  console.log("reverse:", reversed);
}

// ================ ARRAY TRANSFORMATION ================
function contohArrayTransformation() {
  console.log("\n=== ARRAY TRANSFORMATION ===");

  const numbers = [1, 2, 3, 4, 5];

  // flat() - flatten nested arrays
  const nested = [1, [2, 3], [4, [5, 6]]];
  const flattened = nested.flat();
  console.log("flat():", flattened);

  const deeplyFlattened = nested.flat(2);
  console.log("flat(2):", deeplyFlattened);

  // flatMap() - map then flat
  const sentences = ["Hello world", "How are you"];
  const words = sentences.flatMap((sentence) => sentence.split(" "));
  console.log("flatMap (split sentences):", words);

  // Array.from() - create array from iterable
  const arrayFromString = Array.from("Hello");
  console.log("Array.from('Hello'):", arrayFromString);

  const arrayFromSet = Array.from(new Set([1, 2, 2, 3, 3, 3]));
  console.log("Array.from(Set):", arrayFromSet);

  // Array.from with mapping
  const doubledArray = Array.from([1, 2, 3], (x) => x * 2);
  console.log("Array.from with map:", doubledArray);

  // Array.of() - create array from arguments
  const arrayOf = Array.of(1, 2, 3, 4);
  console.log("Array.of(1, 2, 3, 4):", arrayOf);

  // Spread operator for transformation
  const original = [1, 2, 3];
  const spreadCopy = [...original];
  const spreadConcat = [...original, 4, 5, ...[6, 7]];
  console.log("spread copy:", spreadCopy);
  console.log("spread concat:", spreadConcat);
}

// ================ ADVANCED ARRAY METHODS ================
function contohAdvancedMethods() {
  console.log("\n=== ADVANCED ARRAY METHODS ===");

  // reduceRight() - reduce from right to left
  const numbers = [1, 2, 3, 4];
  const reducedRight = numbers.reduceRight((acc, curr) => {
    console.log(`Reducing: ${acc} with ${curr}`);
    return acc - curr;
  });
  console.log("reduceRight result:", reducedRight);

  // copyWithin() - copy part of array to another location
  const copyWithinArray = [1, 2, 3, 4, 5, 6];
  copyWithinArray.copyWithin(0, 3, 5); // Copy from index 3-5 to index 0
  console.log("copyWithin(0, 3, 5):", copyWithinArray);

  // entries() - iterator of key-value pairs
  const entries = ["a", "b", "c"].entries();
  console.log("entries():");
  for (const [index, value] of entries) {
    console.log(`  ${index}: ${value}`);
  }

  // keys() - iterator of keys
  const keys = ["a", "b", "c"].keys();
  console.log("keys():", Array.from(keys));

  // values() - iterator of values
  const values = ["a", "b", "c"].values();
  console.log("values():", Array.from(values));
}

// ================ ARRAY UTILITIES ================
function contohArrayUtilities() {
  console.log("\n=== ARRAY UTILITIES ===");

  // isArray() - check if value is array
  console.log("Array.isArray([]):", Array.isArray([]));
  console.log("Array.isArray({}):", Array.isArray({}));
  console.log("Array.isArray('string'):", Array.isArray("string"));

  // Array destructuring
  const [first, second, ...rest] = [1, 2, 3, 4, 5];
  console.log("Destructuring [first, second, ...rest]:", {
    first,
    second,
    rest,
  });

  // Array destructuring dengan default values
  const [a = 10, b = 20, c = 30] = [1, 2];
  console.log("Destructuring with defaults:", { a, b, c });

  // Swapping values dengan destructuring
  let x = 1,
    y = 2;
  [x, y] = [y, x];
  console.log("Swapped values:", { x, y });

  // Array methods chaining
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter((num) => num % 2 === 0) // [2, 4, 6, 8, 10]
    .map((num) => num * 2) // [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0); // 60
  console.log("Method chaining result:", result);
}

// ================ PRACTICAL EXAMPLES ================
function contohPracticalExamples() {
  console.log("\n=== PRACTICAL EXAMPLES ===");

  // Example 1: Shopping cart total
  const cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
  ];

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((sum, itemTotal) => sum + itemTotal, 0);

  console.log("Shopping cart total:", total);

  // Example 2: Filter and sort users
  const users = [
    { name: "John", age: 25, active: true },
    { name: "Jane", age: 30, active: false },
    { name: "Bob", age: 20, active: true },
    { name: "Alice", age: 35, active: true },
  ];

  const activeYoungUsers = users
    .filter((user) => user.active && user.age < 30)
    .sort((a, b) => a.age - b.age)
    .map((user) => user.name);

  console.log("Active users under 30:", activeYoungUsers);

  // Example 3: Group by category
  const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Mouse", category: "Electronics", price: 25 },
    { name: "Book", category: "Education", price: 20 },
    { name: "Pen", category: "Stationery", price: 5 },
  ];

  const groupedByCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  console.log("Products grouped by category:", groupedByCategory);

  // Example 4: Find duplicates
  const numbers = [1, 2, 3, 2, 4, 5, 4, 6];
  const duplicates = numbers.filter(
    (num, index) => numbers.indexOf(num) !== index
  );
  const uniqueDuplicates = [...new Set(duplicates)];
  console.log("Duplicate numbers:", uniqueDuplicates);

  // Example 5: Pagination
  const allItems = Array.from({ length: 100 }, (_, i) => i + 1);
  const pageSize = 10;
  const page = 2;

  const paginatedItems = allItems.slice((page - 1) * pageSize, page * pageSize);
  console.log(`Page ${page} items:`, paginatedItems);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH ARRAY METHODS\n");

contohArrayBasics();
contohMutatingMethods();
contohNonMutatingMethods();
contohIterationMethods();
contohSearchMethods();
contohSorting();
contohArrayTransformation();
contohAdvancedMethods();
contohArrayUtilities();
contohPracticalExamples();

console.log("\n✅ SELESAI CONTOH ARRAY METHODS");

// ================ TIPS ARRAY METHODS ================
/*
TIPS ARRAY METHODS:

1. MUTATING METHODS (mengubah array asli)
   - push/pop: add/remove dari end
   - unshift/shift: add/remove dari beginning
   - splice: add/remove pada posisi tertentu
   - sort/reverse: mengubah urutan
   - fill: mengisi dengan nilai

2. NON-MUTATING METHODS (tidak mengubah array asli)
   - slice: extract portion
   - concat: merge arrays
   - join/toString: convert to string
   - indexOf/lastIndexOf/includes: search

3. ITERATION METHODS
   - forEach: execute function untuk setiap element
   - map: transform setiap element
   - filter: filter berdasarkan kondisi
   - reduce: reduce ke single value

4. SEARCH METHODS
   - find: first element yang match
   - findIndex: index dari first match
   - some: apakah ada yang match
   - every: apakah semua match

5. SORTING
   - sort(): default lexicographic
   - sort(compareFn): custom sorting
   - reverse(): reverse order

6. TRANSFORMATION
   - flat(): flatten nested arrays
   - flatMap(): map then flat
   - Array.from(): create dari iterable
   - Spread operator: [...array]

7. PERFORMANCE CONSIDERATIONS
   - for loops fastest untuk large arrays
   - Method chaining dapat less readable
   - Some methods create new arrays
   - Consider memory usage

8. BEST PRACTICES
   - Use const untuk array references
   - Spread operator untuk copies
   - Method chaining untuk readability
   - Destructuring untuk access
   - Arrow functions untuk callbacks

9. COMMON PATTERNS
   - Filter then map
   - Reduce untuk accumulation
   - Find untuk single item
   - Some/every untuk validation
   - Sort untuk ordering

10. EDGE CASES
    - Empty arrays
    - Sparse arrays
    - Arrays dengan mixed types
    - Large arrays performance
    - Nested arrays
*/
