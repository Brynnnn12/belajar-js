/**
 * JAVASCRIPT ARRAY METHODS - KODE LENGKAP
 * ======================================
 * File ini berisi contoh lengkap penggunaan array dan method-methodnya di JavaScript
 */

// ================ BAGIAN 1: ARRAY DASAR ================
// Deklarasi array dasar
const nama = ["dika", "andi", "budi", "caca"];
console.log("Array dasar:", nama);

// ================ BAGIAN 2: MODIFIKASI ARRAY ================
// Method untuk menambah/menghapus elemen

// 2.1. push(): menambahkan elemen di AKHIR array
nama.push("deni");
console.log("Setelah push():", nama); // ["dika", "andi", "budi", "caca", "deni"]

// 2.2. pop(): menghapus elemen di AKHIR array
const itemDihapus = nama.pop();
console.log("Item yang dihapus dengan pop():", itemDihapus); // "deni"
console.log("Setelah pop():", nama); // ["dika", "andi", "budi", "caca"]

// 2.3. unshift(): menambahkan elemen di AWAL array
nama.unshift("awal");
console.log("Setelah unshift():", nama); // ["awal", "dika", "andi", "budi", "caca"]

// 2.4. shift(): menghapus elemen di AWAL array
const itemAwalDihapus = nama.shift();
console.log("Item yang dihapus dengan shift():", itemAwalDihapus); // "awal"
console.log("Setelah shift():", nama); // ["dika", "andi", "budi", "caca"]

// ================ BAGIAN 3: OPERASI ARRAY ================
// Method untuk operasi pada array

// 3.1. concat(): menggabungkan 2 array
const nama2 = [6, 7, 8];
const gabungan = nama.concat(nama2);
console.log("Hasil concat():", gabungan); // ["dika", "andi", "budi", "caca", 6, 7, 8]

// 3.2. includes(): memeriksa keberadaan nilai dalam array
const adaDika = nama.includes("dika");
console.log("includes('dika'):", adaDika); // true
const adaRudi = nama.includes("rudi");
console.log("includes('rudi'):", adaRudi); // false

// 3.3. sort(): mengurutkan array (perhatikan: mengubah array asli)
// Untuk membuat copy, gunakan [...nama] atau nama.slice()
const namaAsli = [...nama]; // Menyimpan copy agar nama asli tidak berubah
const urutan = [...nama].sort();
console.log("Hasil sort():", urutan); // ["andi", "budi", "caca", "dika"]
console.log("Array asli tetap:", namaAsli); // ["dika", "andi", "budi", "caca"]

// 3.4. length: mendapatkan jumlah elemen
const jumlah = nama.length;
console.log("Jumlah elemen (length):", jumlah); // 4

// ================ BAGIAN 4: ARRAY OF OBJECTS ================
// Array dengan elemen berupa object

// 4.1. Deklarasi array of objects
const murid = [
  { id: 1, nama: "dika", ipk: 3.5 },
  { id: 2, nama: "andi", ipk: 3.0 },
  { id: 3, nama: "budi", ipk: 2.0 },
  { id: 4, nama: "caca", ipk: 2.8 },
];
console.log("Array of objects:", murid);

// 4.2. Loop dengan for...of (cara modern)
console.log("\n--- Looping dengan for...of ---");
for (const siswa of murid) {
  const status = siswa.ipk >= 3.0 ? "Lulus" : "Tidak Lulus";
  console.log(`${siswa.id}. ${siswa.nama}, IPK = ${siswa.ipk}, ${status}`);
}

// 4.3. Alternative - loop dengan forEach
console.log("\n--- Looping dengan forEach ---");
murid.forEach((siswa) => {
  const status = siswa.ipk >= 3.0 ? "Lulus" : "Tidak Lulus";
  console.log(`${siswa.id}. ${siswa.nama}, IPK = ${siswa.ipk}, ${status}`);
});

// 4.4. Filter untuk mendapatkan siswa yang lulus saja
const lulus = murid.filter((siswa) => siswa.ipk >= 3.0);
console.log("\nSiswa yang lulus:", lulus);

// ================ BAGIAN 5: CONTOH PENGGUNAAN DALAM KASUS NYATA ================
const movie = [
  { title: "Avengers", year: 2012 },
  { title: "Avengers: Age of Ultron", year: 2015 },
  { title: "Avengers: Infinity War", year: 2018 },
  { title: "Avengers: Endgame", year: 2019 },
];

// 5.1. some(): Memeriksa apakah minimal satu elemen memenuhi kondisi
// Cocok untuk array of objects dimana includes() tidak dapat digunakan
const adaAvengers = movie.some((film) => film.title === "Avengers");
console.log("\nApakah ada film 'Avengers'?", adaAvengers); // true

// 5.2. filter(): Mendapatkan film yang dirilis setelah 2015
const filmBaru = movie.filter((film) => film.year > 2015);
console.log("\nFilm yang dirilis setelah 2015:", filmBaru);

// 5.3. map(): Membuat array baru dengan format berbeda
const judulFilm = movie.map((film) => film.title);
console.log("\nDaftar judul film saja:", judulFilm);

// 5.4. find(): Mencari satu elemen yang memenuhi kondisi
const filmTahun2018 = movie.find((film) => film.year === 2018);
console.log("\nFilm yang dirilis tahun 2018:", filmTahun2018);

// 5.5. every(): Memeriksa apakah semua elemen memenuhi kondisi
const semuaFilmBaru = movie.every((film) => film.year > 2010);
console.log("\nApakah semua film dirilis setelah 2010?", semuaFilmBaru);

// ================ BAGIAN 6: METHOD ARRAY LAINNYA ================
// 6.1. reverse(): Membalik urutan array
const terbalik = [...nama].reverse();
console.log("\nArray terbalik:", terbalik);

// 6.2. join(): Menggabungkan elemen array menjadi string
const namaString = nama.join(", ");
console.log("\nArray digabung jadi string:", namaString);

// 6.3. slice(): Mengambil sebagian array
const duaNamaPertama = nama.slice(0, 2);
console.log("\nDua nama pertama:", duaNamaPertama);

// 6.4. indexOf(): Mencari indeks elemen
const indexBudi = nama.indexOf("budi");
console.log("\nIndeks 'budi':", indexBudi);
