/**
 * CONTOH KODE: Function Expressions
 * ================================
 * File ini berisi contoh berbagai cara mendefinisikan dan menggunakan function
 */

// ================ FUNCTION DECLARATION ================
function contohFunctionDeclaration() {
  console.log("=== FUNCTION DECLARATION ===");

  // Function declaration - bisa dipanggil sebelum dideklarasikan (hoisting)
  function sapa(nama) {
    return `Halo, ${nama}!`;
  }

  function hitungLuasPersegi(sisi) {
    return sisi * sisi;
  }

  function cekGenap(angka) {
    return angka % 2 === 0;
  }

  console.log(sapa("John"));
  console.log(`Luas persegi 5x5: ${hitungLuasPersegi(5)}`);
  console.log(`5 genap? ${cekGenap(5)}`);
  console.log(`6 genap? ${cekGenap(6)}`);
}

// ================ FUNCTION EXPRESSION ================
function contohFunctionExpression() {
  console.log("\n=== FUNCTION EXPRESSION ===");

  // Function expression - disimpan dalam variabel
  const perkalian = function (a, b) {
    return a * b;
  };

  const pembagian = function (a, b) {
    if (b === 0) {
      throw new Error("Tidak bisa bagi dengan nol");
    }
    return a / b;
  };

  // Anonymous function expression
  const kuadrat = function (angka) {
    return angka * angka;
  };

  console.log(`5 * 3 = ${perkalian(5, 3)}`);
  console.log(`10 / 2 = ${pembagian(10, 2)}`);
  console.log(`4 kuadrat = ${kuadrat(4)}`);

  // Named function expression
  const faktorial = function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  console.log(`5! = ${faktorial(5)}`);
}

// ================ ARROW FUNCTION ================
function contohArrowFunction() {
  console.log("\n=== ARROW FUNCTION ===");

  // Arrow function basic
  const tambah = (a, b) => a + b;
  const kurang = (a, b) => a - b;

  console.log(`10 + 5 = ${tambah(10, 5)}`);
  console.log(`10 - 5 = ${kurang(10, 5)}`);

  // Arrow function dengan body (multiple statements)
  const hitungBMI = (berat, tinggi) => {
    const bmi = berat / (tinggi * tinggi);
    const kategori =
      bmi < 18.5
        ? "Underweight"
        : bmi < 25
        ? "Normal"
        : bmi < 30
        ? "Overweight"
        : "Obese";
    return { bmi: bmi.toFixed(1), kategori };
  };

  const hasil = hitungBMI(70, 1.75);
  console.log(`BMI: ${hasil.bmi}, Kategori: ${hasil.kategori}`);

  // Arrow function dengan 1 parameter (bisa tanpa parentheses)
  const double = (x) => x * 2;
  const toUpper = (str) => str.toUpperCase();

  console.log(`Double 5: ${double(5)}`);
  console.log(`Uppercase: ${toUpper("hello")}`);

  // Arrow function tanpa parameter
  const getRandom = () => Math.random();
  const getCurrentTime = () => new Date().toLocaleTimeString();

  console.log(`Random: ${getRandom().toFixed(3)}`);
  console.log(`Time: ${getCurrentTime()}`);
}

// ================ DEFAULT PARAMETERS ================
function contohDefaultParameters() {
  console.log("\n=== DEFAULT PARAMETERS ===");

  // Function dengan default parameters
  function sapaLengkap(nama, umur = 25, kota = "Jakarta") {
    return `Halo ${nama}, umur ${umur} tahun dari ${kota}`;
  }

  console.log(sapaLengkap("John")); // semua default
  console.log(sapaLengkap("Jane", 30)); // kota default
  console.log(sapaLengkap("Bob", 28, "Bandung")); // semua custom

  // Default parameter dengan expression
  function createUser(name, id = Date.now()) {
    return { name, id, createdAt: new Date() };
  }

  const user1 = createUser("Alice");
  const user2 = createUser("Bob", 12345);

  console.log("User 1:", user1);
  console.log("User 2:", user2);

  // Default parameter referencing other parameters
  function createConfig(baseURL, path = "/", timeout = 5000) {
    return {
      url: baseURL + path,
      timeout,
    };
  }

  console.log(createConfig("https://api.example.com"));
  console.log(createConfig("https://api.example.com", "/users"));
}

// ================ REST PARAMETERS ================
function contohRestParameters() {
  console.log("\n=== REST PARAMETERS ===");

  // Rest parameters - mengumpulkan sisa argumen ke array
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  function multiply(multiplier, ...numbers) {
    return numbers.map((num) => num * multiplier);
  }

  console.log(`Sum 1+2+3+4+5 = ${sum(1, 2, 3, 4, 5)}`);
  console.log(`Multiply by 2: ${multiply(2, 1, 3, 5, 7)}`);

  // Rest dengan destructuring
  function processData(first, second, ...rest) {
    console.log(`First: ${first}`);
    console.log(`Second: ${second}`);
    console.log(`Rest: [${rest.join(", ")}]`);
    return { first, second, rest };
  }

  const result = processData("apple", "banana", "cherry", "date", "elderberry");
  console.log("Result:", result);

  // Rest dalam arrow function
  const combineArrays = (...arrays) => {
    return arrays.flat(); // flat() menggabungkan nested arrays
  };

  console.log(combineArrays([1, 2], [3, 4], [5, 6]));
}

// ================ FUNCTION AS PARAMETER (CALLBACK) ================
function contohFunctionAsParameter() {
  console.log("\n=== FUNCTION AS PARAMETER ===");

  // Function yang menerima callback
  function processArray(array, callback) {
    const result = [];
    for (let item of array) {
      result.push(callback(item));
    }
    return result;
  }

  const numbers = [1, 2, 3, 4, 5];

  // Callback functions
  const double = (x) => x * 2;
  const square = (x) => x * x;
  const isEven = (x) => x % 2 === 0;

  console.log("Original:", numbers);
  console.log("Doubled:", processArray(numbers, double));
  console.log("Squared:", processArray(numbers, square));
  console.log("Is even:", processArray(numbers, isEven));

  // Higher-order function
  function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }

  const triple = createMultiplier(3);
  const quadruple = createMultiplier(4);

  console.log("Triple:", processArray(numbers, triple));
  console.log("Quadruple:", processArray(numbers, quadruple));
}

// ================ IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ================
function contohIIFE() {
  console.log("\n=== IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) ===");

  // IIFE basic
  const result1 = (function () {
    const secret = "Rahasia";
    return `Hasil: ${secret}`;
  })();

  console.log(result1);

  // IIFE dengan parameter
  const calculator = (function () {
    function add(a, b) {
      return a + b;
    }
    function subtract(a, b) {
      return a - b;
    }
    function multiply(a, b) {
      return a * b;
    }
    function divide(a, b) {
      return a / b;
    }

    // Return public API
    return {
      add,
      subtract,
      multiply,
      divide,
    };
  })();

  console.log("Calculator:");
  console.log(`5 + 3 = ${calculator.add(5, 3)}`);
  console.log(`10 - 4 = ${calculator.subtract(10, 4)}`);
  console.log(`6 * 7 = ${calculator.multiply(6, 7)}`);
  console.log(`20 / 5 = ${calculator.divide(20, 5)}`);

  // IIFE untuk encapsulation
  const counter = (function () {
    let count = 0;

    return {
      increment: () => ++count,
      decrement: () => --count,
      getValue: () => count,
      reset: () => (count = 0),
    };
  })();

  console.log("\nCounter:");
  console.log(`Increment: ${counter.increment()}`);
  console.log(`Increment: ${counter.increment()}`);
  console.log(`Current value: ${counter.getValue()}`);
  console.log(`Decrement: ${counter.decrement()}`);
  console.log(`Current value: ${counter.getValue()}`);
}

// ================ RECURSIVE FUNCTIONS ================
function contohRecursiveFunctions() {
  console.log("\n=== RECURSIVE FUNCTIONS ===");

  // Faktorial dengan recursion
  function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
  }

  console.log("Factorial:");
  for (let i = 1; i <= 5; i++) {
    console.log(`${i}! = ${factorial(i)}`);
  }

  // Fibonacci dengan recursion
  function fibonacci(n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
  }

  console.log("\nFibonacci:");
  for (let i = 0; i <= 8; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
  }

  // Countdown dengan recursion
  function countdown(n) {
    if (n <= 0) {
      console.log("Blast off!");
      return;
    }
    console.log(n);
    countdown(n - 1);
  }

  console.log("\nCountdown:");
  countdown(5);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH FUNCTION EXPRESSIONS\n");

contohFunctionDeclaration();
contohFunctionExpression();
contohArrowFunction();
contohDefaultParameters();
contohRestParameters();
contohFunctionAsParameter();
contohIIFE();
contohRecursiveFunctions();

console.log("\n✅ SELESAI CONTOH FUNCTION EXPRESSIONS");

// ================ TIPS PENGGUNAAN FUNCTIONS ================
/*
TIPS PENGGUNAAN FUNCTIONS:

1. FUNCTION DECLARATION
   - Gunakan untuk function utama
   - Bisa dipanggil sebelum deklarasi (hoisting)
   - Lebih mudah di-debug

2. FUNCTION EXPRESSION
   - Gunakan untuk callback atau conditional assignment
   - Lebih fleksibel
   - Tidak hoisted

3. ARROW FUNCTIONS
   - Gunakan untuk function sederhana
   - Tidak memiliki this sendiri (lexical this)
   - Lebih concise

4. DEFAULT PARAMETERS
   - Berikan nilai default untuk parameter optional
   - Bisa menggunakan expression
   - Lebih baik daripada checking undefined

5. REST PARAMETERS
   - Untuk menerima jumlah argumen yang tidak terbatas
   - Selalu array
   - Harus parameter terakhir

6. CALLBACK FUNCTIONS
   - Untuk operasi asynchronous
   - Inversion of control
   - Error-first callback pattern

7. IIFE
   - Untuk encapsulation
   - Module pattern
   - Menghindari global scope pollution

8. RECURSION
   - Untuk masalah yang bisa dipecah menjadi sub-masalah
   - Perlu base case untuk menghentikan
   - Hati-hati dengan stack overflow

9. BEST PRACTICES
   - Function harus single responsibility
   - Gunakan descriptive names
   - Limit parameters (maksimal 3-4)
   - Return early (guard clauses)
   - Use const untuk function expressions
*/
