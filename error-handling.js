/**
 * CONTOH KODE: Error Handling
 * ==========================
 * File ini berisi contoh penanganan error di JavaScript
 */

function contohBasicErrorHandling() {
  console.log("=== BASIC ERROR HANDLING ===");

  // Basic try-catch
  try {
    console.log("Mencoba operasi yang mungkin error...");

    // Simulasi error
    if (Math.random() > 0.5) {
      throw new Error("Random error occurred!");
    }

    console.log("Operasi berhasil");
  } catch (error) {
    console.error("Error caught:", error.message);
    console.error("Error name:", error.name);
    console.error("Stack trace:", error.stack);
  } finally {
    console.log("Finally block selalu dijalankan");
  }
}

// ================ ERROR TYPES ================
function contohErrorTypes() {
  console.log("\n=== ERROR TYPES ===");

  // ReferenceError
  try {
    console.log(nonExistentVariable);
  } catch (error) {
    console.log("ReferenceError:", error.message);
  }

  // TypeError
  try {
    const obj = null;
    obj.someMethod();
  } catch (error) {
    console.log("TypeError:", error.message);
  }

  // SyntaxError (tidak bisa di-catch pada runtime)
  // console.log("SyntaxError example: missing parenthesis"

  // RangeError
  try {
    const arr = new Array(-1);
  } catch (error) {
    console.log("RangeError:", error.message);
  }

  // URIError
  try {
    decodeURIComponent("%");
  } catch (error) {
    console.log("URIError:", error.message);
  }

  // EvalError (deprecated)
  try {
    throw new EvalError("Eval error example");
  } catch (error) {
    console.log("EvalError:", error.message);
  }
}

// ================ CUSTOM ERRORS ================
function contohCustomErrors() {
  console.log("\n=== CUSTOM ERRORS ===");

  // Custom Error class
  class ValidationError extends Error {
    constructor(message, field) {
      super(message);
      this.name = "ValidationError";
      this.field = field;
    }
  }

  class NetworkError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.name = "NetworkError";
      this.statusCode = statusCode;
    }
  }

  class DatabaseError extends Error {
    constructor(message, query) {
      super(message);
      this.name = "DatabaseError";
      this.query = query;
    }
  }

  // Function yang menggunakan custom errors
  function validateUser(user) {
    if (!user.name) {
      throw new ValidationError("Name is required", "name");
    }

    if (!user.email) {
      throw new ValidationError("Email is required", "email");
    }

    if (!user.email.includes("@")) {
      throw new ValidationError("Invalid email format", "email");
    }

    if (user.age < 0 || user.age > 150) {
      throw new ValidationError("Invalid age", "age");
    }
  }

  function saveToDatabase(user) {
    // Simulasi database error
    if (Math.random() > 0.7) {
      throw new DatabaseError("Connection timeout", "INSERT INTO users...");
    }

    console.log("User saved to database:", user.name);
  }

  function createUser(userData) {
    try {
      validateUser(userData);
      saveToDatabase(userData);
      return { success: true, user: userData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error: "Validation failed", details: error };
      } else if (error instanceof DatabaseError) {
        return { success: false, error: "Database error", details: error };
      } else {
        return { success: false, error: "Unknown error", details: error };
      }
    }
  }

  // Test custom errors
  const testUsers = [
    { name: "John", email: "john@example.com", age: 25 },
    { name: "", email: "jane@example.com", age: 30 },
    { name: "Bob", email: "invalid-email", age: 40 },
    { name: "Alice", email: "alice@example.com", age: -5 },
  ];

  testUsers.forEach((user, index) => {
    console.log(`\n--- Test User ${index + 1} ---`);
    const result = createUser(user);
    if (result.success) {
      console.log("✅ User created successfully");
    } else {
      console.log("❌ Error:", result.error);
      if (result.details.field) {
        console.log("   Field:", result.details.field);
      }
    }
  });
}

// ================ ASYNC ERROR HANDLING ================
function contohAsyncErrorHandling() {
  console.log("\n=== ASYNC ERROR HANDLING ===");

  // Async function dengan error handling
  async function fetchUserData(userId) {
    try {
      console.log(`Fetching user ${userId}...`);

      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (userId === 999) {
        throw new Error("User not found");
      }

      return { id: userId, name: `User ${userId}` };
    } catch (error) {
      console.error(`Error fetching user ${userId}:`, error.message);
      throw error; // Re-throw untuk handling di caller
    }
  }

  // Promise dengan error handling
  function processUserData(userId) {
    return fetchUserData(userId)
      .then((user) => {
        console.log("User data:", user);
        return user;
      })
      .catch((error) => {
        console.error("Failed to process user:", error.message);
        // Return default value atau throw custom error
        return { id: userId, name: "Unknown User", error: true };
      });
  }

  // Test async error handling
  async function testAsyncErrors() {
    try {
      console.log("--- Testing valid user ---");
      const user1 = await processUserData(1);
      console.log("Result:", user1);

      console.log("\n--- Testing invalid user ---");
      const user2 = await processUserData(999);
      console.log("Result:", user2);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }

  testAsyncErrors();
}

// ================ ERROR PROPAGATION ================
function contohErrorPropagation() {
  console.log("\n=== ERROR PROPAGATION ===");

  function level1() {
    try {
      level2();
    } catch (error) {
      console.log("Error caught in level1:", error.message);
      throw new Error("Error propagated from level1: " + error.message);
    }
  }

  function level2() {
    level3();
  }

  function level3() {
    throw new Error("Original error from level3");
  }

  try {
    level1();
  } catch (error) {
    console.log("Error caught at top level:", error.message);
  }

  // Error propagation dengan async
  async function asyncLevel1() {
    try {
      await asyncLevel2();
    } catch (error) {
      console.log("Async error caught in level1:", error.message);
      throw error;
    }
  }

  async function asyncLevel2() {
    await asyncLevel3();
  }

  async function asyncLevel3() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    throw new Error("Async error from level3");
  }

  async function testAsyncPropagation() {
    try {
      await asyncLevel1();
    } catch (error) {
      console.log("Async error caught at top level:", error.message);
    }
  }

  testAsyncPropagation();
}

// ================ ERROR RECOVERY ================
function contohErrorRecovery() {
  console.log("\n=== ERROR RECOVERY ===");

  // Retry mechanism
  async function retryOperation(operation, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Attempt ${attempt}/${maxRetries}`);
        const result = await operation();
        console.log("Operation successful");
        return result;
      } catch (error) {
        console.log(`Attempt ${attempt} failed:`, error.message);

        if (attempt === maxRetries) {
          throw new Error(
            `Operation failed after ${maxRetries} attempts: ${error.message}`
          );
        }

        console.log(`Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }
  }

  // Unreliable operation
  function unreliableOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve("Success!");
        } else {
          reject(new Error("Random failure"));
        }
      }, 500);
    });
  }

  // Test retry
  retryOperation(unreliableOperation, 5, 500)
    .then((result) => console.log("Final result:", result))
    .catch((error) => console.log("All attempts failed:", error.message));

  // Fallback mechanism
  async function fetchDataWithFallback(primarySource, fallbackSource) {
    try {
      console.log("Trying primary source...");
      return await primarySource();
    } catch (error) {
      console.log("Primary source failed, trying fallback...");
      try {
        return await fallbackSource();
      } catch (fallbackError) {
        throw new Error(
          `Both sources failed. Primary: ${error.message}, Fallback: ${fallbackError.message}`
        );
      }
    }
  }

  function primaryDataSource() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          resolve("Data from primary source");
        } else {
          reject(new Error("Primary source unavailable"));
        }
      }, 300);
    });
  }

  function fallbackDataSource() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data from fallback source");
        } else {
          reject(new Error("Fallback source also failed"));
        }
      }, 200);
    });
  }

  fetchDataWithFallback(primaryDataSource, fallbackDataSource)
    .then((data) => console.log("Fetched data:", data))
    .catch((error) => console.log("All sources failed:", error.message));
}

// ================ GLOBAL ERROR HANDLING ================
function contohGlobalErrorHandling() {
  console.log("\n=== GLOBAL ERROR HANDLING ===");

  if (typeof window !== "undefined") {
    // Browser environment
    window.addEventListener("error", function (event) {
      console.log("=== GLOBAL ERROR CAUGHT ===");
      console.log("Message:", event.message);
      console.log("Filename:", event.filename);
      console.log("Line:", event.lineno);
      console.log("Column:", event.colno);
      console.log("Error:", event.error);

      // Prevent default error handling
      event.preventDefault();
    });

    window.addEventListener("unhandledrejection", function (event) {
      console.log("=== UNHANDLED PROMISE REJECTION ===");
      console.log("Reason:", event.reason);

      event.preventDefault();
    });
  } else {
    // Node.js environment
    process.on("uncaughtException", function (error) {
      console.log("=== UNCAUGHT EXCEPTION ===");
      console.log("Error:", error.message);
      console.log("Stack:", error.stack);

      // Graceful shutdown
      setTimeout(() => {
        process.exit(1);
      }, 100);
    });

    process.on("unhandledRejection", function (reason, promise) {
      console.log("=== UNHANDLED REJECTION ===");
      console.log("Reason:", reason);
      console.log("Promise:", promise);
    });
  }

  // Test global error handling
  setTimeout(() => {
    // This will be caught by global handler
    throw new Error("Test global error");
  }, 1000);

  setTimeout(() => {
    // Unhandled promise rejection
    Promise.reject(new Error("Test unhandled rejection"));
  }, 2000);
}

// ================ ERROR LOGGING ================
function contohErrorLogging() {
  console.log("\n=== ERROR LOGGING ===");

  class ErrorLogger {
    constructor() {
      this.logs = [];
    }

    log(error, context = {}) {
      const logEntry = {
        timestamp: new Date().toISOString(),
        message: error.message,
        name: error.name,
        stack: error.stack,
        context: context,
        userAgent:
          typeof navigator !== "undefined" ? navigator.userAgent : "Node.js",
        url: typeof window !== "undefined" ? window.location.href : "N/A",
      };

      this.logs.push(logEntry);
      console.error("Logged error:", logEntry);

      // In real app, send to logging service
      // this.sendToService(logEntry);
    }

    getLogs() {
      return this.logs;
    }

    clearLogs() {
      this.logs = [];
    }
  }

  const logger = new ErrorLogger();

  // Function yang menggunakan logger
  function riskyFunction(param) {
    try {
      if (!param) {
        throw new Error("Parameter is required");
      }

      if (typeof param !== "string") {
        throw new TypeError("Parameter must be a string");
      }

      if (param.length < 3) {
        throw new RangeError("Parameter must be at least 3 characters");
      }

      return param.toUpperCase();
    } catch (error) {
      logger.log(error, { function: "riskyFunction", param });
      throw error; // Re-throw after logging
    }
  }

  // Test error logging
  try {
    riskyFunction();
  } catch (e) {}

  try {
    riskyFunction(123);
  } catch (e) {}

  try {
    riskyFunction("ab");
  } catch (e) {}

  try {
    riskyFunction("valid string");
  } catch (e) {
    console.log("This shouldn't happen");
  }

  console.log("Total logged errors:", logger.getLogs().length);
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH ERROR HANDLING\n");

contohBasicErrorHandling();
contohErrorTypes();
contohCustomErrors();
contohAsyncErrorHandling();
contohErrorPropagation();
contohErrorRecovery();
contohGlobalErrorHandling();
contohErrorLogging();

console.log("\n✅ SELESAI CONTOH ERROR HANDLING");

// ================ TIPS ERROR HANDLING ================
/*
TIPS ERROR HANDLING:

1. TRY-CATCH BASICS
   - Selalu wrap code yang mungkin error
   - Catch spesifik error types jika memungkinkan
   - Finally block untuk cleanup code
   - Don't overuse try-catch

2. ERROR TYPES
   - ReferenceError: variable tidak ditemukan
   - TypeError: operasi pada wrong type
   - SyntaxError: invalid syntax (compile time)
   - RangeError: value outside valid range
   - URIError: encode/decode URI error
   - EvalError: eval() error (deprecated)

3. CUSTOM ERRORS
   - Extend Error class untuk specific errors
   - Include relevant context information
   - Use descriptive error messages
   - Handle different error types appropriately

4. ASYNC ERROR HANDLING
   - Use try-catch dalam async functions
   - Handle promise rejections dengan .catch()
   - Don't forget to handle unhandled rejections
   - Use async/await untuk cleaner code

5. ERROR PROPAGATION
   - Let errors bubble up jika tidak bisa handle
   - Add context saat re-throwing errors
   - Use error boundaries di framework
   - Log errors at appropriate levels

6. ERROR RECOVERY
   - Implement retry mechanisms
   - Provide fallback options
   - Graceful degradation
   - User-friendly error messages

7. GLOBAL ERROR HANDLING
   - Catch uncaught exceptions
   - Handle unhandled promise rejections
   - Log errors untuk debugging
   - Graceful application shutdown

8. BEST PRACTICES
   - Fail fast untuk invalid inputs
   - Use meaningful error messages
   - Don't expose sensitive information
   - Log errors dengan context
   - Test error scenarios
   - Monitor error rates
*/
