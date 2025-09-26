/**
 * CONTOH KODE: Callbacks
 * =====================
 * File ini berisi contoh penggunaan callback functions
 */

function contohBasicCallback() {
  console.log("=== BASIC CALLBACKS ===");

  // Function yang menerima callback
  function sapaNama(nama, callback) {
    console.log(`Halo ${nama}!`);
    callback(); // Panggil callback
  }

  // Callback function
  function ucapanTambahan() {
    console.log("Selamat datang di program JavaScript!");
  }

  // Menggunakan callback
  sapaNama("John", ucapanTambahan);

  // Callback inline
  sapaNama("Jane", function () {
    console.log("Semoga harimu menyenangkan!");
  });
}

// Callback dengan parameter
function contohCallbackWithParameter() {
  console.log("\n=== CALLBACKS WITH PARAMETERS ===");

  function prosesData(data, callback) {
    console.log(`Memproses data: ${data}`);

    // Simulasi processing
    setTimeout(() => {
      const result = data.toUpperCase();
      callback(result); // Kirim result ke callback
    }, 1000);
  }

  function tampilkanHasil(result) {
    console.log(`Hasil processing: ${result}`);
  }

  prosesData("hello world", tampilkanHasil);

  // Callback dengan multiple parameters
  function kalkulasi(a, b, operasi, callback) {
    let result;
    switch (operasi) {
      case "tambah":
        result = a + b;
        break;
      case "kurang":
        result = a - b;
        break;
      case "kali":
        result = a * b;
        break;
      case "bagi":
        result = a / b;
        break;
      default:
        result = 0;
    }

    callback(result);
  }

  function tampilkanKalkulasi(result) {
    console.log(`Hasil kalkulasi: ${result}`);
  }

  kalkulasi(10, 5, "tambah", tampilkanKalkulasi);
  kalkulasi(10, 5, "kali", tampilkanKalkulasi);
}

// Error handling dengan callback
function contohCallbackErrorHandling() {
  console.log("\n=== CALLBACK ERROR HANDLING ===");

  function bacaFile(namaFile, callback) {
    console.log(`Mencoba membaca file: ${namaFile}`);

    setTimeout(() => {
      // Simulasi error
      if (namaFile === "error.txt") {
        callback(new Error("File tidak ditemukan"), null);
      } else {
        callback(null, `Isi dari ${namaFile}`);
      }
    }, 500);
  }

  function handleFileRead(error, data) {
    if (error) {
      console.error("Error:", error.message);
      return;
    }
    console.log("Data:", data);
  }

  bacaFile("data.txt", handleFileRead);
  bacaFile("error.txt", handleFileRead);
}

// Callback hell example
function contohCallbackHell() {
  console.log("\n=== CALLBACK HELL EXAMPLE ===");

  function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 selesai");
      callback();
    }, 500);
  }

  function step2(callback) {
    setTimeout(() => {
      console.log("Step 2 selesai");
      callback();
    }, 500);
  }

  function step3(callback) {
    setTimeout(() => {
      console.log("Step 3 selesai");
      callback();
    }, 500);
  }

  // Callback hell - nested callbacks
  step1(function () {
    step2(function () {
      step3(function () {
        console.log("Semua step selesai!");
      });
    });
  });
}

// Mengatasi callback hell dengan modularisasi
function contohModularCallbacks() {
  console.log("\n=== MODULAR CALLBACKS (SOLUTION) ===");

  function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 selesai");
      callback();
    }, 500);
  }

  function step2(callback) {
    setTimeout(() => {
      console.log("Step 2 selesai");
      callback();
    }, 500);
  }

  function step3(callback) {
    setTimeout(() => {
      console.log("Step 3 selesai");
      callback();
    }, 500);
  }

  // Lebih readable dengan named functions
  function setelahStep1() {
    step2(setelahStep2);
  }

  function setelahStep2() {
    step3(setelahStep3);
  }

  function setelahStep3() {
    console.log("Semua step selesai!");
  }

  step1(setelahStep1);
}

// Array methods dengan callbacks
function contohArrayCallbacks() {
  console.log("\n=== ARRAY METHODS WITH CALLBACKS ===");

  const numbers = [1, 2, 3, 4, 5];

  // forEach - callback untuk setiap element
  console.log("forEach:");
  numbers.forEach(function (num, index) {
    console.log(`Index ${index}: ${num}`);
  });

  // map - callback untuk transform setiap element
  console.log("\nmap:");
  const doubled = numbers.map(function (num) {
    return num * 2;
  });
  console.log("Original:", numbers);
  console.log("Doubled:", doubled);

  // filter - callback untuk filter element
  console.log("\nfilter:");
  const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
  });
  console.log("Even numbers:", evenNumbers);

  // reduce - callback untuk reduce ke single value
  console.log("\nreduce:");
  const sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
  }, 0);
  console.log("Sum:", sum);

  // find - callback untuk mencari element
  console.log("\nfind:");
  const found = numbers.find(function (num) {
    return num > 3;
  });
  console.log("First number > 3:", found);

  // some - callback untuk test kondisi
  console.log("\nsome:");
  const hasEven = numbers.some(function (num) {
    return num % 2 === 0;
  });
  console.log("Has even number:", hasEven);

  // every - callback untuk test semua element
  console.log("\nevery:");
  const allPositive = numbers.every(function (num) {
    return num > 0;
  });
  console.log("All positive:", allPositive);
}

// Custom higher-order functions
function contohHigherOrderFunctions() {
  console.log("\n=== HIGHER-ORDER FUNCTIONS ===");

  // Function yang return function (closure)
  function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }

  const double = multiplier(2);
  const triple = multiplier(3);

  console.log("Double 5:", double(5));
  console.log("Triple 5:", triple(5));

  // Function yang menerima function sebagai parameter
  function applyOperation(numbers, operation) {
    return numbers.map(operation);
  }

  const numbers = [1, 2, 3, 4, 5];
  const squared = applyOperation(numbers, function (num) {
    return num * num;
  });

  console.log("Squared:", squared);

  // Function composition
  function compose(f, g) {
    return function (x) {
      return f(g(x));
    };
  }

  const add1 = function (x) {
    return x + 1;
  };
  const multiply2 = function (x) {
    return x * 2;
  };

  const add1ThenMultiply2 = compose(multiply2, add1);
  console.log("compose(multiply2, add1)(5):", add1ThenMultiply2(5));
}

// Event handling dengan callbacks
function contohEventCallbacks() {
  console.log("\n=== EVENT HANDLING CALLBACKS ===");

  // Simulasi event system
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }

    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach((callback) => {
          callback(data);
        });
      }
    }
  }

  const emitter = new EventEmitter();

  // Register callbacks
  emitter.on("user-login", function (user) {
    console.log(`User ${user.name} logged in`);
  });

  emitter.on("user-login", function (user) {
    console.log(`Sending welcome email to ${user.email}`);
  });

  emitter.on("error", function (error) {
    console.error("Error occurred:", error.message);
  });

  // Emit events
  emitter.emit("user-login", { name: "John", email: "john@example.com" });
  emitter.emit("error", new Error("Database connection failed"));
}

// Asynchronous callbacks
function contohAsyncCallbacks() {
  console.log("\n=== ASYNCHRONOUS CALLBACKS ===");

  // Simulasi async operation dengan callback
  function fetchUserData(userId, callback) {
    console.log(`Fetching user ${userId}...`);

    setTimeout(() => {
      // Simulasi API response
      const users = {
        1: { id: 1, name: "John", email: "john@example.com" },
        2: { id: 2, name: "Jane", email: "jane@example.com" },
      };

      const user = users[userId];
      if (user) {
        callback(null, user);
      } else {
        callback(new Error("User not found"), null);
      }
    }, 1000);
  }

  function handleUserData(error, user) {
    if (error) {
      console.error("Error:", error.message);
      return;
    }
    console.log("User data:", user);
  }

  fetchUserData(1, handleUserData);
  fetchUserData(3, handleUserData); // Error case
}

// Callback patterns
function contohCallbackPatterns() {
  console.log("\n=== CALLBACK PATTERNS ===");

  // Node.js style callback (error-first)
  function nodeStyleCallback(error, result) {
    if (error) {
      console.error("Error:", error);
      return;
    }
    console.log("Result:", result);
  }

  // CPS (Continuation Passing Style)
  function factorialCPS(n, continuation) {
    if (n === 0) {
      continuation(1);
    } else {
      factorialCPS(n - 1, function (result) {
        continuation(n * result);
      });
    }
  }

  factorialCPS(5, function (result) {
    console.log("Factorial 5:", result);
  });

  // Thunk pattern
  function makeThunk(fn, ...args) {
    return function (callback) {
      fn(...args, callback);
    };
  }

  function add(a, b, callback) {
    callback(a + b);
  }

  const addThunk = makeThunk(add, 5, 3);
  addThunk(function (result) {
    console.log("5 + 3 =", result);
  });
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH CALLBACKS\n");

contohBasicCallback();
contohCallbackWithParameter();
contohCallbackErrorHandling();
contohCallbackHell();
contohModularCallbacks();
contohArrayCallbacks();
contohHigherOrderFunctions();
contohEventCallbacks();
contohAsyncCallbacks();
contohCallbackPatterns();

console.log("\n✅ SELESAI CONTOH CALLBACKS");

// ================ TIPS CALLBACKS ================
/*
TIPS PENGGUNAAN CALLBACKS:

1. BASIC PRINCIPLES
   - Callback adalah function yang dikirim sebagai argument
   - Digunakan untuk menangani async operations
   - Error-first pattern untuk error handling

2. AVOIDING CALLBACK HELL
   - Gunakan named functions instead of anonymous
   - Modularisasi code menjadi functions terpisah
   - Gunakan Promises atau async/await
   - Limit nesting depth

3. ERROR HANDLING
   - Selalu check error parameter pertama
   - Handle errors appropriately
   - Don't throw errors in async callbacks
   - Use domains or try-catch untuk sync errors

4. BEST PRACTICES
   - Keep callbacks simple dan focused
   - Use descriptive names
   - Document callback signatures
   - Handle all code paths (success & error)
   - Don't call callbacks multiple times

5. COMMON PATTERNS
   - Node.js style: callback(error, result)
   - Browser style: callback(result) with error events
   - CPS (Continuation Passing Style)
   - Thunks for delaying execution

6. WHEN TO USE CALLBACKS
   - Async operations
   - Event handling
   - Array methods (forEach, map, filter)
   - Custom higher-order functions
   - Legacy code compatibility

7. MODERN ALTERNATIVES
   - Promises untuk complex async flows
   - Async/await untuk readable syntax
   - Observables untuk reactive programming
   - Generators untuk advanced control flow
*/
