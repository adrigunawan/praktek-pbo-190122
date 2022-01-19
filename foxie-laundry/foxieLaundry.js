let jumlahBaju = 0;
let kpMesin = 20;

for (let i= 1; i >= jumlahBaju; i++) {
    if (jumlahBaju <= kpMesin) {
        jumlahBaju += 1;
        if (kpMesin == jumlahBaju) {

            console.log("Power on !")
            break;
        }
    }
}


/* INPUT "Jumlah baju" dengan angka 0
   INPUT "kapasitas" dengan angka 20 
   CHECK "Jumlah baju"
   REPEAT 
    IF "JB" < "kapasitas"
    JB +1
    iF "JB" = "kapasitas"
    DISPLAY power light on
   */