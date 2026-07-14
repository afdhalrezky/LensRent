// Mengambil data kamera dari Local Storage
const kamera = JSON.parse(localStorage.getItem("kamera"));

if (kamera) {

    // Menampilkan data kamera
    document.getElementById("namaKamera").innerHTML = kamera.nama;

    document.getElementById("hargaKamera").innerHTML =
        "Rp " + kamera.harga.toLocaleString("id-ID");

    document.getElementById("lamaSewa").innerHTML =
        kamera.hari + " Hari";

    // Menghitung total pembayaran
    const total = kamera.harga * kamera.hari;

    document.getElementById("totalHarga").innerHTML =
        "Rp " + total.toLocaleString("id-ID");

}
