function konversiPanjang() {
    // Mendapatkan input dari pengguna
    var panjang = parseFloat(document.getElementById("inputPanjang").value);
    var satuanAsal = document.getElementById("satuanAsal").value;
    var hasil = "";

    // Validasi input
    if (isNaN(panjang) || panjang < 0) {
        hasil = "Masukkan nilai yang valid (angka lebih besar atau sama dengan 0)!";
    } else {
        // Konversi ke satuan dasar (meter)
        var panjangMeter;
        switch (satuanAsal) {
            case "km":
                panjangMeter = panjang * 1000; // Kilometer ke meter
                break;
            case "m":
                panjangMeter = panjang; // Sudah dalam meter
                break;
            case "cm":
                panjangMeter = panjang / 100; // Sentimeter ke meter
                break;
            case "mm":
                panjangMeter = panjang / 1000; // Milimeter ke meter
                break;
        }

        // Perhitungan konversi
        var konversi = [
            { satuan: "Kilometer", nilai: panjangMeter / 1000 },
            { satuan: "Meter", nilai: panjangMeter },
            { satuan: "Sentimeter", nilai: panjangMeter * 100 },
            { satuan: "Milimeter", nilai: panjangMeter * 1000 }
        ];

        // Menyusun hasil konversi
        hasil = "<h3>Hasil Konversi:</h3>";
        for (var i = 0; i < konversi.length; i++) {
            hasil += `<p>${konversi[i].nilai.toLocaleString()} ${konversi[i].satuan}</p>`;
        }
    }

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML = hasil;
}
