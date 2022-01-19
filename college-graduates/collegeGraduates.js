let nama = "Reza";
let nilai = 80;

if (nilai >= 80) {
    console.log(`nama:${nama} nilai:${nilai} nilai anda = A`);
} else if (nilai < 65) {
    console.log(`nama:${nama} nilai:${nilai} nilai anda = B`);
} else if (nilai > 64) {
    console.log(`nama:${nama} nilai:${nilai} nilai anda = C`);
} else if (nilai < 35 ) {
    console.log(`nama:${nama} nilai:${nilai} nilai anda = D`);
} else if (nilai < 0) {
    console.log(`nama:${nama} nilai:${nilai} nilai anda = E`)
} else {
    console.log("Nilai anda invalid");
}

/* INPUT "nama"
   INPUT "nilai" 
    IF nilai >= 80
    ELSE IF < 65
    ELSE IF > 64
    ELSE IF < 35
    ELSE IF < 0
    ELSE "nilai anda invalid
    ENDIF
END*/