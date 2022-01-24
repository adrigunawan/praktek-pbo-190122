// SOAL 1
console.log("============ Soal 1 ==========");

for (let i = 0; i < 5; i++) {
  console.log("*");
}

console.log("===============================");
console.log ("\n");

// SOAL 2
console.log("============ Soal 2 ==========");
let num = 6 ;
let input = "";
for (let i = 1; i <= num; i++) {
  for (let j = num; j > i; j--) {
    input += " ";
  };
  for (let k = 0; k < i * 2 - 1 ; k += 2) {
      if (k === 0 || k === num - 1) {
          input += "x"
      } else {
          input += "ox"
      };
  };

  input += "\n";
}
console.log(input);
console.log ("==============================");
console.log("\n")
// SOAL 3
console.log("============ Soal 3 ===========");
function balikKata(str) {
    let words = [];
    words = str.split("\s+");
    let result = "";
    for (var i = 0; i < words.length; i++) {
        return result += words[i].split('').reverse().join('');
    }
}
console.log(balikKata("Javascript"))
console.log("===============================");