const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  let resultValid = [];
  if (dataArray.length < 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5!";
  }
  for (let i = 0; i < dataArray.length; i++) {
    if (nilaiAwal >= nilaiAkhir) {
      return "Nilai akhir harus lebih besar dari nilai awal!";
    } else if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
      resultValid.push(dataArray[i]);
      resultValid.sort((a, b) => a - b);
    } else if (resultValid.length == 0) {
      resultValid = "Nilai tidak ditemukan!";
    }
  }
  return resultValid;
};

console.log(seleksiNilai(10, 30, [25, 21, 15, 16, 12, 26]));
console.log(seleksiNilai(5, 30, [14, 17, 8, 9, 10, 21]));
console.log(seleksiNilai(10, 10, [2, 6, 3, 21, 25, 20]));
console.log(seleksiNilai(10, 20, [2, 6, 3, 21]));
console.log(seleksiNilai(10, 20, [2, 6, 3, 21, 40, 35]));
console.log(seleksiNilai(10, 20, []));
