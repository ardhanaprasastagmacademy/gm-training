export interface ItemPortofolio {
  id: string;
  judul: string;
  kategori: "web-dev" | "ui-ux" | "jaringan" | "data-marketing";
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
    id: "portofolio-1",
    judul: "Sistem Informasi Manajemen PKL & Logbook Terpadu",
    kategori: "web-dev",
    kategoriLabel: "Web Development",
    klien: "Konsorsium Pendidikan & Industri Malang",
    lokasi: "Kota Malang",
    peserta: "Tim Magang Siswa SMK RPL & Mahasiswa D4 TRPL",
    durasi: "3 Bulan Pengerjaan",
    deskripsi:
      "Aplikasi web modern berbasis antarmuka responsif dan dashboard interaktif untuk pencatatan logbook kegiatan harian, presensi GPS, serta monitoring progres bimbingan mentor industri secara real-time.",
    gambar: "/images/portofolio/porto-1.webp",
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST API", "PostgreSQL"],
    luaran: "Platform Web Responsif & Dokumentasi API",
  },
  {
    id: "portofolio-2",
    judul: "Redesign UI/UX & Design System Portal Pembelajaran",
    kategori: "ui-ux",
    kategoriLabel: "UI/UX & Product Design",
    klien: "Creative Hub Gemilang Training",
    lokasi: "Kota Malang",
    peserta: "Mahasiswa Desain Komunikasi Visual & TRPL",
    durasi: "2 Bulan Sprint",
    deskripsi:
      "Perancangan antarmuka pengguna menyeluruh, riset alur pengguna (usability testing), serta penyusunan token design system modular untuk meningkatkan kemudahan navigasi dan estetika visual portal pendaftaran magang.",
    gambar: "/images/portofolio/porto-2.webp",
    techStack: ["Figma", "User Flow", "Design Tokens", "Wireframing", "Usability Testing"],
    luaran: "High-Fidelity Prototype & Interactive Design System",
  },
  {
    id: "portofolio-3",
    judul: "Infrastruktur Jaringan Server & Cloud Monitoring Multi-Branch",
    kategori: "jaringan",
    kategoriLabel: "Jaringan & DevOps",
    klien: "Politeknik Negeri Malang",
    lokasi: "Kota Malang",
    peserta: "Siswa SMK Teknik Komputer & Jaringan (TKJ)",
    durasi: "4 Bulan Pengerjaan",
    deskripsi:
      "Pembangunan topologi jaringan kantor terpusat, penguatan perimeter firewall, otomatisasi backup cloud berkala, serta konfigurasi dashboard pemantauan uptime server berstandar industri.",
    gambar: "/images/portofolio/porto-3.webp",
    techStack: ["Linux Ubuntu Server", "MikroTik RouterOS", "Docker", "Prometheus", "Grafana"],
    luaran: "Infrastruktur Server Aktif & SOP Pemeliharaan Jaringan",
  },
  {
    id: "portofolio-4",
    judul: "E-Commerce Funnel Analytics & Performance Marketing Tracker",
    kategori: "data-marketing",
    kategoriLabel: "Data & Digital Business",
    klien: "Mitra Retail Digital Malang Raya",
    lokasi: "Kota Malang",
    peserta: "Mahasiswa Sistem Informasi & SMK Bisnis Digital",
    durasi: "3 Bulan Pengerjaan",
    deskripsi:
      "Dashboard visualisasi interaktif data transaksi penjualan multi-channel, tracking rasio konversi pesanan, serta automasi laporan performa kampanye digital marketing mingguan.",
    gambar: "/images/portofolio/porto-4.webp",
    techStack: ["Looker Studio", "Python Pandas", "SQL", "Google Analytics 4", "Meta Ads Manager"],
    luaran: "Executive Analytics Dashboard & Laporan Rekomendasi Pertumbuhan",
  },
  {
    id: "portofolio-5",
    judul: "Aplikasi Mobile Katalog Produk & Pemesanan Terintegrasi",
    kategori: "web-dev",
    kategoriLabel: "Web & Mobile App",
    klien: "Asosiasi Pelaku Usaha Kreatif Malang",
    lokasi: "Kota Malang",
    peserta: "Kolaborasi Tim Frontend SMK RPL & Mahasiswa TRPL",
    durasi: "3 Bulan Pengerjaan",
    deskripsi:
      "Pengembangan aplikasi katalog interaktif dengan integrasi gateway pemesanan WhatsApp otomatis, filter kategori instan, dan optimasi kecepatan akses di perangkat mobile.",
    gambar: "/images/portofolio/porto-5.webp",
    techStack: ["Flutter", "Dart", "Firebase", "REST API", "Tailwind CSS"],
    luaran: "Aplikasi Android & Panel Admin Web",
  },
];
