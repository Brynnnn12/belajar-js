# Panduan Lengkap JavaScript untuk Pemula

## Selamat Datang! 🎉

Halo teman-teman yang baru belajar JavaScript! Panduan ini dibuat khusus untuk pemula yang benar-benar dari nol. Kita akan belajar JavaScript step by step dengan cara yang mudah dipahami, seperti belajar bahasa Indonesia dulu baru bahasa Inggris.

**Bayangkan JavaScript seperti ini:**

- **HTML** = Kerangka rumah (struktur)
- **CSS** = Cat dan dekorasi rumah (tampilan)
- **JavaScript** = Listrik dan peralatan rumah (fungsi interaktif)

Tanpa JavaScript, website cuma diam seperti rumah kosong. Dengan JavaScript, website bisa "hidup" - bisa merespons klik, mengubah tampilan, mengambil data, dll.

## Sebelum Mulai: Persiapan Belajar

### Yang Kamu Butuh:

1. **Browser modern** (Chrome, Firefox, Edge)
2. **Text editor** (VS Code, Sublime, atau yang kamu pakai sekarang)
3. **Console browser** (F12 → Console tab)
4. **Sabar dan konsisten** - programming butuh latihan!

### Cara Belajar yang Efektif:

1. **Baca penjelasan** dulu
2. **Coba kode** di console browser
3. **Modifikasi kode** - ubah-ubah nilainya
4. **Jangan takut error** - error itu guru terbaik!
5. **Praktik setiap hari** - minimal 30 menit

### Tips Sukses Belajar Programming:

- ❌ Jangan cuma baca, harus **praktek**!
- ❌ Jangan takut salah, **error itu normal**
- ✅ Tanyakan kalau bingung
- ✅ Buat proyek kecil-kecilan
- ✅ Ajak teman belajar bareng

---

## Daftar Isi Lengkap

1. [Variabel: Kotak Penyimpanan Data](#1-variabel-kotak-penyimpanan-data)
2. [Branching: Percabangan Jalan](#2-branching-percabangan-jalan)
3. [Operator: Alat Perhitungan](#3-operator-alat-perhitungan)
4. [Tipe Data: Jenis-jenis Data](#4-tipe-data-jenis-jenis-data)
5. [Function: Mesin Pembuat Kode](#5-function-mesin-pembuat-kode)
6. [Import/Export: Peminjaman Kode](#6-import-export-peminjaman-kode)
7. [Synchronous: Antrian Berurutan](#7-synchronous-antrian-berurutan)
8. [Asynchronous: Tugas Paralel](#8-asynchronous-tugas-paralel)
9. [Callback: Delegasi Tugas](#9-callback-delegasi-tugas)
10. [Guard Clause: Penjaga Pintu](#10-guard-clause-penjaga-pintu)
11. [Hoisting: Elevator Variabel](#11-hoisting-elevator-variabel)
12. [Array & Object: Kotak & Lemari Data](#12-array-object-kotak-lemari-data)
13. [DOM: Mengontrol Halaman Web](#13-dom-mengontrol-halaman-web)
14. [Event Handling: Menanggapi Interaksi](#14-event-handling-menanggapi-interaksi)
15. [Error Handling: Menangani Kesalahan](#15-error-handling-menangani-kesalahan)
16. [Looping: Pengulangan Tugas](#16-looping-pengulangan-tugas)
17. [Promise: Janji Asinkron](#17-promise-janji-asinkron)

---

## 1. Variabel: Kotak Penyimpanan Data

**Bayangkan variabel seperti KOTAK PENYIMPAN:**

- Kotak bisa berisi apa saja: buku, mainan, pakaian
- Setiap kotak punya nama label
- Isi kotak bisa diganti kapan saja

### Global Variable (Kotak di Ruang Tamu)

Variabel global seperti kotak yang diletakkan di ruang tamu - semua orang di rumah bisa mengaksesnya.

```javascript
// Kotak global di ruang tamu
let namaToko = "Toko ABC";

function tampilkanNamaToko() {
  console.log("Selamat datang di " + namaToko);
  // Bisa akses kotak global dari dalam kamar
}

tampilkanNamaToko(); // Selamat datang di Toko ABC
console.log(namaToko); // Bisa akses dari mana saja
```

**Kapan pakai global?**

- Data yang dibutuhkan banyak function
- Konstanta seperti PI, nama aplikasi
- ⚠️ **Hati-hati!** Terlalu banyak global bisa bikin rusak

### Local Variable (Kotak di Kamar)

Variabel local seperti kotak di kamar tidur - cuma pemilik kamar yang bisa akses.

```javascript
function masakMakanan() {
  // Kotak di dapur - cuma bisa diakses di dapur
  let bahanRahasia = "Bumbu special";
  console.log("Masak dengan " + bahanRahasia);
}

masakMakanan();
// console.log(bahanRahasia); // ERROR! Kotak bahanRahasia cuma ada di dapur
```

### Block Scope (Kotak di Dalam Lemari)

Block scope seperti kotak di dalam lemari - bahkan di kamar yang sama, cuma bisa diakses dari lemari itu.

```javascript
if (true) {
  let password = "rahasia123";
  console.log(password); // OK - masih di dalam lemari
}
// console.log(password); // ERROR! Sudah keluar dari lemari
```

### Var vs Let vs Const: Perbedaan Kotak

```javascript
// VAR: Kotak kardus bekas - mudah rusak, bisa diganti label
var nama = "John";
var nama = "Jane"; // OK, bisa ganti label
nama = "Bob"; // OK, bisa ganti isi

// LET: Kotak plastik - kuat, label tetap tapi isi bisa ganti
let umur = 25;
// let umur = 26; // ERROR! Label tidak bisa diganti
umur = 26; // OK, isi bisa ganti

// CONST: Kotak besi terkunci - super aman, sekali isi tidak bisa ganti
const PI = 3.14159;
// PI = 3.14; // ERROR! Isi tidak bisa diganti
```

**Aturan Emas:**

- **const** untuk nilai yang tidak pernah ganti (konstanta)
- **let** untuk nilai yang bisa berubah
- **var** jarang dipakai lagi, kecuali ada alasan khusus

### Tips Praktis:

- Gunakan nama variabel yang **jelas**: `namaUser` bukan `x`
- Untuk konstanta: `const JUMLAH_HARI_DALAM_MINGGU = 7`
- Hindari global sebisa mungkin
- Inisialisasi variabel dengan nilai awal

---

## 2. Branching: Percabangan Jalan

**Bayangkan branching seperti SIMPANG JALAN:**

- Ada beberapa pilihan jalan
- Kamu pilih jalan berdasarkan kondisi
- Setiap jalan punya tujuan berbeda

### If-Else: Pilihan Sederhana

```javascript
let nilaiUjian = 85;
let hasil;

if (nilaiUjian >= 90) {
  hasil = "A - Sangat Baik!";
} else if (nilaiUjian >= 80) {
  hasil = "B - Baik!";
} else if (nilaiUjian >= 70) {
  hasil = "C - Cukup!";
} else if (nilaiUjian >= 60) {
  hasil = "D - Kurang!";
} else {
  hasil = "E - Remedial!";
}

console.log("Nilai kamu: " + hasil);
```

**Prosesnya seperti:**

```
nilaiUjian = 85
85 >= 90? Tidak → lanjut ke bawah
85 >= 80? Ya! → hasil = "B - Baik!"
```

### Switch: Menu Restoran

Switch cocok untuk pilihan yang banyak dan tetap.

```javascript
let menu = "nasi goreng";
let harga;

switch (
  menu.toLowerCase() // toLowerCase() bikin huruf kecil semua
) {
  case "nasi goreng":
    harga = 15000;
    console.log("Nasi goreng spesial!");
    break;

  case "ayam bakar":
    harga = 20000;
    console.log("Ayam bakar madu!");
    break;

  case "sate":
    harga = 25000;
    console.log("Sate ayam 10 tusuk!");
    break;

  default:
    harga = 0;
    console.log("Menu tidak tersedia");
}

console.log("Harga: Rp " + harga);
```

**PENTING:** Jangan lupa `break`! Kalau tidak, akan lanjut ke case berikutnya.

### Ternary Operator: Pintasan

Untuk kondisi sederhana, ternary lebih singkat dari if-else.

```javascript
// Cara panjang
let umur = 18;
let status;
if (umur >= 17) {
  status = "Boleh bawa motor";
} else {
  status = "Belum boleh bawa motor";
}

// Cara singkat dengan ternary
let statusSingkat = umur >= 17 ? "Boleh bawa motor" : "Belum boleh bawa motor";

console.log(statusSingkat);
```

**Rumus:** `kondisi ? jika_benar : jika_salah`

### Tips Praktis:

- Gunakan `===` bukan `==` untuk perbandingan
- Untuk range angka, pakai if-else
- Untuk pilihan tetap, pakai switch
- Untuk kondisi sederhana, pakai ternary

---

## 3. Operator: Alat Perhitungan

**Operator seperti KALKULATOR dan ALAT UKUR:**

- Aritmatika: + - × ÷
- Perbandingan: > < =
- Logika: dan, atau, tidak

### Operator Aritmatika

```javascript
let a = 10;
let b = 3;

console.log("Penjumlahan: " + (a + b)); // 13
console.log("Pengurangan: " + (a - b)); // 7
console.log("Perkalian: " + a * b); // 30
console.log("Pembagian: " + a / b); // 3.333...
console.log("Sisa bagi: " + (a % b)); // 1 (10 ÷ 3 = 3 sisa 1)
console.log("Pangkat: " + a ** b); // 1000 (10³)
```

### Operator Perbandingan

```javascript
console.log("5 == '5'", 5 == "5"); // true (sama nilai)
console.log("5 === '5'", 5 === "5"); // false (beda tipe)
console.log("5 != '5'", 5 != "5"); // false
console.log("5 !== '5'", 5 !== "5"); // true
console.log("5 > 3", 5 > 3); // true
console.log("5 >= 5", 5 >= 5); // true
```

**Ingat:** `==` cek nilai saja, `===` cek nilai + tipe data

### Operator Logika

```javascript
let nilai = 85;
let absensi = 90;

// AND (&&): Kedua kondisi harus benar
if (nilai >= 80 && absensi >= 85) {
  console.log("Lulus dengan baik!");
}

// OR (||): Salah satu kondisi benar saja
if (nilai >= 90 || absensi >= 95) {
  console.log("Berhak dapat bonus!");
}

// NOT (!): Kebalikan
if (!(nilai < 60)) {
  console.log("Tidak remedial");
}
```

### Operator Assignment

```javascript
let x = 5;

x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 4; // x = x * 4 → 24
x /= 3; // x = x / 3 → 8
x %= 5; // x = x % 5 → 3
```

### Tips Praktis:

- Hati-hati dengan pembagian oleh nol
- Gunakan `===` untuk perbandingan yang aman
- Operator logika bisa digabung: `(a && b) || c`
- Kurung bisa bikin kode lebih jelas: `if ((umur >= 17) && (nilai >= 70))`

---

## 4. Tipe Data: Jenis-jenis Data

**Bayangkan tipe data seperti JENIS MAKANAN:**

- Nasi (string)
- Angka (number)
- Ya/Tidak (boolean)
- Kotak makanan (object)
- Daftar belanja (array)

### Tipe Data Primitif

```javascript
// STRING: Teks, selalu dalam kutip
let nama = "John Doe";
let pesan = "Halo dunia!";
let template = `Umur saya ${25}`; // Template literal

// NUMBER: Angka, ada bulat dan desimal
let umur = 25; // Integer
let berat = 65.5; // Float
let takTerhingga = Infinity;
let bukanAngka = NaN; // Not a Number

// BOOLEAN: True atau False
let isStudent = true;
let isMarried = false;

// UNDEFINED: Belum ada nilai
let kosong; // undefined
console.log(kosong); // undefined

// NULL: Kosong secara sengaja
let tidakAda = null; // null

// SYMBOL: Identifier unik (ES6+)
let id = Symbol("id unik");

// BIGINT: Angka besar (ES11+)
let angkaBesar = 9007199254740991n;
```

### Tipe Data Referensi

```javascript
// OBJECT: Kotak penyimpan data kompleks
let orang = {
  nama: "John",
  umur: 25,
  alamat: {
    kota: "Jakarta",
    negara: "Indonesia",
  },
};

// ARRAY: Daftar teratur
let buah = ["apel", "jeruk", "mangga"];
let campuran = [1, "dua", true, { nama: "objek" }];
```

### Mengecek Tipe Data

```javascript
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug di JS!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
```

### Konversi Tipe Data

```javascript
// String ke Number
let stringAngka = "123";
let angka = Number(stringAngka); // 123
let angka2 = parseInt(stringAngka); // 123
let angka3 = parseFloat("3.14"); // 3.14

// Number ke String
let angkaKeString = String(123); // "123"
let angkaKeString2 = 123 + ""; // "123"

// Ke Boolean
let keBoolean = Boolean(1); // true
let keBoolean2 = Boolean(0); // false
let keBoolean3 = Boolean(""); // false
let keBoolean4 = Boolean("hello"); // true
```

### Tips Praktis:

- `null` artinya "tidak ada nilai", `undefined` artinya "belum diinisialisasi"
- Array dan Object adalah reference type, bukan primitive
- Gunakan `typeof` untuk debugging
- Hati-hati dengan konversi otomatis JavaScript

---

## 5. Function: Mesin Pembuat Kode

**Bayangkan function seperti MESIN OTOMATIS:**

- Masukkan bahan (parameter)
- Tekan tombol (panggil function)
- Keluar hasil (return value)

### Function Declaration

```javascript
// Deklarasi function seperti bikin mesin
function buatKopi(jenis, gula) {
  // Proses di dalam mesin
  console.log(`Sedang bikin kopi ${jenis}...`);

  if (gula) {
    return `Kopi ${jenis} dengan gula`;
  } else {
    return `Kopi ${jenis} tanpa gula`;
  }
}

// Pakai mesinnya
let kopiSaya = buatKopi("tubruk", true);
console.log(kopiSaya); // "Kopi tubruk dengan gula"
```

### Function Expression

```javascript
// Function disimpan dalam variabel
const hitungLuas = function (panjang, lebar) {
  return panjang * lebar;
};

console.log(hitungLuas(5, 3)); // 15
```

### Arrow Function (ES6+)

```javascript
// Arrow function: lebih singkat
const luasLingkaran = (radius) => {
  return Math.PI * radius * radius;
};

// Lebih singkat lagi (1 parameter, 1 statement)
const kuadrat = (x) => x * x;

// Untuk object
const buatOrang = (nama, umur) => ({ nama, umur });

console.log(luasLingkaran(5)); // 78.539...
console.log(kuadrat(4)); // 16
console.log(buatOrang("John", 25)); // {nama: "John", umur: 25}
```

### Parameter Default

```javascript
function pesanMakanan(menu, jumlah = 1, levelPedas = "sedang") {
  return `${jumlah} porsi ${menu} level pedas ${levelPedas}`;
}

console.log(pesanMakanan("nasi goreng")); // "1 porsi nasi goreng level pedas sedang"
console.log(pesanMakanan("ayam bakar", 2, "pedas")); // "2 porsi ayam bakar level pedas pedas"
```

### Rest Parameter

```javascript
function jumlahkan(...angka) {
  let total = 0;
  for (let num of angka) {
    total += num;
  }
  return total;
}

console.log(jumlahkan(1, 2, 3)); // 6
console.log(jumlahkan(1, 2, 3, 4, 5)); // 15
```

### Tips Praktis:

- Function harus `return` sesuatu, kalau tidak hasilnya `undefined`
- Parameter default bisa diganti dengan argumen yang diberikan
- Rest parameter harus yang terakhir
- Arrow function tidak punya `this` sendiri

---

## 6. Import dan Export: Peminjaman Kode

**Bayangkan seperti PINJAM BUKU di Perpustakaan:**

- Export: Pinjamkan buku ke teman
- Import: Pinjam buku dari teman

### Export (file: mathUtils.js)

```javascript
// Export named: seperti pinjamkan beberapa buku
export const PI = 3.14159;

export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

// Export default: seperti pinjamkan buku utama
export default function kali(a, b) {
  return a * b;
}
```

### Import

```javascript
// Import named
import { PI, tambah, kurang } from "./mathUtils.js";

// Import default
import kali from "./mathUtils.js";

// Import semua sekaligus
import * as MathUtils from "./mathUtils.js";

// Import dengan alias
import { tambah as penjumlahan } from "./mathUtils.js";

// Penggunaan
console.log(PI); // 3.14159
console.log(tambah(5, 3)); // 8
console.log(kali(4, 5)); // 20
console.log(MathUtils.kurang(10, 3)); // 7
console.log(penjumlahan(2, 3)); // 5
```

### Dynamic Import

```javascript
// Import saat dibutuhkan saja
async function loadUtils() {
  const utils = await import("./mathUtils.js");
  console.log(utils.tambah(2, 3)); // 5
}

loadUtils();
```

### Tips Praktis:

- File harus berekstensi `.js` untuk ES modules
- Path relatif: `./` untuk folder yang sama, `../` untuk folder atas
- Named export untuk export banyak, default export untuk satu utama
- Dynamic import untuk load code saat dibutuhkan

---

## 7. Synchronous: Antrian Berurutan

**Bayangkan seperti ANTRIAN di BANK:**

- Orang pertama dilayani dulu
- Yang berikutnya tunggu giliran
- Tidak ada yang bisa loncat antrian

```javascript
console.log("1. Datang ke bank");

function ambilNomorAntrian() {
  console.log("2. Ambil nomor antrian");
}

function tungguGiliran() {
  console.log("3. Tunggu giliran");
}

function dilayani() {
  console.log("4. Dilayani teller");
}

function selesai() {
  console.log("5. Selesai transaksi");
}

ambilNomorAntrian(); // Dijalankan pertama
tungguGiliran(); // Tunggu yang pertama selesai
dilayani(); // Tunggu yang kedua selesai
selesai(); // Terakhir

console.log("6. Pulang ke rumah");
// Output berurutan: 1, 2, 3, 4, 5, 6
```

**Kelebihan Synchronous:**

- Mudah dipahami
- Tidak ada race condition
- Debug lebih mudah

**Kekurangan Synchronous:**

- Kalau ada yang lama, yang lain ikut nunggu
- UI bisa freeze kalau ada operasi berat

---

## 8. Asynchronous: Tugas Paralel

**Bayangkan seperti RESTORAN PADANG:**

- Pesan makanan
- Sambil nunggu, bisa ngobrol, minum, dll
- Makanan datang sendiri tanpa nunggu terus

### Callback-based Asynchronous

```javascript
console.log("1. Datang ke restoran");

function pesanMakanan(callback) {
  console.log("2. Pesan makanan");

  // Simulasi masak makanan (2 detik)
  setTimeout(() => {
    console.log("4. Makanan siap!");
    callback(); // Panggil callback setelah selesai
  }, 2000);
}

function makan() {
  console.log("5. Mulai makan");
}

console.log("3. Tunggu sambil ngobrol...");
pesanMakanan(makan);
console.log("6. Lanjut ngobrol...");

// Output:
// 1. Datang ke restoran
// 2. Pesan makanan
// 3. Tunggu sambil ngobrol...
// 6. Lanjut ngobrol...
// (2 detik kemudian)
// 4. Makanan siap!
// 5. Mulai makan
```

### Promise-based Asynchronous

```javascript
function ambilData() {
  return new Promise((resolve, reject) => {
    console.log("Mengambil data dari server...");

    setTimeout(() => {
      const berhasil = Math.random() > 0.3; // 70% berhasil

      if (berhasil) {
        resolve("Data berhasil diambil!");
      } else {
        reject(new Error("Server error"));
      }
    }, 2000);
  });
}

// Cara pakai Promise
ambilData()
  .then((hasil) => {
    console.log("Sukses:", hasil);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("Proses selesai");
  });
```

### Async/Await (ES8+)

```javascript
async function prosesData() {
  try {
    console.log("Mulai ambil data...");
    const data = await ambilData(); // Tunggu sampai selesai
    console.log("Data:", data);

    // Proses data lebih lanjut
    const hasil = await prosesDataLanjutan(data);
    console.log("Hasil akhir:", hasil);
  } catch (error) {
    console.log("Terjadi error:", error.message);
  }
}

function prosesDataLanjutan(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data + " - sudah diproses");
    }, 1000);
  });
}

prosesData();
```

### Tips Praktis:

- `async` function selalu return Promise
- `await` cuma bisa dipakai di dalam `async` function
- Error di `async/await` ditangkap dengan `try/catch`
- Promise lebih mudah di-chain daripada callback

---

## 9. Callback: Delegasi Tugas

**Bayangkan callback seperti TITIP PESAN:**

- "Kalau ketemu John, bilangin ya kalau saya nunggu di kafe"
- Kamu pergi, ketemu John, sampaikan pesan

### Callback Sederhana

```javascript
function sampaikanPesan(penerima, pesan, callback) {
  console.log(`Mencari ${penerima}...`);

  setTimeout(() => {
    console.log(`Ketemu ${penerima}!`);
    callback(pesan); // Sampaikan pesan
  }, 2000);
}

function terimaPesan(pesan) {
  console.log(`Pesan diterima: "${pesan}"`);
}

sampaikanPesan("John", "Besok meeting jam 9", terimaPesan);
// Output:
// Mencari John...
// (2 detik)
// Ketemu John!
// Pesan diterima: "Besok meeting jam 9"
```

### Callback dengan Parameter

```javascript
function prosesData(data, callback) {
  console.log("Memproses data:", data);
  const hasil = data.toUpperCase();
  callback(hasil);
}

function tampilkanHasil(hasil) {
  console.log("Hasil:", hasil);
}

prosesData("hello world", tampilkanHasil);
// Output:
// Memproses data: hello world
// Hasil: HELLO WORLD
```

### Callback Hell (Hindari!)

```javascript
// ❌ JANGAN seperti ini!
setTimeout(() => {
  console.log("Langkah 1");
  setTimeout(() => {
    console.log("Langkah 2");
    setTimeout(() => {
      console.log("Langkah 3");
      // Masih bisa nambah lagi...
    }, 1000);
  }, 1000);
}, 1000);
```

### Tips Praktis:

- Callback selalu parameter terakhir
- Error handling di callback: `callback(null, result)` atau `callback(error)`
- Untuk menghindari callback hell, pakai Promise
- Callback membuat code susah dibaca kalau nested terlalu dalam

---

## 10. Guard Clause: Penjaga Pintu

**Bayangkan seperti PENJAGA SECURITY di Mall:**

- Cek apakah bawa tiket masuk
- Kalau tidak ada tiket, langsung tolak
- Tidak perlu cek yang lain lagi

### Tanpa Guard Clause

```javascript
function prosesUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.role === "admin") {
        console.log("User adalah admin aktif");
        return;
      }
      console.log("User aktif tapi bukan admin");
      return;
    }
    console.log("User tidak aktif");
    return;
  }
  console.log("User tidak ditemukan");
}
```

### Dengan Guard Clause (Lebih Bersih)

```javascript
function prosesUser(user) {
  // Guard clause: cegah masuk kalau tidak memenuhi syarat
  if (!user) {
    console.log("User tidak ditemukan");
    return;
  }

  if (!user.isActive) {
    console.log("User tidak aktif");
    return;
  }

  if (user.role === "admin") {
    console.log("User adalah admin aktif");
    return;
  }

  console.log("User aktif tapi bukan admin");
}
```

### Guard Clause di Loop

```javascript
function cariAngka(array, target) {
  for (let item of array) {
    // Lewati kalau tidak sesuai
    if (item !== target) continue;

    // Lewati kalau stok habis
    if (item.stok <= 0) continue;

    // Kalau sesuai dan stok ada, return
    return item;
  }

  return null; // Tidak ketemu
}
```

### Tips Praktis:

- Guard clause membuat code lebih readable
- Early return mencegah nested if terlalu dalam
- Cocok untuk validasi input
- Error handling juga bisa pakai guard clause

---

## 11. Hoisting: Elevator Variabel

**Bayangkan seperti ELEVATOR di Hotel:**

- Tekan tombol, elevator turun dari atas
- Variabel/function diangkat ke atas scope
- Bisa dipakai sebelum dideklarasikan

### Variable Hoisting

```javascript
console.log(a); // undefined (bukan error!)
var a = 5;

// JavaScript mengubah jadi:
var a; // Dideklarasikan di atas
console.log(a); // undefined
a = 5; // Di-assign nilai
console.log(a); // 5
```

### Function Declaration Hoisting

```javascript
sapa(); // Bisa dipanggil sebelum dideklarasikan!

function sapa() {
  console.log("Halo!");
}
```

### Let/Const Tidak Hoisting

```javascript
// console.log(b); // Error: Cannot access before initialization
let b = 10;

// console.log(c); // Error: Cannot access before initialization
const c = 20;
```

### Function Expression Tidak Hoisting

```javascript
// sapa2(); // Error: sapa2 is not a function
var sapa2 = function () {
  console.log("Halo dari expression!");
};
```

### Temporal Dead Zone (TDZ)

```javascript
// Area antara scope mulai sampai deklarasi let/const
// disebut Temporal Dead Zone - tidak bisa akses variabel

console.log(a); // undefined (var hoisting)
var a = 1;

// console.log(b); // Error! Masih di TDZ
let b = 2;
console.log(b); // OK, sudah keluar TDZ
```

### Tips Praktis:

- Selalu deklarasikan variabel di atas
- Gunakan `let/const` untuk menghindari hoisting yang membingungkan
- Function declaration boleh dipanggil sebelum deklarasi
- Function expression harus dideklarasikan dulu baru dipakai

---

## 12. Array & Object: Kotak & Lemari Data

**Array seperti LEMARI BUKU:**

- Buku-buku tersusun rapi
- Setiap buku punya nomor rak
- Bisa tambah/kurang buku

**Object seperti KOTAK ALAT:**

- Berisi berbagai alat
- Setiap alat punya label nama
- Bisa cari alat berdasarkan nama

### Array Methods

```javascript
let buah = ["apel", "jeruk", "mangga"];

// Menambah elemen
buah.push("grape"); // ["apel", "jeruk", "mangga", "grape"]
buah.unshift("anggur"); // ["anggur", "apel", "jeruk", "mangga", "grape"]

// Menghapus elemen
buah.pop(); // Hapus "grape"
buah.shift(); // Hapus "anggur"

// Mengubah elemen
buah[1] = "melon"; // ["apel", "melon", "mangga"]

// Info array
console.log(buah.length); // 3
console.log(buah.indexOf("apel")); // 0
console.log(buah.includes("jeruk")); // false
console.log(buah.join(" - ")); // "apel - melon - mangga"
```

### Array Iteration

```javascript
let angka = [1, 2, 3, 4, 5];

// forEach: Jalankan function untuk setiap elemen
angka.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// map: Buat array baru dari hasil transform
let doubled = angka.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: Saring elemen yang memenuhi kondisi
let genap = angka.filter((num) => num % 2 === 0);
console.log(genap); // [2, 4]

// reduce: Gabung semua elemen jadi satu nilai
let total = angka.reduce((sum, num) => sum + num, 0);
console.log(total); // 15
```

### Object Manipulation

```javascript
let mahasiswa = {
  nama: "John",
  umur: 20,
  jurusan: "Informatika",
  alamat: {
    kota: "Jakarta",
    negara: "Indonesia",
  },
};

// Mengakses property
console.log(mahasiswa.nama); // John
console.log(mahasiswa["umur"]); // 20
console.log(mahasiswa.alamat.kota); // Jakarta

// Menambah property
mahasiswa.nilai = 85;
mahasiswa.hobby = ["coding", "gaming"];

// Mengubah property
mahasiswa.umur = 21;

// Menghapus property
delete mahasiswa.alamat;

// Method object
console.log(Object.keys(mahasiswa)); // ["nama", "umur", "jurusan", "nilai", "hobby"]
console.log(Object.values(mahasiswa)); // ["John", 21, "Informatika", 85, ["coding", "gaming"]]
console.log(Object.entries(mahasiswa)); // [ ["nama", "John"], ["umur", 21], ... ]
```

### Array of Objects

```javascript
let produk = [
  { id: 1, nama: "Laptop", harga: 10000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 150000, stok: 20 },
  { id: 3, nama: "Keyboard", harga: 300000, stok: 0 },
];

// Filter produk yang stok > 0
let tersedia = produk.filter((p) => p.stok > 0);
console.log(tersedia);

// Cari produk berdasarkan nama
let cariMouse = produk.find((p) => p.nama === "Mouse");
console.log(cariMouse);

// Hitung total nilai inventory
let totalNilai = produk.reduce((total, p) => total + p.harga * p.stok, 0);
console.log("Total inventory: Rp", totalNilai);
```

### Tips Praktis:

- Array untuk data terurut, Object untuk data bernama
- `push/pop` untuk akhir array, `shift/unshift` untuk awal
- `forEach` untuk efek samping, `map` untuk transform
- `filter` untuk memilih, `find` untuk mencari satu
- Object property bisa nested (object dalam object)

---

## 13. DOM: Mengontrol Halaman Web

**Bayangkan DOM seperti POHON KELUARGA:**

- Document = Kakek
- HTML = Ayah
- Body = Anak
- Div, p, button = Cucu

### Mengakses Elemen DOM

```javascript
// ID: Hanya satu elemen
const tombolUtama = document.getElementById("tombol-utama");

// Class: Banyak elemen
const tombolKecil = document.getElementsByClassName("btn-kecil");

// Tag: Semua elemen dengan tag tertentu
const semuaParagraf = document.getElementsByTagName("p");

// Query selector: CSS selector
const tombolMerah = document.querySelector(".btn.merah");
const semuaTombol = document.querySelectorAll("button");
```

### Manipulasi DOM

```javascript
// Membuat elemen baru
const divBaru = document.createElement("div");
divBaru.textContent = "Halo, saya div baru!";
divBaru.className = "kotak-biru";

// Menambah ke halaman
document.body.appendChild(divBaru);

// Mengubah style
divBaru.style.backgroundColor = "lightblue";
divBaru.style.padding = "20px";
divBaru.style.borderRadius = "5px";

// Mengubah attribute
divBaru.setAttribute("id", "div-spesial");

// Menghapus elemen
// divBaru.remove();
```

### Traversing DOM

```javascript
const list = document.querySelector("#daftar-belanja");

// Navigasi ke atas
console.log(list.parentElement); // Elemen parent

// Navigasi ke samping
console.log(list.nextElementSibling); // Saudara kandung berikutnya
console.log(list.previousElementSibling); // Saudara kandung sebelumnya

// Navigasi ke bawah
console.log(list.children); // Semua anak
console.log(list.firstElementChild); // Anak pertama
console.log(list.lastElementChild); // Anak terakhir
```

### Tips Praktis:

- `getElementById` paling cepat
- `querySelector` bisa pakai CSS selector lengkap
- `appendChild` tambah di akhir, `prepend` di awal
- `innerHTML` untuk ubah isi HTML, `textContent` untuk teks saja
- Selalu cek apakah elemen ada sebelum manipulasi

---

## 14. Event Handling: Menanggapi Interaksi

**Bayangkan seperti TELEPON RUMAH:**

- Telepon berdering (event terjadi)
- Kamu angkat (event handler)
- Kamu respon (handle event)

### Event Listener

```javascript
const tombol = document.getElementById("tombol-saya");

// Menambah event listener
tombol.addEventListener("click", function () {
  console.log("Tombol diklik!");
  tombol.textContent = "Sudah diklik!";
});

// Event listener dengan arrow function
tombol.addEventListener("click", () => {
  alert("Halo!");
});

// Menghapus event listener
function handlerKlik() {
  console.log("Handler dipanggil");
}

tombol.addEventListener("click", handlerKlik);
// tombol.removeEventListener("click", handlerKlik);
```

### Event Object

```javascript
tombol.addEventListener("click", function (event) {
  console.log("Event type:", event.type); // "click"
  console.log("Target element:", event.target); // Elemen yang diklik
  console.log("Mouse position:", event.clientX, event.clientY);

  // Mencegah default behavior
  event.preventDefault();
});
```

### Keyboard Events

```javascript
document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);

  if (event.key === "Enter") {
    console.log("Enter pressed - kirim form!");
  }

  if (event.key === "Escape") {
    console.log("Escape pressed - tutup modal!");
  }
});

// Input events
const inputNama = document.getElementById("nama");
inputNama.addEventListener("input", function (event) {
  console.log("Input berubah:", event.target.value);
});
```

### Form Events

```javascript
const form = document.getElementById("form-kontak");
const inputEmail = document.getElementById("email");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman

  console.log("Form dikirim dengan email:", inputEmail.value);

  // Validasi
  if (!inputEmail.value.includes("@")) {
    alert("Email tidak valid!");
    return;
  }

  alert("Form berhasil dikirim!");
});

inputEmail.addEventListener("focus", function () {
  console.log("Input email mendapat focus");
});

inputEmail.addEventListener("blur", function () {
  console.log("Input email kehilangan focus");
});
```

### Mouse Events

```javascript
const kotak = document.getElementById("kotak-saya");

kotak.addEventListener("mouseenter", function () {
  kotak.style.backgroundColor = "lightblue";
});

kotak.addEventListener("mouseleave", function () {
  kotak.style.backgroundColor = "white";
});

kotak.addEventListener("mousedown", function () {
  console.log("Mouse button pressed");
});

kotak.addEventListener("mouseup", function () {
  console.log("Mouse button released");
});

kotak.addEventListener("dblclick", function () {
  console.log("Double click!");
});
```

### Event Delegation

```javascript
// Alih-alih kasih event listener ke setiap tombol
const containerTombol = document.getElementById("container-tombol");

containerTombol.addEventListener("click", function (event) {
  // Cek apakah yang diklik adalah tombol
  if (event.target.classList.contains("tombol-aksi")) {
    console.log("Tombol diklik:", event.target.textContent);
  }
});
```

### Tips Praktis:

- `addEventListener` lebih baik dari `onclick` langsung
- Event object berisi info detail tentang event
- `preventDefault()` untuk cegah behavior default
- Event delegation hemat memory untuk banyak elemen
- Bubbling: event naik dari anak ke parent

---

## 15. Error Handling: Menangani Kesalahan

**Bayangkan seperti ASURANSI KENDARAAN:**

- Mobil nabrak (error terjadi)
- Asuransi tanggung (error handler)
- Kamu tetap bisa lanjut (recovery)

### Try-Catch Statement

```javascript
try {
  // Kode yang mungkin error
  let result = 10 / 0;
  console.log("Result:", result); // Infinity (bukan error)

  // Ini akan error
  // let data = JSON.parse("{invalid json}");
} catch (error) {
  // Tangkap error di sini
  console.error("Terjadi error:", error.message);
  console.error("Error name:", error.name);
  console.error("Stack trace:", error.stack);
} finally {
  // Selalu dijalankan, error atau tidak
  console.log("Block finally selalu dijalankan");
}
```

### Custom Error

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validasiUmur(umur) {
  if (umur < 0) {
    throw new ValidationError("Umur tidak boleh negatif");
  }
  if (umur > 150) {
    throw new ValidationError("Umur terlalu tinggi");
  }
  return "Umur valid";
}

try {
  validasiUmur(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Error validasi:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

### Error Types

```javascript
// ReferenceError: Variabel tidak ada
try {
  console.log(variabelTakAda);
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// TypeError: Operasi tidak valid untuk tipe data
try {
  null.tambahMethod();
} catch (error) {
  console.log("TypeError:", error.message);
}

// SyntaxError: Syntax tidak valid (biasanya saat parsing)
try {
  eval("syntax { yang } salah {{{");
} catch (error) {
  console.log("SyntaxError:", error.message);
}

// RangeError: Nilai di luar range
try {
  let arr = new Array(-1);
} catch (error) {
  console.log("RangeError:", error.message);
}
```

### Tips Praktis:

- Selalu ada `catch` untuk `try`
- `finally` selalu dijalankan
- Custom error untuk error spesifik aplikasi
- Error handling async pakai `catch` di Promise
- Jangan gunakan try-catch untuk control flow biasa

---

## 16. Looping: Pengulangan Tugas

**Bayangkan seperti MESIN CUCI:**

- Masukkan pakaian kotor
- Putar beberapa kali
- Keluar pakaian bersih

### For Loop

```javascript
// For loop basic
for (let i = 0; i < 5; i++) {
  console.log(`Putaran ke-${i + 1}`);
}

// For loop dengan array
let buah = ["apel", "jeruk", "mangga"];
for (let i = 0; i < buah.length; i++) {
  console.log(`${i + 1}. ${buah[i]}`);
}
```

### While Loop

```javascript
let counter = 1;

while (counter <= 5) {
  console.log(`Counter: ${counter}`);
  counter++; // Jangan lupa increment!
}

// Do-while: minimal 1x eksekusi
let j = 0;
do {
  console.log(`Do-while: ${j}`);
  j++;
} while (j < 3);
```

### For...of Loop (ES6+)

```javascript
let angka = [1, 2, 3, 4, 5];

// Loop untuk array
for (let num of angka) {
  console.log(num * 2);
}

// Loop untuk string
let nama = "JavaScript";
for (let huruf of nama) {
  console.log(huruf);
}
```

### For...in Loop

```javascript
let orang = {
  nama: "John",
  umur: 25,
  kota: "Jakarta",
};

// Loop untuk object properties
for (let key in orang) {
  console.log(`${key}: ${orang[key]}`);
}
```

### Array Methods untuk Looping

```javascript
let angka = [1, 2, 3, 4, 5];

// forEach
angka.forEach(function (num, index) {
  console.log(`Index ${index}: ${num}`);
});

// map
let doubled = angka.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
let evenNumbers = angka.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce
let sum = angka.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

### Break dan Continue

```javascript
// Break: Hentikan loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Berhenti di angka 5!");
    break; // Loop berhenti
  }
  console.log(i);
}

// Continue: Lewati iterasi
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Lewati angka genap
  }
  console.log(i); // Hanya ganjil yang ditampilkan
}
```

### Tips Praktis:

- `for` untuk jumlah iterasi diketahui
- `while` untuk kondisi tertentu
- `for...of` untuk array/string
- `for...in` untuk object properties
- `break` keluar loop, `continue` lewati iterasi

---

## 17. Promise: Janji Asinkron

**Bayangkan seperti PESAN MAKANAN ONLINE:**

- Kamu pesan (buat Promise)
- Restoran masak (pending)
- Makanan sampai (resolved)
- Atau gagal kirim (rejected)

### Membuat Promise

```javascript
function pesanMakanan() {
  return new Promise((resolve, reject) => {
    console.log("Memasak makanan...");

    setTimeout(() => {
      const berhasil = Math.random() > 0.3; // 70% berhasil

      if (berhasil) {
        resolve("Nasi goreng spesial siap!");
      } else {
        reject(new Error("Maaf, bahan habis"));
      }
    }, 3000);
  });
}
```

### Menggunakan Promise

```javascript
pesanMakanan()
  .then((makanan) => {
    console.log("✅ Sukses:", makanan);
    return "Makanan sudah dimakan";
  })
  .then((hasil) => {
    console.log("🍽️", hasil);
  })
  .catch((error) => {
    console.log("❌ Error:", error.message);
  })
  .finally(() => {
    console.log("🏁 Proses pesan makanan selesai");
  });
```

### Promise.all

```javascript
const pesanan1 = pesanMakanan();
const pesanan2 = new Promise((resolve) =>
  setTimeout(() => resolve("Es teh manis"), 1000)
);
const pesanan3 = new Promise((resolve) =>
  setTimeout(() => resolve("Kerupuk"), 500)
);

Promise.all([pesanan1, pesanan2, pesanan3])
  .then((hasil) => {
    console.log("Semua pesanan siap:", hasil);
  })
  .catch((error) => {
    console.log("Ada pesanan yang gagal:", error.message);
  });
```

### Promise.race

```javascript
Promise.race([pesanan1, pesanan2, pesanan3])
  .then((pemenang) => {
    console.log("Pesanan pertama siap:", pemenang);
  })
  .catch((error) => {
    console.log("Pesanan pertama gagal:", error.message);
  });
```

### Async/Await dengan Promise

```javascript
async function prosesPesanan() {
  try {
    console.log("Memulai pesan...");
    const makanan = await pesanMakanan();
    console.log("Makanan datang:", makanan);

    // Proses tambahan
    const minuman = await pesanMinuman();
    console.log("Minuman datang:", minuman);
  } catch (error) {
    console.log("Pesanan gagal:", error.message);
  }
}

function pesanMinuman() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Jus jeruk"), 1000);
  });
}

prosesPesanan();
```

### Chaining Promises

```javascript
function ambilUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "John" });
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

function ambilPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post pertama", userId: user.id },
        { id: 2, title: "Post kedua", userId: user.id },
      ]);
    }, 1000);
  });
}

ambilUser(1)
  .then((user) => {
    console.log("User:", user);
    return ambilPosts(user);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```

### Tips Praktis:

- Promise states: pending → fulfilled/rejected
- `.then()` untuk success, `.catch()` untuk error
- `.finally()` selalu dijalankan
- `Promise.all()` tunggu semua selesai
- `Promise.race()` ambil yang pertama selesai
- `async/await` membuat async code seperti sync

---

## 🎯 Tips Belajar JavaScript untuk Pemula

### 1. **Praktik Setiap Hari**

- Buat proyek kecil setiap hari
- Jangan cuma baca, harus **ketik ulang** kodenya
- Debug error sendiri dulu baru tanya

### 2. **Pahami Konsep Dasar Dulu**

- Variabel, tipe data, operator
- Function dan scope
- Array dan object manipulation

### 3. **Pelajari Error Handling**

- Baca error message dengan teliti
- Gunakan console.log untuk debugging
- Pahami stack trace

### 4. **Belajar Asynchronous Programming**

- Callback → Promise → Async/await
- Pahami event loop
- Praktik dengan API calls

### 5. **Proyek- proyek untuk Latihan**

- Calculator sederhana
- Todo list app
- Weather app (pakai API)
- Simple game (tic-tac-toe)

### 6. **Sumber Belajar Tambahan**

- MDN Web Docs (dokumentasi resmi)
- freeCodeCamp
- JavaScript.info
- YouTube channels: Traversy Media, Academind

### 7. **Mindset yang Benar**

- **Error itu guru** - jangan takut salah
- **Consistency beats intensity** - belajar sedikit tapi rutin
- **Build projects** - bukan cuma ikutin tutorial
- **Join community** - tanya, diskusi, bantu orang lain

---

## Kesimpulan

Selamat! Kamu sudah selesai belajar JavaScript dari dasar hingga advanced. Ingat:

**JavaScript itu seperti bahasa Inggris programming:**

- Dasar: Vocabulary (variabel, tipe data, operator)
- Menengah: Grammar (function, object, array)
- Advanced: Literature (async, DOM, error handling)

**Langkah selanjutnya:**

1. **Praktik** - buat proyek-proyek kecil
2. **Explore** - coba framework seperti React/Vue
3. **Build** - buat aplikasi web lengkap
4. **Share** - ajari orang lain yang baru belajar

**Jangan lupa:** Programming itu marathon, bukan sprint. Tetap konsisten, tetap semangat! 🚀

---

_Panduan ini dibuat khusus untuk pemula. Jika ada yang kurang jelas, silakan tanyakan!_
