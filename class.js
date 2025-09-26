// class hewan {
//   constructor(nama, jenis) {
//     this.nama = nama;
//     this.jenis = jenis;
//   }

//   makan() {
//     console.log(`${this.nama} sedang makan.`);
//   }
// }

// class kucing extends hewan {
//   constructor(nama, jenis, ras) {
//     super(nama, jenis);
//     this.ras = ras;
//   }

//   bersuara() {
//     console.log(`${this.nama} bersuara: Meow!, ras ${this.ras}`);
//   }
// }

// let kucing1 = new kucing("Kitty", "Persia", "Anggora");
// kucing1.makan();
// kucing1.bersuara();
function bagi(a, b) {
  if (b === 0) {
    throw new Error("Pembagi tidak boleh nol");
  }
  return a / b;
}

try {
  let hasil = bagi(10, 2);
  console.log("Hasil pembagian:", hasil);
} catch (error) {
  console.error(error.message);
}
