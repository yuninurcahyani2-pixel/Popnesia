# Website Popnesia — panduan pemula

Website ini adalah portal berita Popnesia. File HTML, CSS, dan JavaScript dibuat terpisah agar mudah dipelajari.

## Isi folder
- `index.html` — struktur halaman utama.
- `style.css` — warna, tata letak, dan tampilan responsif.
- `script.js` — menu HP, pencarian, tanggal, dan jendela artikel contoh.
- `images/` — tempat menyimpan logo/foto sendiri jika nanti ingin mengganti gambar online.

## Menjalankan di komputer
1. Ekstrak ZIP ini.
2. Buka Visual Studio Code.
3. Pilih **File → Open Folder...** lalu pilih folder `popnesia`.
4. Buka `index.html`.
5. Cara paling mudah: pasang ekstensi **Live Server** dari tab Extensions VS Code.
6. Setelah terpasang, klik kanan `index.html` lalu pilih **Open with Live Server**.
7. Browser akan terbuka. Simpan perubahan di VS Code lalu refresh browser jika perlu.

Jika tidak ingin memasang ekstensi, klik dua kali `index.html` dari File Explorer untuk membukanya di browser. Beberapa fitur tetap berjalan, tetapi Live Server lebih nyaman untuk belajar.

## Cara mengubah konten
- Logo teks dan slogan: cari `Popnesia` dan `Fakta, Cerita, Indonesia` di `index.html`.
- Judul berita di beranda: edit teks dalam elemen `<h3>` atau `<h1>` pada `index.html`.
- Warna utama: ubah variabel di bagian `:root` dalam `style.css` (`--navy`, `--yellow`, `--red`).
- Foto: ubah alamat pada atribut `src` gambar di `index.html`.
- Isi artikel di jendela saat judul diklik: edit array `articleData` dalam `script.js`.

## Penting sebelum dipublikasikan
1. Konten di website ini adalah contoh tata letak, bukan berita terverifikasi. Ganti dengan hasil peliputan tim.
2. Foto contoh dimuat dari Unsplash melalui internet. Untuk penggunaan akhir, pilih foto yang memiliki izin penggunaan yang sesuai dan simpan sumber/kredit foto.
3. Formulir newsletter hanya contoh front-end dan belum menyimpan email.
4. Tautan sosial, alamat redaksi, serta tanggal artikel perlu disesuaikan.
5. Jangan mencantumkan kutipan, data, atau klaim berita sebelum diverifikasi.

## Publikasi gratis melalui GitHub Pages (ringkas)
1. Buat akun di https://github.com jika belum punya.
2. Buat repository baru, misalnya `popnesia`.
3. Unggah `index.html`, `style.css`, `script.js`, dan folder `images` jika ada. File `index.html` harus berada di bagian utama/root repository.
4. Buka **Settings → Pages**.
5. Pada bagian build/deployment, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu Save.
7. Tunggu proses selesai. URL situs akan muncul di halaman Pages, biasanya berbentuk `https://USERNAME.github.io/popnesia/`.

GitHub Pages cocok untuk situs statis. Situs ini belum memiliki database atau CMS, jadi untuk mengubah berita, kamu perlu mengedit file lalu mengunggah perubahan. Untuk kerja tim, undang anggota sebagai collaborators di repository dan sepakati siapa yang mengedit serta memeriksa perubahan.

## Halaman Tentang Kami, Redaksi, dan Pedoman Media Siber
Ketiga halaman ini muncul sebagai jendela saat tautan di footer diklik. Isinya ada di `script.js`, pada objek `infoData`. Edit teks di dalam tanda kutip. Bagian bertanda `[isi ...]` perlu Anda ganti dengan data tim yang sebenarnya.

## Menambah berita baru (cara cepat)
Semua berita ada di file `artikel.js`. File lain tidak perlu diubah.
1. Buka `artikel.js`.
2. Salin satu blok berita (dari tanda `{` sampai `}`), lalu tempel di bagian paling atas daftar. Jangan lupa tanda koma `,` di antara blok.
3. Ubah isinya: `id`, `kategori`, `judul`, `ringkasan`, `penulis`, `tanggal`, `isi`, dan `sumber`.
4. Simpan foto di folder `images/` dengan nama sama seperti kolom `foto`. Daftar nama file ada di `images/BACA-SAYA.txt`.
5. Simpan, lalu refresh browser.

Berita otomatis diurutkan dari tanggal terbaru. Berita terbaru menjadi berita utama bila tidak ada yang bertanda `utama: true`. Tambahkan `populer: true` agar berita masuk daftar Terpopuler.
Foto yang belum ada diganti foto pengganti otomatis, jadi website tetap rapi.

## Ikon media sosial dan Kontak Redaksi
- Ikon Instagram, Facebook, dan YouTube di footer membuka jendela berisi username. Ganti username dan tautan akun di `script.js`, pada objek `SOSMED`. Kolom `url` boleh kosong sampai akunnya siap.
- Kontak Redaksi membuka jendela seperti Tentang Kami. Edit isinya di `infoData` (bagian `kontak`) pada `script.js`.

Catatan: kolom `isi` mendukung subjudul. Tulis paragraf dengan awalan `## ` (contoh: "## Identifikasi Empat Beban Utama") untuk menjadikannya subjudul.

## Mode cerah/gelap, carousel, dan font
- Tombol bulan/matahari di header mengganti tampilan cerah dan gelap. Pilihan pembaca diingat di browsernya.
- Kotak "Jangan Lewatkan" berupa carousel yang bergeser sendiri tiap 4,5 detik. Berhenti saat kursor di atasnya, bisa digeser dengan tombol, titik, atau usapan jari. Tidak bergeser otomatis bagi pembaca yang mengaktifkan pengurangan animasi.
- Font judul: Fraunces. Font teks: Plus Jakarta Sans (keduanya dari Google Fonts, perlu internet). Untuk menggantinya, ubah `--font-serif` dan `--font-sans` di bagian atas `style.css` dan tautan font di `index.html`.

## Waktu "x jam yang lalu" dan jumlah pembaca
- Tambahkan kolom `waktu: "2026-10-19T14:30"` (jam WIB) di berita di `artikel.js` agar tampil "5 menit yang lalu" atau "3 jam yang lalu". Tanpa kolom `waktu`, tampil "Hari ini", "Kemarin", atau "N hari yang lalu", lalu tanggal biasa.
- Jumlah pembaca butuh layanan penghitung di internet, karena website biasa tidak bisa menyimpan angka bersama. Daftar di https://counterapi.dev, buat workspace, lalu tulis namanya di `VIEWS_WORKSPACE` pada `script.js`. Selama masih kosong, penghitung mati.

## Tanggal berita dan tanggal unggah
- `tanggal` = kapan berita ditulis atau terjadi. `diunggah` (opsional) = kapan berita diunggah ke website.
- Bila `diunggah` diisi dan berbeda, jendela berita menampilkan "Ditulis ... • Diunggah ...". Keterangan "x yang lalu" dan urutan berita mengikuti tanggal unggah.
- Bila `diunggah` tidak diisi, semuanya memakai `tanggal`.
