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
        label: "Seluruh Program",
        href: "/program/",
        description: "Perbandingan jalur SMK dan Mahasiswa",
      },
      {
        label: "Magang Siswa SMK (PKL)",
        href: "/program/magang-smk/",
        description: "Praktik Kerja Lapangan sesuai kurikulum kejuruan",
      },
      {
        label: "Magang Mahasiswa",
        href: "/program/magang-mahasiswa/",
        description: "Magang kompetensi & portofolio proyek industri",
      },
      {
        label: "Alur Pendaftaran",
        href: "/alur-pendaftaran/",
        description: "Panduan 8 tahapan terstruktur hingga penempatan",
      },
    ],
  },
  {
    label: "Portofolio",
    href: "/portofolio/",
  },
  {
    label: "Blog",
    href: "/blog/",
  },
  {
    label: "Kontak",
    href: "/kontak/",
  },
];

export const footerColumns = [
  {
    title: "Program",
    links: [
      { label: "Seluruh Program", href: "/program/" },
      { label: "Magang Siswa SMK", href: "/program/magang-smk/" },
      { label: "Magang Mahasiswa", href: "/program/magang-mahasiswa/" },
      { label: "Alur Pendaftaran", href: "/alur-pendaftaran/" },
    ],
  },
  {
    title: "Eksplorasi",
    links: [
      { label: "Portofolio Karya", href: "/portofolio/" },
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
