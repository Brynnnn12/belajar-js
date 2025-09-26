/**
 * CONTOH KODE: DOM Manipulation
 * ============================
 * File ini berisi contoh manipulasi DOM (Document Object Model)
 */

// ================ SELEKTOR DOM ================
function contohDOMSelectors() {
  console.log("=== DOM SELECTORS ===");

  // Pastikan kita punya HTML elements untuk dimanipulasi
  if (typeof document === "undefined") {
    console.log("DOM tidak tersedia (running in Node.js)");
    return;
  }

  // getElementById - select by ID
  const header = document.getElementById("main-header");
  if (header) {
    console.log("Header ditemukan:", header.textContent);
  } else {
    console.log("Header tidak ditemukan, buat element demo");

    // Buat element demo jika tidak ada
    const demoHeader = document.createElement("h1");
    demoHeader.id = "main-header";
    demoHeader.textContent = "Demo Header";
    document.body.appendChild(demoHeader);
  }

  // getElementsByClassName - select by class
  const buttons = document.getElementsByClassName("btn");
  console.log(`Ditemukan ${buttons.length} button(s) dengan class 'btn'`);

  // getElementsByTagName - select by tag
  const paragraphs = document.getElementsByTagName("p");
  console.log(`Ditemukan ${paragraphs.length} paragraph(s)`);

  // querySelector - modern selector (first match)
  const firstButton = document.querySelector(".btn");
  if (firstButton) {
    console.log("First button:", firstButton.textContent);
  }

  // querySelectorAll - modern selector (all matches)
  const allButtons = document.querySelectorAll(".btn");
  console.log(
    `Ditemukan ${allButtons.length} button(s) dengan querySelectorAll`
  );

  // Advanced selectors
  const redButtons = document.querySelectorAll("button.red");
  const inputs = document.querySelectorAll('input[type="text"]');
  const firstChild = document.querySelector("ul li:first-child");

  console.log(`Red buttons: ${redButtons.length}`);
  console.log(`Text inputs: ${inputs.length}`);
}

// ================ MEMANIPULASI ELEMENT ================
function contohDOMManipulation() {
  console.log("\n=== DOM MANIPULATION ===");

  if (typeof document === "undefined") return;

  // Membuat element baru
  const newDiv = document.createElement("div");
  newDiv.id = "demo-div";
  newDiv.className = "demo-container";
  newDiv.textContent = "Ini adalah div baru";

  // Menambah attribute
  newDiv.setAttribute("data-created", new Date().toISOString());

  // Menambah ke DOM
  document.body.appendChild(newDiv);
  console.log("Div baru ditambahkan");

  // Mengubah style
  newDiv.style.backgroundColor = "#f0f0f0";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px 0";
  newDiv.style.border = "1px solid #ccc";

  // Mengubah text content
  setTimeout(() => {
    newDiv.textContent = "Text diubah setelah 1 detik";
    console.log("Text div diubah");
  }, 1000);

  // Mengubah innerHTML
  setTimeout(() => {
    newDiv.innerHTML = "<strong>HTML</strong> <em>diubah</em> dengan innerHTML";
    console.log("HTML div diubah");
  }, 2000);
}

// ================ TRAVERSING DOM ================
function contohDOMTraversing() {
  console.log("\n=== DOM TRAVERSING ===");

  if (typeof document === "undefined") return;

  // Buat struktur HTML untuk demo
  const container = document.createElement("div");
  container.id = "traversing-demo";
  container.innerHTML = `
    <ul id="menu">
      <li class="menu-item">Home</li>
      <li class="menu-item active">About</li>
      <li class="menu-item">Contact</li>
    </ul>
  `;
  document.body.appendChild(container);

  // Traversing
  const menu = document.getElementById("menu");
  if (menu) {
    // Parent
    console.log("Parent:", menu.parentElement.id);

    // Children
    console.log("Children count:", menu.children.length);
    console.log("First child:", menu.firstElementChild.textContent);
    console.log("Last child:", menu.lastElementChild.textContent);

    // Siblings
    const activeItem = document.querySelector(".active");
    if (activeItem) {
      console.log("Active item:", activeItem.textContent);
      console.log(
        "Previous sibling:",
        activeItem.previousElementSibling?.textContent
      );
      console.log("Next sibling:", activeItem.nextElementSibling?.textContent);
    }

    // Loop through children
    Array.from(menu.children).forEach((child, index) => {
      console.log(`Child ${index + 1}: ${child.textContent}`);
    });
  }
}

// ================ EVENT HANDLING ================
function contohEventHandling() {
  console.log("\n=== EVENT HANDLING ===");

  if (typeof document === "undefined") return;

  // Buat button untuk demo event
  const eventButton = document.createElement("button");
  eventButton.id = "event-btn";
  eventButton.textContent = "Klik Saya";
  eventButton.className = "btn";
  document.body.appendChild(eventButton);

  let clickCount = 0;

  // Event listener
  eventButton.addEventListener("click", function (event) {
    clickCount++;
    console.log(`Button diklik ${clickCount} kali`);
    event.target.textContent = `Diklik ${clickCount} kali`;

    // Prevent default jika ada form
    event.preventDefault();
  });

  // Multiple event listeners
  eventButton.addEventListener("mouseenter", function () {
    eventButton.style.backgroundColor = "#e0e0e0";
  });

  eventButton.addEventListener("mouseleave", function () {
    eventButton.style.backgroundColor = "";
  });

  // Event delegation - handle events on parent
  const menu = document.getElementById("menu");
  if (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target.classList.contains("menu-item")) {
        console.log("Menu item diklik:", event.target.textContent);

        // Remove active class from all items
        menu.querySelectorAll(".menu-item").forEach((item) => {
          item.classList.remove("active");
        });

        // Add active class to clicked item
        event.target.classList.add("active");
      }
    });
  }

  // Keyboard events
  document.addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key} (code: ${event.code})`);
  });

  // Form events
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ketik sesuatu...";
  document.body.appendChild(input);

  input.addEventListener("input", function (event) {
    console.log("Input value:", event.target.value);
  });

  input.addEventListener("focus", function () {
    console.log("Input focused");
  });

  input.addEventListener("blur", function () {
    console.log("Input blurred");
  });
}

// ================ FORM HANDLING ================
function contohFormHandling() {
  console.log("\n=== FORM HANDLING ===");

  if (typeof document === "undefined") return;

  // Buat form demo
  const form = document.createElement("form");
  form.id = "demo-form";
  form.innerHTML = `
    <h3>Contact Form</h3>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  `;
  document.body.appendChild(form);

  // Form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form submitted:", data);

    // Validation
    if (!data.name || !data.email || !data.message) {
      alert("Semua field harus diisi!");
      return;
    }

    // Simulate form submission
    alert("Form berhasil dikirim!");
    form.reset();
  });

  // Form reset
  form.addEventListener("reset", function (event) {
    console.log("Form direset");
  });

  // Real-time validation
  const emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.addEventListener("blur", function () {
      const email = emailInput.value;
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (email && !isValid) {
        emailInput.style.borderColor = "red";
        console.log("Email tidak valid");
      } else {
        emailInput.style.borderColor = "";
      }
    });
  }
}

// ================ AJAX & FETCH ================
function contohAjaxFetch() {
  console.log("\n=== AJAX & FETCH ===");

  if (typeof fetch === "undefined") {
    console.log("Fetch API tidak tersedia");
    return;
  }

  // Buat button untuk demo fetch
  const fetchButton = document.createElement("button");
  fetchButton.id = "fetch-btn";
  fetchButton.textContent = "Fetch Data";
  fetchButton.className = "btn";
  document.body.appendChild(fetchButton);

  const resultDiv = document.createElement("div");
  resultDiv.id = "fetch-result";
  document.body.appendChild(resultDiv);

  fetchButton.addEventListener("click", async function () {
    try {
      resultDiv.textContent = "Loading...";

      // Simulate API call dengan timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock API response
      const mockData = {
        users: [
          { id: 1, name: "John Doe", email: "john@example.com" },
          { id: 2, name: "Jane Smith", email: "jane@example.com" },
        ],
      };

      resultDiv.innerHTML = `
        <h4>Fetched Data:</h4>
        <ul>
          ${mockData.users
            .map((user) => `<li>${user.name} (${user.email})</li>`)
            .join("")}
        </ul>
      `;

      console.log("Data berhasil di-fetch");
    } catch (error) {
      resultDiv.textContent = `Error: ${error.message}`;
      console.error("Fetch error:", error);
    }
  });
}

// ================ ANIMATION & TRANSITIONS ================
function contohAnimation() {
  console.log("\n=== ANIMATION & TRANSITIONS ===");

  if (typeof document === "undefined") return;

  // Buat element untuk di-animate
  const animatedDiv = document.createElement("div");
  animatedDiv.id = "animated-div";
  animatedDiv.textContent = "Animate Me!";
  animatedDiv.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 10px;
  `;
  document.body.appendChild(animatedDiv);

  let isExpanded = false;

  animatedDiv.addEventListener("click", function () {
    if (isExpanded) {
      // Kembali ke ukuran normal
      animatedDiv.style.width = "100px";
      animatedDiv.style.height = "100px";
      animatedDiv.style.backgroundColor = "#3498db";
      animatedDiv.textContent = "Animate Me!";
    } else {
      // Expand
      animatedDiv.style.width = "200px";
      animatedDiv.style.height = "200px";
      animatedDiv.style.backgroundColor = "#e74c3c";
      animatedDiv.textContent = "Expanded!";
    }
    isExpanded = !isExpanded;
  });

  // CSS Animation dengan JavaScript
  animatedDiv.addEventListener("mouseenter", function () {
    animatedDiv.style.transform = "scale(1.1) rotate(5deg)";
  });

  animatedDiv.addEventListener("mouseleave", function () {
    animatedDiv.style.transform = "scale(1) rotate(0deg)";
  });
}

// ================ LOCAL STORAGE ================
function contohLocalStorage() {
  console.log("\n=== LOCAL STORAGE ===");

  if (typeof localStorage === "undefined") {
    console.log("LocalStorage tidak tersedia");
    return;
  }

  // Buat form untuk demo localStorage
  const storageForm = document.createElement("div");
  storageForm.id = "storage-demo";
  storageForm.innerHTML = `
    <h3>LocalStorage Demo</h3>
    <input type="text" id="storage-key" placeholder="Key">
    <input type="text" id="storage-value" placeholder="Value">
    <button id="save-btn">Save</button>
    <button id="load-btn">Load</button>
    <button id="clear-btn">Clear All</button>
    <div id="storage-display"></div>
  `;
  document.body.appendChild(storageForm);

  const keyInput = document.getElementById("storage-key");
  const valueInput = document.getElementById("storage-value");
  const displayDiv = document.getElementById("storage-display");

  // Save to localStorage
  document.getElementById("save-btn").addEventListener("click", function () {
    const key = keyInput.value.trim();
    const value = valueInput.value.trim();

    if (key && value) {
      localStorage.setItem(key, value);
      console.log(`Saved: ${key} = ${value}`);
      displayStorage();
    }
  });

  // Load from localStorage
  document.getElementById("load-btn").addEventListener("click", function () {
    const key = keyInput.value.trim();
    if (key) {
      const value = localStorage.getItem(key);
      if (value) {
        valueInput.value = value;
        console.log(`Loaded: ${key} = ${value}`);
      } else {
        console.log(`Key '${key}' tidak ditemukan`);
      }
    }
  });

  // Clear all
  document.getElementById("clear-btn").addEventListener("click", function () {
    localStorage.clear();
    console.log("LocalStorage dikosongkan");
    displayStorage();
  });

  // Display all storage items
  function displayStorage() {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      items.push(`${key}: ${value}`);
    }
    displayDiv.innerHTML = items.length
      ? `<pre>${items.join("\n")}</pre>`
      : "<p>Tidak ada data tersimpan</p>";
  }

  displayStorage(); // Initial display
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH DOM MANIPULATION\n");

contohDOMSelectors();
contohDOMManipulation();
contohDOMTraversing();
contohEventHandling();
contohFormHandling();
contohAjaxFetch();
contohAnimation();
contohLocalStorage();

console.log("\n✅ SELESAI CONTOH DOM MANIPULATION");

// ================ TIPS DOM MANIPULATION ================
/*
TIPS DOM MANIPULATION:

1. SELECTORS
   - getElementById: untuk ID unik
   - getElementsByClassName: untuk multiple elements
   - querySelector/All: modern, powerful selectors
   - Cache selectors jika digunakan berulang

2. PERFORMANCE
   - Minimize DOM access dalam loops
   - Use DocumentFragment untuk multiple insertions
   - Batch DOM updates
   - Use event delegation untuk dynamic elements

3. EVENT HANDLING
   - Use addEventListener, not inline handlers
   - Remove listeners dengan removeEventListener
   - Use event delegation untuk dynamic content
   - Prevent default behavior jika perlu

4. MEMORY MANAGEMENT
   - Remove event listeners saat element dihapus
   - Clear references untuk avoid memory leaks
   - Use weak references jika memungkinkan

5. BEST PRACTICES
   - Separate content (HTML), presentation (CSS), behavior (JS)
   - Use semantic HTML
   - Progressive enhancement
   - Test di multiple browsers

6. COMMON PATTERNS
   - Module pattern untuk organize code
   - Event delegation untuk dynamic lists
   - Throttling/debouncing untuk performance
   - Template literals untuk HTML generation

7. SECURITY
   - Sanitize user input
   - Use textContent over innerHTML jika memungkinkan
   - Validate form data
   - Avoid eval() dan inline scripts

8. ACCESSIBILITY
   - Use semantic elements
   - Proper ARIA attributes
   - Keyboard navigation support
   - Screen reader compatibility
*/
