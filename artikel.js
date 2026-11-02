// ============================================================
// DAFTAR BERITA POPNESIA
// Untuk MENAMBAH berita baru: salin satu blok { ... } di bawah,
// tempel di bagian PALING ATAS daftar, lalu ubah isinya.
// Berita otomatis diurutkan dari tanggal terbaru.
//
// Penjelasan kolom:
//   id          : nama unik tanpa spasi (huruf kecil dan tanda -)
//   kategori    : Nasional, Daerah, Politik, Ekonomi, Pendidikan, Kesehatan,
//                 Dunia, Olahraga, Editorial, Feature, atau Hiburan
//   tanggal     : format TAHUN-BULAN-TANGGAL, contoh "2026-10-19"
//   diunggah    : (opsional) tanggal diunggah ke website, contoh "2026-10-20". Bila diisi, "x yang lalu" dan urutan berita mengikuti tanggal ini
//   waktu       : (opsional) jam terbit WIB, contoh "2026-10-19T14:30" agar tampil "3 jam yang lalu"
//   foto        : alamat foto, simpan file di folder images/
//   kreditFoto  : sumber foto (boleh dikosongkan "")
//   utama       : true = tampil sebagai berita utama (hanya satu berita)
//   populer     : true = masuk daftar Terpopuler (maksimal 3 yang tampil)
//   isi         : daftar paragraf, tiap paragraf diapit tanda kutip
//   sumber      : daftar sumber berita (boleh kosong [])
// Catatan: bila ada tanda kutip " di dalam teks, tulis sebagai \"
// ============================================================
const ARTIKEL = [
  {
    "id": "halte-brt-bandung-raya",
    "kategori": "Daerah",
    "judul": "Pembangunan Halte BRT Bandung Raya Dikeluhkan, Ruang Jalan Menyempit",
    "ringkasan": "Pembangunan empat halte BRT Bandung Raya di Jalan Rajawali Timur hingga Jalan Kebon Jati dikeluhkan karena mempersempit ruang jalan.",
    "penulis": "Yuni Nurcahyani",
    "tanggal": "2026-10-19",
    "foto": "images/halte-brt-bandung-raya.jpg",
    "kreditFoto": "Radar Bandung",
    "utama": true,
    "isi": [
      "BANDUNG — Pembangunan empat halte Bus Rapid Transit (BRT) Bandung Raya di Jalan Rajawali Timur hingga Jalan Kebon Jati, Kota Bandung, menjadi sorotan karena mempersempit ruang gerak kendaraan. Kondisi tersebut dikhawatirkan menambah kepadatan lalu lintas di ruas jalan yang kerap mengalami kemacetan pada pagi hari.",
      "Dikutip dari detikJabar dalam pemberitaan Rabu (7/10/2026), empat titik halte yang sedang dibangun berada di tengah jalan. Berdasarkan pantauan media tersebut, kendaraan harus mengurangi kecepatan ketika mendekati lokasi pembangunan karena ruang jalan menyempit akibat pekerjaan konstruksi. Pengerjaan trotoar dan saluran air di sejumlah titik juga turut memengaruhi kondisi lalu lintas.",
      "Salah seorang pengendara, Rizki (30), yang sehari-hari melintasi Jalan Rajawali Timur, menilai pembangunan halte di tengah jalan mengganggu aktivitas lalu lintas selama proses pengerjaan.",
      "\"Menurut pandangan saya untuk pekerjaan ini emang pastilah mengganggu untuk aktivitas,\" kata Rizki, dikutip dari detikJabar, Rabu (7/10/2026).",
      "Ia juga memperkirakan keberadaan halte di tengah jalan dapat menimbulkan titik perlambatan kendaraan ketika BRT mulai beroperasi. Menurutnya, kendaraan berpotensi menumpuk di sekitar halte saat bus menaikkan dan menurunkan penumpang.",
      "Di sisi lain, pembangunan BRT Bandung Raya merupakan bagian dari pengembangan transportasi massal di kawasan metropolitan Bandung Raya yang mencakup lima kabupaten/kota. Menurut laporan PRFM News pada Jumat (18/9/2026), layanan tersebut ditargetkan mulai beroperasi secara bertahap pada 2027.",
      "Pejabat Pembuat Komitmen (PPK) Proyek BRT, Bagus Gesit Sugesti, menjelaskan bahwa persiapan operasional tidak hanya berfokus pada pembangunan infrastruktur, tetapi juga mencakup penyediaan armada, operator, sistem pelayanan, pembayaran, hingga kelembagaan.",
      "\"Kami tidak hanya membangun infrastruktur, tapi kami meyakinkan bahwa sudah ada armada, kemudian operator, sistem pelayanannya, sistem pembayaran, begitu juga kelembagaan,\" kata Bagus saat diwawancarai PRFM News melalui siaran radio pada Rabu (16/9/2026).",
      "Selain pembangunan halte, kesiapan fasilitas pendukung juga menjadi bagian penting dalam pengoperasian BRT. Penempatan halte di tengah jalan membutuhkan akses penyeberangan yang aman serta fasilitas yang dapat digunakan oleh seluruh kelompok masyarakat, termasuk penyandang disabilitas dan lansia.",
      "Pembangunan BRT Bandung Raya diharapkan dapat menghadirkan alternatif transportasi publik bagi masyarakat. Namun, proses pengerjaan dan kesiapan operasional tetap perlu memperhatikan kondisi lalu lintas serta keselamatan pengguna jalan agar manfaat layanan tersebut dapat dirasakan secara optimal."
    ],
    "sumber": [
      "detikJabar, “Proyek Halte BRT Bandung: Ruang Jalan Sempit, Macet Mengintai”, 7 Oktober 2026.",
      "PRFM News, “BRT Bandung Raya Ditargetkan Beroperasi 2027, Kini Masuk Tahap Pembangunan Halte”, 18 September 2026."
    ]
  },
  {
    "id": "studi-ihdc-kognitif-siswa-sd",
    "kategori": "Kesehatan",
    "judul": "Studi IHDC: 68,5 Persen Siswa SD di Jakarta Alami Gangguan Fungsi Kognitif Harian",
    "ringkasan": "Riset IHDC terhadap 1.007 siswa SD negeri di Jakarta menemukan 68,5 persen mengalami gangguan fungsi kognitif harian.",
    "penulis": "Yuni Nurcahyani",
    "tanggal": "2026-10-19",
    "foto": "images/studi-ihdc-kognitif-siswa-sd.jpg",
    "kreditFoto": "detik.com",
    "isi": [
      "BANDUNG — Sebanyak 68,5 persen atau hampir tujuh dari 10 siswa sekolah dasar (SD) di Jakarta memiliki fungsi kognitif harian dalam kategori kurang baik. Temuan tersebut berdasarkan studi Indonesia Health Development Center (IHDC) terhadap 1.007 siswa di empat sekolah dasar negeri di wilayah perkotaan Jakarta.",
      "Dikutip dari detikHealth dalam pemberitaan Senin (19/10/2026), penelitian tersebut melibatkan siswa kelas 4, 5, dan 6. Hasil studi juga menunjukkan bahwa 49,3 persen siswa memiliki skor harapan dan imajinasi masa depan yang rendah.",
      "Fungsi kognitif harian yang diteliti mencakup kemampuan memusatkan perhatian, mengingat informasi, mengolah materi pelajaran, hingga berinteraksi dengan teman sebaya dan mengikuti kegiatan ekstrakurikuler.",
      "Ketua Dewan Pembina IHDC sekaligus Menteri Kesehatan RI periode 2014–2019, Prof. Dr. dr. Nila Djuwita F. Moeloek, M.Epid., menegaskan pentingnya menjaga kesehatan anak sebagai bagian dari upaya mempersiapkan generasi masa depan.",
      "\"Indonesia Emas 2045 dimulai dari anak-anak yang duduk di bangku sekolah hari ini.\" ujar Nila dalam keterangan yang dikutip detikHealth, Senin (19/10/2026).",
      "## Empat Faktor yang Memengaruhi Fungsi Kognitif Anak",
      "Sementara itu, Direktur Eksekutif IHDC sekaligus Ketua Tim Peneliti, dr. Ray Wagiu Basrowi, MKK, FRSPH, menjelaskan bahwa terdapat empat faktor utama yang berkaitan dengan kurang optimalnya fungsi kognitif anak, yakni gangguan penglihatan, defisiensi zat besi, kekurangan asupan protein dan energi, serta gangguan kesehatan jiwa.",
      "Berdasarkan hasil pemeriksaan, sebanyak 303 siswa atau sekitar 30 persen peserta mengalami gangguan refraksi yang membutuhkan koreksi kacamata. Analisis penelitian juga menunjukkan bahwa kelompok dengan risiko gangguan penglihatan sedang hingga tinggi memiliki odds mengalami fungsi kognitif harian kurang baik sebesar 3,1 kali dibandingkan kelompok pembanding.",
      "Dari aspek kesehatan jiwa, siswa dengan risiko kecemasan tinggi memiliki odds mengalami fungsi kognitif harian kurang baik sebesar 3,3 kali. Sementara itu, risiko depresi tinggi berkaitan dengan odds sebesar 2,5 kali.",
      "Ray mengingatkan agar orang tua dan guru tidak terburu-buru menganggap anak yang mengalami kesulitan berkonsentrasi sebagai anak yang malas. Dalam pemberitaan Koran Jakarta pada 19 Oktober 2026, ia menyampaikan, \"Anak yang sulit fokus perlu diperiksa, bukan buru-buru dicap malas.\"",
      "Ia juga menjelaskan bahwa hasil penelitian tersebut menunjukkan adanya hubungan antara kondisi kesehatan anak dan kemampuan kognitif sehari-hari. Namun, hubungan statistik tersebut tidak serta-merta membuktikan bahwa satu faktor menjadi penyebab langsung gangguan fungsi kognitif.",
      "Atas temuan tersebut, IHDC mendorong sejumlah intervensi di lingkungan sekolah, di antaranya pemeriksaan penglihatan secara berkala yang terintegrasi dengan pemberian kacamata bagi siswa yang membutuhkan. Selain itu, diperlukan jalur pendampingan psikologis dan rujukan kesehatan jiwa agar kebutuhan anak dapat ditangani secara tepat.",
      "IHDC berharap hasil penelitian tersebut dapat mendorong kerja sama antara sektor kesehatan dan pendidikan dalam mengenali berbagai hambatan belajar sejak dini. Dengan demikian, kebutuhan kesehatan anak dapat diperhatikan sebagai bagian dari upaya mendukung perkembangan dan proses belajar mereka."
    ],
    "sumber": []
  },
  {
    "id": "karhutla-tanjung-puting",
    "kategori": "Nasional",
    "judul": "Pemadaman Karhutla di Tanjung Puting Diperkuat, 26 Kali Water Bombing Dilakukan",
    "ringkasan": "Pemerintah memperkuat pemadaman karhutla di Taman Nasional Tanjung Puting melalui operasi udara dan darat.",
    "penulis": "Rio Valent Fadilah",
    "tanggal": "2026-10-18",
    "foto": "images/karhutla-tanjung-puting.jpg",
    "kreditFoto": "Menteri Kehutanan (Menhut) Raja Juli Antoni",
    "isi": [
      "Bandung— Pemerintah memperkuat upaya pemadaman kebakaran hutan dan lahan (karhutla) di kawasan Taman Nasional Tanjung Puting, Kalimantan Tengah, melalui operasi pemadaman udara dan darat. Pada Minggu (18/10/2026), sebanyak 26 kali pengeboman air atau water bombing dilakukan di wilayah Sungai Perlu dan Teluk Rengas untuk mengendalikan kebakaran yang masih berlangsung.",
      "Dilansir dari ANTARA pada 18 Oktober 2026, Menteri Kehutanan Raja Juli Antoni mengatakan jumlah operasi water bombing pada hari tersebut meningkat dibandingkan sehari sebelumnya yang tercatat sebanyak 16 kali. Raja Juli Antoni menyampaikan, \“Water bombing di Tanjung Puting, kemarin dilakukan sebanyak 16 water bombing, hari ini sementara 26 water bombing.\” Upaya tersebut dilakukan untuk mempercepat pemadaman api di kawasan yang menjadi perhatian pemerintah.",
      "Meski demikian, proses pemadaman menghadapi kendala jarak pandang. Enam helikopter water bombing yang berada di Kalimantan Tengah belum dapat beroperasi karena terbatasnya jarak pandang di Bandara Tjilik Riwut. Kondisi tersebut memengaruhi pelaksanaan operasi udara dalam penanganan karhutla.",
      "Sebagai langkah alternatif, satu helikopter water bombing milik swasta yang dioperasikan dari Kuala Pembuang, Kabupaten Seruyan, dapat menjalankan operasi setelah dilakukan koordinasi. Selain itu, helikopter milik TNI Angkatan Udara dan Kementerian Kehutanan juga tiba di wilayah tersebut untuk memperkuat dukungan pemadaman dari udara.",
      "Di sisi lain, pemadaman melalui jalur darat terus dilakukan di wilayah Pesalat dan Teluk Pulai. Direktur Konservasi Kawasan Kementerian Kehutanan, Sapto Aji Prabowo, menjelaskan bahwa tim gabungan menggunakan sejumlah peralatan, seperti pompa suplai, pompa apung, pompa jinjing, serta selang untuk mendukung proses pemadaman. Sapto Aji Prabowo mengatakan, \“Resor Pesalat dan Teluk Pulai, tim darat gabungan yang terdiri dari TNTP, Manggala Agni, BKO Kemenhut, TNI, Polri, BPBD dan relawan, terus memaksimalkan upaya pemadaman bersumber dari air sungai dan sumur bor.\”",
      "Tim tersebut melibatkan petugas Taman Nasional Tanjung Puting, Manggala Agni, personel bantuan Kementerian Kehutanan, TNI, Polri, Badan Penanggulangan Bencana Daerah, dan relawan. Pemadaman dilakukan dengan memanfaatkan sumber air dari sungai dan sumur bor.",
      "Sebelumnya, Badan Nasional Penanggulangan Bencana (BNPB) menetapkan Kalimantan Tengah dan Sumatera Selatan sebagai wilayah prioritas penanganan karhutla. Berdasarkan data BNPB per 13 Oktober 2026, luas area yang masih dalam penanganan di enam provinsi mencapai 663,61 hektare. Dari jumlah tersebut, 513,89 hektare berada di kawasan Taman Nasional Tanjung Puting, Kalimantan Tengah.",
      "BNPB juga mengerahkan operasi darat dan udara, termasuk water bombing serta Operasi Modifikasi Cuaca, untuk membantu memadamkan api dan mengurangi dampak asap. Penanganan dilakukan melalui koordinasi antarlembaga agar upaya pemadaman dapat berjalan lebih efektif.",
      "Kebakaran hutan dan lahan tidak hanya mengancam kelestarian ekosistem, tetapi juga berpotensi menimbulkan gangguan bagi masyarakat akibat asap yang dihasilkan. Karena itu, keberlanjutan operasi pemadaman dan pengawasan di wilayah rawan menjadi bagian penting dalam mengendalikan kebakaran.",
      "Hingga Minggu (18/10/2026), pemerintah masih memperkuat penanganan karhutla di Tanjung Puting melalui pengerahan personel dan dukungan peralatan. Perkembangan penanganan selanjutnya bergantung pada kondisi lapangan serta dukungan operasional yang memungkinkan proses pemadaman terus berlangsung."
    ],
    "sumber": []
  },
  {
    "id": "dinamika-politik-oktober-2026",
    "kategori": "Politik",
    "judul": "Dinamika Politik Oktober 2026: Rangkaian Perombakan Kabinet dan Konsolidasi Menjelang Evaluasi Pemerintahan",
    "ringkasan": "Perombakan pejabat, konsolidasi partai, dan penegakan hukum mewarnai dinamika politik nasional pertengahan Oktober 2026.",
    "penulis": "Tathita Nathania Wijaya",
    "tanggal": "2026-10-17",
    "foto": "images/dinamika-politik-oktober-2026.jpg",
    "kreditFoto": "Kompas.com & Laporan Politik Terkini",
    "isi": [
      "JAKARTA — Situasi politik nasional pada pertengahan Oktober 2026 diwarnai oleh berbagai dinamika penting, mulai dari langkah konsolidasi pemerintahan, perombakan pejabat strategis, hingga persiapan peta jalan politik jangka panjang oleh sejumlah partai. Berbagai langkah ini mencerminkan upaya penyesuaian strategi di tengah tantangan kebijakan domestik yang terus berjalan.",
      "Di lansir Kompas.com, Sekretariat Negara, dan Laporan Analisis Politik Nasional. Bahwa berdasarkan catatan pemberitaan, Presiden RI Prabowo Subianto melakukan serangkaian pelantikan dan penyesuaian posisi pejabat negara di lingkungan Kabinet Merah Putih. Langkah penataan struktur pemerintahan ini mencakup penempatan sejumlah tokoh di pos-pos strategis, termasuk pengisian kursi koordinasi kementerian serta lembaga tinggi negara guna mengoptimalkan kinerja pemerintah yang mendekati dua tahun masa baktinya.",
      "Selain penataan di tingkat eksekutif, konstelasi politik antarpartai pendukung pemerintah juga mulai menghangat. Sejumlah partai politik mulai mengutarakan pandangan dan sikap politiknya terkait arah dukungan ke depan, yang turut memicu diskursus di kalangan pengamat politik mengenai peta koalisi dan strategi penentuan figur dalam kontestasi masa mendatang.",
      "Di sisi penegakan hukum dan pengawasan birokrasi, dinamika turut terjadi dengan adanya pengungkapan kasus korupsi di tingkat daerah yang melibatkan kepala daerah serta langkah tegas aparat penegak hukum dalam mengusut berbagai pelanggaran.",
      "Kejaksaan dan Komisi Pemberantasan Korupsi (KPK) terus mengintensifkan pengawasan terhadap tata kelola anggaran daerah demi menjaga integritas keuangan negara.",
      "Pemerintah juga dihadapkan pada tantangan penanganan isu-isu lintas sektor yang mendesak, seperti upaya mitigasi kebakaran hutan dan lahan (karhutla) di beberapa wilayah yang dikoordinasikan langsung melalui instruksi khusus kepala negara. Berbagai kebijakan ekonomi makro serta stabilitas pasar modal turut menjadi sorotan publik di tengah fluktuasi global.",
      "Secara keseluruhan, perkembangan politik nasional pada bulan Oktober 2026 menunjukkan fase konsolidasi yang intensif, di mana pemerintah berupaya menyeimbangkan stabilitas politik internal, efektivitas birokrasi, serta respons cepat terhadap berbagai persoalan riil di tengah masyarakat."
    ],
    "sumber": [
      "Kompas.com, Sekretariat Negara, dan Laporan Analisis Politik Nasional."
    ]
  },
  {
    "id": "kedelai-impor-tempe-sukabumi",
    "kategori": "Daerah",
    "judul": "Harga Kedelai Impor Naik, Pedagang Tempe di Sukabumi Perkecil Ukuran Jualan",
    "ringkasan": "Kenaikan harga kedelai impor di Kota Sukabumi membuat sejumlah pedagang tempe memperkecil ukuran jualan agar harga tetap terjangkau.",
    "penulis": "Nisa Koswara",
    "tanggal": "2026-10-17",
    "foto": "images/kedelai-impor-tempe-sukabumi.jpg",
    "kreditFoto": "Kompas.com",
    "populer": true,
    "isi": [
      "SUKABUMI - Kenaikan harga kedelai impor di Kota Sukabumi, Jawa Barat, berdampak pada pedagang tempe. Untuk menyiasati kenaikan biaya produksi, sejumlah pedagang memilih memperkecil ukuran tempe agar harga jual tetap terjangkau bagi konsumen.",
      "Berdasarkan laporan detikJabar pada 16 Oktober 2026, harga kedelai impor di Kota Sukabumi mencapai Rp11.500 per kilogram. Harga tersebut meningkat dari sebelumnya yang berada di kisaran Rp11.000 per kilogram.",
      "Kenaikan harga kedelai impor juga dilaporkan Sukabumi Kini pada 14 September 2026. Saat itu, harga kedelai impor tercatat naik dari Rp10.800 menjadi Rp11.200 per kilogram. Jika dibandingkan dengan harga yang dilaporkan pada Oktober, terdapat kenaikan sebesar Rp300 per kilogram.",
      "Kondisi tersebut menambah beban biaya produksi bagi pelaku usaha tempe yang bergantung pada kedelai sebagai bahan baku utama. Kenaikan harga bahan baku membuat pedagang perlu menyesuaikan strategi penjualan agar tetap dapat memenuhi kebutuhan konsumen.",
      "\“Kalau harga jual dinaikkan, biasanya pembeli banyak yang mengeluh dan jumlah penjualan bisa menurun. Jadi, saya memilih mengurangi ukuran tempe agar harganya tetap terjangkau oleh pelanggan,\” ungkap Maman (45), pedagang tempe di Pasar Pelita, sebagaimana dikutip dari laporan detikJabar.",
      "Tempe berbentuk papan atau batang di Kota Sukabumi dilaporkan dijual dengan harga sekitar Rp6.500 per batang. Sementara itu, harga tempe mencapai Rp13.000 per kilogram.",
      "Penyesuaian ukuran menjadi salah satu cara pedagang mempertahankan penjualan di tengah kenaikan harga kedelai. Meski harga per satuan dapat dipertahankan, konsumen berpotensi memperoleh tempe dengan ukuran lebih kecil.",
      "Sementara itu, Sukabumi Kini juga melaporkan kenaikan harga kacang hijau impor dari Rp43.000 menjadi Rp44.000 per kilogram pada September 2026. Perubahan harga sejumlah komoditas tersebut menunjukkan pentingnya pemantauan harga bahan pangan di pasar tradisional.",
      "Kenaikan harga kedelai impor menjadi tantangan bagi produsen dan pedagang tempe dalam menjaga keberlangsungan usaha sekaligus mempertahankan keterjangkauan harga bagi konsumen. Perkembangan harga bahan baku dan biaya distribusi masih perlu dipantau untuk melihat dampaknya terhadap harga jual produk olahan kedelai."
    ],
    "sumber": [
      "detikJabar dan SukabumiKini.com"
    ]
  },
  {
    "id": "ispa-karhutla-kemenkes",
    "kategori": "Kesehatan",
    "judul": "Kemenkes Catat 283.270 Kasus ISPA di Wilayah Terdampak Karhutla",
    "ringkasan": "Kemenkes mencatat 283.270 kasus ISPA di 63 kabupaten/kota pada tujuh provinsi terdampak karhutla.",
    "penulis": "Nisa Koswara",
    "tanggal": "2026-10-16",
    "foto": "images/ispa-karhutla-kemenkes.jpg",
    "kreditFoto": "detik.com",
    "populer": true,
    "isi": [
      "JAKARTA - Kementerian Kesehatan (Kemenkes) mencatat 283.270 kasus infeksi saluran pernapasan akut (ISPA) di wilayah terdampak kebakaran hutan dan lahan (karhutla) di Indonesia selama periode 18 Agustus hingga 13 Oktober 2026. Kasus tersebut tersebar di 63 kabupaten/kota pada tujuh provinsi.",
      "Berdasarkan laporan TVRI News pada 14 Oktober 2026 dan CNN Indonesia pada 16 Oktober 2026, data tersebut disampaikan Direktur Kesehatan Lingkungan Kemenkes, Then Suyanti, dalam konferensi pers perkembangan penanganan karhutla di Jakarta.",
      "Dari total kasus yang tercatat, sebanyak 63.711 kasus dialami anak berusia 0–5 tahun. Sementara itu, 219.559 kasus lainnya terjadi pada kelompok usia di atas lima tahun. Hingga 13 Oktober 2026, Kemenkes juga mencatat 3.897 kasus ISPA harian.",
      "Kalimantan Selatan menjadi provinsi dengan jumlah kasus ISPA tertinggi, yakni 74.636 kasus. Posisi berikutnya ditempati Sumatera Selatan dengan 74.458 kasus. Kedua provinsi tersebut mencatat jumlah kasus yang relatif berdekatan.",
      "\“Dari 12 kabupaten/kota yang terdampak, kualitas udaranya berada dalam kategori berbahaya. Sembilan wilayah di antaranya bahkan tercatat memiliki kualitas udara dalam kategori sangat tidak sehat,\” ujar Then Suyanti, sebagaimana dikutip dari laporan TVRI News.",
      "Asap karhutla mengandung berbagai polutan yang dapat mengganggu kesehatan, termasuk partikel halus PM2.5, karbon monoksida, nitrogen dioksida, dan senyawa organik beracun. Paparan polutan tersebut berisiko memengaruhi sistem pernapasan, terutama bagi masyarakat yang tinggal di wilayah dengan kualitas udara buruk.",
      "Dalam laporan CNN Indonesia, Kemenkes menjelaskan bahwa paparan asap dapat memicu gejala ISPA, seperti batuk, pilek, sesak napas, dan radang tenggorokan. Asap juga dapat memperburuk kondisi penderita asma dan penyakit paru obstruktif kronis (PPOK), serta menyebabkan iritasi pada mata dan kulit.",
      "Anak-anak, lanjut usia, ibu hamil, penderita penyakit pernapasan, dan pekerja yang beraktivitas di luar ruangan termasuk kelompok yang perlu mendapat perhatian dalam penanganan dampak kesehatan akibat karhutla.",
      "Untuk mengantisipasi dampak kesehatan tersebut, Kemenkes melakukan koordinasi dengan dinas kesehatan di wilayah terdampak. TVRI News juga melaporkan adanya koordinasi dengan Kementerian Pendidikan Dasar dan Menengah serta Kementerian Agama terkait penerapan pembelajaran jarak jauh di wilayah terdampak.",
      "Jumlah kasus yang mencapai ratusan ribu menunjukkan besarnya tantangan kesehatan masyarakat di tengah penanganan karhutla. Pemantauan kualitas udara dan kesiapan layanan kesehatan menjadi bagian penting dalam mengantisipasi risiko gangguan kesehatan di wilayah terdampak."
    ],
    "sumber": [
      "TVRI News, “Kemenkes Catat 283.270 Kasus ISPA Akibat Karhutla di Tujuh Provinsi”, 14 Oktober 2026;",
      "CNN Indonesia, “Kasus ISPA Akibat Karhutla di Indonesia Tembus 283 Ribu”, 16 Oktober 2026."
    ]
  },
  {
    "id": "gaza-pasokan-terhenti",
    "kategori": "Dunia",
    "judul": "Pasokan Barang Terhenti, Krisis Kemanusiaan di Gaza Kembali Mengancam",
    "ringkasan": "Pasokan barang komersial ke Gaza dilaporkan terhenti, dan UNICEF memperingatkan kemajuan penanganan malnutrisi masih rapuh.",
    "penulis": "Rio Valent Fadilah",
    "tanggal": "2026-10-16",
    "foto": "images/gaza-pasokan-terhenti.jpg",
    "kreditFoto": "Reuters",
    "populer": true,
    "isi": [
      "Bandung— Krisis kemanusiaan di Jalur Gaza kembali menghadapi ancaman setelah pasokan barang komersial dari Israel dilaporkan terhenti pada pertengahan Oktober 2026. Kondisi ini menimbulkan kekhawatiran terhadap ketersediaan pangan dan kebutuhan dasar masyarakat Palestina yang sebagian besar masih bergantung pada bantuan kemanusiaan setelah bertahun-tahun mengalami konflik dan pengungsian.",
      "Dilansir dari Reuters pada 16 Oktober 2026, badan Perserikatan Bangsa-Bangsa (PBB) untuk anak-anak, UNICEF, memperingatkan bahwa kemajuan dalam penanganan malnutrisi atau kekurangan gizi di Gaza masih rapuh. Gangguan pasokan barang dinilai dapat menghambat upaya pemenuhan kebutuhan pangan bagi anak-anak dan keluarga yang terdampak konflik.",
      "Juru bicara UNICEF, Ricardo Pires, menegaskan bahwa pasokan barang komersial dan bantuan kemanusiaan perlu terus mengalir secara konsisten. Menurutnya, gangguan berkepanjangan dapat berdampak terhadap anak-anak yang masih membutuhkan makanan, layanan, dan kebutuhan dasar lainnya. Ricardo Pires memperingatkan, \“Dampak terhadap anak-anak tentu akan dirasakan jika situasi ini tidak segera diselesaikan.\” Pernyataan tersebut menegaskan bahwa terhentinya pasokan berpotensi menghambat pemulihan kondisi anak-anak di Gaza.",
      "Penghentian pasokan komersial tersebut dilaporkan berkaitan dengan perselisihan mengenai pungutan terhadap pedagang di Gaza. Otoritas Israel menyatakan bahwa pedagang menghentikan koordinasi pengiriman karena keberatan terhadap pungutan yang diberlakukan Hamas. Sementara itu, Hamas menyebut pungutan tersebut sebagai sumbangan untuk membantu masyarakat yang membutuhkan. Perbedaan keterangan tersebut menunjukkan bahwa persoalan distribusi barang tidak hanya berkaitan dengan akses perbatasan, tetapi juga dengan mekanisme perdagangan di wilayah tersebut.",
      "Meski demikian, pengiriman bantuan kemanusiaan dilaporkan masih berlangsung. Reuters pada 15 Oktober 2026 memberitakan bahwa jumlah truk yang memasuki Gaza diperkirakan turun menjadi sekitar 300 truk per hari, mencakup bantuan kemanusiaan dan barang komersial. Angka tersebut berada di bawah target 600 truk per hari yang disebut dalam kesepakatan yang dimediasi Amerika Serikat. Namun, angka tersebut merupakan perkiraan yang diberitakan dan tidak berarti seluruh truk membawa jenis bantuan yang sama.",
      "Persoalan pasokan kebutuhan dasar juga berlangsung di tengah kondisi pengungsian dan kerusakan infrastruktur yang belum pulih. Dalam laporan situasi kemanusiaan yang diterbitkan pada 2 Oktober 2026, Kantor PBB untuk Koordinasi Urusan Kemanusiaan (OCHA) menyebut bahwa mitra kemanusiaan telah menyalurkan bantuan pangan kepada sekitar 220.000 keluarga atau lebih dari 840.000 orang di Gaza selama September. Setiap keluarga menerima satu paket pangan dan satu karung tepung seberat 25 kilogram, yang diperkirakan mencukupi sekitar 50 persen kebutuhan kalori minimum.",
      "Data tersebut memperlihatkan besarnya kebutuhan pangan masyarakat yang belum sepenuhnya terpenuhi. Ketika pasokan komersial terganggu, akses terhadap kebutuhan sehari-hari semakin berisiko, terutama bagi keluarga yang tidak memiliki penghasilan memadai untuk membeli barang di pasar.",
      "Di tengah kondisi tersebut, UNICEF menyerukan agar seluruh jalur penyeberangan tetap dibuka sehingga bantuan dan barang kebutuhan pokok dapat masuk secara berkelanjutan. Seruan ini menjadi penting mengingat pemulihan kondisi gizi anak-anak di Gaza masih rentan terhadap gangguan pasokan. Ricardo Pires menegaskan, \“Kita tidak bisa kembali ke situasi ketika anak-anak dan keluarga tidak mendapatkan seluruh pasokan, barang, dan layanan yang mereka butuhkan.\” Oleh karena itu, kepastian distribusi bantuan menjadi faktor penting untuk mempertahankan kemajuan penanganan kekurangan gizi sekaligus mencegah kondisi kemanusiaan di Gaza kembali memburuk.",
      "Di tengah situasi tersebut, keberlanjutan bantuan, ketersediaan pangan, dan akses masyarakat terhadap kebutuhan dasar masih menjadi persoalan mendesak di Gaza. Kelancaran distribusi diperlukan agar warga sipil, khususnya anak-anak, tidak kembali menanggung dampak paling berat dari krisis yang berkepanjangan."
    ],
    "sumber": []
  },
  {
    "id": "imf-proyeksi-ekonomi-indonesia",
    "kategori": "Ekonomi",
    "judul": "IMF Proyeksikan Pertumbuhan Ekonomi Indonesia Stabil di Angka 5,1 Persen",
    "ringkasan": "IMF memproyeksikan pertumbuhan ekonomi Indonesia tetap 5,1 persen untuk tahun 2026 dan 2027.",
    "penulis": "Tathita Nathania Wijaya",
    "tanggal": "2026-10-16",
    "foto": "images/imf-proyeksi-ekonomi-indonesia.jpg",
    "kreditFoto": "Ilustrasi International Money Fund (IMF) Maxx Studio",
    "isi": [
      "JAKARTA — Dana Moneter Internasional (IMF) dalam laporan World Economic Outlook (WEO) edisi Oktober 2026 memproyeksikan pertumbuhan ekonomi Indonesia tetap stabil di angka 5,1 persen untuk tahun 2026 dan 2027. Di lansir Kompas.com, Kementerian Keuangan RI, dan Laporan IMF WEO Oktober 2026. Di kutip bahwa dari Proyeksi ini menempatkan performa ekonomi nasional berada di atas rata-rata pertumbuhan kawasan Asia Pasifik maupun kelompok negara ASEAN-5.",
      "Meski fundamental ekonomi domestik dinilai tetap berdaya tahan, laporan IMF menggarisbawahi sejumlah tantangan yang perlu diwaspadai. Sektor pertanian di Indonesia, bersama beberapa negara berkembang lainnya, disorot menghadapi tekanan kenaikan biaya produksi akibat fluktuasi harga energi impor dan bahan baku pupuk dunia.",
      "Di sisi keuangan, tingkat inflasi nasional diperkirakan bergerak pada kisaran 3,3 persen untuk tahun 2026 sebelum melandai ke tingkat 2,8 persen pada 2027. Sementara itu, dinamika pasar modal tanah air tengah mengalami penyesuaian intensif di tengah ketidakpastian suku bunga global dan pergerakan arus modal asing.",
      "Kementerian Keuangan dan otoritas moneter menyatakan terus memperkuat koordinasi kebijakan fiskal serta ketahanan investasi guna menjaga stabilitas makroekonomi sekaligus mengantisipasi dampak dari ketegangan geopolitik dan perlambatan pertumbuhan ekonomi global."
    ],
    "sumber": [
      "Kompas.com, Kementerian Keuangan RI, dan Laporan IMF WEO Oktober 2026."
    ]
  },
  {
    "id": "revitalisasi-35769-sekolah",
    "kategori": "Pendidikan",
    "judul": "Kemendikdasmen Targetkan Revitalisasi 35.769 Sekolah Rampung Akhir 2026",
    "ringkasan": "Alokasi anggaran Rp26 triliun dikucurkan untuk menjangkau puluhan ribu satuan pendidikan dari jenjang PAUD hingga SMA.",
    "penulis": "Raihan Brataxenna",
    "tanggal": "2026-10-16",
    "foto": "images/revitalisasi-35769-sekolah.jpg",
    "kreditFoto": "Ilustrasi revitalisasi sarana dan prasarana sekolah di Indonesia",
    "isi": [
      "JAKARTA — Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) terus menjalankan program revitalisasi satuan pendidikan untuk meningkatkan kualitas sarana dan prasarana sekolah di Indonesia. Pada 2026, program tersebut menjangkau 35.769 satuan pendidikan dari jenjang PAUD hingga SMA. Hingga Oktober 2026, sebanyak 4.374 sekolah telah menyelesaikan pembangunan.",
      "Berdasarkan siaran pers Kemendikdasmen pada 15 Oktober 2026, program revitalisasi dilaksanakan melalui skema swakelola. Program ini bertujuan memperbaiki fasilitas pendidikan agar kegiatan belajar mengajar dapat berlangsung dengan lebih aman dan nyaman.",
      "Pemerintah mengalokasikan anggaran sebesar Rp26 triliun untuk mendukung pelaksanaan program revitalisasi pada tahun ini. Dana tersebut digunakan untuk memperbaiki bangunan sekolah yang sudah ada serta mendukung pembangunan unit sekolah baru di sejumlah wilayah Indonesia.",
      "Pelaksanaan program revitalisasi menunjukkan perkembangan yang berbeda di setiap daerah. Di Provinsi Aceh, sebanyak 755 sekolah telah menyelesaikan pembangunan. Sementara itu, pembangunan di sejumlah sekolah di Nusa Tenggara Timur dan DKI Jakarta masih berlangsung.",
      "Direktur Jenderal PAUD, Pendidikan Dasar, dan Pendidikan Nonformal dan Informal Kemendikdasmen, Gogot Suharwoto, menekankan pentingnya menyediakan ruang belajar yang layak bagi para siswa. Menurutnya, kondisi ruang kelas yang aman dan nyaman merupakan salah satu faktor penting dalam menciptakan proses pembelajaran yang efektif.",
      "\“Ruang kelas yang aman dan nyaman adalah prasyarat pembelajaran efektif,\” ujarnya.",
      "Dilansir dari siaran pers Kementerian Pendidikan Dasar dan Menengah pada 15 Oktober 2026, program revitalisasi sekolah diharapkan dapat meningkatkan kualitas fasilitas pendidikan di berbagai daerah Indonesia.",
      "Selain memperbaiki kondisi bangunan, program revitalisasi juga diharapkan dapat membantu sekolah menyediakan fasilitas yang sesuai dengan kebutuhan siswa dan tenaga pendidik. Kualitas pembangunan perlu diperhatikan agar fasilitas yang disediakan dapat digunakan dalam jangka panjang.",
      "Dengan adanya program ini, pemerintah berharap semakin banyak sekolah di Indonesia memiliki lingkungan belajar yang layak. Penyelesaian pembangunan sesuai target menjadi hal penting agar manfaat program dapat segera dirasakan oleh siswa, guru, dan masyarakat."
    ],
    "sumber": [
      "Kementerian Pendidikan Dasar dan Menengah, “Revitalisasi 2026 Jangkau 35.769 Sekolah melalui Swakelola, Ditargetkan Rampung Akhir Tahun”, 15 Oktober 2026"
    ]
  },
  {
    "id": "persib-vs-the-cong-viettel",
    "kategori": "Olahraga",
    "judul": "Persib Bandung Tundukkan The Cong Viettel 1-0, Maung Bandung Amankan Kemenangan di Asia",
    "ringkasan": "Gol penalti Mariano Peralta membawa Persib Bandung menang 1-0 atas The Cong Viettel di AFC Champions League Two.",
    "penulis": "Raihan Brataxenna",
    "tanggal": "2026-10-14",
    "foto": "images/persib-vs-the-cong-viettel.jpg",
    "kreditFoto": "detikcom",
    "isi": [
      "BANDUNG — Persib Bandung berhasil meraih kemenangan 1-0 atas wakil Vietnam, The Cong Viettel, dalam pertandingan AFC Champions League Two pada 14 Oktober 2026. Hasil tersebut menjadi tambahan penting bagi Maung Bandung dalam persaingan di kompetisi antarklub Asia.",
      "Pertandingan berlangsung dengan persaingan ketat antara kedua tim. Persib berusaha memanfaatkan peluang yang tersedia untuk menembus pertahanan lawan, sementara The Cong Viettel berupaya memberikan perlawanan sepanjang pertandingan.",
      "Gol kemenangan Persib dicetak oleh Mariano Peralta melalui tendangan penalti. Gol tersebut menjadi penentu hasil akhir pertandingan dengan skor 1-0 untuk keunggulan tim asal Bandung tersebut.",
      "Pelatih Persib Bandung, Igor Tolic, mengungkapkan rasa bangganya terhadap para pemain setelah kemenangan tersebut. Ia mengapresiasi kekompakan dan semangat para pemain yang mampu mempertahankan keunggulan hingga pertandingan berakhir.",
      "\“Saya memiliki sekelompok orang di ruang ganti yang membuat saya sangat bangga,\” ujarnya.",
      "Dilansir dari pemberitaan detikJabar, Igor Tolic memberikan apresiasi terhadap para pemain Persib setelah pertandingan tersebut. Menurutnya, kekompakan dan kerja sama tim menjadi salah satu hal penting dalam menghadapi pertandingan dengan tekanan tinggi.",
      "Kemenangan ini menjadi hasil positif bagi Persib dalam menghadapi persaingan di level Asia. Selain menambah kepercayaan diri para pemain, hasil tersebut juga menunjukkan pentingnya menjaga konsentrasi dan memanfaatkan peluang dalam pertandingan.",
      "Dukungan Bobotoh juga menjadi bagian penting dari perjalanan Persib. Sebagai salah satu klub dengan basis pendukung besar di Indonesia, Persib diharapkan mampu mempertahankan performa positif dan terus memberikan hasil yang membanggakan bagi masyarakat Bandung.",
      "Kemenangan atas The Cong Viettel menjadi modal positif bagi Persib untuk melanjutkan perjuangan di kompetisi Asia. Meski demikian, tim tetap perlu mempersiapkan diri dengan baik karena persaingan pada pertandingan selanjutnya akan menjadi tantangan tersendiri."
    ],
    "sumber": [
      "Bola.net, kumpulan berita Persib Bandung dan hasil pertandingan kompetisi Asia, Oktober 2026.",
      "Liga Indonesia, hasil pertandingan Persib Bandung musim 2026/2027"
    ]
  },
  {
    "id": "editorial-karhutla-pencegahan",
    "kategori": "Editorial",
    "judul": "Karhutla Bukan Sekadar Api, Pemerintah Harus Bertindak Sebelum Terlambat",
    "ringkasan": "Hutan tidak cukup diselamatkan ketika api sudah membakar; pencegahan dan penegakan hukum harus berjalan bersama.",
    "penulis": "Itsna Nursofiatun Ni’mah",
    "tanggal": "2026-09-29",
    "foto": "images/opini-karhutla-pencegahan.jpg",
    "kreditFoto": "",
    "isi": [
      "Kebakaran hutan dan lahan (karhutla) masih menjadi persoalan lingkungan yang membutuhkan perhatian serius. Setiap kali kebakaran terjadi, upaya pemadaman kerap menjadi fokus utama. Padahal, keberhasilan penanganan karhutla tidak seharusnya hanya diukur dari seberapa cepat api berhasil dipadamkan, tetapi juga dari seberapa kuat upaya pencegahan dilakukan agar kebakaran tidak terus berulang.",
      "Karhutla bukan hanya menyebabkan kerusakan hutan dan lahan, tetapi juga berdampak langsung terhadap kehidupan masyarakat. Asap yang dihasilkan dapat mengganggu kesehatan, menurunkan kualitas udara, serta menghambat aktivitas sehari-hari. Selain itu, kebakaran turut mengancam habitat satwa dan merusak keseimbangan ekosistem. Dengan dampak sebesar itu, penanganan karhutla tidak boleh hanya bersifat reaktif atau menunggu bencana terjadi.",
      "Pemberitaan ANTARA News pada 29 September 2026 menyoroti pentingnya penelusuran tanggung jawab pihak-pihak yang mengelola atau memanfaatkan lahan terbakar, termasuk individu maupun korporasi yang diduga terlibat dalam kasus karhutla. Hal ini memperlihatkan bahwa persoalan kebakaran hutan tidak dapat dilepaskan dari pengawasan terhadap pengelolaan lahan dan penegakan hukum. Pemerintah tidak boleh hanya berfokus pada pelaku pembakaran di lapangan, tetapi juga harus memastikan adanya pemeriksaan menyeluruh terhadap pihak-pihak yang memiliki tanggung jawab atas wilayah tersebut.",
      "Langkah pemerintah dalam membentuk Satuan Tugas Pengendalian Kebakaran Lahan 2026, sebagaimana diberitakan Kementerian Lingkungan Hidup pada 22 April 2026, patut diapresiasi sebagai upaya memperkuat respons dini terhadap ancaman karhutla. Namun, pembentukan satuan tugas tidak boleh berhenti sebagai kebijakan administratif. Harus ada tindakan nyata melalui pengawasan wilayah rawan kebakaran, pemantauan titik panas, kesiapan petugas di lapangan, serta edukasi masyarakat mengenai bahaya pembakaran lahan.",
      "Di samping pencegahan, penegakan hukum juga harus menjadi perhatian utama. Penyelidikan terhadap kasus karhutla perlu dilakukan secara transparan, menyeluruh, dan berdasarkan bukti. Individu maupun korporasi yang terbukti melanggar aturan harus mempertanggungjawabkan perbuatannya tanpa memandang besar atau kecilnya pihak yang terlibat. Meski demikian, proses hukum tetap harus menjunjung asas praduga tak bersalah agar penegakan hukum berjalan secara adil.",
      "Persoalan karhutla juga tidak seharusnya hanya membebankan tanggung jawab kepada masyarakat. Pemerintah memiliki kewajiban memastikan pengawasan berjalan efektif, sementara pengelola lahan harus mematuhi ketentuan lingkungan. Masyarakat pun perlu dilibatkan melalui kebiasaan tidak membakar lahan sembarangan dan melaporkan kebakaran sejak dini. Artinya, penanganan karhutla membutuhkan kerja sama seluruh pihak, tetapi tanggung jawab setiap pihak harus tetap jelas dan tidak saling dilemparkan.",
      "Sudah saatnya pemerintah menempatkan pencegahan sebagai prioritas utama dalam pengendalian karhutla. Jangan sampai kebijakan baru bergerak setelah api meluas dan masyarakat mulai merasakan dampaknya. Pengawasan yang lemah, penegakan hukum yang tidak konsisten, serta minimnya tindakan pencegahan hanya akan membuat persoalan yang sama terus berulang setiap tahun.",
      "Pada akhirnya, hutan tidak cukup diselamatkan ketika api sudah membakar. Pemerintah harus memastikan bahwa hutan dijaga sebelum kebakaran terjadi. Pencegahan yang konsisten, pengawasan yang tegas, serta penegakan hukum yang transparan merupakan langkah yang tidak bisa ditawar. Sebab, melindungi hutan bukan hanya tentang menjaga lingkungan, melainkan juga melindungi kesehatan, kehidupan, dan masa depan masyarakat."
    ],
    "sumber": []
  },
  {
    "id": "relasi-kopi-cibiru",
    "kategori": "Feature",
    "judul": "Relasi Kopi Cibiru: Tempat Nongkrong Favorit Mahasiswa UIN Bandung",
    "ringkasan": "Menjadi ruang nyaman bagi mahasiswa UIN Bandung untuk berdiskusi, mengerjakan tugas, hingga rapat organisasi.",
    "penulis": "Itsna Nursofiatun Ni’mah",
    "tanggal": "2026-09-22",
    "foto": "images/relasi-kopi-cibiru.jpg",
    "kreditFoto": "",
    "isi": [
      "Bandung – Di balik deretan permukiman warga di kawasan Cibiru, Bandung, terdapat sebuah kafe yang ramai dikunjungi anak muda. Bukan sekadar tempat untuk menikmati kopi, Relasi Kopi hadir sebagai ruang nyaman bagi mahasiswa untuk berdiskusi, mengerjakan tugas, hingga mengadakan kegiatan komunitas.",
      "Manajer area Relasi Kopi, Tomi Roganda, mengatakan bahwa kafe tersebut didirikan dengan semangat menciptakan ruang kolaborasi bagi mahasiswa dan masyarakat sekitar.",
      "“Kami ingin tempat ini menjadi wadah untuk teman-teman mahasiswa, komunitas, anak muda, untuk berkembang bersama,” ujar Tomi saat diwawancarai pada Selasa (22/09/2026).",
      "Relasi Kopi berdiri sejak Juli 2023. Lokasinya cukup strategis karena berada tidak jauh dari kawasan kampus, meskipun letaknya agak tersembunyi dari jalan utama. Menurut Tomi, pemilihan lokasi tersebut juga bertujuan agar kafe dapat dikunjungi oleh berbagai kalangan, tidak hanya mahasiswa.",
      "“Agar tidak cuma mahasiswa, tetapi juga warga sekitar bisa masuk,” ujarnya.",
      "Dibandingkan dengan kafe lain di sekitarnya, Tomi menyebut desain tempat dan kualitas menu menjadi daya tarik tersendiri. Suasana yang nyaman dan estetik membuat kafe ini cocok dijadikan tempat berkumpul sekaligus menyelesaikan pekerjaan.",
      "“Tempatnya aesthetic banget, cocok untuk foto-foto, tapi juga nyaman buat kerja. Terus makanan dan minuman kita kualitasnya dijaga,” kata Tomi.",
      "Bagi mahasiswa UIN Bandung, Relasi Kopi menjadi salah satu pilihan tempat untuk mengerjakan berbagai keperluan perkuliahan. Salah satu pengunjung, Clara Wulandari, mengaku kerap mendatangi kafe tersebut untuk mengerjakan tugas kelompok maupun mengadakan rapat organisasi.",
      "“Kalau kerja kelompok atau rapat organisasi, pasti ke Relasi. Tempatnya luas, nyaman, dan makanannya enak,” ujar Clara saat diwawancarai pada hari yang sama.",
      "Menurut Clara, suasana yang mendukung menjadi salah satu alasan dirinya sering berkunjung. Fasilitas seperti jaringan Wi-Fi, ketersediaan stopkontak, jam operasional 24 jam, serta ruangan tertutup untuk diskusi privat turut menunjang aktivitas mahasiswa di kafe tersebut.",
      "Selain tempat yang nyaman, pilihan menu juga menjadi daya tarik bagi pengunjung. Sejumlah menu yang tersedia di antaranya kopi, Chicken Katsu, serta makanan ringan seperti French Fries yang dapat dinikmati sambil mengerjakan tugas atau berkumpul bersama teman.",
      "Dari segi harga, Relasi Kopi juga menawarkan pilihan menu yang dapat dijangkau mahasiswa. Clara menyebut harga menu berkisar antara Rp12.000 hingga Rp32.000.",
      "“Harga menunya mulai dari Rp12.000–Rp32.000, cocok banget buat kantong mahasiswa,” pungkasnya."
    ],
    "sumber": []
  }
];
