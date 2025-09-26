/**
 * CONTOH KODE: Promises
 * ====================
 * File ini berisi contoh penggunaan Promise untuk async programming
 */

function contohBasicPromise() {
  console.log("=== BASIC PROMISES ===");

  // Membuat Promise sederhana
  const promise = new Promise((resolve, reject) => {
    // Simulasi async operation
    setTimeout(() => {
      const success = true; // Ubah ke false untuk test reject

      if (success) {
        resolve("Operation berhasil!");
      } else {
        reject(new Error("Operation gagal!"));
      }
    }, 1000);
  });

  // Menggunakan Promise
  promise
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    })
    .finally(() => {
      console.log("Promise selesai (finally)");
    });
}

// Promise dengan parameter
function contohPromiseWithParameter() {
  console.log("\n=== PROMISES WITH PARAMETERS ===");

  function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      console.log(`Fetching user ${userId}...`);

      setTimeout(() => {
        const users = {
          1: { id: 1, name: "John", email: "john@example.com" },
          2: { id: 2, name: "Jane", email: "jane@example.com" },
        };

        const user = users[userId];
        if (user) {
          resolve(user);
        } else {
          reject(new Error(`User ${userId} not found`));
        }
      }, 1000);
    });
  }

  // Chain promises
  fetchUserData(1)
    .then((user) => {
      console.log("User found:", user);
      return fetchUserData(2); // Return another promise
    })
    .then((user) => {
      console.log("Second user found:", user);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Promise.all - parallel execution
function contohPromiseAll() {
  console.log("\n=== PROMISE.ALL ===");

  function createPromise(name, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
      console.log(`${name} started...`);

      setTimeout(() => {
        if (shouldFail) {
          reject(new Error(`${name} failed`));
        } else {
          resolve(`${name} completed`);
        }
      }, delay);
    });
  }

  const promises = [
    createPromise("Task A", 1000),
    createPromise("Task B", 500),
    createPromise("Task C", 800),
    createPromise("Task D", 300, true), // This will fail
  ];

  Promise.all(promises)
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("One promise failed:", error.message);
    });

  // Promise.allSettled - wait for all to settle (resolve or reject)
  console.log("\n--- Promise.allSettled ---");
  Promise.allSettled(promises).then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} fulfilled:`, result.value);
      } else {
        console.log(`Promise ${index + 1} rejected:`, result.reason.message);
      }
    });
  });
}

// Promise.race - first to complete
function contohPromiseRace() {
  console.log("\n=== PROMISE.RACE ===");

  function createRacingPromise(name, delay) {
    return new Promise((resolve) => {
      console.log(`${name} started...`);
      setTimeout(() => {
        resolve(`${name} won the race!`);
      }, delay);
    });
  }

  const racers = [
    createRacingPromise("Fast", 500),
    createRacingPromise("Medium", 1000),
    createRacingPromise("Slow", 1500),
  ];

  Promise.race(racers).then((winner) => {
    console.log("Race winner:", winner);
  });

  // Race with timeout
  function withTimeout(promise, timeoutMs) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Timeout")), timeoutMs);
    });

    return Promise.race([promise, timeoutPromise]);
  }

  console.log("\n--- Race with timeout ---");
  const slowPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Slow operation completed"), 2000);
  });

  withTimeout(slowPromise, 1000)
    .then((result) => console.log("Success:", result))
    .catch((error) => console.log("Timeout:", error.message));
}

// Promise.any - first to resolve (ignores rejects)
function contohPromiseAny() {
  console.log("\n=== PROMISE.ANY ===");

  const promises = [
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("First failed")), 500)
    ),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Second failed")), 1000)
    ),
    new Promise((resolve) =>
      setTimeout(() => resolve("Third succeeded"), 1500)
    ),
  ];

  Promise.any(promises)
    .then((result) => {
      console.log("First success:", result);
    })
    .catch((error) => {
      console.log("All failed:", error.errors);
    });
}

// Chaining promises
function contohPromiseChaining() {
  console.log("\n=== PROMISE CHAINING ===");

  function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
      console.log("Authenticating user...");

      setTimeout(() => {
        if (username === "admin" && password === "password") {
          resolve({ userId: 1, username: "admin" });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 500);
    });
  }

  function getUserProfile(userId) {
    return new Promise((resolve) => {
      console.log("Getting user profile...");

      setTimeout(() => {
        resolve({
          userId,
          name: "John Doe",
          email: "john@example.com",
          role: "admin",
        });
      }, 300);
    });
  }

  function getUserPermissions(role) {
    return new Promise((resolve) => {
      console.log("Getting user permissions...");

      setTimeout(() => {
        const permissions =
          role === "admin"
            ? ["read", "write", "delete", "admin"]
            : ["read", "write"];

        resolve(permissions);
      }, 200);
    });
  }

  // Chain the promises
  authenticateUser("admin", "password")
    .then((user) => {
      console.log("Authentication successful:", user);
      return getUserProfile(user.userId);
    })
    .then((profile) => {
      console.log("Profile loaded:", profile);
      return getUserPermissions(profile.role);
    })
    .then((permissions) => {
      console.log("Permissions loaded:", permissions);
      console.log("Login process complete!");
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
    });
}

// Converting callbacks to promises
function contohCallbackToPromise() {
  console.log("\n=== CALLBACK TO PROMISE CONVERSION ===");

  // Original callback-based function
  function readFileCallback(filename, callback) {
    console.log(`Reading file: ${filename}`);

    setTimeout(() => {
      if (filename === "error.txt") {
        callback(new Error("File not found"), null);
      } else {
        callback(null, `Content of ${filename}`);
      }
    }, 500);
  }

  // Convert to promise
  function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      readFileCallback(filename, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Use the promisified function
  readFilePromise("data.txt")
    .then((data) => {
      console.log("File content:", data);
      return readFilePromise("error.txt");
    })
    .then((data) => {
      console.log("This won't execute");
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Promise static methods
function contohPromiseStaticMethods() {
  console.log("\n=== PROMISE STATIC METHODS ===");

  // Promise.resolve
  const resolvedPromise = Promise.resolve("Already resolved");
  resolvedPromise.then((value) => console.log("Resolved:", value));

  // Promise.reject
  const rejectedPromise = Promise.reject(new Error("Already rejected"));
  rejectedPromise.catch((error) => console.log("Rejected:", error.message));

  // Promise with different types
  Promise.resolve(42).then((value) => console.log("Number:", value));
  Promise.resolve([1, 2, 3]).then((value) => console.log("Array:", value));
  Promise.resolve({ name: "John" }).then((value) =>
    console.log("Object:", value)
  );
}

// Error handling patterns
function contohPromiseErrorHandling() {
  console.log("\n=== PROMISE ERROR HANDLING ===");

  function riskyOperation(shouldFail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error("Operation failed"));
        } else {
          resolve("Operation successful");
        }
      }, 500);
    });
  }

  // Different error handling patterns
  console.log("--- Pattern 1: Catch in chain ---");
  riskyOperation(false)
    .then((result) => {
      console.log("Success:", result);
      return riskyOperation(true); // This will fail
    })
    .then((result) => {
      console.log("This won't execute");
    })
    .catch((error) => {
      console.log("Caught error:", error.message);
    });

  console.log("\n--- Pattern 2: Separate catch blocks ---");
  riskyOperation(false)
    .then((result) => {
      console.log("First operation:", result);
      return riskyOperation(true);
    })
    .catch((error) => {
      console.log("First catch:", error.message);
      // Recovery: try again or use default value
      return "Recovered from error";
    })
    .then((result) => {
      console.log("After recovery:", result);
    });

  console.log("\n--- Pattern 3: Finally block ---");
  riskyOperation(false)
    .then((result) => console.log("Success:", result))
    .catch((error) => console.log("Error:", error.message))
    .finally(() => console.log("Cleanup: This always runs"));
}

// Real-world example: API calls
function contohAPIWithPromises() {
  console.log("\n=== API CALLS WITH PROMISES ===");

  // Simulate API
  const api = {
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
            default:
              reject({
                status: 404,
                message: "Not found",
              });
          }
        }, Math.random() * 1000 + 500);
      });
    },

    post: (endpoint, data) => {
      return new Promise((resolve, reject) => {
        console.log(`API POST: ${endpoint}`);

        setTimeout(() => {
          if (endpoint === "/users") {
            resolve({
              status: 201,
              data: { id: Date.now(), ...data },
            });
          } else {
            reject({ status: 404, message: "Not found" });
          }
        }, Math.random() * 1000 + 500);
      });
    },
  };

  // API workflow
  api
    .get("/users")
    .then((response) => {
      console.log("Users fetched:", response.data);
      return api.get("/users/1");
    })
    .then((response) => {
      console.log("User detail:", response.data);
      return api.post("/users", { name: "Bob", email: "bob@example.com" });
    })
    .then((response) => {
      console.log("User created:", response.data);
    })
    .catch((error) => {
      console.error("API Error:", error.message || error);
    });
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH PROMISES\n");

contohBasicPromise();
contohPromiseWithParameter();
contohPromiseAll();
contohPromiseRace();
contohPromiseAny();
contohPromiseChaining();
contohCallbackToPromise();
contohPromiseStaticMethods();
contohPromiseErrorHandling();
contohAPIWithPromises();

console.log("\n✅ SELESAI CONTOH PROMISES");

// ================ TIPS PROMISES ================
/*
TIPS PENGGUNAAN PROMISES:

1. BASIC CONCEPTS
   - Promise represents future value (resolved/rejected)
   - States: pending, fulfilled, rejected
   - Once settled, state cannot change

2. CHAINING
   - Return promises from .then() handlers
   - Each .then() receives result from previous
   - Chain can be as long as needed
   - Errors propagate through chain

3. ERROR HANDLING
   - Use .catch() to handle errors
   - Errors bubble up until caught
   - Can have multiple .catch() blocks
   - .finally() runs regardless of outcome

4. STATIC METHODS
   - Promise.all(): All must resolve
   - Promise.allSettled(): Wait for all to settle
   - Promise.race(): First to settle wins
   - Promise.any(): First to resolve wins
   - Promise.resolve()/reject(): Create settled promises

5. BEST PRACTICES
   - Always handle errors with .catch()
   - Use .finally() for cleanup
   - Avoid creating promises manually when possible
   - Prefer async/await for complex chains
   - Keep promise handlers simple

6. COMMON PATTERNS
   - Promisify callback-based APIs
   - Sequential vs parallel execution
   - Timeout with Promise.race()
   - Retry logic with promises
   - Resource cleanup with finally

7. WHEN TO USE PROMISES
   - Async operations
   - API calls
   - File operations
   - Database queries
   - Any operation that takes time

8. LIMITATIONS
   - Cannot be cancelled once started
   - No built-in progress tracking
   - Single value resolution
   - Memory leaks if not handled properly
*/
