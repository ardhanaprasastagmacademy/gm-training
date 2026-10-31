# PRD — Website Program Magang SMK Mahasiswa

## Product Requirements Document

**Versi:** 1.0
**Tanggal:** 29 Oktober 2026
**Status:** Draft (rekomendasi isi website dan spesifikasi teknis)
**Stack:** Astro + Tailwind CSS, tanpa database

---

## 0. Ringkasan dan Asumsi

Website resmi **Program Magang SMK Mahasiswa**: pusat informasi dan pintu pendaftaran bagi siswa SMK dan mahasiswa yang ingin magang, sekaligus saluran informasi bagi sekolah, kampus, dan mitra industri.

Website dibangun sebagai **situs statis** (Astro) dengan **Tailwind CSS**. Tidak ada database, tidak ada login, dan tidak ada panel admin. Konten dikelola lewat berkas Markdown/YAML di repositori, dan pendaftaran dilakukan melalui formulir eksternal.

### Asumsi yang dipakai dokumen ini

Karena detail program belum diberikan, dokumen ini memakai asumsi berikut. Semuanya perlu dikonfirmasi (lihat Bagian 18).

- Program memiliki **dua jalur peserta**: siswa SMK dan mahasiswa.
- Program menempatkan peserta pada **mitra industri/instansi** untuk periode tertentu (batch).
- Ada penyelenggara resmi (lembaga, yayasan, kampus, atau perusahaan) yang menjadi pemilik website.
- Website berbahasa Indonesia.
- Pendaftaran memakai formulir pihak ketiga (mis. Google Form) dan data pendaftar tidak disimpan di website.
- Pengunjung sebagian besar membuka website lewat ponsel.

Semua angka dan fakta program (durasi, syarat, uang saku, sertifikat, kuota, tanggal) yang muncul di dokumen ini adalah **contoh yang ditandai [konfirmasi]**, bukan data resmi.

---

## 1. Latar Belakang dan Tujuan

### 1.1 Masalah yang diselesaikan

- Calon peserta sulit menemukan satu sumber yang jelas tentang syarat, jadwal, dan cara mendaftar.
- Informasi sering tersebar di media sosial dan grup pesan, sehingga cepat kedaluwarsa dan berbeda-beda.
- Sekolah, kampus, dan mitra membutuhkan penjelasan prosedur kerja sama yang konsisten.
- Penyelenggara menerima banyak pertanyaan berulang melalui WhatsApp.

### 1.2 Tujuan

1. Menyediakan informasi program yang lengkap, akurat, dan mudah dipahami oleh calon peserta.
2. Mengarahkan calon peserta ke pendaftaran dengan langkah yang jelas dan sedikit hambatan.
3. Mengurangi pertanyaan berulang melalui FAQ, panduan, dan dokumen unduhan.
4. Menarik sekolah, kampus, dan mitra industri baru untuk bekerja sama.
5. Membangun kredibilitas program lewat transparansi: mitra nyata, aturan jelas, cerita alumni yang dapat diverifikasi.

### 1.3 Indikator keberhasilan

- Jumlah klik tombol Daftar dan jumlah pengunjung yang sampai ke formulir.
- Jumlah pendaftar per batch (dihitung dari data formulir, bukan dari website).
- Berkurangnya pertanyaan berulang ke admin (dicatat manual oleh tim).
- Jumlah pengajuan kerja sama dari sekolah, kampus, dan mitra.
- Jumlah unduhan dokumen dan kunjungan ke FAQ.
- Trafik organik ke halaman program dan posisi.

Tetapkan baseline setelah peluncuran. Jangan menetapkan target angka sebelum ada data dasar.

---

## 2. Pengguna dan Kebutuhan

| Pengguna | Kebutuhan utama | Hal yang harus mudah ditemukan |
|----------|-----------------|--------------------------------|
| **Siswa SMK** (banyak yang masih di bawah 18 tahun) | Tahu apakah memenuhi syarat, posisi sesuai jurusan, cara daftar, dokumen yang disiapkan | Persyaratan, posisi menurut jurusan, persetujuan orang tua/wali, jadwal |
| **Mahasiswa** | Posisi sesuai prodi, durasi, kaitannya dengan konversi SKS, dokumen kampus | Syarat akademik, posisi, durasi, surat dari kampus, laporan akhir |
| **Orang tua/wali** | Yakin bahwa program aman dan jelas | Tentang penyelenggara, mitra, pendampingan, kontak resmi |
| **Guru pembimbing / dosen pembimbing / bagian kerja sama** | Prosedur kerja sama, dokumen, tugas pembimbing | Halaman Untuk Sekolah & Kampus, unduhan, kontak PIC |
| **Perusahaan/instansi mitra** | Cara bergabung, kewajiban, manfaat | Halaman Untuk Mitra, kriteria, alur, kontak |
| **Admin penyelenggara** | Memperbarui batch, posisi, dan pengumuman tanpa menyentuh kode berlebihan | Struktur konten yang sederhana |

---

## 3. Ruang Lingkup

### 3.1 Termasuk (versi 1)

- Situs statis multi-halaman, berbahasa Indonesia.
- Informasi program, jalur SMK dan mahasiswa, persyaratan, alur, jadwal batch.
- Daftar posisi dengan filter di sisi klien.
- Mitra, berita/pengumuman, cerita alumni, FAQ, unduhan, kontak.
- Halaman untuk sekolah/kampus dan untuk mitra.
- Tautan ke formulir pendaftaran eksternal.
- SEO dasar, sitemap, dan performa tinggi.

### 3.2 Tidak termasuk (versi 1)

| Fitur | Alasan / alternatif |
|-------|---------------------|
| Akun pengguna, login, dasbor peserta | Butuh database dan autentikasi; di luar keputusan "tanpa database" |
| Penyimpanan data pendaftar di website | Ditangani formulir eksternal |
| Cek status pendaftaran secara real-time | Butuh database; ganti dengan pemberitahuan langsung lewat email/WhatsApp |
| Pengumuman hasil seleksi berisi nama peserta | Risiko privasi, terutama untuk peserta di bawah umur |
| Unggah dokumen langsung di website | Dilakukan di formulir eksternal |
| Panel admin | Konten dikelola lewat repositori; CMS berbasis Git adalah opsi fase lanjutan |
| Multi-bahasa | Bisa ditambahkan setelah v1 jika dibutuhkan |
| Pembayaran | Tidak relevan, kecuali program memiliki biaya **[konfirmasi]** |

---

## 4. Rekomendasi Isi Website

Prioritas: **P0** wajib ada saat peluncuran, **P1** diluncurkan bersama atau segera setelahnya, **P2** pengembangan lanjutan.

| Prioritas | Halaman / konten | Tujuan | Pengunjung utama |
|-----------|------------------|--------|------------------|
| P0 | **Beranda** | Menjelaskan program dalam 10 detik dan mengarahkan ke pendaftaran | Semua |
| P0 | **Tentang Program** | Latar belakang, tujuan, penyelenggara, kredibilitas | Semua, orang tua |
| P0 | **Program Magang SMK** | Syarat, durasi, bidang, alur khusus siswa SMK | Siswa SMK, orang tua, guru |
| P0 | **Program Magang Mahasiswa** | Syarat, durasi, konversi SKS, alur khusus mahasiswa | Mahasiswa, dosen |
| P0 | **Alur Pendaftaran** | Langkah demi langkah dari persiapan sampai penempatan | Calon peserta |
| P0 | **Jadwal dan Batch** | Tanggal buka, tutup, seleksi, dan mulai magang; status batch otomatis | Calon peserta |
| P0 | **Daftar** | Memilih jalur dan menuju formulir, dengan daftar dokumen yang disiapkan | Calon peserta |
| P0 | **FAQ** | Menjawab pertanyaan berulang | Semua |
| P0 | **Kontak** | Saluran resmi untuk bertanya | Semua |
| P0 | **Kebijakan Privasi** | Transparansi pengolahan data lewat formulir dan analitik | Semua |
| P0 | **404** | Membantu pengguna kembali ke halaman penting | Semua |
| P1 | **Posisi Magang** (daftar + detail) | Memudahkan memilih posisi sesuai jurusan/prodi | Calon peserta |
| P1 | **Mitra** | Bukti kerja sama nyata | Semua |
| P1 | **Untuk Sekolah dan Kampus** | Prosedur kerja sama, dokumen, kontak PIC | Sekolah, kampus |
| P1 | **Untuk Mitra Industri** | Cara bergabung sebagai tempat magang | Perusahaan, instansi |
| P1 | **Unduhan** | Panduan, surat, template logbook dan laporan | Peserta, pembimbing |
| P1 | **Berita dan Pengumuman** | Informasi batch baru, kegiatan, tips | Semua, SEO |
| P1 | **Syarat dan Ketentuan** | Aturan penggunaan website dan ketentuan program | Semua |
| P1 | **Cerita Alumni** | Bukti sosial yang dapat diverifikasi (hanya dengan izin) | Calon peserta, orang tua |
| P2 | **Galeri Kegiatan** | Dokumentasi kegiatan (hanya dengan izin) | Semua |
| P2 | **Cek Kelayakan** | Kuis sederhana di sisi klien untuk memeriksa syarat dasar | Calon peserta |
| P2 | **Pencarian** | Pencarian seluruh situs (indeks statis) | Semua |
| P2 | **Kalender (.ics)** | Menambahkan tanggal penting ke kalender | Calon peserta |
| P2 | **Halaman detail mitra** | Hanya bila ada konten unik dan izin | Calon peserta |

### 4.1 Prinsip konten

1. Jangan menjanjikan penempatan kerja, uang saku, sertifikat, atau konversi nilai/SKS kecuali sudah dikonfirmasi dan dapat dipertanggungjawabkan.
2. Semua tanggal, syarat, dan angka berasal dari satu sumber data (koleksi konten), bukan diketik ulang di banyak halaman.
3. Konten yang kedaluwarsa (batch lama) otomatis diberi status "Ditutup" dan dipindahkan ke arsip, bukan dihapus.
4. Foto dan testimoni hanya ditampilkan dengan izin tertulis. Untuk peserta di bawah 18 tahun, izin orang tua/wali diperlukan.
5. Hindari bahasa promosi berlebihan dan klaim absolut.

---

## 5. Arsitektur Informasi dan Navigasi

### 5.1 Struktur URL

```text
/
├── tentang/
├── program/
│   ├── magang-smk/
│   └── magang-mahasiswa/
├── alur-pendaftaran/
├── jadwal/
├── posisi/
│   └── [slug]/
├── mitra/
├── untuk-sekolah-kampus/
├── untuk-mitra/
├── unduhan/
├── berita/
│   └── [slug]/
├── cerita-alumni/
├── galeri/              (P2)
├── faq/
├── daftar/
├── kontak/
├── kebijakan-privasi/
├── syarat-ketentuan/
└── 404
```

URL huruf kecil, kebab-case, dan konsisten (dengan atau tanpa slash di akhir, tentukan satu dan atur di `astro.config.mjs` via `trailingSlash`).

### 5.2 Navigasi utama

Navbar: **Program** (menu turun: Tentang, Magang SMK, Magang Mahasiswa), **Posisi**, **Jadwal**, **Mitra**, **Untuk Sekolah dan Kampus**, **Berita**, **FAQ**, serta tombol **Daftar**.

Karena item banyak, kelompokkan: Program, Posisi, Jadwal, Mitra, Informasi (Untuk Sekolah dan Kampus, Untuk Mitra, Unduhan, Berita, FAQ, Kontak). Tombol **Daftar** selalu terlihat, termasuk di mobile.

### 5.3 Footer

Kolom: tentang singkat dan kontak; program (SMK, Mahasiswa, Alur, Jadwal); informasi (Posisi, Mitra, Unduhan, Berita, FAQ); kerja sama (Untuk Sekolah dan Kampus, Untuk Mitra); legal (Kebijakan Privasi, Syarat dan Ketentuan).

---

## 6. Brief Halaman

### 6.1 Beranda `/`

Urutan bagian:

1. **Hero:** judul, satu kalimat penjelasan, tombol utama **Daftar Sekarang**, tombol sekunder **Lihat Posisi**.
2. **Status batch:** kartu kecil berisi batch aktif atau berikutnya, tanggal tutup, dan hitung mundur (dihitung di sisi klien).
3. **Pilih jalur:** dua kartu besar (Siswa SMK dan Mahasiswa), masing-masing dengan 3 informasi inti dan tautan ke halaman jalur.
4. **Cara kerja program:** 4 langkah ringkas dengan tautan ke Alur Pendaftaran.
5. **Posisi terbaru:** 3–6 posisi dari koleksi konten.
6. **Mitra:** barisan logo (hanya mitra yang memberi izin).
7. **Manfaat program:** hanya yang terkonfirmasi.
8. **Cerita alumni** atau pengumuman terbaru (pilih salah satu sesuai ketersediaan konten).
9. **FAQ ringkas** (4–5 pertanyaan) dan tautan ke FAQ lengkap.
10. **CTA akhir:** Daftar Sekarang dan Hubungi Kami.

### 6.2 Tentang Program `/tentang/`

Latar belakang, tujuan, penyelenggara (nama, profil singkat, dasar kerja sama jika ada **[konfirmasi]**), bagaimana program berjalan, dan nilai/prinsip. Cantumkan kontak resmi dan tautan ke dokumen pendukung bila ada.

### 6.3 Program Magang SMK `/program/magang-smk/`

- Untuk siapa (kelas, jurusan) **[konfirmasi]**.
- Durasi dan jam kerja **[konfirmasi]**.
- Persyaratan: dokumen dari sekolah, persetujuan orang tua/wali, dll. **[konfirmasi]**.
- Bidang/jurusan yang dilayani.
- Tahapan khusus siswa SMK (surat pengantar sekolah, penunjukan guru pembimbing).
- Pendampingan: guru pembimbing dan pembimbing industri.
- Hak dan kewajiban peserta, aturan keselamatan dan etika kerja.
- Penilaian, jurnal/logbook, dan sertifikat **[konfirmasi]**.
- FAQ khusus jalur ini dan CTA **Daftar sebagai Siswa SMK**.

### 6.4 Program Magang Mahasiswa `/program/magang-mahasiswa/`

- Untuk siapa (semester minimal, program studi) **[konfirmasi]**.
- Durasi dan format (penuh waktu/paruh waktu) **[konfirmasi]**.
- Persyaratan akademik dan dokumen kampus **[konfirmasi]**.
- Hubungan dengan kampus: dosen pembimbing, konversi SKS bila berlaku **[konfirmasi]**.
- Luaran: laporan akhir, presentasi, sertifikat **[konfirmasi]**.
- FAQ khusus dan CTA **Daftar sebagai Mahasiswa**.

### 6.5 Alur Pendaftaran `/alur-pendaftaran/`

Timeline vertikal dengan penanda jalur (SMK, Mahasiswa, atau keduanya). Contoh urutan:

1. Cek persyaratan dan pilih posisi.
2. Siapkan dokumen.
3. Isi formulir pendaftaran.
4. Seleksi (administrasi, wawancara bila ada).
5. Pengumuman: peserta dihubungi langsung lewat email/WhatsApp.
6. Orientasi dan penempatan.
7. Pelaksanaan dan pendampingan.
8. Evaluasi dan penutupan.

Setiap langkah memuat: apa yang dilakukan, siapa yang bertanggung jawab, dan perkiraan waktu **[konfirmasi]**.

### 6.6 Jadwal dan Batch `/jadwal/`

Tabel/kartu per batch: nama batch, jalur, tanggal buka, tanggal tutup, tanggal seleksi, tanggal mulai dan selesai, serta status (Akan Dibuka, Dibuka, Ditutup) yang dihitung otomatis di sisi klien. Batch lama masuk bagian arsip. Opsi P2: unduh berkas `.ics`.

### 6.7 Posisi Magang `/posisi/` dan `/posisi/[slug]/`

**Daftar:** kartu posisi dengan filter (jalur peserta, bidang, lokasi, mode kerja, batch) dan kolom cari. Semua posisi dirender di HTML; filter hanya menyembunyikan/menampilkan (lihat 7.2).

**Detail:** ringkasan, mitra, deskripsi, tugas utama, kualifikasi, jurusan/prodi relevan, lokasi, mode kerja, durasi, batas daftar, benefit **[konfirmasi]**, dan tombol **Daftar untuk Posisi Ini**.

### 6.8 Mitra `/mitra/`

Grid logo dan nama mitra, sektor, kota, dan satu kalimat deskripsi. Hanya mitra yang telah memberi izin tampil. Tautan ke posisi dari mitra tersebut.

### 6.9 Untuk Sekolah dan Kampus `/untuk-sekolah-kampus/`

Manfaat kerja sama, prosedur kerja sama (termasuk MoU/perjanjian bila ada), peran guru/dosen pembimbing, dokumen yang dapat diunduh, kontak PIC, dan CTA **Ajukan Kerja Sama** (formulir eksternal atau WhatsApp).

### 6.10 Untuk Mitra Industri `/untuk-mitra/`

Manfaat menjadi mitra, kriteria mitra, kewajiban dan dukungan dari penyelenggara, alur bergabung, kebutuhan informasi (posisi, mentor, kapasitas), dan CTA **Jadi Mitra**.

### 6.11 Unduhan `/unduhan/`

Daftar dokumen per kategori (Panduan Peserta, Surat dan Formulir, Template Logbook dan Laporan, Dokumen Kerja Sama). Setiap berkas menampilkan judul, ringkasan, versi, tanggal pembaruan, dan ukuran. Berkas berformat PDF (atau DOCX untuk template yang diisi).

### 6.12 Berita dan Pengumuman `/berita/`

Kategori: Pengumuman (batch baru, perubahan jadwal), Kegiatan (dokumentasi, dengan izin), dan Artikel/Tips (menyusun CV, wawancara, etika kerja). Pengumuman hasil seleksi hanya berisi informasi umum dan instruksi, **tanpa daftar nama peserta**.

### 6.13 Cerita Alumni `/cerita-alumni/`

Kutipan dan profil singkat alumni (nama, jalur, asal sekolah/kampus, tahun, tempat magang) dengan izin tertulis. Jangan membuat testimoni fiktif. Halaman disembunyikan sampai ada alumni nyata yang memberi izin.

### 6.14 FAQ `/faq/`

Dikelompokkan: Umum, Siswa SMK, Mahasiswa, Pendaftaran dan Seleksi, Selama Magang, Sekolah/Kampus, Mitra. Format accordion yang dapat diakses keyboard. Setiap jawaban singkat dan menaut ke halaman detail bila perlu.

### 6.15 Daftar `/daftar/`

- Pilih jalur: **Siswa SMK** atau **Mahasiswa**.
- Status batch aktif dan batas pendaftaran.
- Daftar dokumen yang perlu disiapkan sebelum mengisi formulir.
- Tombol menuju formulir (dibuka di tab baru, `rel="noopener noreferrer"`).
- Catatan privasi: data diproses oleh penyedia formulir, dengan tautan ke Kebijakan Privasi.
- Catatan untuk siswa di bawah 18 tahun: perlu persetujuan orang tua/wali.
- Jika batch ditutup: tampilkan tanggal batch berikutnya dan tautan untuk mendapat pemberitahuan (lewat WhatsApp/email penyelenggara).

### 6.16 Kontak `/kontak/`

WhatsApp, email, alamat, jam layanan, tautan peta, dan tautan ke FAQ sebelum menghubungi. Opsional: formulir kontak eksternal. Gunakan hanya kontak resmi yang dikonfirmasi penyelenggara.

### 6.17 Kebijakan Privasi dan Syarat dan Ketentuan

Isi sesuai Bagian 12. Ditinjau penyelenggara dan, bila perlu, penasihat hukum.

### 6.18 404

Pesan singkat, tautan ke Beranda, Posisi, Jadwal, dan Kontak. Disajikan dengan status HTTP 404.

---

## 7. Fitur Tanpa Database

| Kebutuhan | Solusi | Batasan |
|-----------|--------|---------|
| Data program yang sering berubah (batch, posisi, mitra, FAQ) | **Content collections** Astro (Markdown/YAML) dengan skema tervalidasi | Perubahan perlu commit dan build ulang |
| Status batch (akan dibuka/dibuka/ditutup) | Dihitung di sisi klien dari tanggal pada atribut `data-*`, zona waktu WIB; nilai bawaan dirender saat build | Tanpa JS, pengguna melihat tanggal tetapi bukan status otomatis |
| Filter dan pencarian posisi | Semua posisi dirender di HTML; skrip kecil menyembunyikan yang tidak cocok; filter dibaca dari parameter URL | Cocok untuk puluhan hingga ratusan posisi; bukan ribuan |
| Pencarian seluruh situs (P2) | Indeks statis saat build (mis. Pagefind) | Indeks diperbarui setiap build |
| Pendaftaran | Tautan ke formulir eksternal | Website tidak menyimpan atau memverifikasi data pendaftar |
| Unduhan dokumen | Berkas PDF di `public/unduhan/` dengan metadata dari koleksi `unduhan` | Pembaruan dokumen perlu commit |
| Pengumuman hasil | Dikirim langsung ke peserta; situs hanya memuat pengumuman umum | Tidak ada pengecekan mandiri di situs |
| Kuota posisi | Dicantumkan sebagai informasi statis ("kuota awal"), bukan sisa kuota real-time | Sisa kuota tidak ditampilkan secara langsung |
| Hitung mundur batas pendaftaran | Skrip klien membandingkan waktu sekarang dengan tanggal tutup | Bergantung pada jam perangkat pengguna |

### 7.1 Status batch (aturan)

- `Akan Dibuka`: sekarang sebelum `tanggalBuka`.
- `Dibuka`: antara `tanggalBuka` dan `tanggalTutup` (inklusif, WIB).
- `Ditutup`: setelah `tanggalTutup`.
- Tombol Daftar dinonaktifkan secara visual dan tekstual saat `Ditutup`, tetapi halaman tetap dapat dibaca.

### 7.2 Filter posisi (aturan)

- Pengguna tanpa JavaScript tetap melihat semua posisi.
- Filter menyimpan state di parameter URL (mis. `?jalur=smk&bidang=jaringan`) agar dapat dibagikan.
- Hasil kosong menampilkan pesan dan tombol atur ulang filter.
- Jumlah hasil diumumkan ke pembaca layar (`aria-live="polite"`).

---

## 8. Spesifikasi Teknis

### 8.1 Stack

| Aspek | Keputusan |
|-------|-----------|
| Framework | Astro (versi stabil terbaru saat proyek dimulai; versi dipin di `package.json`) |
| Rendering | Statis penuh (`output: 'static'`); tanpa SSR dan tanpa adapter |
| Styling | Tailwind CSS (v4) dengan konfigurasi berbasis CSS (`@import "tailwindcss"` dan `@theme`) |
| Integrasi Tailwind | Plugin Vite `@tailwindcss/vite`; lihat risiko kompatibilitas di Bagian 17 |
| Bahasa | TypeScript (`astro/tsconfigs/strict`), pemeriksaan dengan `astro check` |
| Konten | Content collections Astro (Markdown/MDX dan YAML/JSON) |
| Interaktivitas | JavaScript kecil per fitur (status batch, filter, accordion, menu); tanpa framework UI. Island Astro hanya bila benar-benar perlu |
| Gambar | `astro:assets` (`<Image>`/`<Picture>`) untuk optimasi dan format modern |
| Font | Self-host (mis. paket Fontsource), maksimal satu keluarga dan dua weight, `font-display: swap` |
| Sitemap | `@astrojs/sitemap` |
| Pencarian (P2) | Indeks statis seperti Pagefind |
| Hosting | Hosting statis dengan HTTPS (mis. Cloudflare Pages, Netlify, Vercel, atau GitHub Pages) **[konfirmasi]** |
| Deploy | CI membangun `astro build` dan mempublikasikan `dist/`; pratinjau per pull request bila tersedia |

### 8.2 Struktur folder

```text
.
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── og/                      (gambar Open Graph)
│   └── unduhan/                 (PDF/DOCX yang diunduh)
└── src/
    ├── assets/                  (gambar yang dioptimasi)
    ├── components/
    │   ├── ui/                  (Button, Card, Badge, Accordion, ...)
    │   └── sections/            (Hero, BatchStatus, PilihJalur, ...)
    ├── content/
    │   ├── batch/
    │   ├── posisi/
    │   ├── mitra/
    │   ├── berita/
    │   ├── faq/
    │   ├── testimoni/
    │   └── unduhan/
    ├── content.config.ts
    ├── data/
    │   ├── site.ts              (nama, kontak, URL formulir, tautan sosial)
    │   └── navigasi.ts
    ├── layouts/
    │   ├── BaseLayout.astro     (head, SEO, header, footer)
    │   └── PageLayout.astro     (banner halaman + konten)
    ├── pages/                   (struktur sesuai Bagian 5.1)
    ├── scripts/
    │   ├── batch-status.ts
    │   ├── filter-posisi.ts
    │   └── menu.ts
    └── styles/
        └── global.css           (@import "tailwindcss"; @theme { ... })
```

### 8.3 Konfigurasi dasar

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://[domain-final]",     // [konfirmasi]
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
```

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  /* Token warna, font, dan radius ditetapkan di DESIGN.md */
}
```

### 8.4 Komponen utama

| Komponen | Fungsi |
|----------|--------|
| `Header` / `Footer` | Navigasi, tombol Daftar, kontak |
| `PageBanner` | Judul halaman, breadcrumb, deskripsi |
| `BatchStatus` | Lencana status dan hitung mundur |
| `PilihJalur` | Dua kartu pilihan jalur peserta |
| `StepTimeline` | Alur pendaftaran |
| `PosisiCard`, `PosisiFilter` | Daftar dan penyaringan posisi |
| `MitraGrid` | Logo mitra |
| `DownloadItem` | Berkas unduhan dengan versi dan ukuran |
| `Accordion` | FAQ |
| `Seo` | Title, description, canonical, Open Graph, JSON-LD |
| `FloatingWa` (opsional) | Tombol WhatsApp melayang bila disetujui penyelenggara |

### 8.5 Alur pembaruan konten

1. Admin atau developer menambah/mengubah berkas di `src/content/` atau `public/unduhan/`.
2. Skema Zod memvalidasi frontmatter; build gagal bila data tidak valid (mis. tanggal tutup sebelum tanggal buka).
3. Commit ke repositori memicu build dan deploy otomatis.
4. Untuk admin non-teknis: opsi fase lanjutan berupa CMS berbasis Git yang menulis ke repositori yang sama (tanpa database).

### 8.6 Kualitas kode

- `astro check`, Prettier (dengan plugin Astro), dan linter bila diinginkan.
- Pemeriksaan tautan rusak sebelum rilis.
- Lighthouse pada halaman kunci sebelum peluncuran.

---

## 9. Skema Konten (Content Collections)

Kerangka skema di `src/content.config.ts`. Sesuaikan impor dan API dengan dokumentasi versi Astro yang dipakai.

```ts
import { defineCollection, reference, z } from "astro:content"; // impor `z` dapat berbeda antarversi
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
    formUrl: z.string().url(),
    catatan: z.string().optional(),
  }).refine(d => d.tanggalTutup >= d.tanggalBuka, "tanggalTutup harus setelah tanggalBuka"),
});

const mitra = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/mitra" }),
  schema: ({ image }) => z.object({
    nama: z.string(),
    logo: image(),
    sektor: z.string(),
    kota: z.string(),
    website: z.string().url().optional(),
    izinTayang: z.literal(true),           // wajib true agar bisa diterbitkan
  }),
});

const posisi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posisi" }),
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
  schema: ({ image }) => z.object({
    judul: z.string(),
    ringkasan: z.string().max(200),
    tanggal: z.coerce.date(),
    diperbarui: z.coerce.date().optional(),
    kategori: z.enum(["pengumuman", "kegiatan", "artikel"]),
    gambar: image().optional(),
    draft: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    pertanyaan: z.string(),
    kategori: z.enum(["umum", "smk", "mahasiswa", "pendaftaran", "selama-magang", "sekolah-kampus", "mitra"]),
    urutan: z.number().default(100),
  }),
});

const testimoni = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimoni" }),
  schema: z.object({
    nama: z.string(),
    jalur: z.enum(["smk", "mahasiswa"]),
    asal: z.string(),
    tahun: z.number().int(),
    tempatMagang: z.string().optional(),
    izinTayang: z.literal(true),           // izin tertulis; orang tua/wali bila di bawah 18 tahun
  }),
});

const unduhan = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/unduhan" }),
  schema: z.object({
    judul: z.string(),
    ringkasan: z.string(),
    kategori: z.enum(["panduan", "surat-formulir", "template", "kerja-sama"]),
    berkas: z.string(),                    // path di /public/unduhan/
    versi: z.string(),
    diperbarui: z.coerce.date(),
  }),
});

export const collections = { batch, mitra, posisi, berita, faq, testimoni, unduhan };
```

Catatan:

- Field `izinTayang: z.literal(true)` memaksa admin menyatakan izin sebelum mitra atau testimoni dapat dibangun; konten tanpa izin tidak diterbitkan.
- Halaman posisi menolak build bila referensi `mitra` atau `batch` tidak ditemukan.
- Data kontak dan URL formulir disimpan di `src/data/site.ts`, bukan di dalam konten.

---

## 10. Desain dan UX

Dokumen **DESIGN.md** dibuat terpisah (palet, tipografi, komponen). Arahan awal:

- **Mobile-first.** Sebagian besar pengunjung memakai ponsel; tombol Daftar dan status batch harus terlihat tanpa banyak menggulir.
- **Bersih dan mudah dipahami:** banyak ruang kosong, teks pendek, satu tindakan utama per bagian.
- **Ramah pelajar tanpa terlihat main-main:** hangat, jelas, dan dapat dipercaya oleh orang tua dan sekolah.
- **Tidak seperti template generik:** hindari gradien dekoratif, emoji, dan baris tiga kartu identik yang diulang di setiap bagian; utamakan foto kegiatan asli.
- **Hierarki jelas:** judul besar, subjudul, dan teks isi dengan kontras yang kuat.
- **Gaya bahasa:** sederhana dan sopan. Usulan: "kamu" pada halaman peserta, "Anda" pada halaman sekolah, kampus, dan mitra **[konfirmasi]**.
- Identitas visual (logo, warna) menyesuaikan penyelenggara **[konfirmasi]**.

### 10.1 Pola UX penting

- Dua jalur (SMK dan Mahasiswa) harus selalu terpisah jelas: tidak mencampur syarat atau istilah.
- Status batch tampil konsisten di Beranda, Jadwal, Daftar, dan detail Posisi.
- Setiap halaman diakhiri CTA yang relevan (Daftar, Lihat Posisi, atau Hubungi Kami).
- Breadcrumb di semua halaman dalam.
- Tombol unduh menampilkan jenis dan ukuran berkas.

---

## 11. SEO dan Konten

### 11.1 Pemetaan keyword (estimasi kualitatif)

Daftar berikut berdasarkan relevansi dan niat pencarian, **belum divalidasi** dengan data volume. Validasi lewat Google Keyword Planner dan Search Console setelah peluncuran.

| Halaman | Keyword utama (usulan) |
|---------|------------------------|
| Beranda | program magang SMK dan mahasiswa |
| Program Magang SMK | magang SMK, PKL SMK |
| Program Magang Mahasiswa | program magang mahasiswa |
| Alur Pendaftaran | cara daftar magang |
| Posisi | lowongan magang SMK, lowongan magang mahasiswa |
| Berita/Artikel | tips magang, cara membuat CV magang, persiapan wawancara magang |

### 11.2 Aturan teknis

- Title dan meta description unik per halaman; H1 tunggal.
- Canonical absolut, sitemap otomatis, `robots.txt`, halaman 404 dengan status 404.
- Open Graph (gambar 1200 × 630) untuk berbagi di WhatsApp dan media sosial.
- Structured data: `Organization` dan `WebSite` di beranda; `BreadcrumbList` di halaman dalam; `NewsArticle` atau `Article` untuk berita.
- `JobPosting` untuk posisi **hanya jika** memenuhi pedoman Google (mis. alur lamaran yang sesuai); jika ragu, jangan dipasang. Periksa dokumentasi terbaru.
- `FAQPage` bersifat opsional dan prioritas rendah; FAQ dibuat untuk pengguna, bukan untuk rich result.
- Konten batch yang kedaluwarsa tetap dapat diakses dan diberi status jelas; jangan membiarkan halaman menyatakan "dibuka" setelah ditutup.

---

## 12. Privasi dan Keamanan

### 12.1 Privasi

- Website tidak menyimpan data pendaftar. Data dikumpulkan dan diproses oleh penyedia formulir; Kebijakan Privasi menjelaskan hal ini.
- Sebagian pendaftar adalah siswa di bawah 18 tahun. Formulir pendaftaran harus memuat persetujuan orang tua/wali, dan website menampilkan catatan tersebut di halaman Daftar.
- Jangan mempublikasikan nama, foto, atau data peserta tanpa izin tertulis (dengan izin orang tua/wali untuk peserta di bawah 18 tahun).
- Hasil seleksi tidak dipublikasikan dengan nama peserta; peserta dihubungi langsung.
- Kebijakan Privasi memuat: data yang dikumpulkan (formulir, analitik, kontak), tujuan, pihak ketiga yang memproses, masa penyimpanan, hak pengguna, dan cara menghubungi pengelola. Isi mengacu pada ketentuan pelindungan data pribadi yang berlaku di Indonesia dan ditinjau penyelenggara serta, bila perlu, penasihat hukum.
- Analitik memakai layanan yang ramah privasi atau dikonfigurasi minimal, dan disebutkan di kebijakan.

### 12.2 Keamanan

- HTTPS wajib; header keamanan dasar (`X-Content-Type-Options`, `Referrer-Policy`, dan Content-Security-Policy yang disesuaikan).
- Tautan eksternal (formulir, media sosial) memakai `rel="noopener noreferrer"`.
- Dokumen unduhan tidak berisi data pribadi (metadata PDF dibersihkan).
- Tidak ada rahasia (kunci API) di repositori atau kode klien.
- Dependensi diperbarui berkala dan diaudit sebelum rilis.

---

## 13. Aksesibilitas dan Performa

### 13.1 Aksesibilitas (target WCAG 2.2 AA)

- `<html lang="id">`, struktur heading logis, satu H1 per halaman.
- Kontras teks memenuhi AA; fokus keyboard terlihat; ukuran sentuh minimal 44 × 44 px.
- Tautan lewati navigasi di awal halaman.
- Accordion, menu, dan filter dapat dioperasikan dengan keyboard dan dibaca pembaca layar.
- Informasi tidak hanya lewat warna (status batch memakai teks, bukan hanya warna).
- Alt text deskriptif; gambar dekoratif memakai `alt=""`.
- Hormati `prefers-reduced-motion`.

### 13.2 Performa

- Target pra-peluncuran (simulasi mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95. Ini target kerja, bukan jaminan data lapangan.
- Core Web Vitals "baik": LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1 pada persentil ke-75 bila data lapangan tersedia.
- JavaScript minimal; tanpa pustaka besar. Halaman tetap berfungsi tanpa JS (kecuali filter dan status otomatis).
- Gambar: format modern, ukuran sesuai, `width` dan `height` terisi, lazy-load di bawah fold, gambar LCP dimuat prioritas.
- Font self-host dengan jumlah weight terbatas.
- Ukuran PDF unduhan diperhatikan; tampilkan ukuran berkas di daftar.

---

## 14. Analitik dan Pengukuran

### 14.1 Event yang dilacak

| Event | Pemicu |
|-------|--------|
| `klik_daftar` | Klik tombol menuju formulir (parameter: jalur, lokasi tombol, batch) |
| `klik_posisi_daftar` | Klik Daftar untuk Posisi Ini (parameter: slug posisi) |
| `klik_unduhan` | Unduh dokumen (parameter: judul/kategori) |
| `klik_whatsapp` / `klik_email` | Klik kontak |
| `filter_posisi` | Penggunaan filter (parameter: jalur, bidang) |
| `klik_kerja_sama` | Klik Ajukan Kerja Sama / Jadi Mitra |

### 14.2 Pelaporan

- Bulanan: trafik, halaman teratas, klik Daftar, unduhan, dan kueri Search Console.
- Per batch: pendaftar (dari data formulir), pertanyaan paling sering masuk, dan pembaruan FAQ yang diperlukan.
- Jangan menyamakan klik tombol dengan jumlah pendaftar.

---

## 15. Acceptance Criteria

### 15.1 Umum (semua halaman)

- Build berhasil tanpa galat; `astro check` bersih.
- Title, meta description, H1, canonical, dan Open Graph sesuai dan unik.
- Responsif dari 360 px hingga 1440 px tanpa scroll horizontal.
- Tidak ada penanda `[konfirmasi]` yang tersisa di konten yang diterbitkan.
- Semua tautan internal dan unduhan valid.
- Semua gambar memiliki `alt`, dimensi, dan format yang dioptimasi.
- Skor Lighthouse memenuhi target di 13.2.
- Event analitik utama diuji.

### 15.2 Per jenis halaman

**Beranda**
- Tombol Daftar dan status batch terlihat tanpa menggulir di layar 360 × 640 px.
- Dua jalur peserta tampil jelas dan menaut ke halaman masing-masing.
- Hanya mitra dan testimoni dengan izin yang tampil.

**Halaman program (SMK dan Mahasiswa)**
- Memuat semua unsur di 6.3 atau 6.4, dengan nilai yang terkonfirmasi.
- Persyaratan dan dokumen dapat dipindai cepat (daftar atau tabel).
- CTA Daftar menuju formulir jalur yang benar.

**Alur dan Jadwal**
- Setiap batch menampilkan tanggal lengkap dan status yang benar di sisi klien; uji dengan tanggal sebelum, saat, dan setelah periode.
- Batch lama berada di arsip.

**Posisi**
- Filter berfungsi dan tahan terhadap hasil kosong; state tersimpan di URL.
- Tanpa JS, semua posisi tetap tampil.
- Build gagal bila referensi mitra/batch tidak valid.

**Berita**
- Tanggal terbit/diperbarui benar; draf tidak tampil di produksi.
- Pengumuman tidak memuat data pribadi peserta.

**Daftar**
- Memuat catatan privasi dan persetujuan orang tua/wali untuk siswa di bawah 18 tahun.
- Tautan formulir benar dan dibuka di tab baru.
- Saat batch ditutup, halaman menampilkan informasi batch berikutnya.

**Kontak**
- Semua kontak aktif dan diuji; tautan peta benar.

**Legal**
- Kebijakan Privasi memuat unsur di 12.1 dan telah ditinjau penyelenggara.

---

## 16. Rencana Implementasi

Estimasi urutan kerja untuk satu developer; waktu bergantung pada ketersediaan konten.

| Fase | Isi |
|------|-----|
| **0. Konfirmasi** | Menutup butir di Bagian 18; menetapkan penyelenggara, jalur, syarat, jadwal, mitra, formulir, domain, dan identitas visual; menyusun DESIGN.md |
| **1. Fondasi** | Inisialisasi Astro, Tailwind, TypeScript; `BaseLayout`, `Header`, `Footer`, `PageBanner`, token tema; content collections dan skema; CI dan deploy awal |
| **2. Halaman P0** | Beranda, Tentang, Program SMK, Program Mahasiswa, Alur, Jadwal (dengan status batch), Daftar, FAQ, Kontak, Kebijakan Privasi, 404 |
| **3. Halaman P1** | Posisi (daftar, filter, detail), Mitra, Untuk Sekolah dan Kampus, Untuk Mitra, Unduhan, Berita, Syarat dan Ketentuan, Cerita Alumni (bila ada izin) |
| **4. SEO, QA, dan peluncuran** | Metadata, sitemap, structured data, uji aksesibilitas dan performa, uji perangkat, uji alur pendaftaran, verifikasi Search Console |
| **5. Pasca-peluncuran** | Pantau analitik dan Search Console, perbarui FAQ dari pertanyaan nyata, tambah P2 (cek kelayakan, pencarian, kalender, galeri) sesuai kebutuhan |

---

## 17. Risiko dan Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Konten belum siap atau berubah (syarat, tanggal, mitra) | Satu sumber data lewat content collections; gerbang konten (Bagian 18); build gagal bila data tidak valid |
| Informasi kedaluwarsa (batch lama tampil "dibuka") | Status otomatis di sisi klien dan arsip batch; tinjau data sebelum setiap rilis |
| Formulir eksternal tidak mendukung semua kebutuhan (mis. unggah berkas yang memerlukan akun pengguna) | Pilih penyedia formulir sesuai kebutuhan dokumen; bila perlu, dokumen dikirim lewat email setelah pendaftaran |
| Data pribadi siswa di bawah umur | Persetujuan orang tua/wali di formulir; tidak mempublikasikan nama atau foto tanpa izin; hasil seleksi tidak diumumkan dengan nama |
| Klaim berlebihan (penempatan kerja, uang saku, sertifikat) | Hanya mencantumkan hal yang terkonfirmasi; ulas klaim sebelum terbit |
| Kompatibilitas Astro dan Tailwind | Pada saat riset ditemukan laporan di repositori Astro tentang galat build ketika Astro 6 dipadukan dengan `@tailwindcss/vite` 4.2.x, dengan jalan keluar sementara memakai `@tailwindcss/postcss`. Periksa status terbaru dan dokumentasi resmi saat setup, dan pin versi yang terbukti berjalan |
| Admin non-teknis kesulitan memperbarui konten | Template berkas konten, panduan singkat, validasi skema; opsi CMS berbasis Git di fase lanjutan |
| Pengguna ponsel dengan koneksi lambat | Halaman ringan, gambar teroptimasi, JS minimal |
| Link formulir berubah atau mati | URL formulir disimpan di satu tempat (`site.ts` atau data batch) dan diuji sebelum rilis |

---

## 18. Hal yang Harus Dikonfirmasi (Gerbang Konten)

Konten yang bergantung pada item berikut tidak boleh diterbitkan sebelum dikonfirmasi. Layout dan komponen boleh dibangun lebih dulu dengan penanda `[konfirmasi]`.

| Item | Dampak |
|------|--------|
| Nama resmi program dan penyelenggara, serta hubungan dengan sekolah/kampus | Tentang, footer, Kebijakan Privasi, schema |
| Skema peserta: siswa SMK (PKL/prakerin), mahasiswa (magang kampus), atau keduanya | Halaman program, alur |
| Durasi, jam kerja, dan format magang per jalur | Halaman program, posisi |
| Syarat peserta dan daftar dokumen | Halaman program, Daftar, Unduhan |
| Konversi SKS/nilai atau pengakuan akademik (bila ada) | Halaman mahasiswa, Untuk Sekolah dan Kampus |
| Uang saku, fasilitas, sertifikat, dan benefit lain | Beranda, program, posisi |
| Sistem pendampingan (guru/dosen pembimbing, pembimbing industri) | Program, Untuk Sekolah dan Kampus |
| Jadwal batch dan tanggal penting | Jadwal, Beranda, Daftar |
| Daftar mitra, izin penggunaan logo, dan data posisi | Mitra, Posisi |
| Platform dan URL formulir pendaftaran untuk tiap jalur, serta penanganan persetujuan orang tua/wali | Daftar, Kebijakan Privasi |
| Kontak resmi (WhatsApp, email, alamat, jam layanan) | Kontak, footer |
| Ketentuan kerja sama untuk sekolah, kampus, dan mitra (MoU/prosedur) | Halaman kerja sama, Unduhan |
| Alumni/testimoni dan izin tertulisnya | Cerita Alumni, Galeri |
| Domain, hosting, dan akses repositori | Seluruh implementasi |
| Logo dan identitas visual | DESIGN.md, seluruh tampilan |
| Gaya sapaan ("kamu" atau "Anda") | Seluruh teks |

---

## 19. Prinsip Keputusan Akhir

1. Informasi yang benar dan terbaru lebih penting daripada banyaknya halaman.
2. Prioritaskan jalur calon peserta menuju pendaftaran sebelum fitur tambahan.
3. Satu sumber data untuk setiap fakta (tanggal, syarat, kontak); jangan diketik ulang di banyak tempat.
4. Lindungi privasi peserta, terutama yang di bawah 18 tahun.
5. Jangan menjanjikan sesuatu yang belum dikonfirmasi penyelenggara.
6. Jaga website cepat, mudah dibaca di ponsel, dan dapat diakses semua orang.
7. Tambah fitur hanya setelah terbukti dibutuhkan dari pertanyaan dan data nyata pengunjung.
