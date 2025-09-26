/**
 * JAVASCRIPT DASAR - KODE LENGKAP
 * ======================================
 * File ini berisi konsep dan fitur dasar JavaScript
 */

// ================ BAGIAN 1: VARIABEL & TIPE DATA ================

// 1.1 Deklarasi variabel (3 cara)
var namaLama = "Andi"; // Cara lama, hindari penggunaan var
let namaBaru = "Budi"; // Rekomendasi untuk variabel yang akan berubah
const PI = 3.14; // Untuk nilai tetap (tidak bisa diubah)

// 1.2 Tipe data primitif
const teks = "Hello World"; // String
const angka = 42; // Number
const desimal = 3.14; // Number (JavaScript tidak membedakan integer dan float)
const benar = true; // Boolean
const salah = false; // Boolean
const tidakAda = null; // Null (kosong secara disengaja)
const belumDiisi = undefined; // Undefined (belum diberi nilai)
const simbolUnik = Symbol("id"); // Symbol (nilai unik)
const bigNum = 9007199254740991n; // BigInt (untuk angka sangat besar)

// 1.3 Cek tipe data dengan typeof
console.log("Tipe data dari teks:", typeof teks); // string
console.log("Tipe data dari angka:", typeof angka); // number
console.log("Tipe data dari benar:", typeof benar); // boolean
console.log("Tipe data dari null:", typeof tidakAda); // object (ini adalah bug JavaScript)
console.log("Tipe data dari undefined:", typeof belumDiisi); // undefined

// ================ BAGIAN 2: OPERATOR ================

// 2.1 Operator aritmatika
const a = 10;
const b = 3;
console.log("\n--- Operator Aritmatika ---");
console.log("Penjumlahan:", a + b); // 13
console.log("Pengurangan:", a - b); // 7
console.log("Perkalian:", a * b); // 30
console.log("Pembagian:", a / b); // 3.3333...
console.log("Modulus (sisa bagi):", a % b); // 1
console.log("Eksponen (pangkat):", a ** b); // 1000

// 2.2 Operator perbandingan
console.log("\n--- Operator Perbandingan ---");
console.log("Sama dengan (nilai):", a == "10"); // true
console.log("Sama dengan (nilai dan tipe):", a === "10"); // false
console.log("Tidak sama dengan (nilai):", a != "10"); // false
console.log("Tidak sama dengan (nilai dan tipe):", a !== "10"); // true
console.log("Lebih besar:", a > b); // true
console.log("Lebih kecil:", a < b); // false
console.log("Lebih besar sama dengan:", a >= 10); // true
console.log("Lebih kecil sama dengan:", a <= 10); // true

// 2.3 Operator logika
console.log("\n--- Operator Logika ---");
console.log("AND:", true && false); // false
console.log("OR:", true || false); // true
console.log("NOT:", !true); // false

// 2.4 Operator assignment
let x = 5;
console.log("\n--- Operator Assignment ---");
console.log("Nilai awal x:", x); // 5
x += 3; // x = x + 3
console.log("Setelah x += 3:", x); // 8
x -= 2; // x = x - 2
console.log("Setelah x -= 2:", x); // 6
x *= 4; // x = x * 4
console.log("Setelah x *= 4:", x); // 24
x /= 3; // x = x / 3
console.log("Setelah x /= 3:", x); // 8

// 2.5 Operator ternary (conditional)
const umur = 18;
const status = umur >= 17 ? "Dewasa" : "Anak-anak";
console.log("\nStatus berdasarkan umur:", status); // Dewasa

// ================ BAGIAN 3: KONDISI & PERCABANGAN ================

// 3.1 If statement
const nilai = 75;
console.log("\n--- Percabangan If ---");

if (nilai >= 80) {
  console.log("Nilai A");
} else if (nilai >= 70) {
  console.log("Nilai B");
} else if (nilai >= 60) {
  console.log("Nilai C");
} else {
  console.log("Nilai D");
}

// 3.2 Switch statement
const hari = "Senin";
console.log("\n--- Percabangan Switch ---");

switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Akhir pekan");
    break;
  default:
    console.log("Hari kerja lainnya");
}

// ================ BAGIAN 4: LOOP & ITERASI ================

// 4.1 For loop
console.log("\n--- For Loop ---");
for (let i = 0; i < 5; i++) {
  console.log(`Iterasi ke-${i}`);
}

// 4.2 While loop
console.log("\n--- While Loop ---");
let counter = 0;
while (counter < 3) {
  console.log(`While ke-${counter}`);
  counter++;
}

// 4.3 Do while loop (eksekusi minimal 1x)
console.log("\n--- Do While Loop ---");
let j = 0;
do {
  console.log(`Do-While ke-${j}`);
  j++;
} while (j < 3);

// 4.4 For...of (untuk array)
console.log("\n--- For...of Loop (Array) ---");
const buah = ["Apel", "Jeruk", "Mangga"];
for (const item of buah) {
  console.log(`Buah: ${item}`);
}

// 4.5 For...in (untuk object)
console.log("\n--- For...in Loop (Object) ---");
const mobil = { merk: "Toyota", model: "Avanza", tahun: 2020 };
for (const key in mobil) {
  console.log(`${key}: ${mobil[key]}`);
}

// ================ BAGIAN 5: FUNCTION (FUNGSI) ================

// 5.1 Deklarasi function
function sapa(nama) {
  return `Halo, ${nama}!`;
}

// 5.2 Function expression
const perkalian = function (a, b) {
  return a * b;
};

// 5.3 Arrow function
const pembagian = (a, b) => a / b;

// 5.4 Function dengan default parameter
const sapaDenganRole = (nama, role = "Guest") => {
  return `Halo, ${nama}! Anda login sebagai ${role}`;
};

// 5.5 Function dengan rest parameter
const jumlahkan = (...angka) => {
  return angka.reduce((total, nilai) => total + nilai, 0);
};

// 5.6 Memanggil function
console.log("\n--- Pemanggilan Function ---");
console.log(sapa("Dika")); // Halo, Dika!
console.log(perkalian(4, 5)); // 20
console.log(pembagian(10, 2)); // 5
console.log(sapaDenganRole("Budi")); // Halo, Budi! Anda login sebagai Guest
console.log(sapaDenganRole("Caca", "Admin")); // Halo, Caca! Anda login sebagai Admin
console.log(jumlahkan(1, 2, 3, 4, 5)); // 15

// ================ BAGIAN 6: STRING MANIPULATION ================

// 6.1 String methods
const text = "Hello World";
console.log("\n--- String Methods ---");
console.log("Length:", text.length); // 11
console.log("toUpperCase:", text.toUpperCase()); // HELLO WORLD
console.log("toLowerCase:", text.toLowerCase()); // hello world
console.log("Substring:", text.substring(0, 5)); // Hello
console.log("Replace:", text.replace("World", "JavaScript")); // Hello JavaScript
console.log("Split:", text.split(" ")); // ["Hello", "World"]
console.log("Trim:", "  text  ".trim()); // "text"
console.log("Includes:", text.includes("World")); // true
console.log("StartsWith:", text.startsWith("Hello")); // true
console.log("EndsWith:", text.endsWith("World")); // true

// 6.2 Template literals (string dengan backtick)
const nama = "Joni";
const umurUser = 25;
console.log("\n--- Template Literals ---");
console.log(`Nama saya ${nama}, umur ${umurUser} tahun`);
console.log(`${nama} lahir tahun ${new Date().getFullYear() - umurUser}`);

// ================ BAGIAN 7: NUMBER HANDLING ================

// 7.1 Number methods
console.log("\n--- Number Methods ---");
console.log("toString:", (123).toString()); // "123"
console.log("toFixed:", (3.1415).toFixed(2)); // "3.14"
console.log("parseInt:", parseInt("42.5px")); // 42
console.log("parseFloat:", parseFloat("42.5px")); // 42.5
console.log("isNaN:", isNaN("Hello")); // true
console.log("Math.round:", Math.round(4.7)); // 5
console.log("Math.ceil:", Math.ceil(4.1)); // 5
console.log("Math.floor:", Math.floor(4.9)); // 4
console.log("Math.random:", Math.random()); // angka random antara 0-1
console.log("Math.max:", Math.max(5, 10, 3)); // 10
console.log("Math.min:", Math.min(5, 10, 3)); // 3

// ================ BAGIAN 8: DATE & TIME ================

// 8.1 Bekerja dengan tanggal dan waktu
const sekarang = new Date();
const tanggalSpesifik = new Date("2023-12-25");

console.log("\n--- Date & Time ---");
console.log("Date sekarang:", sekarang);
console.log("Tanggal:", sekarang.getDate()); // tanggal (1-31)
console.log("Bulan:", sekarang.getMonth() + 1); // bulan (0-11, +1 untuk 1-12)
console.log("Tahun:", sekarang.getFullYear()); // tahun (4 digit)
console.log("Jam:", sekarang.getHours()); // jam (0-23)
console.log("Menit:", sekarang.getMinutes()); // menit (0-59)
console.log("Detik:", sekarang.getSeconds()); // detik (0-59)
console.log("Timestamp:", sekarang.getTime()); // milliseconds sejak 1 Jan 1970

// Format tanggal
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log("Tanggal lokal:", sekarang.toLocaleDateString("id-ID", options));
console.log("Waktu lokal:", sekarang.toLocaleTimeString("id-ID"));

// ================ BAGIAN 9: ERROR HANDLING ================

// 9.1 Try...catch...finally
console.log("\n--- Error Handling ---");
try {
  // Kode yang mungkin menyebabkan error
  console.log("Mencoba menjalankan kode...");
  // nonExistentFunction(); // Ini akan menyebabkan error
  const hasil = 10 / 0;
  console.log("Hasil pembagian:", hasil); // Infinity (bukan error di JavaScript)
} catch (error) {
  // Tangani error
  console.error("Terjadi error:", error.message);
} finally {
  // Selalu dijalankan, error atau tidak
  console.log("Blok finally selalu dijalankan");
}

// 9.2 Throw custom error
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol!");
  }
  return a / b;
}

try {
  console.log(bagi(10, 2)); // 5
  console.log(bagi(10, 0)); // Error
} catch (error) {
  console.error("Error saat membagi:", error.message);
}

// ================ BAGIAN 10: LOCAL STORAGE ================
// (Browser-only, tidak berfungsi di Node.js, hanya contoh kode)

/*
// 10.1 Menyimpan data di localStorage
localStorage.setItem("username", "john_doe");
localStorage.setItem("isLoggedIn", "true");

// 10.2 Mengambil data dari localStorage
const username = localStorage.getItem("username");
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
console.log("Data dari localStorage:", username, isLoggedIn);

// 10.3 Menghapus data dari localStorage
localStorage.removeItem("username");

// 10.4 Menghapus semua data di localStorage
localStorage.clear();
*/

// ================ BAGIAN 11: setTimeout & setInterval ================

// 11.1 setTimeout (eksekusi setelah delay)
console.log("\n--- setTimeout ---");
console.log("Kode sebelum setTimeout");

setTimeout(() => {
  console.log("Kode ini dijalankan setelah 1 detik");
}, 1000);

console.log("Kode setelah setTimeout (dijalankan duluan)");

// 11.2 setInterval (eksekusi berulang dengan interval)
// Uncomment untuk mencoba, tapi hati-hati kode akan terus berjalan
/*
let counter2 = 0;
const intervalId = setInterval(() => {
  console.log(`Interval berjalan ${++counter2}x`);
  if (counter2 >= 5) {
    clearInterval(intervalId); // Hentikan interval setelah 5x
    console.log("Interval dihentikan");
  }
}, 1000);
*/

console.log("\n--- JavaScript Dasar Selesai ---");
