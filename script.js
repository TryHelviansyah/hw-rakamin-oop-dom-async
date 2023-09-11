$(document).ready(function () {
  // Data pendaftar disimpan dalam array
  const pendaftar = [];

  // Handle submit form
  $("#registrationForm").submit(function (event) {
    event.preventDefault();
    const nama = $("#nama").val();
    const umur = parseInt($("#umur").val());
    const uang = parseInt($("#uang").val());

    // Validasi data
    if (nama.length < 10 || umur < 25 || uang < 100000 || uang > 1000000) {
      alert("Data tidak valid. Mohon periksa kembali.");
      return;
    }

    // Simpan data ke array
    pendaftar.push({ nama, umur, uang });

    // Reset form
    $("#nama").val("");
    $("#umur").val("");
    $("#uang").val("");

    // Update tabel dan rata-rata
    updateTable();
    updateRataRata();
  });

  // Fungsi untuk mengupdate tabel pendaftar
  function updateTable() {
    const tableBody = $("#pendaftarTableBody");
    tableBody.empty();

    pendaftar.forEach((data) => {
      tableBody.append(
        `<tr><td>${data.nama}</td><td>${data.umur}</td><td>${data.uang}</td></tr>`
      );
    });
  }

  // Fungsi untuk menghitung dan menampilkan rata-rata
  function updateRataRata() {
    const totalUangSangu = pendaftar.reduce((sum, data) => sum + data.uang, 0);
    const totalUmur = pendaftar.reduce((sum, data) => sum + data.umur, 0);

    const rataUangSangu = (totalUangSangu / pendaftar.length).toFixed(2);
    const rataUmur = (totalUmur / pendaftar.length).toFixed(2);

    $("#rataUangSangu").text(rataUangSangu);
    $("#rataUmur").text(rataUmur);
  }
});
