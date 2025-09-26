/**
 * CONTOH KODE: Asynchronous (Asinkron)
 * ===================================
 * File ini berisi contoh eksekusi kode secara tidak berurutan
 */

function contohAsynchronous() {
  console.log("=== ASYNCHRONOUS EXECUTION ===");

  console.log("1. Mulai program");

  // Function asynchronous - menggunakan setTimeout
  function tugasAsync1(callback) {
    setTimeout(() => {
      console.log("2. Tugas Async 1 selesai");
      callback();
    }, 1000);
  }

  function tugasAsync2(callback) {
    setTimeout(() => {
      console.log("3. Tugas Async 2 selesai");
      callback();
    }, 500);
  }

  function tugasAsync3() {
    setTimeout(() => {
      console.log("4. Tugas Async 3 selesai");
      console.log("5. Program selesai");
    }, 800);
  }

  // Eksekusi asynchronous dengan callback hell
  tugasAsync1(() => {
    tugasAsync2(() => {
      tugasAsync3();
    });
  });

  console.log("6. Program melanjutkan tanpa menunggu...");
}

// Asynchronous dengan Promise
function contohPromise() {
  console.log("\n=== PROMISE-BASED ASYNC ===");

  function tugasPromise(delay, nama) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${nama} selesai`);
        resolve(`${nama} berhasil`);
      }, delay);
    });
  }

  console.log("Memulai tugas dengan Promise...");

  tugasPromise(1000, "Tugas A")
    .then((result) => {
      console.log("Result A:", result);
      return tugasPromise(500, "Tugas B");
    })
    .then((result) => {
      console.log("Result B:", result);
      return tugasPromise(800, "Tugas C");
    })
    .then((result) => {
      console.log("Result C:", result);
      console.log("Semua tugas selesai!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log("Program melanjutkan tanpa menunggu Promise...");
}

// Asynchronous dengan async/await
async function contohAsyncAwait() {
  console.log("\n=== ASYNC/AWAIT SYNTAX ===");

  function tugasAsyncAwait(delay, nama) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${nama} selesai`);
        resolve(`${nama} berhasil`);
      }, delay);
    });
  }

  try {
    console.log("Memulai tugas dengan async/await...");

    const resultA = await tugasAsyncAwait(1000, "Tugas A");
    console.log("Result A:", resultA);

    const resultB = await tugasAsyncAwait(500, "Tugas B");
    console.log("Result B:", resultB);

    const resultC = await tugasAsyncAwait(800, "Tugas C");
    console.log("Result C:", resultC);

    console.log("Semua tugas async/await selesai!");
  } catch (error) {
    console.error("Error dalam async/await:", error);
  }
}

// Asynchronous file operations (Node.js only)
/*
function contohAsyncFileOperations() {
  console.log("\n=== ASYNCHRONOUS FILE OPERATIONS ===");

  const fs = require('fs').promises;

  async function bacaDanTulisFile() {
    try {
      console.log("Memulai operasi file async...");

      // Read file asynchronously
      const data = await fs.readFile('example.txt', 'utf8');
      console.log("File berhasil dibaca:");
      console.log(data);

      // Write file asynchronously
      await fs.writeFile('output-async.txt', 'Data dari async operation');
      console.log("File berhasil ditulis");

      console.log("Operasi file selesai");

    } catch (error) {
      console.error("Error file operation:", error.message);
    }
  }

  bacaDanTulisFile();
}
*/

// Asynchronous database operations simulation
function contohAsyncDatabaseSimulation() {
  console.log("\n=== ASYNCHRONOUS DATABASE SIMULATION ===");

  // Simulasi database in-memory
  const database = {
    users: [
      { id: 1, name: "John", email: "john@example.com" },
      { id: 2, name: "Jane", email: "jane@example.com" },
      { id: 3, name: "Bob", email: "bob@example.com" },
    ],
  };

  // Asynchronous database operations
  function getUserByIdAsync(id) {
    return new Promise((resolve, reject) => {
      console.log(`Mencari user dengan ID: ${id}...`);

      setTimeout(() => {
        const user = database.users.find((user) => user.id === id);

        if (user) {
          console.log(`User ditemukan: ${user.name}`);
          resolve(user);
        } else {
          console.log("User tidak ditemukan");
          reject(new Error(`User dengan ID ${id} tidak ditemukan`));
        }
      }, 500); // Simulasi network delay
    });
  }

  function getAllUsersAsync() {
    return new Promise((resolve) => {
      console.log("Mengambil semua users...");
      setTimeout(() => {
        resolve(database.users);
      }, 300);
    });
  }

  function addUserAsync(name, email) {
    return new Promise((resolve) => {
      console.log(`Menambah user: ${name}...`);

      setTimeout(() => {
        const newId = database.users.length + 1;
        const newUser = { id: newId, name, email };

        database.users.push(newUser);
        console.log("User berhasil ditambahkan");
        resolve(newUser);
      }, 400);
    });
  }

  // Menggunakan async/await untuk database operations
  async function demoDatabaseOperations() {
    try {
      console.log("1. Mengambil semua users:");
      const allUsers = await getAllUsersAsync();
      console.log("Users:", allUsers);

      console.log("\n2. Mencari user dengan ID 2:");
      const user2 = await getUserByIdAsync(2);
      console.log("User detail:", user2);

      console.log("\n3. Mencari user dengan ID 99:");
      try {
        const user99 = await getUserByIdAsync(99);
      } catch (error) {
        console.log("Error:", error.message);
      }

      console.log("\n4. Menambah user baru:");
      const newUser = await addUserAsync("Alice", "alice@example.com");
      console.log("New user:", newUser);

      console.log("\n5. Mengambil semua users setelah penambahan:");
      const updatedUsers = await getAllUsersAsync();
      console.log("Users:", updatedUsers);
    } catch (error) {
      console.error("Database error:", error);
    }
  }

  demoDatabaseOperations();
}

// Asynchronous API calls simulation
function contohAsyncAPISimulation() {
  console.log("\n=== ASYNCHRONOUS API SIMULATION ===");

  // Simulasi API endpoints
  const api = {
    // Simulasi HTTP GET request
    get: (endpoint) => {
      return new Promise((resolve, reject) => {
        console.log(`API GET: ${endpoint}`);

        setTimeout(() => {
          switch (endpoint) {
            case "/users":
              resolve({
                status: 200,
                data: [
                  { id: 1, name: "John" },
                  { id: 2, name: "Jane" },
                ],
              });
              break;
            case "/users/1":
              resolve({
                status: 200,
                data: { id: 1, name: "John", email: "john@example.com" },
              });
              break;
            case "/users/999":
              reject({
                status: 404,
                message: "User not found",
              });
              break;
            default:
              reject({
                status: 404,
                message: "Endpoint not found",
              });
          }
        }, Math.random() * 1000 + 500); // Random delay 500-1500ms
      });
    },

    // Simulasi HTTP POST request
    post: (endpoint, data) => {
      return new Promise((resolve, reject) => {
        console.log(`API POST: ${endpoint}`, data);

        setTimeout(() => {
          if (endpoint === "/users") {
            const newUser = {
              id: Date.now(),
              ...data,
              createdAt: new Date().toISOString(),
            };
            resolve({
              status: 201,
              data: newUser,
            });
          } else {
            reject({
              status: 404,
              message: "Endpoint not found",
            });
          }
        }, Math.random() * 1000 + 500);
      });
    },
  };

  // Demo API calls
  async function demoAPICalls() {
    try {
      console.log("1. Mengambil semua users:");
      const usersResponse = await api.get("/users");
      console.log("Response:", usersResponse);

      console.log("\n2. Mengambil user detail:");
      const userDetail = await api.get("/users/1");
      console.log("Response:", userDetail);

      console.log("\n3. Menambah user baru:");
      const newUser = await api.post("/users", {
        name: "Bob",
        email: "bob@example.com",
      });
      console.log("Response:", newUser);

      console.log("\n4. Mencoba endpoint yang tidak ada:");
      try {
        await api.get("/invalid-endpoint");
      } catch (error) {
        console.log("Error:", error);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  }

  demoAPICalls();
}

// Parallel vs Sequential async operations
function contohParallelVsSequential() {
  console.log("\n=== PARALLEL VS SEQUENTIAL ASYNC ===");

  function asyncTask(name, delay) {
    return new Promise((resolve) => {
      console.log(`${name} dimulai...`);
      setTimeout(() => {
        console.log(`${name} selesai`);
        resolve(`${name} result`);
      }, delay);
    });
  }

  // Sequential execution
  async function sequentialExecution() {
    console.log("\n--- SEQUENTIAL EXECUTION ---");
    const start = Date.now();

    const result1 = await asyncTask("Task 1", 1000);
    const result2 = await asyncTask("Task 2", 1000);
    const result3 = await asyncTask("Task 3", 1000);

    const end = Date.now();
    console.log(`Sequential total time: ${end - start}ms`);
    return [result1, result2, result3];
  }

  // Parallel execution
  async function parallelExecution() {
    console.log("\n--- PARALLEL EXECUTION ---");
    const start = Date.now();

    const [result1, result2, result3] = await Promise.all([
      asyncTask("Task A", 1000),
      asyncTask("Task B", 1000),
      asyncTask("Task C", 1000),
    ]);

    const end = Date.now();
    console.log(`Parallel total time: ${end - start}ms`);
    return [result1, result2, result3];
  }

  // Race condition example
  async function raceExample() {
    console.log("\n--- RACE CONDITION EXAMPLE ---");

    const task1 = asyncTask("Fast Task", 500);
    const task2 = asyncTask("Slow Task", 1500);

    const winner = await Promise.race([task1, task2]);
    console.log(`Winner: ${winner}`);
  }

  // Execute all examples
  sequentialExecution().then(() => {
    parallelExecution().then(() => {
      raceExample();
    });
  });
}

// Error handling in async code
function contohAsyncErrorHandling() {
  console.log("\n=== ASYNC ERROR HANDLING ===");

  function riskyAsyncOperation(success = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Operation successful");
        } else {
          reject(new Error("Operation failed"));
        }
      }, 500);
    });
  }

  // Error handling dengan Promise
  function promiseErrorHandling() {
    console.log("Promise error handling:");

    riskyAsyncOperation(false)
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.log("Error caught:", error.message);
      })
      .finally(() => {
        console.log("Finally block executed");
      });
  }

  // Error handling dengan async/await
  async function asyncAwaitErrorHandling() {
    console.log("\nAsync/await error handling:");

    try {
      const result = await riskyAsyncOperation(false);
      console.log("Success:", result);
    } catch (error) {
      console.log("Error caught:", error.message);
    } finally {
      console.log("Finally block executed");
    }
  }

  promiseErrorHandling();
  asyncAwaitErrorHandling();
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH ASYNCHRONOUS\n");

contohAsynchronous();
contohPromise();
contohAsyncAwait();
// contohAsyncFileOperations(); // Uncomment jika di Node.js
contohAsyncDatabaseSimulation();
contohAsyncAPISimulation();
contohParallelVsSequential();
contohAsyncErrorHandling();

console.log("\n✅ SELESAI CONTOH ASYNCHRONOUS");

// ================ TIPS ASYNCHRONOUS PROGRAMMING ================
/*
TIPS ASYNCHRONOUS PROGRAMMING:

1. WHEN TO USE ASYNC
   - I/O operations (file, network, database)
   - User interactions (events, timers)
   - Heavy computations that can be parallelized
   - API calls and external services

2. AVOIDING CALLBACK HELL
   - Use Promises instead of nested callbacks
   - Use async/await for cleaner syntax
   - Modularize async functions
   - Use Promise.all() for parallel operations

3. ERROR HANDLING
   - Always handle errors in async code
   - Use try/catch with async/await
   - Use .catch() with Promises
   - Don't forget .finally() for cleanup

4. PERFORMANCE CONSIDERATIONS
   - Use Promise.all() for parallel execution
   - Use Promise.race() for timeout/optimization
   - Avoid unnecessary async operations
   - Profile and optimize bottlenecks

5. BEST PRACTICES
   - Keep async functions small and focused
   - Use meaningful names for async operations
   - Document async behavior clearly
   - Test async code thoroughly
   - Handle timeouts and cancellation

6. COMMON PITFALLS
   - Forgetting to await async calls
   - Mixing sync and async code incorrectly
   - Not handling all error cases
   - Creating infinite async loops
   - Blocking the event loop unnecessarily
*/
