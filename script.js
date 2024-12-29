// ambil semua elemen yang diperlukan
const editLink = document.querySelector(".edit-link");
const profileForm = document.querySelector(".profile-form");
const overlay = document.querySelector(".overlay");

// fungsi untuk menampilkan form dan overlay
function showForm() {
  profileForm.classList.add("show");
  overlay.classList.add("show");
}

// fungsi untuk menyembunyikan form dan overlay
function hideForm() {
  profileForm.classList.remove("show");
  overlay.classList.remove("show");
}

// event llistener untuk link edit
editLink.addEventListener("click", function (e) {
  e.preventDefault(); //mencegah link melakukan navigasi
  showForm();
});

// event listener untuk overlay (menutup form ketika klik di luar )
overlay.addEventListener("click", hideForm);

// Event listener untuk tombol Ubah
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah form submit
  hideForm();
});

// Event listener untuk tombol Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hideForm();
  }
});
