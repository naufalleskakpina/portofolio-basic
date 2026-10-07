console.log("script.js berhasil terhubung ke index.html!");

// 1. Ambil elemen-elemen yang dibutuhkan dari HTML
const btntips = document.getElementById("Tampilkan-tips");
btntips.addEventListener("click", function () {
  pesan.textContent = "🐽 blaaaa";
  pesan.style.color = "#d15a10";
  });