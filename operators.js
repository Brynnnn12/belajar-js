/**
 * CONTOH KODE: Operator
 * ====================
 * File ini berisi contoh penggunaan berbagai jenis operator di JavaScript
 */

// ================ ARITHMETIC OPERATORS ================
function contohArithmeticOperators() {
  console.log("=== ARITHMETIC OPERATORS ===");

  const a = 10;
  const b = 3;

  console.log(`a = ${a}, b = ${b}`);
  console.log(`Penjumlahan (a + b): ${a + b}`); // 13
  console.log(`Pengurangan (a - b): ${a - b}`); // 7
  console.log(`Perkalian (a * b): ${a * b}`); // 30
  console.log(`Pembagian (a / b): ${a / b}`); // 3.333...
  console.log(`Modulus (a % b): ${a % b}`); // 1 (sisa bagi)
  console.log(`Eksponen (a ** b): ${a ** b}`); // 1000 (10^3)

  // Increment & Decrement
  let counter = 5;
  console.log(`\nCounter awal: ${counter}`);
  console.log(`Pre-increment (++counter): ${++counter}`); // 6
  console.log(`Post-increment (counter++): ${counter++}`); // 6, lalu jadi 7
  console.log(`Counter sekarang: ${counter}`); // 7
  console.log(`Pre-decrement (--counter): ${--counter}`); // 6
  console.log(`Post-decrement (counter--): ${counter--}`); // 6, lalu jadi 5
  console.log(`Counter akhir: ${counter}`); // 5
}

// ================ COMPARISON OPERATORS ================
function contohComparisonOperators() {
  console.log("\n=== COMPARISON OPERATORS ===");

  const x = 5;
  const y = "5";
  const z = 10;

  console.log(`x = ${x} (${typeof x}), y = "${y}" (${typeof y}), z = ${z}`);

  // Loose equality (==) vs Strict equality (===)
  console.log(`x == y (loose): ${x == y}`); // true (value sama)
  console.log(`x === y (strict): ${x === y}`); // false (type berbeda)

  // Not equal
  console.log(`x != y (loose): ${x != y}`); // false
  console.log(`x !== y (strict): ${x !== y}`); // true

  // Greater/Less than
  console.log(`x < z: ${x < z}`); // true
  console.log(`x > z: ${x > z}`); // false
  console.log(`x <= 5: ${x <= 5}`); // true
  console.log(`z >= 10: ${z >= 10}`); // true

  // Special cases
  console.log(`null == undefined: ${null == undefined}`); // true
  console.log(`null === undefined: ${null === undefined}`); // false
  console.log(`0 == false: ${0 == false}`); // true
  console.log(`0 === false: ${0 === false}`); // false
  console.log(`"" == false: ${"" == false}`); // true
  console.log(`"" === false: ${"" === false}`); // false
}

// ================ LOGICAL OPERATORS ================
function contohLogicalOperators() {
  console.log("\n=== LOGICAL OPERATORS ===");

  const a = true;
  const b = false;
  const c = true;

  console.log(`a = ${a}, b = ${b}, c = ${c}`);

  // AND (&&) - semua harus true
  console.log(`a && c: ${a && c}`); // true
  console.log(`a && b: ${a && b}`); // false

  // OR (||) - salah satu harus true
  console.log(`a || b: ${a || b}`); // true
  console.log(`b || false: ${b || false}`); // false

  // NOT (!) - negasi
  console.log(`!a: ${!a}`); // false
  console.log(`!b: ${!b}`); // true

  // Complex expressions
  const age = 25;
  const hasLicense = true;
  const isStudent = false;

  const canDrive = age >= 18 && hasLicense;
  const needsDiscount = isStudent || age < 25;
  const isEligible = canDrive && !isStudent;

  console.log(
    `\nUsia: ${age}, Punya SIM: ${hasLicense}, Mahasiswa: ${isStudent}`
  );
  console.log(`Bisa bawa mobil: ${canDrive}`);
  console.log(`Butuh diskon: ${needsDiscount}`);
  console.log(`Eligible untuk program: ${isEligible}`);
}

// ================ ASSIGNMENT OPERATORS ================
function contohAssignmentOperators() {
  console.log("\n=== ASSIGNMENT OPERATORS ===");

  let num = 10;
  console.log(`Nilai awal: ${num}`);

  // Basic assignment
  num = 20;
  console.log(`Setelah = 20: ${num}`);

  // Compound assignment
  num += 5; // num = num + 5
  console.log(`Setelah += 5: ${num}`);

  num -= 3; // num = num - 3
  console.log(`Setelah -= 3: ${num}`);

  num *= 2; // num = num * 2
  console.log(`Setelah *= 2: ${num}`);

  num /= 4; // num = num / 4
  console.log(`Setelah /= 4: ${num}`);

  num %= 3; // num = num % 3
  console.log(`Setelah %= 3: ${num}`);

  num **= 2; // num = num ** 2
  console.log(`Setelah **= 2: ${num}`);

  // String concatenation
  let text = "Hello";
  text += " World";
  console.log(`String concat: ${text}`);
}

// ================ BITWISE OPERATORS ================
function contohBitwiseOperators() {
  console.log("\n=== BITWISE OPERATORS ===");

  const a = 5; // Binary: 101
  const b = 3; // Binary: 011

  console.log(
    `a = ${a} (binary: ${a.toString(2)}), b = ${b} (binary: ${b.toString(2)})`
  );

  // Bitwise AND
  console.log(`a & b: ${a & b} (binary: ${(a & b).toString(2)})`); // 001 → 1

  // Bitwise OR
  console.log(`a | b: ${a | b} (binary: ${(a | b).toString(2)})`); // 111 → 7

  // Bitwise XOR
  console.log(`a ^ b: ${a ^ b} (binary: ${(a ^ b).toString(2)})`); // 110 → 6

  // Bitwise NOT
  console.log(`~a: ${~a}`); // -6 (two's complement)

  // Left shift
  console.log(`a << 1: ${a << 1} (binary: ${(a << 1).toString(2)})`); // 1010 → 10

  // Right shift
  console.log(`a >> 1: ${a >> 1} (binary: ${(a >> 1).toString(2)})`); // 10 → 2

  // Unsigned right shift
  console.log(`a >>> 1: ${a >>> 1}`);
}

// ================ TYPEOF & INSTANCEOF ================
function contohTypeOperators() {
  console.log("\n=== TYPEOF & INSTANCEOF ===");

  const values = [
    "Hello", // string
    42, // number
    true, // boolean
    null, // object (bug di JS)
    undefined, // undefined
    { name: "John" }, // object
    [1, 2, 3], // object
    function () {}, // function
    Symbol("id"), // symbol
    42n, // bigint
  ];

  values.forEach((value, index) => {
    console.log(
      `${index + 1}. ${JSON.stringify(value)} → typeof: ${typeof value}`
    );
  });

  // instanceof
  console.log(`\n=== INSTANCEOF ===`);
  const arr = [1, 2, 3];
  const obj = { name: "John" };
  const date = new Date();

  console.log(`arr instanceof Array: ${arr instanceof Array}`);
  console.log(`obj instanceof Object: ${obj instanceof Object}`);
  console.log(`date instanceof Date: ${date instanceof Date}`);
  console.log(`arr instanceof Object: ${arr instanceof Object}`); // true (Array extends Object)
}

// ================ OPTIONAL CHAINING & NULLISH COALESCING ================
function contohModernOperators() {
  console.log("\n=== OPTIONAL CHAINING & NULLISH COALESCING ===");

  const user = {
    name: "John",
    address: {
      street: "Jl. Sudirman",
      city: "Jakarta",
    },
    settings: null,
  };

  // Optional chaining (?.) - mencegah error jika property undefined/null
  console.log(`Street: ${user.address?.street}`); // OK
  console.log(`Country: ${user.address?.country}`); // undefined (bukan error)
  console.log(`Theme: ${user.settings?.theme}`); // undefined (bukan error)

  // Tanpa optional chaining (akan error)
  try {
    // console.log(user.settings.theme); // TypeError
  } catch (error) {
    console.log(`Error tanpa optional chaining: ${error.message}`);
  }

  // Nullish coalescing (??) - default value hanya untuk null/undefined
  const theme1 = user.settings?.theme ?? "light";
  const theme2 = user.settings?.theme || "light";

  console.log(`\nNullish coalescing (??): ${theme1}`);
  console.log(`Logical OR (||): ${theme2}`);

  // Perbedaan ?? vs ||
  const values = [0, "", false, null, undefined, NaN];

  values.forEach((value) => {
    const result1 = value ?? "default";
    const result2 = value || "default";
    console.log(
      `${JSON.stringify(value)} → ??: ${JSON.stringify(
        result1
      )}, ||: ${JSON.stringify(result2)}`
    );
  });
}

// ================ SPREAD & REST OPERATORS ================
function contohSpreadRestOperators() {
  console.log("\n=== SPREAD & REST OPERATORS ===");

  // Spread operator (...) - menyebarkan elemen
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  console.log(`Spread array: ${combined}`);

  // Spread dengan object
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const merged = { ...obj1, ...obj2 };
  console.log(`Spread object:`, merged);

  // Rest operator - mengumpulkan sisa argumen
  function sum(first, second, ...rest) {
    console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);
    return [first, second, ...rest].reduce((total, num) => total + num, 0);
  }

  console.log(`Sum result: ${sum(1, 2, 3, 4, 5)}`);

  // Rest dalam destructuring
  const [head, ...tail] = [1, 2, 3, 4, 5];
  console.log(`Head: ${head}, Tail: ${tail}`);

  const { a, b, ...restObj } = { a: 1, b: 2, c: 3, d: 4 };
  console.log(`a: ${a}, b: ${b}, rest:`, restObj);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH OPERATORS\n");

contohArithmeticOperators();
contohComparisonOperators();
contohLogicalOperators();
contohAssignmentOperators();
contohBitwiseOperators();
contohTypeOperators();
contohModernOperators();
contohSpreadRestOperators();

console.log("\n✅ SELESAI CONTOH OPERATORS");

// ================ TIPS PENGGUNAAN OPERATORS ================
/*
TIPS PENGGUNAAN OPERATORS:

1. EQUALITY OPERATORS
   - Selalu gunakan === dan !== (strict equality)
   - Hindari == dan != kecuali benar-benar perlu

2. LOGICAL OPERATORS
   - && untuk conditional execution
   - || untuk default values
   - ! untuk negasi

3. SHORT-CIRCUIT EVALUATION
   - obj && obj.method() - panggil method jika obj ada
   - value || defaultValue - gunakan default jika falsy

4. MODERN OPERATORS
   - ?. (optional chaining) - akses property yang mungkin undefined
   - ?? (nullish coalescing) - default hanya untuk null/undefined
   - ... (spread/rest) - untuk array/object manipulation

5. BITWISE OPERATORS
   - Jarang digunakan untuk logic sehari-hari
   - Berguna untuk flags, permissions, optimizations

6. TYPE CHECKING
   - typeof untuk primitive types
   - instanceof untuk object types
   - Array.isArray() untuk cek array

7. PERFORMANCE
   - Beberapa operator lebih cepat dari yang lain
   - Tapi perbedaan biasanya negligible
   - Prioritas readability over micro-optimizations
*/
