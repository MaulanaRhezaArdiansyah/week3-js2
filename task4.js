// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array).
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

// Contoh:
// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// Output: [8, 14, 17]

// SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// Output: “Nilai akhir harus lebih besar dari nilai awal”

// SeleksiNilai(4, 17 , [2, 25, 4])
// Output: “Jumlah angka dalam dataArray harus lebih dari 5”

// SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
// Output: “Nilai tidak ditemukan”

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  let resultValid = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray.length < 5) {
      return "Jumlah angka dalam dataArray harus lebih dari 5!";
    } else if (nilaiAwal >= nilaiAkhir) {
      return "Nilai akhir harus lebih besar dari nilai awal!";
    } else if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
      resultValid.push(dataArray[i]);
      resultValid.sort();
    } else if (dataArray.length == 0 || resultValid.length == 0) {
      resultValid = "Nilai tidak ditemukan!";
    }
  }
  return resultValid;
};

console.log(seleksiNilai(10, 30, [25, 21, 15, 16, 12, 26]));
console.log(seleksiNilai(10, 10, [2, 6, 3, 21, 25, 20]));
console.log(seleksiNilai(10, 20, [2, 6, 3, 21]));
console.log(seleksiNilai(10, 20, [2, 6, 3, 21, 40, 35]));
