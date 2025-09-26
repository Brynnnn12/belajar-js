/**
 * CONTOH KODE: Event Handling
 * ==========================
 * File ini berisi contoh penanganan event di JavaScript
 */

function contohBasicEventHandling() {
  console.log("=== BASIC EVENT HANDLING ===");

  if (typeof document === "undefined") {
    console.log("DOM tidak tersedia (running in Node.js)");
    return;
  }

  // Buat button untuk demo
  const button = document.createElement("button");
  button.id = "basic-btn";
  button.textContent = "Klik Saya (Basic)";
  button.className = "btn";
  document.body.appendChild(button);

  // Basic event listener
  button.addEventListener("click", function (event) {
    console.log("Button diklik!");
    console.log("Event type:", event.type);
    console.log("Target element:", event.target.tagName);
  });

  // Multiple event listeners pada satu element
  button.addEventListener("mouseenter", function () {
    console.log("Mouse masuk ke button");
    button.style.backgroundColor = "#e0e0e0";
  });

  button.addEventListener("mouseleave", function () {
    console.log("Mouse keluar dari button");
    button.style.backgroundColor = "";
  });
}

// ================ EVENT OBJECT ================
function contohEventObject() {
  console.log("\n=== EVENT OBJECT ===");

  if (typeof document === "undefined") return;

  const eventDiv = document.createElement("div");
  eventDiv.id = "event-div";
  eventDiv.textContent = "Klik, double-click, atau right-click area ini";
  eventDiv.style.cssText = `
    width: 300px;
    height: 100px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
  `;
  document.body.appendChild(eventDiv);

  // Click event
  eventDiv.addEventListener("click", function (event) {
    console.log("=== CLICK EVENT ===");
    console.log("Type:", event.type);
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Client X/Y:", event.clientX, event.clientY);
    console.log("Screen X/Y:", event.screenX, event.screenY);
    console.log("Button:", event.button); // 0=left, 1=middle, 2=right
    console.log("Ctrl key:", event.ctrlKey);
    console.log("Shift key:", event.shiftKey);
    console.log("Alt key:", event.altKey);
  });

  // Double click event
  eventDiv.addEventListener("dblclick", function (event) {
    console.log("=== DOUBLE CLICK EVENT ===");
    eventDiv.style.backgroundColor = "#ffcccc";
    setTimeout(() => {
      eventDiv.style.backgroundColor = "#f0f0f0";
    }, 500);
  });

  // Context menu (right click)
  eventDiv.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Prevent default context menu
    console.log("=== RIGHT CLICK EVENT ===");
    console.log("Context menu prevented");
  });
}

// ================ MOUSE EVENTS ================
function contohMouseEvents() {
  console.log("\n=== MOUSE EVENTS ===");

  if (typeof document === "undefined") return;

  const mouseArea = document.createElement("div");
  mouseArea.id = "mouse-area";
  mouseArea.textContent = "Area Mouse Events";
  mouseArea.style.cssText = `
    width: 300px;
    height: 150px;
    background-color: #e8f4f8;
    border: 2px solid #3498db;
    padding: 10px;
    margin: 10px 0;
    position: relative;
  `;
  document.body.appendChild(mouseArea);

  const coordsDisplay = document.createElement("div");
  coordsDisplay.id = "coords";
  coordsDisplay.style.cssText = `
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    color: #666;
  `;
  mouseArea.appendChild(coordsDisplay);

  // Mouse move
  mouseArea.addEventListener("mousemove", function (event) {
    coordsDisplay.textContent = `X: ${event.offsetX}, Y: ${event.offsetY}`;
  });

  // Mouse down/up
  mouseArea.addEventListener("mousedown", function (event) {
    console.log(`Mouse down: button ${event.button}`);
    mouseArea.style.backgroundColor = "#d4e6f1";
  });

  mouseArea.addEventListener("mouseup", function (event) {
    console.log(`Mouse up: button ${event.button}`);
    mouseArea.style.backgroundColor = "#e8f4f8";
  });

  // Mouse enter/leave
  mouseArea.addEventListener("mouseenter", function () {
    console.log("Mouse entered area");
    mouseArea.style.borderColor = "#e74c3c";
  });

  mouseArea.addEventListener("mouseleave", function () {
    console.log("Mouse left area");
    mouseArea.style.borderColor = "#3498db";
    coordsDisplay.textContent = "";
  });

  // Wheel event
  mouseArea.addEventListener("wheel", function (event) {
    event.preventDefault();
    console.log(`Wheel: deltaY = ${event.deltaY}`);
    const currentSize = parseInt(window.getComputedStyle(mouseArea).fontSize);
    const newSize =
      event.deltaY > 0
        ? Math.max(10, currentSize - 1)
        : Math.min(24, currentSize + 1);
    mouseArea.style.fontSize = newSize + "px";
  });
}

// ================ KEYBOARD EVENTS ================
function contohKeyboardEvents() {
  console.log("\n=== KEYBOARD EVENTS ===");

  if (typeof document === "undefined") return;

  const input = document.createElement("input");
  input.type = "text";
  input.id = "keyboard-input";
  input.placeholder = "Ketik sesuatu dan tekan Enter...";
  input.style.cssText = `
    width: 300px;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;
  document.body.appendChild(input);

  const keyDisplay = document.createElement("div");
  keyDisplay.id = "key-display";
  keyDisplay.style.cssText = `
    margin: 10px 0;
    padding: 10px;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  `;
  document.body.appendChild(keyDisplay);

  // Keydown event
  input.addEventListener("keydown", function (event) {
    console.log("=== KEYDOWN ===");
    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("KeyCode:", event.keyCode); // Deprecated but still used
    console.log(
      "Ctrl:",
      event.ctrlKey,
      "Shift:",
      event.shiftKey,
      "Alt:",
      event.altKey
    );

    // Special keys
    if (event.key === "Enter") {
      console.log("Enter key pressed - form submission prevented");
      event.preventDefault();
      processInput(input.value);
      input.value = "";
    }

    if (event.key === "Escape") {
      console.log("Escape key pressed - clearing input");
      input.value = "";
    }

    updateKeyDisplay(event);
  });

  // Keyup event
  input.addEventListener("keyup", function (event) {
    console.log("=== KEYUP ===");
    console.log("Key released:", event.key);
  });

  // Input event (fires on any input change)
  input.addEventListener("input", function (event) {
    console.log("=== INPUT EVENT ===");
    console.log("Current value:", event.target.value);
  });

  function updateKeyDisplay(event) {
    keyDisplay.innerHTML = `
      <strong>Last Key:</strong> ${event.key}<br>
      <strong>Code:</strong> ${event.code}<br>
      <strong>Modifiers:</strong> ${event.ctrlKey ? "Ctrl " : ""}${
      event.shiftKey ? "Shift " : ""
    }${event.altKey ? "Alt" : ""}
    `;
  }

  function processInput(value) {
    console.log(`Processing input: "${value}"`);
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `Processed: ${value.toUpperCase()}`;
    resultDiv.style.cssText = `
      margin: 5px 0;
      padding: 5px;
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
    `;
    document.body.insertBefore(resultDiv, input.nextSibling);

    // Auto remove after 3 seconds
    setTimeout(() => {
      resultDiv.remove();
    }, 3000);
  }
}

// ================ FORM EVENTS ================
function contohFormEvents() {
  console.log("\n=== FORM EVENTS ===");

  if (typeof document === "undefined") return;

  const form = document.createElement("form");
  form.id = "event-form";
  form.innerHTML = `
    <h4>Form Events Demo</h4>
    <div>
      <label>Name: <input type="text" name="name" required></label>
    </div>
    <div>
      <label>Email: <input type="email" name="email" required></label>
    </div>
    <div>
      <label>Age: <input type="number" name="age" min="1" max="120"></label>
    </div>
    <div>
      <label><input type="checkbox" name="newsletter"> Subscribe to newsletter</label>
    </div>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  `;
  document.body.appendChild(form);

  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const ageInput = form.querySelector('input[name="age"]');
  const newsletterCheckbox = form.querySelector('input[name="newsletter"]');

  // Focus/Blur events
  [nameInput, emailInput, ageInput].forEach((input) => {
    input.addEventListener("focus", function () {
      console.log(`${this.name} field focused`);
      this.style.backgroundColor = "#fff3cd";
    });

    input.addEventListener("blur", function () {
      console.log(`${this.name} field blurred`);
      this.style.backgroundColor = "";
    });
  });

  // Change event (fires when value changes and loses focus)
  ageInput.addEventListener("change", function () {
    console.log(`Age changed to: ${this.value}`);
    if (this.value < 18) {
      console.log("Warning: User is under 18");
    }
  });

  // Checkbox change
  newsletterCheckbox.addEventListener("change", function () {
    console.log(`Newsletter subscription: ${this.checked ? "ON" : "OFF"}`);
  });

  // Form submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("=== FORM SUBMIT ===");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form data:", data);

    // Validation
    if (!data.name || !data.email) {
      alert("Name and email are required!");
      return;
    }

    // Simulate form submission
    alert("Form submitted successfully!");
    form.reset();
  });

  // Form reset
  form.addEventListener("reset", function () {
    console.log("Form reset");
  });

  // Input validation
  emailInput.addEventListener("input", function () {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    this.style.borderColor = this.value && !isValid ? "red" : "#ccc";
  });
}

// ================ EVENT DELEGATION ================
function contohEventDelegation() {
  console.log("\n=== EVENT DELEGATION ===");

  if (typeof document === "undefined") return;

  const listContainer = document.createElement("div");
  listContainer.id = "list-container";
  listContainer.innerHTML = `
    <h4>Event Delegation Demo</h4>
    <ul id="dynamic-list">
      <li class="list-item" data-id="1">Item 1 <button class="delete-btn">Delete</button></li>
      <li class="list-item" data-id="2">Item 2 <button class="delete-btn">Delete</button></li>
      <li class="list-item" data-id="3">Item 3 <button class="delete-btn">Delete</button></li>
    </ul>
    <button id="add-item">Add Item</button>
  `;
  document.body.appendChild(listContainer);

  const list = document.getElementById("dynamic-list");
  let itemCount = 3;

  // Event delegation - listen on parent, handle child events
  list.addEventListener("click", function (event) {
    console.log("=== DELEGATED EVENT ===");
    console.log("Clicked element:", event.target.tagName);
    console.log("Clicked class:", event.target.className);

    // Handle delete button clicks
    if (event.target.classList.contains("delete-btn")) {
      const listItem = event.target.closest(".list-item");
      const itemId = listItem.dataset.id;
      console.log(`Deleting item ${itemId}`);
      listItem.remove();
    }

    // Handle list item clicks (but not delete button)
    if (event.target.classList.contains("list-item")) {
      const itemId = event.target.dataset.id;
      console.log(`Item ${itemId} clicked`);
      event.target.style.backgroundColor = "#e8f4f8";
      setTimeout(() => {
        event.target.style.backgroundColor = "";
      }, 200);
    }
  });

  // Add new item
  document.getElementById("add-item").addEventListener("click", function () {
    itemCount++;
    const newItem = document.createElement("li");
    newItem.className = "list-item";
    newItem.dataset.id = itemCount;
    newItem.innerHTML = `Item ${itemCount} <button class="delete-btn">Delete</button>`;
    list.appendChild(newItem);
    console.log(`Added new item ${itemCount}`);
  });
}

// ================ CUSTOM EVENTS ================
function contohCustomEvents() {
  console.log("\n=== CUSTOM EVENTS ===");

  if (typeof document === "undefined") return;

  // Create custom event emitter
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }

    emit(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach((callback) => {
          callback(data);
        });
      }
    }

    off(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb !== callback
        );
      }
    }
  }

  const emitter = new EventEmitter();

  // Register event listeners
  emitter.on("user-logged-in", function (data) {
    console.log(`User ${data.username} logged in from ${data.ip}`);
  });

  emitter.on("user-logged-in", function (data) {
    console.log(`Sending welcome email to ${data.email}`);
  });

  emitter.on("error", function (error) {
    console.error("Application error:", error.message);
  });

  // Simulate events
  setTimeout(() => {
    emitter.emit("user-logged-in", {
      username: "john_doe",
      email: "john@example.com",
      ip: "192.168.1.1",
    });
  }, 1000);

  setTimeout(() => {
    emitter.emit("error", new Error("Database connection failed"));
  }, 2000);

  // DOM Custom Events
  const customEventDiv = document.createElement("div");
  customEventDiv.id = "custom-event-div";
  customEventDiv.textContent = "Custom Event Demo";
  customEventDiv.style.cssText = `
    width: 200px;
    height: 50px;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
  `;
  document.body.appendChild(customEventDiv);

  // Listen for custom event
  customEventDiv.addEventListener("myCustomEvent", function (event) {
    console.log("=== CUSTOM DOM EVENT ===");
    console.log("Event detail:", event.detail);
    customEventDiv.textContent = `Event fired with: ${event.detail.message}`;
    customEventDiv.style.backgroundColor = "#d4edda";
  });

  // Trigger custom event
  customEventDiv.addEventListener("click", function () {
    const customEvent = new CustomEvent("myCustomEvent", {
      detail: {
        message: "Hello from custom event!",
        timestamp: new Date().toISOString(),
        randomNumber: Math.random(),
      },
    });
    customEventDiv.dispatchEvent(customEvent);
  });
}

// ================ EVENT PROPAGATION ================
function contohEventPropagation() {
  console.log("\n=== EVENT PROPAGATION ===");

  if (typeof document === "undefined") return;

  const propagationDemo = document.createElement("div");
  propagationDemo.id = "propagation-demo";
  propagationDemo.innerHTML = `
    <h4>Event Propagation Demo</h4>
    <div class="outer" style="width: 300px; height: 200px; background-color: #ffeaa7; padding: 20px; margin: 10px 0;">
      <div class="middle" style="width: 200px; height: 120px; background-color: #fdcb6e; padding: 20px;">
        <div class="inner" style="width: 100px; height: 40px; background-color: #e17055; padding: 10px; color: white; cursor: pointer;">
          Click Me!
        </div>
      </div>
    </div>
    <div id="propagation-log"></div>
  `;
  document.body.appendChild(propagationDemo);

  const logDiv = document.getElementById("propagation-log");
  let eventCount = 0;

  function logEvent(phase, element) {
    eventCount++;
    const logEntry = document.createElement("div");
    logEntry.textContent = `${eventCount}. ${phase} - ${element}`;
    logEntry.style.cssText = "font-size: 12px; margin: 2px 0;";
    logDiv.appendChild(logEntry);
  }

  // Bubbling phase (default)
  document.querySelector(".outer").addEventListener("click", function () {
    logEvent("BUBBLING: Outer clicked", "outer");
  });

  document.querySelector(".middle").addEventListener("click", function () {
    logEvent("BUBBLING: Middle clicked", "middle");
  });

  document.querySelector(".inner").addEventListener("click", function (event) {
    logEvent("BUBBLING: Inner clicked", "inner");
    console.log("Event target:", event.target.className);
    console.log("Event currentTarget:", event.currentTarget.className);
  });

  // Capturing phase
  document.querySelector(".outer").addEventListener(
    "click",
    function () {
      logEvent("CAPTURING: Outer clicked", "outer");
    },
    true
  );

  document.querySelector(".middle").addEventListener(
    "click",
    function () {
      logEvent("CAPTURING: Middle clicked", "middle");
    },
    true
  );

  document.querySelector(".inner").addEventListener(
    "click",
    function () {
      logEvent("CAPTURING: Inner clicked", "inner");
    },
    true
  );

  // Stop propagation example
  const stopPropButton = document.createElement("button");
  stopPropButton.textContent = "Stop Propagation Demo";
  stopPropButton.className = "btn";
  document.body.appendChild(stopPropButton);

  stopPropButton.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Propagation stopped at button");
  });
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH EVENT HANDLING\n");

contohBasicEventHandling();
contohEventObject();
contohMouseEvents();
contohKeyboardEvents();
contohFormEvents();
contohEventDelegation();
contohCustomEvents();
contohEventPropagation();

console.log("\n✅ SELESAI CONTOH EVENT HANDLING");

// ================ TIPS EVENT HANDLING ================
/*
TIPS EVENT HANDLING:

1. EVENT LISTENERS
   - Use addEventListener() instead of inline handlers
   - Always remove listeners dengan removeEventListener()
   - Use named functions untuk mudah remove

2. EVENT OBJECT
   - event.target: element yang diklik
   - event.currentTarget: element yang listener attached
   - event.preventDefault(): stop default behavior
   - event.stopPropagation(): stop event bubbling

3. EVENT DELEGATION
   - Attach listener ke parent element
   - Use event.target untuk identify clicked element
   - Efficient untuk dynamic content
   - Reduces memory usage

4. EVENT PHASES
   - Capturing: dari root ke target
   - Target: pada target element
   - Bubbling: dari target ke root
   - Use third parameter true untuk capturing

5. PERFORMANCE
   - Debounce scroll/resize events
   - Throttle mousemove events
   - Use passive listeners untuk touch/scroll
   - Remove listeners saat tidak perlu

6. MEMORY LEAKS
   - Remove listeners saat component destroyed
   - Avoid circular references
   - Use weak references jika memungkinkan

7. BEST PRACTICES
   - Separate event logic dari markup
   - Use descriptive event names
   - Handle errors dalam event handlers
   - Test event handling thoroughly

8. COMMON PATTERNS
   - Pub/Sub pattern untuk loose coupling
   - Event delegation untuk lists
   - Custom events untuk component communication
   - Throttling/debouncing untuk performance
*/
