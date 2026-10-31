# Website Resmi Program Magang SMK & Mahasiswa (GM Training)

Website statis resmi untuk pusat informasi dan pendaftaran program magang dan Praktik Kerja Lapangan (PKL) terstruktur bagi siswa SMK dan mahasiswa bersama mitra industri terpercaya di Indonesia.

Dibangun dengan prinsip arsitektur **tanpa database** (static site generation) mengacu pada spesifikasi dokumen [prd.md](file:///c:/PROJECT/gm%20training/prd.md), panduan visual [DESIGN.md](file:///c:/PROJECT/gm%20training/DESIGN.md), dan strategi SEO [SEO-STRATEGY.md](file:///c:/PROJECT/gm%20training/SEO-STRATEGY.md).

---

## 🚀 Spesifikasi Teknis

- **Framework:** Astro 7.4.4 (`output: 'static'`, tanpa database, tanpa SSR)
- **Styling:** Tailwind CSS v4 dengan token `@theme` di `src/styles/global.css`
- **Tipografi:** Plus Jakarta Sans (self-host via Fontsource, 400 & 700)
- **Bahasa & Type-Check:** TypeScript (`astro check` 100% bersih, 0 errors, 0 warnings, 0 hints)
- **Sitemap & SEO:** `@astrojs/sitemap` otomatis menghasilkan `sitemap-index.xml` dan `sitemap-0.xml`
- **Aksesibilitas:** Standar WCAG 2.2 AA (fokus keyboard terlihat, ukuran sentuh minimal 44×44px, navigasi ramah pembaca layar)

---

## 📁 Struktur Berkas Proyek

```text
.
├── astro.config.mjs               # Konfigurasi Astro, sitemap, trailingSlash, Vite Tailwind
├── package.json                   # Dependensi & scripts (dev, build, check, preview)
├── tsconfig.json                  # TypeScript strict config
├── public/
│   ├── favicon.svg                # Favicon ikon resmi
│   ├── robots.txt                 # Crawl permissions & sitemap reference
│   ├── logos/                     # Logo SVG mitra industri (terverifikasi izin)
│   ├── images/                    # Aset visual kegiatan (rasio 4:3)
│   ├── og/                        # Gambar Open Graph (1200 × 630)
│   └── unduhan/                   # Berkas PDF / DOCX resmi untuk diunduh
├── seo/
│   └── keyword-map.csv            # Pemetaan kueri pencarian & klaster SEO
└── src/
    ├── content.config.ts          # Skema Content Collections & validasi Zod
    ├── content/
    │   ├── batch/                 # Koleksi periode batch (aktif, upcoming, arsip)
    │   ├── mitra/                 # Profil mitra industri terverifikasi (izinTayang: true)
    │   ├── posisi/                # Lowongan magang (relasi ke mitra & batch)
    │   ├── berita/                # Pengumuman, kegiatan, artikel & tips
    │   ├── faq/                   # Tanya jawab terkelompok
    │   ├── testimoni/             # Cerita alumni terverifikasi
    │   └── unduhan/               # Metadata berkas unduhan
    ├── data/
    │   ├── site.ts                # Metadata lembaga, kontak resmi, alamat, form URL
    │   ├── navigasi.ts            # Struktur navbar desktop/mobile & 5 kolom footer
    │   └── alur.ts                # 8 tahapan alur pendaftaran terstruktur
    ├── layouts/
    │   └── BaseLayout.astro       # Master template (Head, SEO, SkipLink, Header, Main, Footer, WA)
    ├── components/
    │   ├── ui/                    # Button, Badge, Card, Breadcrumb, PageBanner, Accordion, FloatingWa, Seo
    │   └── sections/              # Hero, BatchStatusCard, PilihJalur, CaraKerja, PosisiCard, PosisiFilter, MitraGrid, ManfaatSection, StepTimeline, CtaBanner
    ├── pages/                     # 29 rute statis (Beranda, Program, Posisi, Mitra, Berita, Unduhan, dll.)
    └── styles/
        └── global.css             # Konfigurasi tema Tailwind v4 maroon & netral
```

---

## 🛠️ Perintah Pengembangan

```bash
# Menjalankan server lokal (development)
npm run dev

# Menjalankan pengecekan diagnostik TypeScript & Astro
npm run check

# Membangun situs statis produksi ke folder dist/
npm run build

# Menjalankan pratinjau hasil build produksi
npm run preview
```

---

## 📑 Halaman Utama yang Tersedia (29 Halaman)

1. `/` — Beranda (Hero, BatchStatus overlap, Pilih Jalur, Cara Kerja, Posisi Terbaru, Mitra, Manfaat, Testimoni, FAQ Ringkas, CTA)
2. `/tentang/` — Profil Penyelenggara, Tujuan, Nilai Integritas & Mekanisme Program
3. `/program/magang-smk/` — Panduan Praktik Kerja Lapangan (PKL) Siswa SMK & Perizinan Orang Tua
4. `/program/magang-mahasiswa/` — Program Magang Mahasiswa, Konversi hingga 20 SKS & Bimbingan Dosen
5. `/alur-pendaftaran/` — Alur 8 Tahapan Lengkap dari Persiapan hingga Penempatan
6. `/jadwal/` — Kalender Batch Aktif, Rincian Tanggal Buka/Tutup, dan Arsip Periode
7. `/posisi/` — Katalog Lowongan Magang dengan Filter Interaktif (Jalur, Bidang, Mode, Cari)
8. `/posisi/[slug]/` — 6 Halaman Detail Posisi (Frontend, Jaringan, Mekatronika, Desain, Logistik, Finansial) + Schema `JobPosting`
9. `/mitra/` — Direktori Mitra Industri Rekanan Terverifikasi
10. `/untuk-sekolah-kampus/` — Panduan Kemitraan BKK SMK & Fakultas/Career Center Perguruan Tinggi
11. `/untuk-mitra/` — Peluang & Prosedur Perusahaan Bergabung Menjadi Mitra Penempatan
12. `/unduhan/` — Pusat Unduhan Buku Panduan, Surat Izin Ortu, Logbook, Laporan, & Draf MoU
13. `/berita/` — Kabar Terkini, Dokumentasi Kegiatan, serta Artikel & Tips Magang
14. `/berita/[slug]/` — 4 Halaman Artikel Lengkap + Schema `Article`
15. `/cerita-alumni/` — Suara dan Rekam Jejak Nyata Alumni Program
16. `/faq/` — Tanya Jawab Terkategori (Umum, SMK, Mahasiswa, Pendaftaran, Magang, Institusi, Mitra)
17. `/daftar/` — Pemilihan Jalur, Checklist Berkas Wajib, & Tautan Formulir Daring Resmi
18. `/kontak/` — Saluran Resmi WhatsApp, Email, Jam Layanan, & Formulir Pesan Cepat
19. `/kebijakan-privasi/` — Kepatuhan UU Pelindungan Data Pribadi (UU PDP) & Perlindungan Siswa di Bawah Umur
20. `/syarat-ketentuan/` — Tata Tertib dan Ketentuan Hukum Partisipasi Magang
21. `/404/` — Halaman 404 Responsif dengan Tautan Cepat

