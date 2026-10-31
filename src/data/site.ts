export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  url: string;
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  officeHours: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  formUrls: {
    smk: string;
    mahasiswa: string;
    kerjaSamaSekolah: string;
    kerjaSamaMitra: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Program Magang SMK & Mahasiswa",
  shortName: "GM Training",
  tagline: "Jembatan Kompetensi Menuju Dunia Kerja Nyata",
  description:
    "Pusat informasi dan pendaftaran resmi program magang dan PKL terstruktur untuk siswa SMK dan mahasiswa bersama mitra industri terpercaya.",
  domain: "gmtraining.id",
  url: "https://gmtraining.id",
  email: "kontak@gmtraining.id",
  whatsapp: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890?text=Halo%20Admin%20GM%20Training,%20saya%20ingin%20bertanya%20tentang%20program%20magang",
  address: {
    street: "Gedung Pusat Edukasi Terpadu, Lt. 3, Jl. Merdeka Ilmu No. 45",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    postalCode: "12340",
    country: "Indonesia",
  },
  officeHours: "Senin – Jumat, 08.00 – 17.00 WIB",
  socials: {
    instagram: "https://instagram.com/gmtraining.id",
    linkedin: "https://linkedin.com/company/gm-training-indonesia",
  },
  formUrls: {
    smk: "https://forms.gle/magang-smk-batch-1-2026",
    mahasiswa: "https://forms.gle/magang-mahasiswa-batch-1-2026",
    kerjaSamaSekolah: "https://forms.gle/kemitraan-sekolah-kampus",
    kerjaSamaMitra: "https://forms.gle/kemitraan-industri",
  },
};

