/**
 * CONTOH KODE: Import/Export (Modules)
 * ===================================
 * File ini berisi contoh penggunaan ES6 modules (import/export)
 */

// ================ EXPORT PATTERNS ================

// Named exports - export multiple items
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export class Calculator {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

// Default export - export single item
export default class MathUtils {
  static factorial(n) {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }

  static fibonacci(n) {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  static isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
}

// Mixed exports
export const VERSION = "1.0.0";
export const AUTHOR = "JavaScript Learner";

// Export object dengan destructuring
const utils = {
  formatDate: function (date) {
    return date.toLocaleDateString("id-ID");
  },

  formatCurrency: function (amount, currency = "IDR") {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: currency,
    }).format(amount);
  },

  generateId: function () {
    return Math.random().toString(36).substr(2, 9);
  },
};

export const { formatDate, formatCurrency, generateId } = utils;

// ================ RE-EXPORT PATTERNS ================

// Re-export dari module lain (jika ada)
// export { someFunction } from './other-module.js';
// export { default as OtherClass } from './other-module.js';

// Re-export dengan rename
export { add as tambah, multiply as kali } from "./math-operations.js";

// ================ DYNAMIC IMPORTS ================

export async function loadModuleDynamically(modulePath) {
  try {
    const module = await import(modulePath);
    console.log("Module loaded:", modulePath);
    return module;
  } catch (error) {
    console.error("Failed to load module:", error);
    throw error;
  }
}

// Conditional imports
export function loadFeatureConditionally(feature) {
  switch (feature) {
    case "advanced":
      return import("./advanced-features.js");
    case "experimental":
      return import("./experimental-features.js");
    default:
      return import("./basic-features.js");
  }
}

// ================ MODULE INITIALIZATION ================

// Module-level variables
let moduleLoadTime = new Date();
let instanceCount = 0;

// Module initialization function
export function initializeModule() {
  console.log("Math utilities module initialized at:", moduleLoadTime);
  instanceCount++;
  console.log(`Module initialized ${instanceCount} time(s)`);
}

// Auto-initialize when module is loaded
initializeModule();

// ================ EXPORT ALIASES ================

// Export dengan alias
const originalFunction = function () {
  return "Original function";
};

export { originalFunction as renamedFunction };

// Export class dengan alias
class InternalClass {
  constructor() {
    this.value = 42;
  }

  getValue() {
    return this.value;
  }
}

export { InternalClass as PublicClass };

// ================ TREE SHAKING FRIENDLY EXPORTS ================

// Named exports untuk tree shaking
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  return password.length >= 8;
}

export function sanitizeInput(input) {
  return input.replace(/[<>]/g, "");
}

// Group related functions
export const validators = {
  email: validateEmail,
  password: validatePassword,
  input: sanitizeInput,
};

// ================ SIDE EFFECTS ================

// Export function yang memiliki side effects
export function logModuleUsage() {
  console.log("Math utilities module is being used");
  // Could send analytics data, etc.
}

// ================ TYPE EXPORTS (TypeScript style) ================

// Export types (would be actual types in TypeScript)
// export type MathOperation = (a: number, b: number) => number;
// export interface CalculatorInterface {
//   add(a: number, b: number): number;
//   multiply(a: number, b: number): number;
// }

// ================ COMPATIBILITY EXPORTS ================

// Export untuk CommonJS compatibility
export const __esModule = true;

// Default export sebagai named export juga
export const defaultExport = MathUtils;

// ================ MODULE METADATA ================

export const moduleInfo = {
  name: "math-utils",
  version: VERSION,
  author: AUTHOR,
  description: "Mathematical utilities for JavaScript",
  exports: [
    "PI",
    "E",
    "add",
    "multiply",
    "Calculator",
    "MathUtils",
    "formatDate",
    "formatCurrency",
    "generateId",
    "validators",
    "validateEmail",
    "validatePassword",
    "sanitizeInput",
  ],
};

// ================ USAGE EXAMPLES (INTERNAL) ================

// Internal usage examples (tidak di-export)
function internalExamples() {
  console.log("=== INTERNAL MODULE EXAMPLES ===");

  // Test basic functions
  console.log("PI:", PI);
  console.log("Add 5 + 3:", add(5, 3));
  console.log("Multiply 4 * 6:", multiply(4, 6));

  // Test class
  console.log("Square of 5:", Calculator.square(5));
  console.log("Cube of 3:", Calculator.cube(3));

  // Test default export
  console.log("Factorial 5:", MathUtils.factorial(5));
  console.log("Fibonacci 8:", MathUtils.fibonacci(8));
  console.log("Is 17 prime:", MathUtils.isPrime(17));

  // Test utilities
  const testDate = new Date();
  console.log("Formatted date:", formatDate(testDate));
  console.log("Formatted currency:", formatCurrency(150000));
  console.log("Generated ID:", generateId());

  // Test validators
  console.log("Email valid:", validateEmail("test@example.com"));
  console.log("Password valid:", validatePassword("password123"));
  console.log(
    "Sanitized input:",
    sanitizeInput('<script>alert("xss")</script>')
  );

  console.log("Module info:", moduleInfo);
}

// Run internal examples jika module dijalankan langsung
if (typeof window !== "undefined" && window.location) {
  // Browser environment - run examples
  internalExamples();
} else if (typeof require !== "undefined" && require.main === module) {
  // CommonJS environment - run examples
  internalExamples();
}

// ================ CLEANUP FUNCTIONS ================

export function cleanupModule() {
  console.log("Cleaning up math utilities module");
  instanceCount = 0;
  moduleLoadTime = null;
}

// ================ ERROR HANDLING IN MODULES ================

export class ModuleError extends Error {
  constructor(message, moduleName = "math-utils") {
    super(message);
    this.name = "ModuleError";
    this.module = moduleName;
  }
}

export function safeOperation(operation, ...args) {
  try {
    return operation(...args);
  } catch (error) {
    throw new ModuleError(`Operation failed: ${error.message}`);
  }
}

// ================ MODULE HOOKS ================

// Export hooks untuk lifecycle events
export const hooks = {
  onLoad: [],
  onUnload: [],

  addLoadHook(callback) {
    this.onLoad.push(callback);
  },

  addUnloadHook(callback) {
    this.onUnload.push(callback);
  },

  triggerLoad() {
    this.onLoad.forEach((hook) => hook());
  },

  triggerUnload() {
    this.onUnload.forEach((hook) => hook());
  },
};

// Add default hooks
hooks.addLoadHook(() => console.log("Math utils module loaded"));
hooks.addUnloadHook(() => console.log("Math utils module unloaded"));

// Trigger load hook
hooks.triggerLoad();
