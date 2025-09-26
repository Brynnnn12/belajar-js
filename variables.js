/**
 * CONTOH KODE: Declare Scope Variable dan Global Variable
 * =======================================================
 * File ini berisi contoh penggunaan variabel global dan local/scope
 */

// ================ GLOBAL VARIABLE ================
// Variabel global dapat diakses dari mana saja
let globalVar = "Saya adalah variabel global";
const GLOBAL_CONSTANT = "Konstanta global";

function aksesGlobal() {
  console.log("=== GLOBAL VARIABLE ===");
  console.log("Dari dalam function:", globalVar);
  console.log("Konstanta global:", GLOBAL_CONSTANT);
}

// ================ LOCAL/SCOPE VARIABLE ================
// Variabel local hanya bisa diakses di dalam function/block tempat dideklarasikan
function contohLocalScope() {
  console.log("\n=== LOCAL/SCOPE VARIABLE ===");

  // Function scope dengan var
  var functionVar = "Saya function scope (var)";
  console.log("Function scope (var):", functionVar);

  // Block scope dengan let
  if (true) {
    let blockVar = "Saya block scope (let)";
    const blockConst = "Saya block scope (const)";
    var functionVar2 = "Saya masih function scope"; // var tidak terpengaruh block

    console.log("Block scope (let):", blockVar);
    console.log("Block scope (const):", blockConst);
    console.log("Function scope dari dalam block:", functionVar2);
  }

  // console.log(blockVar); // Error: blockVar is not defined
  // console.log(blockConst); // Error: blockConst is not defined
  console.log("Function scope masih bisa diakses:", functionVar2);
}

// ================ VAR vs LET vs CONST ================
function perbedaanVarLetConst() {
  console.log("\n=== PERBEDAAN VAR vs LET vs CONST ===");

  // VAR: function scope, bisa redeclare
  console.log("--- VAR ---");
  var a = 1;
  console.log("Nilai awal a:", a);

  if (true) {
    var a = 2; // Redeclare OK dengan var
    console.log("Redeclare a di dalam block:", a);
  }
  console.log("Nilai a setelah block:", a);

  // LET: block scope, tidak bisa redeclare
  console.log("\n--- LET ---");
  let b = 10;
  console.log("Nilai awal b:", b);

  if (true) {
    let b = 20; // Ini adalah variabel b yang berbeda
    console.log("Nilai b di dalam block:", b);
  }
  console.log("Nilai b setelah block:", b);

  // CONST: block scope, tidak bisa reassign
  console.log("\n--- CONST ---");
  const c = 100;
  console.log("Nilai const c:", c);

  // c = 200; // Error: Assignment to constant variable

  // Const dengan object (property bisa diubah)
  const obj = { nama: "John" };
  obj.nama = "Jane"; // OK
  console.log("Object const setelah diubah:", obj);

  // obj = {}; // Error: Assignment to constant variable
}

// ================ HOISTING BASIC (akan dibahas lebih detail di hoisting.js) ================
function contohHoisting() {
  console.log("\n=== HOISTING BASIC ===");

  // Var hoisting
  console.log("Var sebelum deklarasi:", typeof hoistedVar); // undefined
  var hoistedVar = "Saya di-hoist";
  console.log("Var setelah deklarasi:", hoistedVar);

  // Function declaration hoisting
  hoistedFunction(); // OK, function declaration di-hoist

  function hoistedFunction() {
    console.log("Function declaration di-hoist");
  }

  // Let/const tidak hoisting
  try {
    // console.log(hoistedLet); // Error: Cannot access before initialization
    let hoistedLet = "Saya tidak di-hoist";
  } catch (error) {
    console.log("Let error:", error.message);
  }
}

// ================ CLOSURE (menggunakan scope) ================
function contohClosure() {
  console.log("\n=== CLOSURE ===");

  function outerFunction(outerVar) {
    // outerVar adalah closure variable
    return function innerFunction(innerVar) {
      console.log("Outer variable:", outerVar);
      console.log("Inner variable:", innerVar);
      return outerVar + innerVar;
    };
  }

  const closureFunc = outerFunction("Hello");
  const result = closureFunc(" World");
  console.log("Hasil closure:", result);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH VARIABLE SCOPE\n");

aksesGlobal();
contohLocalScope();
perbedaanVarLetConst();
contohHoisting();
contohClosure();

console.log("\n✅ SELESAI CONTOH VARIABLE SCOPE");

// ================ TIPS PENGGUNAAN ================
/*
TIPS PENGGUNAAN VARIABLE:

1. GUNAKAN const SECARA DEFAULT
   - Lebih aman karena tidak bisa diubah
   - Lebih mudah di-debug
   - Performance lebih baik

2. GUNAKAN let KETIKA PERLU REASSIGN
   - Ketika nilai variabel perlu berubah
   - Dalam loop atau conditional

3. HINDARI var
   - Bisa menyebabkan bug karena hoisting
   - Function scope bukan block scope
   - Bisa redeclare

4. NAMA VARIABLE
   - Gunakan camelCase
   - Deskriptif tapi tidak terlalu panjang
   - Untuk constant gunakan UPPER_SNAKE_CASE

5. SCOPE MANAGEMENT
   - Minimalisir global variables
   - Gunakan block scope sebanyak mungkin
   - Pahami closure untuk advanced patterns
*/
