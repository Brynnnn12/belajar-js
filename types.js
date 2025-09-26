/**
 * CONTOH KODE: Type Data
 * ======================
 * File ini berisi contoh penggunaan berbagai tipe data di JavaScript
 */

// ================ PRIMITIVE TYPES ================
function contohPrimitiveTypes() {
  console.log("=== PRIMITIVE TYPES ===");

  // String
  const nama = "John Doe";
  const greeting = "Hello World";
  const template = `Hello ${nama}!`;
  const multiline = `Baris pertama
Baris kedua`;

  console.log("String examples:");
  console.log(`Nama: ${nama}`);
  console.log(`Greeting: ${greeting}`);
  console.log(`Template: ${template}`);
  console.log(`Multiline: ${multiline}`);

  // Number
  const integer = 42;
  const float = 3.14159;
  const scientific = 1.23e5; // 123000
  const hex = 0xff; // 255
  const binary = 0b1010; // 10
  const octal = 0o755; // 493

  console.log("\nNumber examples:");
  console.log(`Integer: ${integer}`);
  console.log(`Float: ${float}`);
  console.log(`Scientific: ${scientific}`);
  console.log(`Hex: ${hex}, Binary: ${binary}, Octal: ${octal}`);

  // Boolean
  const benar = true;
  const salah = false;
  const comparison = 5 > 3; // true

  console.log("\nBoolean examples:");
  console.log(`Benar: ${benar}`);
  console.log(`Salah: ${salah}`);
  console.log(`Comparison: ${comparison}`);

  // Undefined
  let tidakDiisi;
  console.log(`\nUndefined: ${tidakDiisi}`);

  // Null
  const kosong = null;
  console.log(`Null: ${kosong}`);

  // Symbol (ES6+)
  const id1 = Symbol("id");
  const id2 = Symbol("id");
  console.log(`\nSymbol examples:`);
  console.log(`id1 === id2: ${id1 === id2}`); // false (selalu unik)

  // BigInt (ES11+)
  const bigNum = 9007199254740991n;
  const anotherBig = BigInt("9007199254740991");
  console.log(`\nBigInt examples:`);
  console.log(`Big number: ${bigNum}`);
  console.log(`Another big: ${anotherBig}`);
  console.log(`Type: ${typeof bigNum}`);
}

// ================ REFERENCE TYPES ================
function contohReferenceTypes() {
  console.log("\n=== REFERENCE TYPES ===");

  // Object
  const person = {
    nama: "John",
    umur: 25,
    alamat: {
      jalan: "Jl. Sudirman",
      kota: "Jakarta",
    },
    hobi: ["coding", "gaming"],
    perkenalan: function () {
      return `Halo, saya ${this.nama}`;
    },
  };

  console.log("Object example:");
  console.log(`Person:`, person);
  console.log(`Perkenalan: ${person.perkenalan()}`);

  // Array
  const numbers = [1, 2, 3, 4, 5];
  const mixed = [1, "hello", true, { key: "value" }, [1, 2]];
  const matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  console.log("\nArray examples:");
  console.log(`Numbers: ${numbers}`);
  console.log(`Mixed:`, mixed);
  console.log(`Matrix:`, matrix);

  // Function
  function regularFunction(a, b) {
    return a + b;
  }

  const arrowFunction = (a, b) => a * b;

  const functionExpression = function (a, b) {
    return a - b;
  };

  console.log("\nFunction examples:");
  console.log(`Regular: ${regularFunction(5, 3)}`);
  console.log(`Arrow: ${arrowFunction(5, 3)}`);
  console.log(`Expression: ${functionExpression(5, 3)}`);
}

// ================ TYPE CHECKING ================
function contohTypeChecking() {
  console.log("\n=== TYPE CHECKING ===");

  const values = [
    "Hello", // string
    42, // number
    3.14, // number
    true, // boolean
    false, // boolean
    null, // object (bug di JS)
    undefined, // undefined
    { name: "John" }, // object
    [1, 2, 3], // object
    function () {}, // function
    Symbol("id"), // symbol
    42n, // bigint
  ];

  console.log("Type checking with typeof:");
  values.forEach((value, index) => {
    console.log(`${index + 1}. ${JSON.stringify(value)} → ${typeof value}`);
  });

  // Special checks
  console.log("\nSpecial type checks:");
  console.log(`Array.isArray([1,2,3]): ${Array.isArray([1, 2, 3])}`);
  console.log(`Array.isArray({}): ${Array.isArray({})}`);

  const date = new Date();
  console.log(`instanceof Date: ${date instanceof Date}`);
  console.log(`instanceof Object: ${date instanceof Object}`);

  // Number special values
  console.log("\nNumber special values:");
  console.log(`isNaN(NaN): ${isNaN(NaN)}`);
  console.log(`isNaN("hello"): ${isNaN("hello")}`);
  console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`);
  console.log(`Number.isNaN("hello"): ${Number.isNaN("hello")}`);

  console.log(`isFinite(42): ${isFinite(42)}`);
  console.log(`isFinite(Infinity): ${isFinite(Infinity)}`);
  console.log(`Number.isFinite(42): ${Number.isFinite(42)}`);
  console.log(`Number.isInteger(42): ${Number.isInteger(42)}`);
  console.log(`Number.isInteger(42.5): ${Number.isInteger(42.5)}`);
}

// ================ TYPE CONVERSION ================
function contohTypeConversion() {
  console.log("\n=== TYPE CONVERSION ===");

  // String conversion
  console.log("String conversion:");
  console.log(`String(42): "${String(42)}"`);
  console.log(`String(true): "${String(true)}"`);
  console.log(`String(null): "${String(null)}"`);
  console.log(`String(undefined): "${String(undefined)}"`);

  // Number conversion
  console.log("\nNumber conversion:");
  console.log(`Number("42"): ${Number("42")}`);
  console.log(`Number("3.14"): ${Number("3.14")}`);
  console.log(`Number(""): ${Number("")}`);
  console.log(`Number("hello"): ${Number("hello")}`);
  console.log(`Number(null): ${Number(null)}`);
  console.log(`Number(undefined): ${Number(undefined)}`);

  // Boolean conversion
  console.log("\nBoolean conversion:");
  const falsyValues = [0, "", null, undefined, NaN, false];
  const truthyValues = [1, "hello", [], {}, true, "0", "false"];

  console.log("Falsy values:");
  falsyValues.forEach((value) => {
    console.log(`  Boolean(${JSON.stringify(value)}): ${Boolean(value)}`);
  });

  console.log("Truthy values:");
  truthyValues.forEach((value) => {
    console.log(`  Boolean(${JSON.stringify(value)}): ${Boolean(value)}`);
  });

  // Implicit conversion (type coercion)
  console.log("\nImplicit conversion:");
  console.log(`"5" + 3: ${"5" + 3}`); // "53" (string concatenation)
  console.log(`"5" - 3: ${"5" - 3}`); // 2 (numeric subtraction)
  console.log(`5 + true: ${5 + true}`); // 6 (true = 1)
  console.log(`5 + false: ${5 + false}`); // 5 (false = 0)
  console.log(`5 + null: ${5 + null}`); // 5 (null = 0)
  console.log(`5 + undefined: ${5 + undefined}`); // NaN

  // Explicit conversion best practices
  console.log("\nBest practices:");
  console.log(`parseInt("42px"): ${parseInt("42px")}`);
  console.log(`parseFloat("3.14em"): ${parseFloat("3.14em")}`);
  console.log(`+"42": ${+"42"}`); // unary plus for number
  console.log(`!!"hello": ${!!"hello"}`); // double negation for boolean
}

// ================ OBJECT WRAPPER TYPES ================
function contohWrapperTypes() {
  console.log("\n=== OBJECT WRAPPER TYPES ===");

  // Primitive values get wrapped temporarily when accessing methods
  const str = "hello";
  console.log(`str.length: ${str.length}`);
  console.log(`str.toUpperCase(): ${str.toUpperCase()}`);

  // This is equivalent to:
  const wrappedStr = new String("hello");
  console.log(`wrapped.length: ${wrappedStr.length}`);
  console.log(`wrapped.toUpperCase(): ${wrappedStr.toUpperCase()}`);

  // But they are different types
  console.log(`typeof str: ${typeof str}`);
  console.log(`typeof wrappedStr: ${typeof wrappedStr}`);
  console.log(`str instanceof String: ${str instanceof String}`);
  console.log(`wrappedStr instanceof String: ${wrappedStr instanceof String}`);

  // Same for numbers and booleans
  const num = 42;
  console.log(`\nnum.toFixed(2): ${num.toFixed(2)}`);

  const bool = true;
  console.log(`bool.toString(): ${bool.toString()}`);
}

// ================ SYMBOL ADVANCED ================
function contohSymbolAdvanced() {
  console.log("\n=== SYMBOL ADVANCED ===");

  // Symbol as object keys
  const user = {
    name: "John",
    [Symbol("id")]: 123,
    [Symbol("secret")]: "hidden",
  };

  console.log("User object:", user);
  console.log("Object.keys(user):", Object.keys(user)); // doesn't show symbols

  // Get symbol properties
  const symbols = Object.getOwnPropertySymbols(user);
  console.log("Symbol properties:", symbols);

  symbols.forEach((symbol) => {
    console.log(`Symbol ${symbol.description}: ${user[symbol]}`);
  });

  // Global symbol registry
  const globalSym1 = Symbol.for("globalId");
  const globalSym2 = Symbol.for("globalId");
  console.log(`globalSym1 === globalSym2: ${globalSym1 === globalSym2}`);

  console.log(`Symbol.keyFor(globalSym1): ${Symbol.keyFor(globalSym1)}`);
}

// ================ BIGINT OPERATIONS ================
function contohBigIntOperations() {
  console.log("\n=== BIGINT OPERATIONS ===");

  const big1 = 123456789012345678901234567890n;
  const big2 = 987654321098765432109876543210n;

  console.log(`big1: ${big1}`);
  console.log(`big2: ${big2}`);

  console.log(`big1 + big2: ${big1 + big2}`);
  console.log(`big1 * big2: ${big1 * big2}`);
  console.log(`big1 - big2: ${big1 - big2}`);
  console.log(`big1 / big2: ${big1 / big2}`);
  console.log(`big1 % big2: ${big1 % big2}`);

  // Cannot mix BigInt with regular numbers
  const num = 42;
  try {
    // console.log(big1 + num); // TypeError
  } catch (error) {
    console.log(`Error mixing BigInt and number: ${error.message}`);
  }

  // Must convert explicitly
  console.log(`big1 + BigInt(num): ${big1 + BigInt(num)}`);
  console.log(`Number(big1) + num: ${Number(big1) + num}`);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH TYPE DATA\n");

contohPrimitiveTypes();
contohReferenceTypes();
contohTypeChecking();
contohTypeConversion();
contohWrapperTypes();
contohSymbolAdvanced();
contohBigIntOperations();

console.log("\n✅ SELESAI CONTOH TYPE DATA");

// ================ TIPS PENGGUNAAN TYPE DATA ================
/*
TIPS PENGGUNAAN TYPE DATA:

1. PRIMITIVE TYPES
   - String: untuk teks
   - Number: untuk angka (integer & float)
   - Boolean: untuk true/false
   - undefined: variabel belum diisi
   - null: kosong secara sengaja
   - Symbol: untuk identifier unik
   - BigInt: untuk angka sangat besar

2. REFERENCE TYPES
   - Object: struktur data kompleks
   - Array: list/collection data
   - Function: blok kode yang bisa dipanggil

3. TYPE CHECKING
   - typeof: untuk primitive types
   - instanceof: untuk object types
   - Array.isArray(): khusus untuk array
   - Number.isNaN(), Number.isFinite(): untuk validasi number

4. TYPE CONVERSION
   - Explicit: String(), Number(), Boolean()
   - Implicit: JavaScript lakukan otomatis (type coercion)
   - parseInt(), parseFloat(): untuk string ke number
   - !! (double negation): untuk boolean conversion

5. BEST PRACTICES
   - Gunakan const untuk nilai yang tidak berubah
   - Gunakan let untuk nilai yang berubah
   - Hindari var (function scope)
   - Selalu gunakan strict equality (===)
   - Validasi input sebelum processing
   - Gunakan TypeScript untuk type safety (optional)
*/
