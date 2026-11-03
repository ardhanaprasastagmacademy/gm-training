export interface ItemPortofolio {
  id: string;
  judul: string;
  kategori: "web-dev" | "pelatihan" | "marketing" | "branding";
  kategoriLabel: string;
  klien: string;
  lokasi: string;
  peserta: string;
  durasi: string;
  deskripsi: string;
  gambar: string;
  techStack: string[];
  luaran: string;
}

export const dataPortofolio: ItemPortofolio[] = [
  {
    id: "kka-radar-kediri",
    judul: "Kemitraan Jurnalistik & Portal Media Digital Radar Kediri",
    kategori: "marketing",
    kategoriLabel: "Media & Digital",
    klien: "Jawa Pos Radar Kediri",
    lokasi: "Kediri",
    peserta: "Peserta Magang Mahasiswa Multimedia & Jurnalistik Digital",
    durasi: "Program Magang 3 Bulan",
    deskripsi:
      "Kolaborasi pengembangan liputan konten multimedia, manajemen publikasi portal berita online, serta integrasi analitik pembaca digital bersama tim redaksi Jawa Pos Radar Kediri.",
    gambar: "/images/portofolio/kka-radar-kediri.webp",
    techStack: ["WordPress CMS", "SEO Analytics", "Content Writing", "Social Media Management"],
    luaran: "Publikasi Artikel Digital & Dashboard Analisis Pembaca",
  },
  {
    id: "pelatihan-smk3pgri",
    judul: "Pelatihan Kejuruan Terpadu & Sinkronisasi Industri SKARIGA",
    kategori: "pelatihan",
    kategoriLabel: "Vokasi & Kejuruan",
    klien: "SMK PGRI 3 Malang (SKARIGA)",
    lokasi: "Kota Malang",
    peserta: "Siswa PKL Jurusan RPL & TKJ bersama Guru Pendamping",
    durasi: "Pendampingan 4 Bulan",
    deskripsi:
      "Penyelarasan kurikulum vokasi SMK dengan standar industri teknologi, mencakup praktik rekayasa perangkat lunak, perakitan infrastruktur jaringan, dan simulasi alur kerja industri nyata.",
    gambar: "/images/portofolio/pelatihan-smk3pgri.webp",
    techStack: ["MikroTik RouterOS", "Linux Server", "Clean Code RPL", "Uji Kompetensi Kejuruan"],
    luaran: "Portofolio Proyek Siswa & Standar Kompetensi Industri",
  },
  {
    id: "pelatihan-insan-kamil",
    judul: "Pelatihan Literasi Digital & Pengenalan IT Insan Kamil",
    kategori: "pelatihan",
    kategoriLabel: "Pelatihan IT & Edukasi",
    klien: "Yayasan Insan Kamil",
    lokasi: "Jawa Timur",
    peserta: "Tim Instruktur & Mahasiswa Magang Gemilang Training",
    durasi: "Workshop Intensif",
    deskripsi:
      "Program pelatihan dan pendampingan teknologi informasi terapan, membekali generasi muda dengan pemahaman dasar coding, pemanfaatan perangkat lunak digital, dan etika berteknologi.",
    gambar: "/images/portofolio/pelatihan-insan-kamil.webp",
    techStack: ["Modul Pembelajaran", "Dasar Pemrograman", "Google Workspace", "Literasi Digital"],
    luaran: "Modul Praktik & Sertifikasi Peserta Pelatihan",
  },
  {
    id: "qris-run",
    judul: "Sistem Registrasi Digital & Event Management QRIS Run",
    kategori: "web-dev",
    kategoriLabel: "Web & FinTech",
    klien: "Panitia QRIS Run & Komunitas Digital",
    lokasi: "Jawa Timur",
    peserta: "Tim Pengembang Web & Event Operations Gemilang Training",
    durasi: "2 Bulan Sprint",
    deskripsi:
      "Implementasi sistem registrasi peserta online berbasis web, integrasi pembayaran digital QRIS instan otomatis, validasi tiket elektronik, dan pemantauan peserta secara real-time.",
    gambar: "/images/portofolio/qris-run.webp",
    techStack: ["Web Portal", "QRIS Payment Gateway", "E-Ticket Generator", "Real-Time Tracking"],
    luaran: "Platform Pendaftaran Online & E-Ticket QR Code",
  },
  {
    id: "seminar-umkm-xlsmart",
    judul: "Seminar Digitalisasi UMKM & Adopsi Teknologi XL Smart",
    kategori: "marketing",
    kategoriLabel: "Digital Marketing & UMKM",
    klien: "Komunitas UMKM & XL Smart Partner",
    lokasi: "Malang Raya",
    peserta: "Pelaku UMKM Binaan & Mahasiswa Magang Digital Business",
    durasi: "Seminar & Inkubasi",
    deskripsi:
      "Seminar pemberdayaan pelaku usaha mikro melalui pemanfaatan ekosistem telekomunikasi, strategi promosi online, manajemen toko digital, dan optimasi penjualan multi-channel.",
    gambar: "/images/portofolio/seminar-umkm-xlsmart.webp",
    techStack: ["Digital Ads", "E-Commerce Onboarding", "Social Media Marketing", "Marketplace Opt"],
    luaran: "Toko Online Terverifikasi & Strategi Kampanye Digital",
  },
  {
    id: "seminarkits",
    judul: "Pengembangan Fasilitas & Perlengkapan Pelatihan Seminar Kit",
    kategori: "branding",
    kategoriLabel: "Branding & Merchandise",
    klien: "Mitra Korporasi & Institusi Pendidikan",
    lokasi: "Kota Malang",
    peserta: "Tim Kreatif DKV & Operasional Workshop",
    durasi: "Dukungan Program Berkelanjutan",
    deskripsi:
      "Perancangan identitas visual, desain merchandise eksklusif, serta penyediaan paket seminar kit profesional berstandar korporat guna mendukung kenyamanan dan pengalaman peserta pelatihan.",
    gambar: "/images/portofolio/seminarkits.webp",
    techStack: ["Branding Identity", "Merchandise Design", "Stationery Production", "Event Kits"],
    luaran: "Paket Seminar Kit Lengkap & Material Identitas Acara",
  },
];
