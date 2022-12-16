// 3.Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:

// Contoh:
// searchName(“an”, 3, callback)

// CARA 2
// kurang sempurna

function callback(inisial, arrayLength) {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
    "Yolanda",
  ];
  let arrayNameIncludes = [];
  let arrayNameNotIncludes = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i].includes(inisial)) {
      arrayNameIncludes.push(name[i]);
    } else if (name[i].includes("An")) {
      arrayNameIncludes.push(name[i]);
    } else if (arrayNameIncludes.length == arrayLength) {
      return arrayNameIncludes;
    } else {
      arrayNameNotIncludes.push(name[i]);
    }
  }
  return arrayNameIncludes;
}

function searchName(inisial, arrayLength) {
  return callback(inisial, arrayLength);
}

console.log(searchName("an", 3, callback));

// CARA 1

// function searchName(inisial, arrayLength) {
//   let arrayNameIncludes = [];
//   let arrayNameNotIncludes = [];
//   for (let i = 0; i < name.length; i++) {
//     if (name[i].includes(inisial)) {
//       arrayNameIncludes.push(name[i]);
//     } else if (name[i].includes("An")) {
//       arrayNameIncludes.push(name[i]);
//     } else if (arrayNameIncludes.length == arrayLength) {
//       return arrayNameIncludes;
//     } else {
//       arrayNameNotIncludes.push(name[i]);
//     }
//   }
//   return arrayNameIncludes;
// }

// console.log(searchName("an", 3));
