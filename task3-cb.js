const searchName = (inisial, arrayLength, callback) => {
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
  let nameLower;
  let inisialLower = inisial.toLowerCase();

  for (let i = 0; i < name.length; i++) {
    nameLower = name[i].toLowerCase();
    if (nameLower.includes(inisialLower)) {
      if (arrayNameIncludes.length < arrayLength) {
        arrayNameIncludes.push(name[i]);
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
  return callback(arrayNameIncludes);
};

function result(data) {
  return data;
}

// const result = (data) => {
//   return data;
// };

console.log(searchName("an", 4, result));
