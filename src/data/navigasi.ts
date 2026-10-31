export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const headerNav: NavItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Tentang",
    href: "/tentang/",
  },
  {
    label: "Program",
    href: "/program/",
    children: [
      {
        label: "Ikhtisar Seluruh Program",
        href: "/program/",
        description: "Perbandingan jalur SMK dan Mahasiswa",
      },
      {
        label: "Magang Siswa SMK (PKL)",
        href: "/program/magang-smk/",
        description: "Praktik Kerja Lapangan sesuai kurikulum kejuruan",
      },
      {
        label: "Magang Mahasiswa (SKS)",
        href: "/program/magang-mahasiswa/",
        description: "Magang kompetensi & konversi hingga 20 SKS",
      },
      {
        label: "Posisi / Lowongan Magang",
        href: "/posisi/",
        description: "Katalog lowongan terbuka dengan filter keahlian",
      },
      {
        label: "Alur Pendaftaran",
        href: "/alur-pendaftaran/",
        description: "Panduan 8 tahapan terstruktur hingga penempatan",
      },
      {
        label: "Jadwal & Kalender Batch",
        href: "/jadwal/",
        description: "Batas pembukaan dan penutupan periode pendaftaran",
      },
    ],
  },
  {
    label: "Galeri",
    href: "/galeri/",
  },
  {
    label: "Blog",
    href: "/blog/",
  },
];

export const footerColumns = [
  {
    title: "Program",
    links: [
      { label: "Ikhtisar Program", href: "/program/" },
      { label: "Magang Siswa SMK", href: "/program/magang-smk/" },
      { label: "Magang Mahasiswa", href: "/program/magang-mahasiswa/" },
      { label: "Posisi Magang", href: "/posisi/" },
      { label: "Alur Pendaftaran", href: "/alur-pendaftaran/" },
      { label: "Jadwal & Batch", href: "/jadwal/" },
    ],
  },
  {
    title: "Eksplorasi",
    links: [
      { label: "Galeri Kegiatan", href: "/galeri/" },
      { label: "Blog & Warta", href: "/blog/" },
      { label: "Mitra Industri", href: "/mitra/" },
      { label: "Cerita Alumni", href: "/cerita-alumni/" },
      { label: "Pusat Unduhan Berkas", href: "/unduhan/" },
      { label: "Tanya Jawab (FAQ)", href: "/faq/" },
    ],
  },
  {
    title: "Kerja Sama",
    links: [
      { label: "Untuk Sekolah & Kampus", href: "/untuk-sekolah-kampus/" },
      { label: "Untuk Mitra Industri", href: "/untuk-mitra/" },
      { label: "Kontak Resmi", href: "/kontak/" },
    ],
  },
  {
    title: "Legal & Privasi",
    links: [
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi/" },
      { label: "Syarat dan Ketentuan", href: "/syarat-ketentuan/" },
      { label: "Formulir Pendaftaran", href: "/pendaftaran/" },
    ],
  },
];
