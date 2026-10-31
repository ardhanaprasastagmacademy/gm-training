export interface ItemGaleri {
  id: string;
  judul: string;
  kategori: "mentoring" | "praktik" | "orientasi" | "presentasi" | "kunjungan";
  kategoriLabel: string;
  lokasi: string;
  tanggal: string;
  deskripsi: string;
  gambar: string;
  tag: string[];
}

export const dataGaleri: ItemGaleri[] = [
  {
    id: "galeri-1",
    judul: "Sesi Mentoring 1-on-1 & Code Review Pengembangan Software",
    kategori: "mentoring",
    kategoriLabel: "Mentoring Industri",
    lokasi: "PT Solusi Teknologi Nusantara, Jakarta Selatan",
    tanggal: "20 Oktober 2026",
    deskripsi:
      "Peserta magang siswa SMK RPL dan mahasiswa mendapatkan pendampingan arsitektur kode antarmuka dan praktik code review berstandar industri langsung dari Software Engineer Senior.",
    gambar: "/images/galeri/galeri-1.webp",
    tag: ["Teknologi Informasi", "Code Review", "Frontend"],
  },
  {
    id: "galeri-2",
    judul: "Presentasi Kinerja Tim & Evaluasi Proyek E-Commerce Dashboard",
    kategori: "presentasi",
    kategoriLabel: "Presentasi & Evaluasi",
    lokasi: "Ruang Rapat Kolaborasi GM Training, Jakarta",
    tanggal: "16 Oktober 2026",
    deskripsi:
      "Pemaparan laporan kinerja funnel marketing, analisis data e-commerce, dan evaluasi capaian sprint proyek magang di hadapan mentor praktisi industri.",
    gambar: "/images/galeri/galeri-2.webp",
    tag: ["Digital Business", "Analisis Data", "Presentasi"],
  },
  {
    id: "galeri-3",
    judul: "Sprint Kolaborasi Desain UI/UX & Prototyping Aplikasi Mobile",
    kategori: "praktik",
    kategoriLabel: "Praktik & Kolaborasi",
    lokasi: "Creative Hub GM Training, Jakarta",
    tanggal: "12 Oktober 2026",
    deskripsi:
      "Kolaborasi intensif siswa SMK dan mahasiswa jurusan TRPL dalam menyusun wireframe, user flow, riset pasar, dan implementasi desain antarmuka sprint pertama.",
    gambar: "/images/galeri/galeri-3.webp",
    tag: ["UI/UX Design", "Sprint Collab", "TRPL & SMK"],
  },
  {
    id: "galeri-4",
    judul: "Pelepasan & Penyerahan Sertifikat Kelulusan Program Magang Nasional",
    kategori: "presentasi",
    kategoriLabel: "Kelulusan & Sertifikasi",
    lokasi: "Digital & TRPL Hub, Jakarta",
    tanggal: "08 Oktober 2026",
    deskripsi:
      "Momen kelulusan peserta magang TRPL dan Digital Business dengan penyerahan sertifikat industri resmi berstandar nasional dan konversi nilai akademik.",
    gambar: "/images/galeri/galeri-4.webp",
    tag: ["Kelulusan", "Sertifikasi Industri", "TRPL Hub"],
  },
  {
    id: "galeri-5",
    judul: "Apresiasi & Penutupan Batch Magang Bersama Mentor Praktisi",
    kategori: "orientasi",
    kategoriLabel: "Apresiasi & Budaya Kerja",
    lokasi: "Auditorium GM Training, Jakarta",
    tanggal: "01 Oktober 2026",
    deskripsi:
      "Perayaan kelulusan dan apresiasi atas dedikasi serta inovasi proyek nyata yang telah diselesaikan seluruh peserta magang selama satu semester penuh.",
    gambar: "/images/galeri/galeri-5.webp",
    tag: ["Batch Magang", "Konversi SKS", "Alumni"],
  },
];

