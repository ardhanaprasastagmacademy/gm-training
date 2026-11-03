export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  url: string;
  email?: string;
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
  name: "Program Magang Informatika SMK & Mahasiswa",
  shortName: "Gemilang Training Malang",
  tagline: "Pusat Magang Informatika di Kota Malang & Sekitarnya",
  description:
    "Pusat informasi dan pendaftaran resmi program magang dan PKL bidang informatika, teknologi informasi, dan digital di Kota Malang dan sekitarnya bersama mitra industri terpercaya.",
  domain: "maganginformatika.web.id",
  url: "https://maganginformatika.web.id",
  email: "info@maganginformatika.web.id",
  whatsapp: "+62 819-4343-1484",
  whatsappUrl: "https://wa.me/6281943431484?text=Halo%20Admin%20Gemilang%20Training,%20saya%20ingin%20bertanya%20tentang%20program%20magang",
  address: {
    street: "Jl. Soekarno Hatta No. 45",
    city: "Kota Malang",
    province: "Jawa Timur",
    postalCode: "65141",
    country: "Indonesia",
  },
  officeHours: "Senin – Jumat, 08.00 – 17.00 WIB",
  socials: {
    instagram: "https://www.instagram.com/gemilangtraining.id/",
    linkedin: "https://linkedin.com/company/gemilang-training-indonesia",
  },
  formUrls: {
    smk: "https://forms.gle/magang-smk-batch-1-2026",
    mahasiswa: "https://forms.gle/magang-mahasiswa-batch-1-2026",
    kerjaSamaSekolah: "https://forms.gle/kemitraan-sekolah-kampus",
    kerjaSamaMitra: "https://forms.gle/kemitraan-industri",
  },
};

