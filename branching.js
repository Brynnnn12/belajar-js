/**
 * CONTOH KODE: Branching (Percabangan)
 * ====================================
 * File ini berisi contoh penggunaan if-else, switch, dan ternary operator
 */

// ================ IF-ELSE STATEMENT ================
function contohIfElse() {
  console.log("=== IF-ELSE STATEMENT ===");

  const nilai = 85;
  let grade = "";

  if (nilai >= 90) {
    grade = "A";
    console.log("Selamat! Anda mendapat grade A");
  } else if (nilai >= 80) {
    grade = "B";
    console.log("Bagus! Anda mendapat grade B");
  } else if (nilai >= 70) {
    grade = "C";
    console.log("Cukup baik, grade C");
  } else if (nilai >= 60) {
    grade = "D";
    console.log("Perlu lebih baik, grade D");
  } else {
    grade = "E";
    console.log("Belajar lebih giat lagi, grade E");
  }

  console.log(`Nilai akhir: ${nilai}, Grade: ${grade}`);
}

// ================ SWITCH STATEMENT ================
function contohSwitch() {
  console.log("\n=== SWITCH STATEMENT ===");

  const hari = "Senin";
  let aktivitas = "";

  switch (hari) {
    case "Senin":
      aktivitas = "Meeting pagi, coding seharian";
      break;
    case "Selasa":
      aktivitas = "Review code, testing aplikasi";
      break;
    case "Rabu":
      aktivitas = "Development, pair programming";
      break;
    case "Kamis":
      aktivitas = "Bug fixing, documentation";
      break;
    case "Jumat":
      aktivitas = "Sprint review, planning";
      break;
    case "Sabtu":
    case "Minggu":
      aktivitas = "Istirahat, hobby, atau side project";
      break;
    default:
      aktivitas = "Hari tidak valid";
  }

  console.log(`Hari ${hari}: ${aktivitas}`);
}

// ================ TERNARY OPERATOR ================
function contohTernary() {
  console.log("\n=== TERNARY OPERATOR ===");

  const umur = 18;
  const status = umur >= 17 ? "Dewasa" : "Belum dewasa";
  console.log(`Umur ${umur} tahun: ${status}`);

  // Multiple ternary (nested)
  const nilai = 75;
  const keterangan =
    nilai >= 80
      ? "Sangat Baik"
      : nilai >= 70
      ? "Baik"
      : nilai >= 60
      ? "Cukup"
      : "Kurang";
  console.log(`Nilai ${nilai}: ${keterangan}`);

  // Ternary dengan function call
  const user = { isLoggedIn: true, role: "admin" };
  const message = user.isLoggedIn
    ? user.role === "admin"
      ? "Selamat datang Admin!"
      : "Selamat datang User!"
    : "Silakan login terlebih dahulu";

  console.log(message);
}

// ================ NESTED IF (IF BERSARANG) ================
function contohNestedIf() {
  console.log("\n=== NESTED IF (BERSARANG) ===");

  const user = {
    name: "John",
    age: 25,
    isLoggedIn: true,
    role: "user",
    subscription: "premium",
  };

  if (user.isLoggedIn) {
    console.log(`Selamat datang ${user.name}!`);

    if (user.age >= 18) {
      console.log("Anda sudah dewasa");

      if (user.role === "admin") {
        console.log("Anda memiliki akses admin");
      } else if (user.role === "moderator") {
        console.log("Anda memiliki akses moderator");
      } else {
        console.log("Anda adalah user biasa");

        if (user.subscription === "premium") {
          console.log("Anda memiliki subscription premium");
        } else {
          console.log("Upgrade ke premium untuk fitur lebih banyak");
        }
      }
    } else {
      console.log("Konten ini untuk pengguna 18+");
    }
  } else {
    console.log("Silakan login untuk melanjutkan");
  }
}

// ================ SHORT-CIRCUIT EVALUATION ================
function contohShortCircuit() {
  console.log("\n=== SHORT-CIRCUIT EVALUATION ===");

  const user = {
    name: "John",
    settings: {
      theme: "dark",
    },
  };

  // Menggunakan && untuk conditional execution
  user.settings && console.log("Settings tersedia");
  user.settings?.theme && console.log(`Theme: ${user.settings.theme}`);

  // Menggunakan || untuk default value
  const displayName = user.name || "Guest";
  console.log(`Display name: ${displayName}`);

  const theme = user.settings?.theme || "light";
  console.log(`Theme: ${theme}`);

  // Complex short-circuit
  const canAccess =
    user.isLoggedIn && user.role === "admin" && user.subscription === "premium";
  console.log(`Can access premium admin features: ${canAccess}`);
}

// ================ BRANCHING DENGAN FUNCTION ================
function checkUserAccess(user) {
  // Guard clause pattern (akan dibahas di guard-clause.js)
  if (!user) return "User tidak ditemukan";
  if (!user.isLoggedIn) return "Silakan login terlebih dahulu";
  if (user.role !== "admin") return "Akses ditolak: bukan admin";

  return "Akses diterima: admin";
}

function contohBranchingDenganFunction() {
  console.log("\n=== BRANCHING DENGAN FUNCTION ===");

  const users = [
    null,
    { name: "John", isLoggedIn: false },
    { name: "Jane", isLoggedIn: true, role: "user" },
    { name: "Admin", isLoggedIn: true, role: "admin" },
  ];

  users.forEach((user, index) => {
    const result = checkUserAccess(user);
    console.log(`User ${index + 1}: ${result}`);
  });
}

// ================ BRANCHING DENGAN OBJECT LOOKUP ================
function getDayActivity(hari) {
  const activities = {
    Senin: "Meeting dan coding",
    Selasa: "Code review",
    Rabu: "Development",
    Kamis: "Testing",
    Jumat: "Deployment",
    Sabtu: "Side project",
    Minggu: "Istirahat",
  };

  return activities[hari] || "Hari tidak valid";
}

function contohObjectLookup() {
  console.log("\n=== OBJECT LOOKUP BRANCHING ===");

  const days = ["Senin", "Sabtu", "Invalid"];

  days.forEach((day) => {
    console.log(`${day}: ${getDayActivity(day)}`);
  });
}

// ================ JALANKAN SEMUA CONTOH ================
console.log("🚀 MULAI CONTOH BRANCHING\n");

contohIfElse();
contohSwitch();
contohTernary();
contohNestedIf();
contohShortCircuit();
contohBranchingDenganFunction();
contohObjectLookup();

console.log("\n✅ SELESAI CONTOH BRANCHING");

// ================ TIPS PENGGUNAAN BRANCHING ================
/*
TIPS PENGGUNAAN BRANCHING:

1. IF-ELSE STATEMENT
   - Untuk kondisi sederhana sampai kompleks
   - Gunakan else if untuk multiple conditions
   - Hindari nested if terlalu dalam (maksimal 3 level)

2. SWITCH STATEMENT
   - Untuk perbandingan equality dengan banyak case
   - Lebih readable daripada if-else panjang
   - Jangan lupa break di setiap case
   - Gunakan default case

3. TERNARY OPERATOR
   - Untuk kondisi sederhana (if-else 2 pilihan)
   - Bisa nested tapi jangan berlebihan
   - Lebih concise untuk assignment

4. SHORT-CIRCUIT
   - Untuk conditional execution (&&)
   - Untuk default value (||)
   - Untuk optional chaining (?.)

5. OBJECT LOOKUP
   - Alternatif switch untuk mapping sederhana
   - Lebih performant dan readable
   - Mudah di-maintain

6. FUNCTION BASED
   - Pisahkan logic ke function terpisah
   - Gunakan guard clause untuk early return
   - Lebih testable dan reusable

7. BEST PRACTICES
   - Gunakan === bukan == (strict equality)
   - Minimalisir nested conditions
   - Berikan default case/value
   - Comment logic yang kompleks
*/
