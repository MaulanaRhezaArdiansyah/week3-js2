const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  let resultValid = [];
  if (dataArray == 0) {
    return "Jumlah angka dalam dataArray harus lebih dari 5!";
  }
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray.length < 5) {
      return "Jumlah angka dalam dataArray harus lebih dari 5!";
    } else if (nilaiAwal >= nilaiAkhir) {
      return "Nilai akhir harus lebih besar dari nilai awal!";
    } else if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
      resultValid.push(dataArray[i]);
      resultValid.sort();
    } else if (resultValid.length == 0) {
      resultValid = "Nilai tidak ditemukan!";
    }
  }
  return resultValid;
};

console.log(seleksiNilai(10, 30, [25, 21, 15, 16, 12, 26]));
console.log(seleksiNilai(10, 10, [2, 6, 3, 21, 25, 20]));
console.log(seleksiNilai(10, 20, [2, 6, 3, 21]));
console.log(seleksiNilai(10, 20, [2, 6, 3, 21, 40, 35]));
console.log(seleksiNilai(10, 20, []));
