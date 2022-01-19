console.log("========== TUGAS PRAKTEK PBO =========");

let siswa = "Bachrudin";
let nilai = 80;
let absen = 10;

if (nilai >= 70 && absen < 5) {
    console.log(`nama:${siswa} nilai: ${nilai} absensi: ${absen} ==== Selamat anda lulus`);
} else {
    console.log(`nama: ${siswa} nilai: ${nilai} absensi: ${absen} ===== Maaf anda tidak lulus`);
}

console.log("=====================================");

/* 
STORE "siswa" with any string
STORE "nilai" any number
STORE "absen" any number
READ "siswa", "nilai", "absen"
  IF nilai > 70 AND absen < 5 
    DISPLAY nama: "siswa" nilai: "nilai" Selamat anda lulus
     else 
     DISPLAY nama: "siswa" nilai: "nilai" Maaf anda tidak lulus
     ENDIF
END
*/