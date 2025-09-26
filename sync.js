/**
 * CONTOH KODE: Synchronous (Sinkron)
 * ================================
 * File ini berisi contoh eksekusi kode secara berurutan
 */

function contohSynchronous() {
  console.log("=== SYNCHRONOUS EXECUTION ===");

  console.log("1. Mulai program");

  // Function synchronous - eksekusi berurutan
  function tugas1() {
    console.log("2. Tugas 1 selesai");
  }

  function tugas2() {
    console.log("3. Tugas 2 selesai");
  }

  function tugas3() {
    console.log("4. Tugas 3 selesai");
  }

  // Eksekusi berurutan
  tugas1();
  tugas2();
  tugas3();

  console.log("5. Program selesai");

  // Synchronous loop
  console.log("\n6. Mulai loop synchronous:");
  for (let i = 1; i <= 3; i++) {
    console.log(`   Iterasi ke-${i}`);
    // Simulasi pekerjaan synchronous
    let result = i * i;
    console.log(`   Hasil: ${i} * ${i} = ${result}`);
  }

  console.log("7. Loop selesai");
}

// Blocking operations
function contohBlockingOperations() {
  console.log("\n=== BLOCKING OPERATIONS ===");

  console.log("Mulai blocking operation...");

  // Simulasi blocking operation (CPU intensive)
  function fibonacciBlocking(n) {
    if (n <= 1) return n;
    return fibonacciBlocking(n - 1) + fibonacciBlocking(n - 2);
  }

  const start = Date.now();
  const result = fibonacciBlocking(40); // Ini blocking!
  const end = Date.now();

  console.log(`Fibonacci(40) = ${result}`);
  console.log(`Waktu eksekusi: ${end - start}ms`);
  console.log("Blocking operation selesai");
}

// Synchronous file operations (Node.js only)
/*
function contohSyncFileOperations() {
  console.log("\n=== SYNCHRONOUS FILE OPERATIONS ===");

  const fs = require('fs');

  try {
    console.log("Membaca file secara synchronous...");

    // readFileSync - blocking operation
    const data = fs.readFileSync('example.txt', 'utf8');

    console.log("File berhasil dibaca:");
    console.log(data);

    // writeFileSync - blocking operation
    fs.writeFileSync('output.txt', 'Data dari synchronous operation');

    console.log("File berhasil ditulis");

  } catch (error) {
    console.error("Error:", error.message);
  }
}
*/

// Synchronous database operations simulation
function contohSyncDatabaseSimulation() {
  console.log("\n=== SYNCHRONOUS DATABASE SIMULATION ===");

  // Simulasi database in-memory
  const database = {
    users: [
      { id: 1, name: "John", email: "john@example.com" },
      { id: 2, name: "Jane", email: "jane@example.com" },
      { id: 3, name: "Bob", email: "bob@example.com" },
    ],
  };

  // Synchronous database operations
  function getUserById(id) {
    console.log(`Mencari user dengan ID: ${id}...`);

    // Simulasi query synchronous
    const user = database.users.find((user) => user.id === id);

    if (user) {
      console.log(`User ditemukan: ${user.name}`);
      return user;
    } else {
      console.log("User tidak ditemukan");
      return null;
    }
  }

  function getAllUsers() {
    console.log("Mengambil semua users...");
    return database.users;
  }

  function addUser(name, email) {
    console.log(`Menambah user: ${name}...`);

    const newId = database.users.length + 1;
    const newUser = { id: newId, name, email };

    database.users.push(newUser);
    console.log("User berhasil ditambahkan");
    return newUser;
  }

  // Eksekusi synchronous
  console.log("1. Mengambil semua users:");
  const allUsers = getAllUsers();
  console.log("Users:", allUsers);

  console.log("\n2. Mencari user dengan ID 2:");
  const user2 = getUserById(2);

  console.log("\n3. Mencari user dengan ID 99:");
  const user99 = getUserById(99);

  console.log("\n4. Menambah user baru:");
  const newUser = addUser("Alice", "alice@example.com");

  console.log("\n5. Mengambil semua users setelah penambahan:");
  const updatedUsers = getAllUsers();
  console.log("Users:", updatedUsers);
}

// Synchronous validation
function contohSyncValidation() {
  console.log("\n=== SYNCHRONOUS VALIDATION ===");

  function validateEmail(email) {
    console.log(`Validating email: ${email}...`);

    // Synchronous validation rules
    if (!email) {
      return { valid: false, message: "Email tidak boleh kosong" };
    }

    if (!email.includes("@")) {
      return { valid: false, message: "Email harus mengandung @" };
    }

    if (!email.includes(".")) {
      return { valid: false, message: "Email harus mengandung ." };
    }

    const parts = email.split("@");
    if (parts.length !== 2) {
      return { valid: false, message: "Email format tidak valid" };
    }

    return { valid: true, message: "Email valid" };
  }

  function validatePassword(password) {
    console.log(`Validating password: ${password}...`);

    if (!password) {
      return { valid: false, message: "Password tidak boleh kosong" };
    }

    if (password.length < 8) {
      return { valid: false, message: "Password minimal 8 karakter" };
    }

    if (!/[A-Z]/.test(password)) {
      return { valid: false, message: "Password harus mengandung huruf besar" };
    }

    if (!/[a-z]/.test(password)) {
      return { valid: false, message: "Password harus mengandung huruf kecil" };
    }

    if (!/[0-9]/.test(password)) {
      return { valid: false, message: "Password harus mengandung angka" };
    }

    return { valid: true, message: "Password valid" };
  }

  function validateUser(name, email, password) {
    console.log(`\nValidating user: ${name}...`);

    // Synchronous validation chain
    const nameValidation =
      name && name.length >= 2
        ? { valid: true, message: "Name valid" }
        : { valid: false, message: "Name minimal 2 karakter" };

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    const allValid =
      nameValidation.valid && emailValidation.valid && passwordValidation.valid;

    return {
      valid: allValid,
      validations: {
        name: nameValidation,
        email: emailValidation,
        password: passwordValidation,
      },
    };
  }

  // Test validations
  const testCases = [
    { name: "John", email: "john@example.com", password: "Password123" },
    { name: "J", email: "invalid-email", password: "weak" },
    { name: "", email: "", password: "" },
  ];

  testCases.forEach((testCase, index) => {
    console.log(`\n--- Test Case ${index + 1} ---`);
    const result = validateUser(
      testCase.name,
      testCase.email,
      testCase.password
    );
    console.log("Validation result:", result);
  });
}

// Synchronous calculation
function contohSyncCalculation() {
  console.log("\n=== SYNCHRONOUS CALCULATION ===");

  function calculateTotal(items) {
    console.log("Calculating total...");

    let subtotal = 0;
    let tax = 0;
    let total = 0;

    // Synchronous calculation
    for (let item of items) {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      console.log(
        `${item.name}: ${item.quantity} x $${item.price} = $${itemTotal.toFixed(
          2
        )}`
      );
    }

    tax = subtotal * 0.1; // 10% tax
    total = subtotal + tax;

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };
  }

  const shoppingCart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
  ];

  const result = calculateTotal(shoppingCart);

  console.log("\n--- Receipt ---");
  console.log(`Subtotal: $${result.subtotal}`);
  console.log(`Tax (10%): $${result.tax}`);
  console.log(`Total: $${result.total}`);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH SYNCHRONOUS\n");

contohSynchronous();
contohBlockingOperations();
// contohSyncFileOperations(); // Uncomment jika di Node.js
contohSyncDatabaseSimulation();
contohSyncValidation();
contohSyncCalculation();

console.log("\n✅ SELESAI CONTOH SYNCHRONOUS");

// ================ TIPS SYNCHRONOUS PROGRAMMING ================
/*
TIPS SYNCHRONOUS PROGRAMMING:

1. PREDICTABLE EXECUTION
   - Kode berjalan dari atas ke bawah
   - Tidak ada race conditions
   - Mudah di-debug dan understand

2. BLOCKING OPERATIONS
   - File I/O synchronous (readFileSync)
   - CPU intensive calculations
   - Database queries synchronous
   - User input waiting

3. WHEN TO USE SYNCHRONOUS
   - Simple scripts
   - Configuration loading
   - CPU-bound tasks
   - Startup/initialization code
   - Testing (lebih predictable)

4. LIMITATIONS
   - UI freezing pada heavy operations
   - Poor user experience
   - Cannot handle multiple requests simultaneously
   - Not suitable for I/O operations

5. BEST PRACTICES
   - Keep operations lightweight
   - Use for initialization only
   - Avoid in UI event handlers
   - Combine with asynchronous when needed
   - Profile performance regularly

6. MIGRATION TO ASYNC
   - Identify blocking operations
   - Replace with async alternatives
   - Use callbacks/promises/async-await
   - Test thoroughly after changes
*/
