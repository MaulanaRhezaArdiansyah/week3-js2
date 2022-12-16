// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

// 1. push()
// menambah satu element ke dalam array setelah element di index terakhir
// const fruits = [];
// fruits.push("Apple");
// fruits.push("Banana");
// fruits.push("Strawberry");
// console.log(fruits);

// 2. pop()
// menghapus satu element terakhir dari dalam array
// fruits.pop();
// console.log(fruits);

// 3. shift()
// menghapus satu element di index pertama dari array
// fruits.shift();
// console.log(fruits);

// 4. unshift()
// menambah satu element di awal index dari array
// fruits.unshift("Orange");
// console.log(fruits);

// 5. split()
// memisah string menjadi array
const name = "Messi";
const nameSplit = name.split("");
// console.log(nameSplit);

// 6. replace()
// mengganti isi variabel sesuai dengan kriteria
// const newName = name.replace(/s/gi, "c");
// console.log(newName);

// 7. join()
// menggabung array menjadi string
// usahakan di dalam join beri petik dua dst
// let nameJoin = nameSplit.join();
let nameJoin = nameSplit.join("");
// let nameJoin = nameSplit.join(" ");
// console.log(nameJoin);

// 8. toLowerCase()
// merubah string variabel menjadi huruf kecil
// const nameLower = name.toLowerCase();
// console.log(nameLower);

// 9. toUpperCase()
// merubah string variabel menjadi HURUF BESAR
const nameUpper = name.toUpperCase();
console.log(nameUpper);

// 10. length
// menghitung panjang dari sebuah array

const listJodoh = ["Isadora", "Bintang", "Maryam"];
for (let i = 0; i < listJodoh.length; i++) {
  if (listJodoh[i] == "Isadora") {
    console.log("Amazing");
  } else {
    console.log("Wow");
  }
}

// 11. sort()
// contoh penggunaan akan kita lihat di soal nomor 4
// let array = ["Amanda", "Angela", "Abi"];
// array.sort();
// console.log(array);
