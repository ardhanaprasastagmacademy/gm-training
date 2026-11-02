export interface ItemGaleri {
  id: string;
  judul: string;
  kategori: "web-dev" | "ui-ux" | "jaringan" | "data-marketing";
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
    judul: "Sistem Informasi Manajemen PKL & Logbook Terpadu",
    kategori: "web-dev",
    kategoriLabel: "Web Development",
    lokasi: "Lab Inovasi IT Polinema, Kota Malang",
    tanggal: "20 Oktober 2026",
    deskripsi:
      "Peserta magang siswa SMK RPL dan mahasiswa mendapatkan pendampingan arsitektur kode antarmuka dan praktik code review berstandar industri langsung dari Software Engineer Senior.",
    gambar: "/images/portofolio/porto-1.webp",
    tag: ["Teknologi Informasi", "Code Review", "Frontend"],
  },
  {
    id: "galeri-2",
    judul: "Redesign UI/UX & Design System Portal Pembelajaran",
    kategori: "ui-ux",
    kategoriLabel: "UI/UX & Product Design",
    lokasi: "Creative Hub Gemilang Training, Malang",
    tanggal: "16 Oktober 2026",
    deskripsi:
      "Perancangan antarmuka pengguna menyeluruh, riset alur pengguna (usability testing), serta penyusunan token design system modular untuk meningkatkan kemudahan navigasi dan estetika visual portal pendaftaran magang.",
    gambar: "/images/portofolio/porto-2.webp",
    tag: ["UI/UX Design", "Figma", "Design System"],
  },
  {
    id: "galeri-3",
    judul: "Infrastruktur Jaringan Server & Cloud Monitoring Multi-Branch",
    kategori: "jaringan",
    kategoriLabel: "Jaringan & DevOps",
    lokasi: "Digital & TRPL Hub, Malang",
    tanggal: "12 Oktober 2026",
    deskripsi:
      "Pembangunan topologi jaringan kantor terpusat, penguatan perimeter firewall, otomatisasi backup cloud berkala, serta konfigurasi dashboard pemantauan uptime server berstandar industri.",
    gambar: "/images/portofolio/porto-3.webp",
    tag: ["Jaringan", "DevOps", "Linux Server"],
  },
  {
    id: "galeri-4",
    judul: "E-Commerce Funnel Analytics & Performance Marketing Tracker",
    kategori: "data-marketing",
    kategoriLabel: "Data & Digital Business",
    lokasi: "Ruang Rapat Kolaborasi Gemilang Training, Malang",
    tanggal: "08 Oktober 2026",
    deskripsi:
      "Dashboard visualisasi interaktif data transaksi penjualan multi-channel, tracking rasio konversi pesanan, serta automasi laporan performa kampanye digital marketing mingguan.",
    gambar: "/images/portofolio/porto-4.webp",
    tag: ["Data Analytics", "Business Intelligence", "Marketing"],
  },
  {
    id: "galeri-5",
    judul: "Aplikasi Mobile Katalog Produk & Pemesanan Terintegrasi",
    kategori: "web-dev",
    kategoriLabel: "Web & Mobile App",
    lokasi: "Auditorium Gemilang Training, Jl. Soekarno Hatta, Malang",
    tanggal: "01 Oktober 2026",
    deskripsi:
      "Pengembangan aplikasi katalog interaktif dengan integrasi gateway pemesanan WhatsApp otomatis, filter kategori instan, dan optimasi kecepatan akses di perangkat mobile.",
    gambar: "/images/portofolio/porto-5.webp",
    tag: ["Mobile App", "Flutter", "E-Commerce"],
  },
];
