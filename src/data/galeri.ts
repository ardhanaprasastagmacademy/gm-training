export interface ItemGaleri {
  id: string;
  judul: string;
  kategori: "web-dev" | "pelatihan" | "marketing" | "branding";
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
    judul: "Kemitraan Jurnalistik & Portal Media Digital Radar Kediri",
    kategori: "marketing",
    kategoriLabel: "Media & Digital",
    lokasi: "Kediri",
    tanggal: "24 Oktober 2026",
    deskripsi:
      "Kolaborasi pengembangan liputan konten multimedia, manajemen portal berita digital, serta integrasi analitik pembaca bersama tim redaksi Jawa Pos Radar Kediri.",
    gambar: "/images/portofolio/kka-radar-kediri.webp",
    tag: ["Media Massa", "SEO Portal", "Jurnalistik Digital"],
  },
  {
    id: "galeri-2",
    judul: "Pelatihan Kejuruan Terpadu & Sinkronisasi Industri SKARIGA",
    kategori: "pelatihan",
    kategoriLabel: "Vokasi & Kejuruan",
    lokasi: "Kota Malang",
    tanggal: "18 Oktober 2026",
    deskripsi:
      "Pelatihan intensif penyusunan CV profesional serta bimbingan teknis pembuatan website portofolio interaktif berbasis HTML, CSS, dan JavaScript bersama mentor industri.",
    gambar: "/images/portofolio/pelatihan-smk3pgri.webp",
    tag: ["Pelatihan CV", "Website Portofolio", "HTML, CSS, JS"],
  },
  {
    id: "galeri-3",
    judul: "Pelatihan Literasi Digital & Pengenalan IT Insan Kamil",
    kategori: "pelatihan",
    kategoriLabel: "Pelatihan IT",
    lokasi: "Jawa Timur",
    tanggal: "14 Oktober 2026",
    deskripsi:
      "Program edukasi teknologi terapan dan literasi digital praktis bagi generasi muda dan siswa binaan dengan pendampingan instruktur berpengalaman.",
    gambar: "/images/portofolio/pelatihan-insan-kamil.webp",
    tag: ["Edukasi IT", "Literasi Digital", "Workshop Coding"],
  },
  {
    id: "galeri-4",
    judul: "Sistem Registrasi Digital & Event Management QRIS Run",
    kategori: "web-dev",
    kategoriLabel: "Web & FinTech",
    lokasi: "Jawa Timur",
    tanggal: "08 Oktober 2026",
    deskripsi:
      "Implementasi portal pendaftaran peserta lomba lari berbasis web terintegrasi sistem pembayaran instan QRIS otomatis dan generator tiket elektronik real-time.",
    gambar: "/images/portofolio/qris-run.webp",
    tag: ["Web Development", "QRIS Payment", "E-Ticket System"],
  },
  {
    id: "galeri-5",
    judul: "Seminar Digitalisasi UMKM & Adopsi Teknologi XL Smart",
    kategori: "marketing",
    kategoriLabel: "Digital Marketing",
    lokasi: "Malang Raya",
    tanggal: "02 Oktober 2026",
    deskripsi:
      "Seminar dan pendampingan akselerasi digital bagi pelaku UMKM mencakup optimalisasi toko digital, periklanan online, dan pemanfaatan konektivitas modern.",
    gambar: "/images/portofolio/seminar-umkm-xlsmart.webp",
    tag: ["UMKM Go Digital", "Digital Ads", "E-Commerce"],
  },
  {
    id: "galeri-6",
    judul: "Pengembangan Fasilitas & Perlengkapan Pelatihan Seminar Kit",
    kategori: "branding",
    kategoriLabel: "Branding & Merchandise",
    lokasi: "Kota Malang",
    tanggal: "28 September 2026",
    deskripsi:
      "Perancangan visual identitas korporat dan produksi paket seminar kit eksklusif untuk standarisasi fasilitas program pelatihan dan workshop profesional.",
    gambar: "/images/portofolio/seminarkits.webp",
    tag: ["Brand Identity", "Merchandise", "Event Production"],
  },
];
