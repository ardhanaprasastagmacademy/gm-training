import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const batch = defineCollection({
  loader: glob({ pattern: "**/*.{md,yaml}", base: "./src/content/batch" }),
  schema: z.object({
    nama: z.string(),
    jalur: z.enum(["smk", "mahasiswa", "keduanya"]),
    tanggalBuka: z.coerce.date(),
    tanggalTutup: z.coerce.date(),
    tanggalSeleksi: z.coerce.date().optional(),
    tanggalMulai: z.coerce.date(),
    tanggalSelesai: z.coerce.date(),
    formUrl: z.string().startsWith("http"),
    catatan: z.string().optional(),
  }).refine((d) => d.tanggalTutup >= d.tanggalBuka, {
    message: "tanggalTutup harus setelah tanggalBuka",
  }),
});

const mitra = defineCollection({
  loader: glob({ pattern: "**/*.{md,yaml}", base: "./src/content/mitra" }),
  schema: z.object({
    nama: z.string(),
    logo: z.string(),
    sektor: z.string(),
    kota: z.string(),
    website: z.string().startsWith("http").optional(),
    izinTayang: z.literal(true),
    deskripsi: z.string().optional(),
  }),
});

const posisi = defineCollection({
  loader: glob({ pattern: "**/*.{md,yaml}", base: "./src/content/posisi" }),
  schema: z.object({
    judul: z.string(),
    mitra: reference("mitra"),
    batch: reference("batch"),
    jalur: z.enum(["smk", "mahasiswa", "keduanya"]),
    bidang: z.string(),
    jurusanRelevan: z.array(z.string()),
    lokasi: z.string(),
    mode: z.enum(["onsite", "hybrid", "remote"]),
    durasiBulan: z.number().int().positive(),
    kuotaAwal: z.number().int().positive().optional(),
    tugas: z.array(z.string()),
    kualifikasi: z.array(z.string()),
    benefit: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const berita = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/berita" }),
  schema: z.object({
    judul: z.string(),
    ringkasan: z.string().max(200),
    tanggal: z.coerce.date(),
    diperbarui: z.coerce.date().optional(),
    kategori: z.enum(["pengumuman", "kegiatan", "artikel"]),
    gambar: z.string().optional(),
    penulis: z.string().default("Tim Program Magang"),
    draft: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.{md,yaml}", base: "./src/content/faq" }),
  schema: z.object({
    pertanyaan: z.string(),
    kategori: z.enum([
      "umum",
      "smk",
      "mahasiswa",
      "pendaftaran",
      "selama-magang",
      "sekolah-kampus",
      "mitra",
    ]),
    urutan: z.number().default(100),
  }),
});

const testimoni = defineCollection({
  loader: glob({ pattern: "**/*.{md,yaml}", base: "./src/content/testimoni" }),
  schema: z.object({
    nama: z.string(),
    jalur: z.enum(["smk", "mahasiswa"]),
    asal: z.string(),
    tahun: z.number().int(),
    tempatMagang: z.string().optional(),
    peran: z.string().optional(),
    izinTayang: z.literal(true),
  }),
});

const unduhan = defineCollection({
  loader: glob({ pattern: "**/*.{md,yaml}", base: "./src/content/unduhan" }),
  schema: z.object({
    judul: z.string(),
    ringkasan: z.string(),
    kategori: z.enum(["panduan", "surat-formulir", "template", "kerja-sama"]),
    berkas: z.string(),
    versi: z.string(),
    diperbarui: z.coerce.date(),
    format: z.string(),
    ukuran: z.string(),
  }),
});

export const collections = {
  batch,
  mitra,
  posisi,
  berita,
  faq,
  testimoni,
  unduhan,
};
