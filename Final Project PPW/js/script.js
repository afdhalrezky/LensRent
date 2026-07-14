// ===========================
// LensRent JavaScript
// ===========================

// ===========================
// Scroll To Top
// ===========================

const dataKamera = [
  { id: 1, nama: "Sony A7 III", harga: 250000, gambar: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=800&auto=format&fit=crop" },
  { id: 2, nama: "Canon EOS R50", harga: 200000, gambar: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800&auto=format&fit=crop" },
  { id: 3, nama: "Nikon D750", harga: 220000, gambar: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=800&auto=format&fit=crop" },
  { id: 4, nama: "GoPro Hero 12", harga: 150000, gambar: "https://images.unsplash.com/photo-1615987130805-d0c61fb2274e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, nama: "Fujifilm X-T4", harga: 230000, gambar: "https://images.unsplash.com/photo-1642424981563-8a1767dfb562?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, nama: "Canon 5D Mark IV", harga: 300000, gambar: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=800&auto=format&fit=crop" },
  { id: 7, nama: "DJI Mavic 3", harga: 450000, gambar: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=800&auto=format&fit=crop" },
  { id: 8, nama: "Sony A6400", harga: 180000, gambar: "https://images.unsplash.com/photo-1606986628470-26a67fa4730c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, nama: "Panasonic Lumix GH6", harga: 240000, gambar: "https://images.unsplash.com/photo-1591374921319-0049a291e4b9?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, nama: "Nikon D850", harga: 280000, gambar: "https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 11, nama: "DJI Osmo Action 4", harga: 140000, gambar: "https://images.unsplash.com/photo-1603224403383-c20b94b376af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, nama: "DJI Mini 4 Pro", harga: 350000, gambar: "https://images.unsplash.com/photo-1679605531494-dc90824d8d43?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (topBtn) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}

// ===========================
// Dark Mode
// ===========================

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// ===========================
// Search Kamera
// ===========================

const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();

    let cards = document.querySelectorAll(".kamera-card");

    cards.forEach(function (card) {
      let nama = card.innerText.toLowerCase();

      if (nama.indexOf(keyword) > -1) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ===========================
// Filter Kamera
// ===========================

function filterKategori(kategori) {
  const kamera = document.querySelectorAll(".kamera-card");

  kamera.forEach(function (item) {
    if (kategori == "all") {
      item.style.display = "block";
    } else {
      if (item.dataset.kategori == kategori) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}

// ===========================
// Kalkulator Sewa
// ===========================

function hitungTotal() {
  const harga = document.getElementById("harga");
  const hari = document.getElementById("hari");
  const total = document.getElementById("total");

  if (!harga || !hari || !total) return;

  const hargaPerHari = Number(harga.value);
  const jumlahHari = Number(hari.value);

  if (jumlahHari < 1) {
    total.value = "Rp 0";
    return;
  }

  const hasil = hargaPerHari * jumlahHari;

  total.value = "Rp " + hasil.toLocaleString("id-ID");
}
// ===========================
// Validasi Form
// ===========================

function kirimForm() {
  let nama = document.getElementById("nama");

  let email = document.getElementById("email");

  let pesan = document.getElementById("pesan");

  if (nama.value == "") {
    alert("Nama harus diisi");

    nama.focus();

    return false;
  }

  if (email.value == "") {
    alert("Email harus diisi");

    email.focus();

    return false;
  }

  if (pesan.value == "") {
    alert("Pesan harus diisi");

    pesan.focus();

    return false;
  }

  alert("Pesan berhasil dikirim.");

  return true;
}

// ===========================
// Booking
// ===========================

function booking() {
  alert("Booking berhasil! Silakan datang ke toko sesuai jadwal.");
}

// ===========================
// Navbar Scroll
// ===========================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("shadow");
    }
  }
});

// ===========================
// Simpan Data Kamera
// ===========================

function sewaKamera(nama, harga, gambar) {

    const kamera = {
        nama: nama,
        harga: harga,
        gambar: gambar
    };

    localStorage.setItem("kamera", JSON.stringify(kamera));

    window.location.href = "checkout.html";

}
