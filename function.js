/**
 * Function Declaration
 * adalah cara mendeklarasikan fungsi dengan nama
 */
// function hay(nama) {
//   console.log(`hay ${nama}`);
// }
// hay("dika");

/**
 * Function Expression
 * adalah fungsi yang disimpan dalam variabel
 */
// let nama = function (nama) {
//   console.log(`hay ${nama}`);
// };

// nama("dika");

/**
 * Arrow Function
 * adalah sintaksis fungsi yang lebih ringkas
 */
// let nama = (nama) => {
//   console.log(`hay ${nama}`);
// };

// nama("dika");

/**
 * IIFE (Immediately Invoked Function Expression)
 * adalah fungsi yang langsung dieksekusi setelah dideklarasikan
 * ini berguna untuk mengisolasi variabel dan mencegah polusi pada scope global
 */
// (function () {
//   console.log("hay dika");
// })();
// const appConfig = (() => {
//   const apiKey = "123456";
//   const apiUrl = "https://api.example.com";
//   return {
//     getApiKey: () => {
//       return apiKey;
//     },
//     getApiUrl: () => {
//       return apiUrl;
//     },
//   };
// })();

// console.log(appConfig.getApiKey());
// console.log(appConfig.getApiUrl());

/**
 * high order function
 * adalah fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi
 */

// function manipulasiArray(arr, callback) {
//   let hasil = [];
//   for (let i = 0; i < arr.length; i++) {
//     hasil.push(callback(arr[i]));
//   }
//   return hasil;
// }

// function kaliDua(x) {
//   return x * 2;
// }

// let angka = [1, 2, 3, 4, 5];
// let hasil = manipulasiArray(angka, kaliDua);
// console.log(hasil);

/**
 * callback function
 * adalah fungsi yang diteruskan sebagai argumen ke fungsi lain
 */

// function selesaikanTugas(tugas, hasil) {
//   console.log(`Menyelesaikan tugas: ${tugas}`);
//   hasil();
// }

// function tugasSelesai() {
//   console.log("Tugas telah selesai.");
// }

// selesaikanTugas("Membuat laporan", tugasSelesai);

/**
 * recursion
 * adalah fungsi yang memanggil dirinya sendiri
 */
// function hitungFaktorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * hitungFaktorial(n - 1);
// }

// console.log(hitungFaktorial(5));
