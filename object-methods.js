/**
 * CONTOH KODE: Object Methods
 * ==========================
 * File ini berisi contoh lengkap penggunaan object methods di JavaScript
 */

function contohObjectBasics() {
  console.log("=== OBJECT BASICS ===");

  // Membuat object
  const person = {
    name: "John Doe",
    age: 25,
    city: "Jakarta",
    isStudent: false,
  };

  console.log("Person object:", person);

  // Accessing properties
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City using bracket notation:", person["city"]);

  // Adding properties
  person.email = "john@example.com";
  person["phone"] = "123-456-7890";
  console.log("After adding properties:", person);

  // Modifying properties
  person.age = 26;
  console.log("After modifying age:", person.age);

  // Deleting properties
  delete person.isStudent;
  console.log("After deleting isStudent:", person);

  // Checking if property exists
  console.log("Has name property:", "name" in person);
  console.log("Has address property:", "address" in person);
  console.log("Has own name property:", person.hasOwnProperty("name"));
}

// ================ OBJECT METHODS ================
function contohObjectMethods() {
  console.log("\n=== OBJECT METHODS ===");

  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",

    // Method
    start: function () {
      console.log(`${this.brand} ${this.model} is starting...`);
    },

    // Method dengan arrow function (tidak recommended untuk methods)
    getInfo: function () {
      return `${this.year} ${this.color} ${this.brand} ${this.model}`;
    },

    // Computed property name
    ["get" + "Description"]: function () {
      return `A ${this.color.toLowerCase()} ${this.brand} ${this.model} from ${
        this.year
      }`;
    },
  };

  console.log("Car object:", car);

  // Calling methods
  car.start();
  console.log("Car info:", car.getInfo());
  console.log("Car description:", car.getDescription());

  // Adding method dynamically
  car.stop = function () {
    console.log(`${this.brand} ${this.model} is stopping...`);
  };

  car.stop();

  // Method dengan parameters
  car.accelerate = function (speed) {
    console.log(`${this.brand} ${this.model} accelerating to ${speed} km/h`);
  };

  car.accelerate(100);
}

// ================ OBJECT.PROTOTYPE METHODS ================
function contohObjectPrototypeMethods() {
  console.log("\n=== OBJECT.PROTOTYPE METHODS ===");

  const person = {
    name: "Jane",
    age: 30,
    city: "Bandung",
  };

  // Object.keys() - get all enumerable property names
  console.log("Object.keys():", Object.keys(person));

  // Object.values() - get all enumerable property values
  console.log("Object.values():", Object.values(person));

  // Object.entries() - get key-value pairs as arrays
  console.log("Object.entries():", Object.entries(person));

  // Iterating dengan entries
  console.log("Iterating with entries:");
  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // Object.assign() - copy properties from one or more source objects
  const defaults = { theme: "light", language: "en" };
  const userPrefs = { theme: "dark" };
  const config = Object.assign({}, defaults, userPrefs);
  console.log("Object.assign() result:", config);

  // Object.freeze() - prevent modifications
  const frozen = Object.freeze({ a: 1, b: 2 });
  try {
    frozen.a = 3; // Will not work
    console.log("Frozen object after attempted modification:", frozen);
  } catch (error) {
    console.log("Error modifying frozen object:", error.message);
  }

  // Object.seal() - prevent adding/removing properties but allow modification
  const sealed = Object.seal({ x: 1, y: 2 });
  sealed.x = 10; // OK
  try {
    sealed.z = 3; // Will not work
    console.log("Sealed object after attempted addition:", sealed);
  } catch (error) {
    console.log("Error adding to sealed object");
  }
}

// ================ OBJECT.CREATE & PROTOTYPES ================
function contohObjectCreate() {
  console.log("\n=== OBJECT.CREATE & PROTOTYPES ===");

  // Object.create() - create object with specified prototype
  const animal = {
    type: "Animal",
    speak: function () {
      console.log(`${this.name} makes a sound`);
    },
  };

  const dog = Object.create(animal);
  dog.name = "Buddy";
  dog.breed = "Golden Retriever";

  console.log("Dog object:", dog);
  console.log("Dog's prototype:", Object.getPrototypeOf(dog));
  dog.speak();

  // Checking prototype chain
  console.log("dog instanceof animal's prototype:", animal.isPrototypeOf(dog));
  console.log("dog has own property 'name':", dog.hasOwnProperty("name"));
  console.log("dog has own property 'type':", dog.hasOwnProperty("type"));

  // Prototype inheritance
  const cat = Object.create(animal);
  cat.name = "Whiskers";
  cat.speak = function () {
    console.log(`${this.name} meows`);
  };

  cat.speak(); // Override method
  dog.speak(); // Use inherited method
}

// ================ OBJECT DESTRUCTURING ================
function contohObjectDestructuring() {
  console.log("\n=== OBJECT DESTRUCTURING ===");

  const user = {
    name: "Alice",
    age: 28,
    address: {
      city: "Jakarta",
      country: "Indonesia",
    },
    hobbies: ["reading", "coding"],
  };

  // Basic destructuring
  const { name, age } = user;
  console.log("Destructured name and age:", { name, age });

  // Destructuring dengan alias
  const { name: userName, age: userAge } = user;
  console.log("With aliases:", { userName, userAge });

  // Destructuring nested objects
  const {
    address: { city, country },
  } = user;
  console.log("Nested destructuring:", { city, country });

  // Destructuring dengan default values
  const { name: n, email = "N/A", age: a } = user;
  console.log("With defaults:", { n, email, a });

  // Rest operator
  const { name: nm, ...rest } = user;
  console.log("Using rest operator:", { nm, rest });

  // Destructuring in function parameters
  function printUser({ name, age, address: { city } }) {
    console.log(`${name} is ${age} years old and lives in ${city}`);
  }

  printUser(user);

  // Destructuring arrays in objects
  const data = {
    items: ["apple", "banana", "orange"],
    metadata: { total: 3, category: "fruits" },
  };

  const {
    items: [first, ...others],
    metadata: { total },
  } = data;
  console.log("Complex destructuring:", { first, others, total });
}

// ================ OBJECT SPREAD SYNTAX ================
function contohObjectSpread() {
  console.log("\n=== OBJECT SPREAD SYNTAX ===");

  const baseConfig = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
  };

  const devConfig = {
    ...baseConfig,
    apiUrl: "http://localhost:3000",
    debug: true,
  };

  console.log("Base config:", baseConfig);
  console.log("Dev config:", devConfig);

  // Merging multiple objects
  const config1 = { a: 1, b: 2 };
  const config2 = { b: 3, c: 4 };
  const config3 = { c: 5, d: 6 };

  const merged = { ...config1, ...config2, ...config3 };
  console.log("Merged configs:", merged);

  // Shallow copy
  const original = { x: 1, y: { z: 2 } };
  const copy = { ...original };
  copy.x = 10;
  copy.y.z = 20; // This affects original.y.z too!
  console.log("Original after shallow copy modification:", original);

  // Deep copy dengan spread (partial)
  const deepCopy = {
    ...original,
    y: { ...original.y },
  };
  deepCopy.y.z = 30;
  console.log("Original after deep copy modification:", original);
  console.log("Deep copy:", deepCopy);
}

// ================ OBJECT COMPARISON & CLONING ================
function contohObjectComparison() {
  console.log("\n=== OBJECT COMPARISON & CLONING ===");

  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  const obj3 = obj1;

  console.log("obj1 === obj2:", obj1 === obj2); // false (different references)
  console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

  // Shallow equality check
  function shallowEqual(objA, objB) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (objA[key] !== objB[key]) return false;
    }

    return true;
  }

  console.log("shallowEqual(obj1, obj2):", shallowEqual(obj1, obj2));

  // Deep equality check (simple version)
  function deepEqual(objA, objB) {
    if (objA === objB) return true;

    if (typeof objA !== "object" || typeof objB !== "object") return false;
    if (objA === null || objB === null) return false;

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(objA[key], objB[key])) return false;
    }

    return true;
  }

  const nested1 = { a: 1, b: { c: 2 } };
  const nested2 = { a: 1, b: { c: 2 } };
  console.log("deepEqual(nested objects):", deepEqual(nested1, nested2));

  // Object cloning methods
  const original = { x: 1, y: 2, z: { nested: true } };

  // Method 1: Spread operator (shallow)
  const clone1 = { ...original };

  // Method 2: Object.assign (shallow)
  const clone2 = Object.assign({}, original);

  // Method 3: JSON (deep, but loses methods and special values)
  const clone3 = JSON.parse(JSON.stringify(original));

  console.log("Original:", original);
  console.log("Clone 1 (spread):", clone1);
  console.log("Clone 2 (assign):", clone2);
  console.log("Clone 3 (JSON):", clone3);
}

// ================ OBJECT PROPERTY DESCRIPTORS ================
function contohPropertyDescriptors() {
  console.log("\n=== PROPERTY DESCRIPTORS ===");

  const obj = { a: 1, b: 2 };

  // Getting property descriptor
  const descriptor = Object.getOwnPropertyDescriptor(obj, "a");
  console.log("Property descriptor for 'a':", descriptor);

  // Defining property dengan descriptor
  Object.defineProperty(obj, "c", {
    value: 3,
    writable: false, // Cannot be changed
    enumerable: true, // Shows in for-in/Object.keys
    configurable: false, // Cannot be deleted or reconfigured
  });

  console.log("Object after defineProperty:", obj);

  // Try to modify read-only property
  try {
    obj.c = 10; // Won't work
    console.log("After trying to modify c:", obj.c);
  } catch (error) {
    console.log("Error modifying c:", error.message);
  }

  // Try to delete non-configurable property
  try {
    delete obj.c; // Won't work
    console.log("After trying to delete c:", obj);
  } catch (error) {
    console.log("Error deleting c:", error.message);
  }

  // Getter and setter
  const person = {
    firstName: "John",
    lastName: "Doe",
  };

  Object.defineProperty(person, "fullName", {
    get: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    set: function (value) {
      const parts = value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
    enumerable: true,
    configurable: true,
  });

  console.log("Full name:", person.fullName);
  person.fullName = "Jane Smith";
  console.log("After setting fullName:", person);
}

// ================ OBJECT UTILITIES ================
function contohObjectUtilities() {
  console.log("\n=== OBJECT UTILITIES ===");

  // Object.is() - Same-value equality
  console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
  console.log("NaN === NaN:", NaN === NaN); // false

  console.log("Object.is(0, -0):", Object.is(0, -0)); // false
  console.log("0 === -0:", 0 === -0); // true

  // Object.preventExtensions() - prevent adding new properties
  const extensible = { a: 1 };
  Object.preventExtensions(extensible);

  try {
    extensible.b = 2; // Won't work
    console.log(
      "After trying to add property to non-extensible object:",
      extensible
    );
  } catch (error) {
    console.log("Error adding property:", error.message);
  }

  // Checking object extensibility
  console.log("Is extensible:", Object.isExtensible(extensible));
  console.log("Is sealed:", Object.isSealed(extensible));
  console.log("Is frozen:", Object.isFrozen(extensible));

  // Object.getOwnPropertyNames() - get all property names (including non-enumerable)
  const obj = Object.create(
    {},
    {
      enumerableProp: { value: 1, enumerable: true },
      nonEnumerableProp: { value: 2, enumerable: false },
    }
  );

  console.log("Object.keys():", Object.keys(obj));
  console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(obj));

  // Object.getOwnPropertySymbols() - get symbol properties
  const symbol = Symbol("test");
  const objWithSymbol = {
    [symbol]: "symbol value",
    regularProp: "regular value",
  };

  console.log("Object.keys():", Object.keys(objWithSymbol));
  console.log(
    "Object.getOwnPropertySymbols():",
    Object.getOwnPropertySymbols(objWithSymbol)
  );
}

// ================ PRACTICAL OBJECT PATTERNS ================
function contohPracticalPatterns() {
  console.log("\n=== PRACTICAL OBJECT PATTERNS ===");

  // Factory pattern
  function createUser(name, email) {
    return {
      name,
      email,
      createdAt: new Date(),
      getInfo() {
        return `${this.name} (${this.email})`;
      },
      updateEmail(newEmail) {
        this.email = newEmail;
      },
    };
  }

  const user1 = createUser("John", "john@example.com");
  const user2 = createUser("Jane", "jane@example.com");

  console.log("User 1:", user1.getInfo());
  console.log("User 2:", user2.getInfo());

  // Mixin pattern
  const canWalk = {
    walk() {
      console.log(`${this.name} is walking`);
    },
  };

  const canSwim = {
    swim() {
      console.log(`${this.name} is swimming`);
    },
  };

  const person = { name: "Alice" };
  Object.assign(person, canWalk, canSwim);

  person.walk();
  person.swim();

  // Configuration object pattern
  function sendRequest(options) {
    const defaults = {
      method: "GET",
      headers: {},
      timeout: 5000,
      retries: 0,
    };

    const config = { ...defaults, ...options };

    console.log("Sending request with config:", config);
    return config;
  }

  const request1 = sendRequest({ method: "POST", timeout: 10000 });
  const request2 = sendRequest({ url: "/api/users", retries: 3 });

  // Object as map/dictionary
  const colorCodes = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
  };

  function getColorCode(color) {
    return colorCodes[color] || "#000000";
  }

  console.log("Red color code:", getColorCode("red"));
  console.log("Purple color code:", getColorCode("purple")); // default

  // Object iteration patterns
  const data = {
    users: 150,
    posts: 450,
    comments: 1200,
    likes: 5000,
  };

  // Pattern 1: Keys iteration
  console.log("Iterating keys:");
  Object.keys(data).forEach((key) => {
    console.log(`${key}: ${data[key]}`);
  });

  // Pattern 2: Values iteration
  console.log("Iterating values:");
  Object.values(data).forEach((value) => {
    console.log(`Value: ${value}`);
  });

  // Pattern 3: Entries iteration
  console.log("Iterating entries:");
  Object.entries(data).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH OBJECT METHODS\n");

contohObjectBasics();
contohObjectMethods();
contohObjectPrototypeMethods();
contohObjectCreate();
contohObjectDestructuring();
contohObjectSpread();
contohObjectComparison();
contohPropertyDescriptors();
contohObjectUtilities();
contohPracticalPatterns();

console.log("\n✅ SELESAI CONTOH OBJECT METHODS");

// ================ TIPS OBJECT METHODS ================
/*
TIPS OBJECT METHODS:

1. OBJECT CREATION
   - Object literal: const obj = { a: 1, b: 2 }
   - Object.create(): inheritance
   - Constructor functions: new MyClass()
   - ES6 classes: class MyClass {}

2. PROPERTY ACCESS
   - Dot notation: obj.property
   - Bracket notation: obj['property']
   - Bracket untuk dynamic keys: obj[key]

3. OBJECT.PROTOTYPE METHODS
   - Object.keys(): enumerable property names
   - Object.values(): enumerable property values
   - Object.entries(): key-value pairs
   - Object.assign(): shallow copy/merge
   - Object.freeze(): immutable object
   - Object.seal(): prevent add/delete

4. DESTRUCTURING
   - const { a, b } = obj
   - Aliases: const { a: x, b: y } = obj
   - Defaults: const { a = 1 } = obj
   - Rest: const { a, ...rest } = obj

5. SPREAD SYNTAX
   - Clone: { ...obj }
   - Merge: { ...obj1, ...obj2 }
   - Shallow copy only
   - Use JSON.parse/stringify untuk deep copy

6. PROPERTY DESCRIPTORS
   - value: property value
   - writable: can modify
   - enumerable: shows in enumeration
   - configurable: can delete/reconfigure
   - get/set: getter/setter functions

7. PROTOTYPE INHERITANCE
   - Object.create(proto)
   - __proto__ (deprecated)
   - Object.getPrototypeOf()
   - instanceof operator

8. BEST PRACTICES
   - Use const untuk object references
   - Prefer object literals
   - Use destructuring untuk access
   - Avoid deep nesting
   - Document object structures

9. COMMON PATTERNS
   - Factory functions
   - Mixins
   - Configuration objects
   - Object as maps
   - Method chaining

10. PERFORMANCE
    - Object.keys/values/entries create arrays
    - for-in loops include prototype chain
    - hasOwnProperty() untuk own properties only
    - Object.create(null) untuk pure dictionaries
*/
