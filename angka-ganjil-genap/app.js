console.log("========= Soal 1 ==========");

for (let i = 1; i <= 100; i+= 3) {
    if (i % 2 === 0) {
        console.log(i + "- genap")
    }
    if (i % 2 !== 0) {
        console.log(i + "- ganjil")
    }
    
}
console.log("============================");
console.log("\n")
console.log("========= Soal 2 ==========");
for (let i= 50; i <= 200;  i+=7) {
    if (i % 3 == 0) {
        console.log(`${i} = Bisa dibagi 3`);
    }
    
    if (i % 3 != 0) {
        console.log(`${i} = Tidak bisa dibagi 3`);
    }
}
console.log("==========================");
console.log("\n")
console.log("========= Soal 3 ==========");
for (let i = 100; i <= 200; i += 7) {
    if (i % 8 === 0) {
        console.log(i)
    }
}
console.log("============================");

// var kalimat = "Adri is so coll";

// var huruf = kalimat[8];

// console.log(huruf);