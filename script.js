// POPNESIA — menu, pencarian, tanggal, daftar berita, dan jendela artikel.
// Daftar berita ada di file artikel.js. File ini TIDAK perlu diubah untuk menambah berita.
const $ = (selector) => document.querySelector(selector);

// ---------- Tanggal & tahun ----------
const now = new Date();
$("#today-date").textContent = new Intl.DateTimeFormat("id-ID", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(now);
$("#year").textContent = now.getFullYear();

// ---------- Pengaturan tampilan beranda ----------
const KARTU = ["Politik", "Olahraga", "Editorial", "Pendidikan", "Feature"]; // kategori yang tampil sebagai kartu di beranda
const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
const BULAN_PENUH = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
// Foto pengganti bila file di folder images/ belum ada
const FOTO_CADANGAN = {
  Daerah: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80",
  Politik: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=80",
  Pendidikan: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
  Olahraga: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80",
  Editorial: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
  Feature: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
  Kesehatan: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
  Ekonomi: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1000&q=80",
  Dunia: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=80",
  Hiburan: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80"
};

// ---------- Ikon ----------
const S = 'viewBox="0 0 24 24" aria-hidden="true"';
const ICONS = {
  Politik: `<svg ${S} width="21" height="21" fill="none" stroke="#3a6fb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V11M9.5 21V11M14.5 21V11M19 21V11M2.5 10.5 12 4l9.5 6.5z"/></svg>`,
  Olahraga: `<svg ${S} width="21" height="21" fill="none" stroke="#3a6fb5" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8.5l3.4 2.5-1.3 4H9.9l-1.3-4zM12 3v5.5M15.4 11l5.4-1.7M14.1 15l3.2 4.3M9.9 15l-3.2 4.3M8.6 11 3.2 9.3"/></svg>`,
  Editorial: `<svg ${S} width="21" height="21" fill="none" stroke="#3a6fb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1-4.5L16.5 4 20 7.5 8.5 19zM14 6.5l3.5 3.5M4 20l4.5-1"/></svg>`,
  Pendidikan: `<svg ${S} width="21" height="21" fill="none" stroke="#3a6fb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 2 9l10 5 10-5zM6 11.500V16c0 1.400 2.700 2.500 6 2.500s6-1.100 6-2.500v-4.500M22 9v5.500"/></svg>`,
  Feature: `<svg ${S} width="21" height="21" fill="none" stroke="#3a6fb5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.800 5.800 6.200.9-4.500 4.400 1.100 6.200L12 17.400l-5.600 2.900 1.100-6.200L3 9.700l6.200-.9z"/></svg>`
};
const GENERIK = `<svg ${S} width="21" height="21" fill="none" stroke="#3a6fb5" stroke-width="1.8" stroke-linecap="round"><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/></svg>`;
$("#flame-icon").innerHTML = `<svg ${S} width="22" height="22" fill="#e9473d"><path d="M12.5 2c.6 3.2-1.2 4.6-2.7 6.2C8.4 9.7 7 11.3 7 14a5 5 0 0 0 10 0c0-2-.9-3.5-2-4.8-.2 1.2-.7 2-1.5 2.4C14 8.5 13.6 5 12.5 2z"/></svg>`;

// ---------- Fungsi bantu ----------
const tglTerbit = (a) => a.diunggah || a.tanggal; // tanggal unggah bila diisi, jika tidak pakai tanggal berita
const urut = [...ARTIKEL].sort((a, b) => tglTerbit(b).localeCompare(tglTerbit(a)));
const cari = (id) => ARTIKEL.find((a) => a.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tgl = (iso, penuh) => { const [y, m, d] = iso.split("-").map(Number); return `${d} ${(penuh ? BULAN_PENUH : BULAN)[m - 1]} ${y}`; };

// ---------- Waktu relatif ("3 jam yang lalu") ----------
// Bila berita punya kolom "waktu" (contoh "2026-10-19T14:30", jam WIB) tampil menit/jam.
// Bila hanya "tanggal", tampil Hari ini / Kemarin / N hari yang lalu, lalu tanggal biasa.
function umur(a) {
  if (a.waktu) {
    const m = Math.floor((Date.now() - new Date(a.waktu + ":00+07:00")) / 60000);
    if (!isNaN(m) && m >= 0) {
      if (m < 1) return "Baru saja";
      if (m < 60) return `${m} menit yang lalu`;
      if (m < 1440) return `${Math.floor(m / 60)} jam yang lalu`;
    }
  }
  const [y, mo, d] = tglTerbit(a).split("-").map(Number);
  const hari = Math.max(0, Math.round((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(y, mo - 1, d)) / 86400000));
  if (hari === 0) return "Hari ini";
  if (hari === 1) return "Kemarin";
  if (hari < 7) return `${hari} hari yang lalu`;
  if (hari < 28) return `${Math.floor(hari / 7)} minggu yang lalu`;
  if (hari < 365) return `${Math.min(11, Math.max(1, Math.round(hari / 30.4)))} bulan yang lalu`;
  return `${Math.floor(hari / 365)} tahun yang lalu`;
}
const inisial = (nama) => esc(nama.trim()[0].toUpperCase());
const fotoUtama = (a) => a.foto || FOTO_CADANGAN[a.kategori] || "";
const gambar = (a, alt = "") => `<img src="${esc(fotoUtama(a))}" alt="${esc(alt)}" data-kat="${esc(a.kategori)}" loading="lazy">`;
const link = (a, teks) => `<a href="#artikel-${esc(a.id)}" class="article-link" data-id="${esc(a.id)}">${teks}</a>`;

// Bila foto gagal dimuat: pakai foto pengganti, lalu kotak warna
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || img.dataset.fb === "2") return;
  const kat = img.dataset.kat || "";
  if (!img.dataset.fb && FOTO_CADANGAN[kat] && img.src !== FOTO_CADANGAN[kat]) { img.dataset.fb = "1"; img.src = FOTO_CADANGAN[kat]; return; }
  img.dataset.fb = "2";
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="#102f56"/><text x="50%" y="50%" fill="#ffd43b" font-family="Arial" font-size="40" font-weight="700" text-anchor="middle">${kat || "Popnesia"}</text></svg>`);
}, true);

// ---------- Beranda ----------
function renderBeranda() {
  const utama = urut.find((a) => a.utama) || urut[0];
  if (!utama) return;
  $("#hero").innerHTML = `${gambar(utama, utama.judul)}<div class="hero-shade"></div>
    <div class="hero-content"><span class="label label-red">Berita utama</span>
    <h1>${link(utama, esc(utama.judul))}</h1><p>${esc(utama.ringkasan)}</p>
    <div class="byline"><span class="avatar">${inisial(utama.penulis)}</span><span>Oleh <b>${esc(utama.penulis)}</b></span><span class="byline-separator"></span><time>${umur(utama, true)}</time></div></div>`;

  // Terpopuler (maks. 3): yang bertanda populer dulu, sisanya berita terbaru
  const pakai = new Set([utama.id]);
  let populer = urut.filter((a) => a.populer && !pakai.has(a.id)).slice(0, 3);
  populer.forEach((a) => pakai.add(a.id));
  urut.filter((a) => !pakai.has(a.id)).slice(0, 3 - populer.length).forEach((a) => { populer.push(a); pakai.add(a.id); });
  $("#popular-list").innerHTML = populer.map((a, i) => `<article class="popular-item"><span class="rank">${i + 1}</span>${gambar(a)}
    <div><span class="category">${esc(a.kategori)}</span><h3>${link(a, esc(a.judul))}</h3><p>${esc(a.ringkasan)}</p><time>${umur(a, true)}</time></div></article>`).join("");

  // Kartu kategori
  const kartu = KARTU.map((k) => urut.find((a) => a.kategori === k && a.id !== utama.id)).filter(Boolean);
  kartu.forEach((a) => pakai.add(a.id));
  $("#category-cards").innerHTML = kartu.map((a) => `<section class="category-card">
    <div class="card-heading"><h2><span class="cat-icon">${ICONS[a.kategori] || GENERIK}</span> ${esc(a.kategori)}</h2><a href="#" class="see-all" data-go="${esc(a.kategori)}">Lihat semua →</a></div>
    <a class="image-link article-link" href="#artikel-${esc(a.id)}" data-id="${esc(a.id)}">${gambar(a, a.judul)}</a>
    <h3>${link(a, esc(a.judul))}</h3><p>${esc(a.ringkasan)}</p>
    <div class="card-meta"><span class="avatar small">${inisial(a.penulis)}</span><b>${esc(a.penulis)}</b><time>${umur(a)}</time></div></section>`).join("");

  // Jangan Lewatkan: carousel berita yang belum tampil, lalu diisi berita terbaru lainnya
  let lain = urut.filter((a) => !pakai.has(a.id)).slice(0, 6);
  if (lain.length < 6) lain = lain.concat(urut.filter((a) => a.id !== utama.id && !lain.includes(a)).slice(0, 6 - lain.length));
  renderCarousel(lain);
}

// ---------- Carousel "Jangan Lewatkan" (bergeser otomatis) ----------
let dmIndex = 0, dmTimer = null;
function renderCarousel(list) {
  const box = $("#dontmiss-list");
  box.innerHTML = `<div class="dm" role="region" aria-roledescription="carousel" aria-label="Jangan Lewatkan">
    <div class="dm-viewport"><div class="dm-track">${list.map((a, i) => `<article class="dm-slide" role="group" aria-roledescription="slide" aria-label="${i + 1} dari ${list.length}">
      <a class="dm-img article-link" href="#artikel-${esc(a.id)}" data-id="${esc(a.id)}">${gambar(a, a.judul)}<span class="label label-red">${esc(a.kategori)}</span></a>
      <h3>${link(a, esc(a.judul))}</h3><time>${umur(a, true)}</time></article>`).join("")}</div></div>
    <div class="dm-nav"><button type="button" class="dm-btn" data-dir="-1" aria-label="Berita sebelumnya">‹</button>
      <div class="dm-dots">${list.map((_, i) => `<button type="button" class="dm-dot" data-i="${i}" aria-label="Berita ${i + 1}"></button>`).join("")}</div>
      <button type="button" class="dm-btn" data-dir="1" aria-label="Berita berikutnya">›</button></div></div>`;
  const track = box.querySelector(".dm-track"), dots = [...box.querySelectorAll(".dm-dot")];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const go = (i) => {
    dmIndex = (i + list.length) % list.length;
    track.style.transform = `translateX(-${dmIndex * 100}%)`;
    dots.forEach((d, k) => { d.classList.toggle("active", k === dmIndex); d.setAttribute("aria-current", String(k === dmIndex)); });
  };
  const stop = () => clearInterval(dmTimer);
  const start = () => { stop(); if (!reduce && list.length > 1) dmTimer = setInterval(() => go(dmIndex + 1), 4500); };
  box.addEventListener("click", (e) => {
    const b = e.target.closest("[data-dir],[data-i]");
    if (!b) return;
    go(b.dataset.dir ? dmIndex + Number(b.dataset.dir) : Number(b.dataset.i));
    start();
  });
  box.addEventListener("mouseenter", stop); box.addEventListener("mouseleave", start);
  box.addEventListener("focusin", stop); box.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  let x0 = null;
  box.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; stop(); }, { passive: true });
  box.addEventListener("touchend", (e) => { if (x0 !== null) { const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(dmIndex + (dx < 0 ? 1 : -1)); } x0 = null; start(); });
  go(0); start();
}

// ---------- Mode cerah / gelap ----------
const themeBtn = $("#theme-toggle");
function setTema(t, simpan) {
  document.documentElement.dataset.theme = t;
  themeBtn.setAttribute("aria-label", t === "dark" ? "Ganti ke mode cerah" : "Ganti ke mode gelap");
  if (simpan) { try { localStorage.setItem("popnesia-tema", t); } catch (e) {} }
}
setTema(document.documentElement.dataset.theme || "light", false);
themeBtn.addEventListener("click", () => setTema(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true));

// ---------- Tampilan kategori & hasil pencarian ----------
const homeView = $("#home-view"), catView = $("#category-view"), noResults = $("#no-results");
function tampilDaftar(judul, daftar) {
  homeView.hidden = true; catView.hidden = false;
  $("#category-title").textContent = judul;
  $("#category-list").innerHTML = daftar.map((a) => `<section class="category-card"><a class="image-link article-link" href="#artikel-${esc(a.id)}" data-id="${esc(a.id)}">${gambar(a, a.judul)}</a>
    <span class="category">${esc(a.kategori)}</span><h3>${link(a, esc(a.judul))}</h3><p>${esc(a.ringkasan)}</p>
    <div class="card-meta"><span class="avatar small">${inisial(a.penulis)}</span><b>${esc(a.penulis)}</b><time>${umur(a)}</time></div></section>`).join("");
  noResults.hidden = daftar.length > 0;
  noResults.textContent = daftar.length ? "" : "Belum ada berita di rubrik ini.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function tampilBeranda() {
  homeView.hidden = false; catView.hidden = true; noResults.hidden = true;
  document.querySelectorAll(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#beranda"));
}
function tampilKategori(nama) {
  document.querySelectorAll(".nav-links a").forEach((a) => a.classList.toggle("active", a.dataset.category === nama));
  tampilDaftar(nama, urut.filter((a) => a.kategori === nama));
}
document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", (e) => {
  e.preventDefault();
  a.dataset.category ? tampilKategori(a.dataset.category) : tampilBeranda();
  navLinks.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));
$("#back-home").addEventListener("click", tampilBeranda);
document.addEventListener("click", (e) => {
  const go = e.target.closest("[data-go]");
  if (go) { e.preventDefault(); tampilKategori(go.dataset.go); }
});

// ---------- Menu HP & pencarian ----------
const menuToggle = $("#menu-toggle"), navLinks = $("#nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
$("#search-toggle").addEventListener("click", () => {
  const bar = $("#search-form");
  bar.hidden = !bar.hidden;
  if (!bar.hidden) $("#search-input").focus();
});
function runSearch(q) {
  const term = q.trim().toLocaleLowerCase("id-ID");
  if (!term) return tampilBeranda();
  const hasil = urut.filter((a) => [a.judul, a.ringkasan, a.penulis, a.kategori, ...a.isi].join(" ").toLocaleLowerCase("id-ID").includes(term));
  tampilDaftar(`Hasil pencarian: “${q.trim()}”`, hasil);
  noResults.textContent = hasil.length ? "" : "Tidak ada berita yang cocok dengan pencarianmu.";
}
$("#search-form").addEventListener("submit", (e) => { e.preventDefault(); runSearch($("#search-input").value); });
$("#search-input").addEventListener("input", (e) => runSearch(e.target.value));

// ---------- Penghitung pembaca ----------
// Isi nama workspace CounterAPI Anda di bawah ini untuk mengaktifkan. Kosong = penghitung mati.
// Daftar gratis di https://counterapi.dev lalu buat workspace, misalnya "popnesia".
const VIEWS_WORKSPACE = "";
let viewsCounter = null;
function siapkanViews() {
  if (!VIEWS_WORKSPACE || viewsCounter) return Promise.resolve(viewsCounter);
  return new Promise((ok) => {
    if (window.Counter) { viewsCounter = new window.Counter({ workspace: VIEWS_WORKSPACE }); return ok(viewsCounter); }
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/counterapi/dist/counter.browser.min.js";
    s.onload = () => { try { viewsCounter = new window.Counter({ workspace: VIEWS_WORKSPACE }); } catch (e) {} ok(viewsCounter); };
    s.onerror = () => ok(null);
    document.head.appendChild(s);
  });
}
async function tampilViews(id) {
  const el = $("#dialog-views");
  el.hidden = true;
  if (!VIEWS_WORKSPACE) return;
  try {
    const counter = await siapkanViews();
    if (!counter) return;
    const kunci = "artikel-" + id;
    let sudah = false;
    try { sudah = localStorage.getItem("dibaca:" + id) === "1"; } catch (e) {}
    const res = sudah ? await counter.get(kunci) : await counter.up(kunci); // dihitung 1x per pembaca (browser)
    if (!sudah) { try { localStorage.setItem("dibaca:" + id, "1"); } catch (e) {} }
    const d = res && res.data !== undefined ? res.data : res;
    const n = typeof d === "number" ? d : (d && (d.count ?? d.value ?? d.up_count));
    if (typeof n === "number") { el.textContent = `${n.toLocaleString("id-ID")} kali dibaca`; el.hidden = false; }
  } catch (e) { /* gagal: sembunyikan saja */ }
}

// ---------- Jendela artikel ----------
const dialog = $("#article-dialog");
const dlgImg = $("#dialog-image"), dlgCredit = $("#dialog-credit");
dlgImg.addEventListener("load", () => {
  const ada = !dlgImg.dataset.fb && dlgCredit.dataset.text;
  dlgCredit.textContent = ada ? "Sumber foto: " + dlgCredit.dataset.text : "";
  dlgCredit.hidden = !ada;
});
function bukaArtikel(id) {
  const a = cari(id);
  if (!a) return;
  $("#dialog-category").textContent = a.kategori;
  $("#dialog-title").textContent = a.judul;
  $("#dialog-meta").textContent = a.diunggah && a.diunggah !== a.tanggal
    ? `Ditulis ${tgl(a.tanggal, true)} • Diunggah ${tgl(a.diunggah, true)} (${umur(a)}) • Oleh ${a.penulis}`
    : `${tgl(a.tanggal, true)} • ${umur(a)} • Oleh ${a.penulis}`;
  tampilViews(a.id);
  dlgCredit.hidden = true; dlgCredit.dataset.text = a.kreditFoto || "";
  delete dlgImg.dataset.fb; dlgImg.dataset.kat = a.kategori;
  dlgImg.src = fotoUtama(a); dlgImg.alt = a.judul;
  $("#dialog-lead").textContent = a.ringkasan;
  const body = $("#dialog-body");
  body.replaceChildren();
  a.isi.forEach((t) => { const sub = t.startsWith("## "); const p = document.createElement(sub ? "h3" : "p"); p.textContent = sub ? t.slice(3) : t; body.appendChild(p); });
  const src = $("#dialog-sources");
  src.replaceChildren();
  if (a.kategori === "Editorial") { const n = document.createElement("p"); n.className = "Editorial-note"; n.textContent = "Editorial: tulisan ini mencerminkan pandangan penulis."; src.appendChild(n); }
  if (a.sumber && a.sumber.length) {
    const h = document.createElement("h3"); h.textContent = "Sumber"; src.appendChild(h);
    const ul = document.createElement("ul"); a.sumber.forEach((t) => { const li = document.createElement("li"); li.textContent = t; ul.appendChild(li); }); src.appendChild(ul);
  }
  if (typeof dialog.showModal === "function") { if (!dialog.open) dialog.showModal(); } else alert(a.judul + "\n\n" + a.ringkasan);
  dialog.scrollTop = 0;
  history.replaceState(null, "", "#artikel-" + a.id);
}
document.addEventListener("click", (e) => {
  const l = e.target.closest(".article-link");
  if (l) { e.preventDefault(); bukaArtikel(l.dataset.id); }
});
const tutup = () => { dialog.close(); history.replaceState(null, "", location.pathname + location.search); };
$("#dialog-close").addEventListener("click", tutup);
dialog.addEventListener("click", (e) => { if (e.target === dialog) tutup(); });
dialog.addEventListener("cancel", () => history.replaceState(null, "", location.pathname + location.search));

renderBeranda();
if (location.hash.startsWith("#artikel-")) bukaArtikel(location.hash.slice(9));

// ---------- Newsletter ----------
$("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  $("#newsletter-message").textContent = "Terima kasih! Fitur berlangganan belum aktif dan alamat email belum disimpan.";
});
// ===== HALAMAN INFORMASI (Tentang Kami, Redaksi, Pedoman Media Siber) =====
// Edit teks di bawah ini. Tipe isi: { h: "subjudul" }, { p: "paragraf" }, { ul: ["poin 1", "poin 2"] }
const infoData = {
  tentang: {
    title: "Tentang Kami",
    content: [
      { p: "Popnesia.com adalah portal berita dengan slogan \"Fakta, Cerita, Indonesia\". Kami menyajikan berita dan cerita tentang anak muda, pendidikan, lifestyle, hiburan, dan tren yang dekat dengan keseharian pembaca." },
      { h: "Visi" },
      { p: "Menjadi media daring anak muda yang akurat, mudah dipahami, dan menyajikan keberagaman cerita Indonesia." },
      { h: "Misi" },
      { ul: [
        "Menyajikan informasi yang telah diperiksa kebenarannya sebelum diterbitkan.",
        "Memberi ruang bagi suara anak muda dan beragam sudut pandang.",
        "Menjelaskan isu publik dengan bahasa yang jelas dan mudah dipahami.",
        "Menaati Kode Etik Jurnalistik dan pedoman pemberitaan media siber."
      ] },
      { h: "Rubrik" },
      { p: "Nasional, Daerah, Politik, Ekonomi, Pendidikan, Kesehatan, Dunia, Olahraga, Editorial, dan Feature." },
      { h: "Hubungi Kami" },
      { p: "Kirim saran, koreksi, atau hak jawab ke redaksipopnesia@gmail.com" }
    ]
  },
  redaksi: {
    title: "Redaksi",
    content: [
      { p: "Berikut susunan tim redaksi Popnesia." },
      { h: "Penanggung Jawab, Editor, dan Pengembang Website" },
      { p: "Yuni Nurcahyani" },
      { h: "Penulis" },
      { ul: [
        "Nisa Koswara",
        "Tathita Nathania Wijaya",
        "Raihan Brataxenna",
        "Itsna Nursofiatun Ni'mah",
        "Rio Valent Fadilah",
        "Yuni Nurcahyani"
      ] },
      { h: "Alamat Redaksi" },
      { p: "Redaksi Popnesia.com, Universitas Islam Negeri Sunan Gunung Djati Bandung (Kampus 1), Jl. A.H. Nasution No. 105, Cipadung, Kec. Cibiru, Kota Bandung, Jawa Barat 40614." },
      { p: "Email: redaksipopnesia@gmail.com" }
    ]
  },
  kontak: {
    title: "Kontak Redaksi",
    content: [
      { p: "Ada saran, koreksi, atau informasi untuk redaksi? Hubungi kami lewat kontak berikut." },
      { h: "Email Redaksi" },
      { mail: "redaksipopnesia@gmail.com" },
      { h: "Alamat Redaksi" },
      { p: "Redaksi Popnesia.com, Universitas Islam Negeri Sunan Gunung Djati Bandung (Kampus 1), Jl. A.H. Nasution No. 105, Cipadung, Kec. Cibiru, Kota Bandung, Jawa Barat 40614." },
      { h: "Keperluan yang bisa disampaikan" },
      { ul: [
        "Kirim informasi atau usulan liputan.",
        "Ajukan koreksi atau hak jawab dengan menyebut judul berita yang dimaksud.",
        "Kerja sama dan pertanyaan umum."
      ] },
      { p: "Redaksi berusaha menanggapi setiap pesan yang masuk." }
    ]
  },
  pedoman: {
    title: "Pedoman Media Siber",
    content: [
      { p: "Popnesia berpegang pada Kode Etik Jurnalistik dan Pedoman Pemberitaan Media Siber yang ditetapkan Dewan Pers. Prinsip yang kami terapkan:" },
      { ul: [
        "Verifikasi: informasi diperiksa dan dikonfirmasi ke sumber yang relevan sebelum diterbitkan.",
        "Berimbang: pihak yang diberitakan diberi kesempatan memberi tanggapan.",
        "Pembeda Editorial: tulisan editorial diberi label jelas agar tidak tertukar dengan berita.",
        "Sumber dan kutipan: kutipan hanya berasal dari narasumber yang benar-benar diwawancarai, dan sumber data disebutkan.",
        "Hak jawab dan koreksi: pembaca dapat meminta hak jawab atau koreksi, dan kesalahan akan diperbaiki secara terbuka.",
        "Perlindungan anak: identitas anak yang berhadapan dengan masalah hukum atau menjadi korban tidak kami publikasikan.",
        "Hak cipta: foto dan karya pihak lain dicantumkan sumber atau kreditnya."
      ] },
      { h: "Hak Jawab dan Koreksi" },
      { p: "Kirim permintaan hak jawab atau koreksi ke redaksipopnesia@gmail.com dengan menyebutkan judul dan tautan berita yang dimaksud." }
    ]
  }
};

const infoDialog = $("#info-dialog");
document.querySelectorAll(".info-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const page = infoData[link.dataset.info];
    $("#info-title").textContent = page.title;
    const body = $("#info-body");
    body.replaceChildren();
    page.content.forEach((block) => {
      let el;
      if (block.h) { el = document.createElement("h3"); el.textContent = block.h; }
      else if (block.ul) {
        el = document.createElement("ul");
        block.ul.forEach((text) => { const li = document.createElement("li"); li.textContent = text; el.appendChild(li); });
      } else if (block.mail) { el = document.createElement("p"); const a = document.createElement("a"); a.href = "mailto:" + block.mail; a.textContent = block.mail; el.appendChild(a); }
      else { el = document.createElement("p"); el.textContent = block.p; }
      body.appendChild(el);
    });
    if (typeof infoDialog.showModal === "function") infoDialog.showModal();
  });
});
$("#info-close").addEventListener("click", () => infoDialog.close());
infoDialog.addEventListener("click", (event) => { if (event.target === infoDialog) infoDialog.close(); });

// ===== MEDIA SOSIAL (ikon di footer "Ikuti Kami") =====
// Ganti username dan tautan akun di bawah ini. Kosongkan url ("") bila belum ada tautan.
const SOSMED = {
  instagram: { nama: "Instagram", username: "@popnesia", url: "" },
  facebook: { nama: "Facebook", username: "Popnesia", url: "" },
  youtube: { nama: "YouTube", username: "@popnesia", url: "" }
};
const IKON_SOSMED = {
  instagram: `<svg ${S} width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>`,
  facebook: `<svg ${S} width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.500 21v-8h2.700l.5-3.300h-3.200V7.600c0-1 .4-1.700 1.800-1.700H18V3.100C17.600 3 16.700 3 15.700 3 13.300 3 11.700 4.400 11.700 7v2.700H9V13h2.700v8z"/></svg>`,
  youtube: `<svg ${S} width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.500" y="5.500" width="19" height="13" rx="4"/><path d="M10 9.200v5.600l4.800-2.800z"/></svg>`
};
document.querySelectorAll(".social-btn").forEach((b) => { b.innerHTML = IKON_SOSMED[b.dataset.sosmed]; });
const socialDialog = $("#social-dialog");
document.querySelectorAll(".social-btn").forEach((b) => b.addEventListener("click", () => {
  const s = SOSMED[b.dataset.sosmed];
  $("#social-icon").innerHTML = IKON_SOSMED[b.dataset.sosmed];
  $("#social-name").textContent = s.nama;
  $("#social-user").textContent = s.username;
  $("#social-msg").textContent = "";
  const buka = $("#social-open");
  buka.hidden = !s.url; if (s.url) buka.href = s.url;
  $("#social-copy").dataset.text = s.username;
  if (typeof socialDialog.showModal === "function") socialDialog.showModal();
}));
$("#social-copy").addEventListener("click", async (e) => {
  try { await navigator.clipboard.writeText(e.currentTarget.dataset.text); $("#social-msg").textContent = "Username disalin."; }
  catch { $("#social-msg").textContent = "Salin manual: " + e.currentTarget.dataset.text; }
});
$("#social-close").addEventListener("click", () => socialDialog.close());
socialDialog.addEventListener("click", (e) => { if (e.target === socialDialog) socialDialog.close(); });
