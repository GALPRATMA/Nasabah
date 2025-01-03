// ambil semua elemen yang diperlukan
const editLink = document.querySelector(".edit-link");
const profileForm = document.querySelector(".profile-form");
const cameraIcon = document.querySelector(".camera-icon");
const album = document.querySelector(".album");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

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

// Show album when camera icon is clicked
cameraIcon.addEventListener("click", () => {
  album.style.display = "block";
  overlay.style.display = "block";
});

// Hide album when close button or overlay is clicked
closeBtn.addEventListener("click", closeAlbum);
overlay.addEventListener("click", closeAlbum);

function closeAlbum() {
  album.style.display = "none";
  overlay.style.display = "none";
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

feather.replace();
