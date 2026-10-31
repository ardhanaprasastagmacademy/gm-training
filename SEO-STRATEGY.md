# SEO-STRATEGY.md — Website Program Magang SMK Mahasiswa

**Versi:** 1.0
**Tanggal:** 29 Oktober 2026
**Acuan:** `prd.md` (Bagian 4, 5, 7, 11, 13, 14) dan `DESIGN.md`
**Stack:** Astro (statis) + Tailwind CSS, tanpa database
**Bahasa dan target pasar:** Bahasa Indonesia, pengguna di Indonesia, mesin pencari utama Google

Semua angka volume pencarian, peringkat, dan target trafik **sengaja tidak dicantumkan**. Belum ada data dasar (PRD 1.3). Keyword di dokumen ini adalah hipotesis yang harus divalidasi (Bagian 3.3).

---

## 1. Tujuan dan Prinsip

### 1.1 Tujuan SEO

1. Calon peserta yang mencari "magang SMK", "program magang mahasiswa", atau "cara daftar magang" menemukan website ini dan sampai ke halaman Daftar.
2. Sekolah, kampus, dan perusahaan yang mencari prosedur kerja sama menemukan halaman yang tepat.
3. Orang tua yang mengecek kredibilitas program menemukan informasi resmi yang konsisten, bukan kabar simpang siur dari grup pesan.
4. Mengurangi pertanyaan berulang ke admin karena jawabannya muncul langsung di hasil pencarian.

### 1.2 Prinsip

1. **Fakta benar dan terbaru lebih penting daripada banyaknya halaman** (PRD 19). Satu halaman akurat mengalahkan sepuluh halaman tipis.
2. **Satu URL permanen per topik.** Jadwal, Daftar, dan Posisi tetap di URL yang sama dari batch ke batch. Jangan membuat URL baru per batch.
3. **Satu sumber data** untuk tanggal, syarat, dan kontak, sehingga mesin pencari tidak menemukan versi yang saling bertentangan.
4. **Tidak ada klaim yang belum dikonfirmasi.** Penempatan kerja, uang saku, sertifikat, dan konversi SKS hanya ditulis bila sudah pasti (PRD 4.1).
5. **Privasi lebih tinggi daripada trafik.** Tidak ada nama, foto, atau hasil seleksi peserta yang bisa terindeks tanpa izin, terutama peserta di bawah 18 tahun.
6. **Tanpa trik.** Tidak ada teks tersembunyi, testimoni fiktif, jual-beli tautan, atau halaman massal tipis.

---

## 2. Audiens dan Maksud Pencarian

| Segmen | Maksud pencarian | Halaman tujuan |
|--------|------------------|----------------|
| Siswa SMK | Mencari tempat PKL/magang, syarat, dokumen, cara daftar | Program SMK, Posisi, Alur, Daftar |
| Mahasiswa | Mencari magang sesuai prodi, durasi, kaitan dengan kampus | Program Mahasiswa, Posisi, Alur, Daftar |
| Orang tua/wali | Memastikan program resmi dan aman | Tentang, FAQ, Kontak, Mitra |
| Guru/dosen pembimbing, bagian kerja sama | Prosedur dan dokumen kerja sama | Untuk Sekolah dan Kampus, Unduhan |
| Perusahaan/instansi | Cara menjadi tempat magang | Untuk Mitra |
| Pencari informasi umum | Tips CV, wawancara, logbook, laporan | Berita/Artikel, Unduhan |

Jenis maksud yang dilayani: **informasional** (syarat, cara daftar, tips), **navigasional** (nama program), dan **transaksional ringan** (lowongan, daftar). Setiap halaman melayani satu maksud utama.

---

## 3. Riset dan Pemetaan Keyword

### 3.1 Klaster keyword (hipotesis awal)

| Klaster | Contoh kueri | Halaman utama |
|---------|--------------|---------------|
| Merek | nama program, nama penyelenggara **[konfirmasi]** | Beranda |
| Magang SMK | magang SMK, PKL SMK, prakerin SMK, syarat magang SMK | `/program/magang-smk/` |
| Magang mahasiswa | program magang mahasiswa, syarat magang mahasiswa, magang untuk mahasiswa | `/program/magang-mahasiswa/` |
| Cara daftar | cara daftar magang, alur pendaftaran magang | `/alur-pendaftaran/`, `/daftar/` |
| Lowongan | lowongan magang SMK, lowongan magang mahasiswa, magang [bidang] | `/posisi/` dan detail posisi |
| Jadwal | jadwal pendaftaran magang, pendaftaran magang dibuka | `/jadwal/` |
| Kerja sama | kerja sama magang sekolah, kerja sama magang kampus, menjadi mitra magang | `/untuk-sekolah-kampus/`, `/untuk-mitra/` |
| Dokumen | surat pengantar magang, template logbook magang, format laporan magang | `/unduhan/` |
| Tips | cara membuat CV magang, persiapan wawancara magang, etika kerja saat magang | `/berita/` (artikel) |

Istilah yang berkaitan dengan skema akademik nasional (mis. program kampus merdeka atau konversi SKS) hanya dipakai bila hubungannya dengan program sudah dikonfirmasi **[konfirmasi]**. Jangan menumpang istilah yang tidak berlaku untuk program ini.

### 3.2 Aturan pemetaan

- **Satu keyword utama per halaman.** Dua halaman tidak boleh menyasar kueri yang sama.
- Variasi bahasa sehari-hari ("PKL", "prakerin", "magang") dimasukkan secara alami di isi, bukan dijejalkan di judul.
- Kueri berbasis kota atau jurusan hanya dibuatkan halaman bila ada konten nyata (mitra, posisi, dan keterangan unik). Lihat 6.3.

### 3.3 Cara memvalidasi (setelah peluncuran dan sebelum menulis artikel)

1. **Google Search Console**: kueri yang sudah memunculkan situs; mulai dikumpulkan sejak minggu pertama.
2. **Google Keyword Planner** dan **Google Trends**: perkiraan volume dan musim (periode PKL dan magang biasanya mengikuti kalender akademik **[konfirmasi]**).
3. **Autocomplete dan "People also ask"**: ide pertanyaan untuk FAQ dan artikel.
4. **Pertanyaan nyata** yang masuk ke WhatsApp/email admin: sumber topik FAQ yang paling dapat dipercaya.
5. Periksa **halaman peringkat teratas** untuk tiap klaster: jenis konten apa yang dihargai Google (daftar, panduan, portal resmi).

Catat hasil validasi di satu berkas (`seo/keyword-map.csv`) berisi: kueri, klaster, halaman, maksud, status (belum/ada/perlu perbaikan), dan tanggal tinjau.

---

## 4. Arsitektur Situs dan Tautan Internal

### 4.1 Struktur

Struktur URL mengikuti PRD 5.1 dan tidak diubah demi SEO. Aturan:

- Huruf kecil, kebab-case, kata bermakna, tanpa tanggal atau nomor batch di URL.
- `trailingSlash: "always"` di `astro.config.mjs`; semua tautan internal, canonical, dan sitemap konsisten bergaya slash.
- Tentukan satu versi domain (dengan atau tanpa `www`) dan arahkan yang lain dengan 301 **[konfirmasi]**.
- Hanya HTTPS; HTTP diarahkan 301 ke HTTPS.

### 4.2 Model hub dan spoke

| Hub | Spoke |
|-----|-------|
| Beranda | Semua halaman P0 |
| `/program/magang-smk/` | `/alur-pendaftaran/`, `/jadwal/`, `/posisi/` (jalur SMK), FAQ SMK, `/unduhan/` |
| `/program/magang-mahasiswa/` | `/alur-pendaftaran/`, `/jadwal/`, `/posisi/` (jalur mahasiswa), FAQ mahasiswa |
| `/posisi/` | Detail posisi → mitra → batch |
| `/berita/` | Artikel → halaman program atau Daftar yang relevan |

### 4.3 Aturan tautan internal

1. Setiap halaman dapat dijangkau maksimal **3 klik** dari Beranda dan tidak menjadi halaman yatim (tidak ditaut dari mana pun).
2. Teks tautan deskriptif ("syarat magang SMK", "jadwal batch berikutnya"), bukan "klik di sini".
3. Setiap artikel berita memuat minimal **2 tautan** ke halaman program/posisi/Daftar yang relevan, dan tautan balik dari halaman program ke artikel pendukung bila ada.
4. Detail posisi menaut ke: halaman jalur, halaman mitra (bila ada), dan `/daftar/`.
5. Breadcrumb di semua halaman dalam (UI di DESIGN.md 6.4, markup di Bagian 7).
6. Footer dan navigasi memakai tautan HTML biasa; tidak bergantung pada JavaScript agar dapat ditelusuri.

---

## 5. SEO On-Page

### 5.1 Aturan umum

- **Title:** unik, memuat keyword utama di bagian depan, sekitar 50–60 karakter; akhiri dengan nama program.
- **Meta description:** unik, menjelaskan isi dan manfaat halaman, sekitar 140–160 karakter, tanpa janji yang belum dikonfirmasi.
- **H1:** satu per halaman, selaras dengan title tetapi tidak harus identik.
- **Paragraf pembuka** menjawab maksud pencarian dalam 1–2 kalimat (berguna untuk snippet dan ringkasan berbasis AI).
- Sub-judul (H2/H3) berbentuk pertanyaan atau topik yang nyata dicari ("Apa saja syarat magang SMK?").
- Tabel atau daftar untuk syarat, dokumen, dan jadwal agar mudah dipindai.
- Tanggal "Diperbarui" tampak di halaman yang bergantung pada waktu (Jadwal, Daftar, Program, Berita).
- `<html lang="id">`, `og:locale` `id_ID`.

### 5.2 Rancangan metadata halaman P0

`[Nama Program]` diganti setelah nama resmi dikonfirmasi. Semua isi menyesuaikan data yang terkonfirmasi.

| Halaman | Contoh title | Fokus meta description |
|---------|--------------|------------------------|
| Beranda | Program Magang SMK dan Mahasiswa \| [Nama Program] | Apa itu program, dua jalur peserta, batch yang sedang dibuka |
| Tentang | Tentang [Nama Program]: Penyelenggara dan Tujuan | Siapa penyelenggara, tujuan, cara program berjalan |
| Magang SMK | Magang SMK: Syarat, Durasi, dan Cara Daftar \| [Nama Program] | Untuk siapa, syarat, dokumen, pendampingan, tombol daftar |
| Magang Mahasiswa | Magang Mahasiswa: Syarat dan Alur \| [Nama Program] | Syarat akademik, durasi, peran kampus, luaran |
| Alur Pendaftaran | Cara Daftar Magang: Langkah demi Langkah \| [Nama Program] | Delapan langkah dari persiapan sampai penempatan |
| Jadwal | Jadwal Pendaftaran Magang [Tahun] \| [Nama Program] | Tanggal buka, tutup, seleksi, mulai; status batch |
| Daftar | Daftar Magang: Pilih Jalur dan Siapkan Dokumen \| [Nama Program] | Pilih jalur, dokumen yang perlu disiapkan, tautan formulir |
| Posisi | Lowongan Magang SMK dan Mahasiswa \| [Nama Program] | Daftar posisi dengan filter jalur dan bidang |
| FAQ | Pertanyaan Umum tentang Magang \| [Nama Program] | Jawaban singkat untuk syarat, seleksi, dan pelaksanaan |
| Kontak | Kontak [Nama Program] | Saluran resmi, jam layanan, alamat |

Judul halaman Jadwal memuat tahun, jadi tahun harus berasal dari data batch aktif, bukan diketik manual.

### 5.3 Halaman detail posisi

Judul: `Magang [Posisi] di [Mitra], [Kota] | [Nama Program]`. Setiap posisi memuat konten unik (tugas, kualifikasi, jurusan relevan, durasi, lokasi, batas daftar). Bila deskripsi dua posisi nyaris sama, gabungkan atau tulis ulang pembedanya. Jangan membuat puluhan halaman dengan teks dasar sama.

### 5.4 Gambar

- Nama berkas deskriptif, `alt` bermakna, `width` dan `height` terisi, format modern (`astro:assets`).
- Gambar Open Graph 1200 × 630 per halaman utama; berfungsi sebagai pratinjau di WhatsApp dan media sosial.
- Foto asli kegiatan lebih diutamakan daripada foto stok (kepercayaan dan keunikan).

---

## 6. Strategi Konten

### 6.1 Kualitas dan kepercayaan (E-E-A-T)

Program ini menyentuh keputusan penting (pendidikan, keselamatan siswa), sehingga sinyal kepercayaan harus nyata:

- Identitas penyelenggara, alamat, dan kontak resmi terlihat jelas (Tentang, Kontak, footer).
- Mitra nyata dengan izin tayang; testimoni dan alumni hanya dengan izin tertulis dan tidak dibuat-buat.
- Tanggal terbit dan pembaruan tampak; penulis atau tim redaksi disebutkan di artikel.
- Kebijakan Privasi dan Syarat dan Ketentuan mudah ditemukan dari footer.
- Rujukan ke dokumen resmi (surat, panduan) bila ada.

### 6.2 Pilar artikel (Berita/Artikel)

Artikel hanya ditulis bila menjawab kebutuhan nyata, bukan demi jumlah. Prioritas topik, setelah divalidasi (3.3):

| Pilar | Contoh topik |
|-------|--------------|
| Persiapan | Dokumen yang perlu disiapkan sebelum daftar magang; cara membuat CV untuk magang; contoh surat lamaran magang |
| Seleksi | Persiapan wawancara magang; pertanyaan yang sering muncul |
| Selama magang | Etika kerja; cara mengisi logbook; cara menulis laporan magang |
| Orang tua | Cara memastikan program magang aman dan resmi; peran orang tua selama magang |
| Sekolah dan kampus | Prosedur kerja sama; peran guru/dosen pembimbing |

Standar tiap artikel: menjawab maksud dalam paragraf pertama, memuat langkah atau daftar yang dapat dipakai, menaut ke halaman program/Daftar/Unduhan, serta diperbarui bila prosedur berubah. Target kerja awal yang realistis adalah 1–2 artikel bermutu per bulan, bukan banyaknya artikel.

### 6.3 Halaman tambahan yang diizinkan

- **Halaman bidang atau jurusan** (mis. posisi bidang jaringan): boleh dibuat bila ada **minimal 3 posisi nyata** dan pengantar unik; selain itu cukup filter di `/posisi/`.
- **Halaman kota**: hanya bila ada mitra dan posisi nyata di kota itu.
- **Dilarang:** halaman massal per sekolah/kota/jurusan tanpa isi unik (halaman jembatan atau doorway).

### 6.4 Siklus batch dan musim

Pencarian magang mengikuti kalender akademik **[konfirmasi]**. Gunakan alur berikut tiap batch:

| Tahap | Tindakan SEO |
|-------|--------------|
| 4–6 minggu sebelum buka | Perbarui `/jadwal/`; terbitkan pengumuman "Batch [nama] akan dibuka"; artikel persiapan dokumen |
| Dibuka | Status "Dibuka" di Jadwal, Daftar, dan Beranda; bagikan di media sosial dan jaringan sekolah/kampus; pantau kueri di Search Console |
| 7 hari sebelum tutup | Pengumuman pengingat; artikel tips terakhir |
| Ditutup | Status "Ditutup" otomatis; tampilkan batch berikutnya; posisi kedaluwarsa disingkirkan dari markup (Bagian 7.4) |
| Setelah seleksi | Pengumuman umum tanpa nama peserta; batch dipindahkan ke arsip, **tidak dihapus** |

URL `/jadwal/` dan `/daftar/` **tidak berubah** antarbatch sehingga otoritasnya terakumulasi. Detail batch lama masuk arsip di halaman yang sama atau di `/jadwal/arsip/`.

---

## 7. SEO Teknis

### 7.1 Perayapan dan pengindeksan

| Aspek | Aturan |
|-------|--------|
| `robots.txt` | Izinkan semua halaman publik; cantumkan lokasi sitemap; blokir hanya lingkungan staging dan berkas non-publik |
| Sitemap | `@astrojs/sitemap`; hanya URL kanonis yang dapat diindeks (200); `lastmod` dari tanggal pembaruan konten sebenarnya |
| Canonical | Absolut, satu per halaman, mengarah ke dirinya sendiri; konsisten dengan versi domain dan slash |
| 404 | Halaman 404 mengembalikan status HTTP 404 (bukan 200), memuat tautan ke halaman penting |
| Pengalihan | Halaman yang dipindah diarahkan 301; hindari rantai pengalihan |
| Draf dan staging | `draft: true` tidak dibangun di produksi; staging memakai `noindex` dan proteksi sandi |
| Halaman kebijakan | Tetap dapat diindeks (sinyal kepercayaan) |

### 7.2 Filter dan parameter URL

Filter posisi menyimpan state di URL (`?jalur=smk&bidang=jaringan`, PRD 7.2). Agar tidak menciptakan duplikasi:

- Canonical dari URL berparameter menunjuk ke `/posisi/`.
- URL berparameter tidak dimasukkan ke sitemap dan tidak ditaut sebagai tautan internal statis.
- Semua posisi tetap dirender di HTML tanpa JavaScript, jadi isi dapat dibaca perayap tanpa menjalankan filter.

### 7.3 Performa (mendukung peringkat dan konversi)

Target mengikuti PRD 13.2 (LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1, Lighthouse mobile ≥ 90/95/95/95). Tambahan untuk pengguna di Indonesia:

- Pilih CDN dengan titik hadir di Asia Tenggara agar TTFB rendah bagi pengguna ponsel dengan koneksi lambat.
- Aktifkan kompresi (Brotli/gzip) dan cache panjang untuk aset berhash.
- Satu keluarga font, dua weight, self-host (DESIGN.md Bagian 3).
- Gambar hero dimuat prioritas; sisanya lazy-load. Jangan memuat skrip pihak ketiga yang berat.

### 7.4 Data terstruktur (JSON-LD)

Semua markup harus **mencerminkan isi yang terlihat di halaman**. Validasi dengan Rich Results Test dan alat validator schema.org sebelum rilis.

| Tipe | Halaman | Status |
|------|---------|--------|
| `Organization` (+ `WebSite`) | Beranda | Wajib |
| `BreadcrumbList` | Semua halaman dalam | Wajib |
| `Article` / `NewsArticle` | Artikel berita | Wajib untuk artikel |
| `JobPosting` | Detail posisi | **Bersyarat**, lihat di bawah |
| `FAQPage` | FAQ | Opsional, prioritas rendah |
| `LocalBusiness` / `EducationalOrganization` | Kontak, Tentang | Hanya bila ada kantor fisik dan alamat resmi **[konfirmasi]** |

**Catatan JobPosting.** Pedoman Google yang saya periksa menyebutkan: markup dipasang pada halaman detail satu lowongan (bukan pada halaman daftar lowongan), seluruh informasi dalam markup harus juga terlihat di halaman, dan lowongan yang sudah tidak tersedia harus dihapus, diberi `noindex`, atau markup-nya dilepas; pelanggaran dapat dikenai tindakan manual. Konsekuensi untuk situs statis ini:

1. Pasang `JobPosting` **hanya** di `/posisi/[slug]/` untuk posisi yang nyata, aktif, dan memiliki jalur pendaftaran yang jelas. Jangan di `/posisi/`.
2. Jangan menuliskan `baseSalary` atau benefit yang belum dikonfirmasi.
3. Isi `validThrough` dari tanggal tutup batch. Setelah tanggal itu, markup harus hilang. Karena situs statis, **jadwalkan build ulang otomatis harian** (tugas terjadwal di CI/hosting) agar posisi kedaluwarsa tidak membawa markup, dan agar status batch di HTML ikut segar.
4. Uji satu-dua posisi lebih dulu dengan Rich Results Test dan Search Console sebelum diterapkan ke semua. Bila ada keraguan apakah halaman memenuhi pedoman, **jangan dipasang** (sejalan dengan PRD 11.2).
5. Periksa dokumentasi resmi Google Search Central saat implementasi, karena pedoman dapat berubah.

**Catatan FAQPage.** Sejumlah sumber industri melaporkan bahwa Google membatasi rich result FAQ sejak Agustus 2023 dan menghentikannya sepenuhnya pada 7 Mei 2026. Konfirmasikan di dokumentasi resmi. Karena itu, jangan membuat FAQ demi markup. Tulis FAQ untuk pengguna, tampilkan semua jawabannya di halaman, dan anggap `FAQPage` sebagai tambahan opsional yang tidak menjanjikan tampilan khusus di hasil pencarian.

Contoh `Organization` (nilai dalam tanda kurung siku diisi setelah dikonfirmasi):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Nama Program/Penyelenggara]",
  "url": "https://[domain-final]/",
  "logo": "https://[domain-final]/og/logo.png",
  "sameAs": ["[URL Instagram]", "[URL LinkedIn]"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "[email resmi]",
    "areaServed": "ID",
    "availableLanguage": "id"
  }
}
```

Contoh `JobPosting` (hanya bila memenuhi syarat di atas):

```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Magang [Posisi]",
  "description": "<p>[Deskripsi yang sama dengan isi halaman]</p>",
  "datePosted": "[YYYY-MM-DD]",
  "validThrough": "[tanggalTutup, ISO 8601, WIB]",
  "employmentType": "INTERN",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "[Nama Mitra]",
    "sameAs": "[URL mitra]"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "[Kota]",
      "addressCountry": "ID"
    }
  }
}
```

### 7.5 Mesin pencari lain dan pratinjau

- Daftarkan situs di **Google Search Console** dan **Bing Webmaster Tools** (verifikasi lewat DNS).
- Pastikan Open Graph dan Twitter Card terisi karena pembagian tautan di WhatsApp dan media sosial adalah saluran penting di segmen ini.
- Uji pratinjau tautan di WhatsApp sebelum peluncuran.

---

## 8. SEO di Luar Situs dan Reputasi

### 8.1 Tautan masuk (backlink) yang sah

Sumber yang realistis dan sesuai konteks:

| Sumber | Cara |
|--------|------|
| Sekolah dan kampus rekanan | Minta tautan di halaman kerja sama atau bagian PKL/magang situs mereka |
| Mitra industri | Minta tautan "Program magang kami" di situs mitra (selaras dengan halaman Mitra) |
| Dinas pendidikan, asosiasi, forum guru BK/dosen | Kirim pengumuman batch dan informasi resmi |
| Media lokal dan kampus | Rilis pers untuk peluncuran, kegiatan, dan batch baru |
| Profil resmi | Instagram, LinkedIn, dan kanal lain mencantumkan URL situs dengan nama yang sama |

Jangan membeli tautan, ikut skema tautan, atau menyebar komentar spam. Tautan berkualitas rendah lebih merugikan daripada tidak ada.

### 8.2 Profil bisnis lokal

Bila penyelenggara memiliki kantor fisik yang menerima kunjungan **[konfirmasi]**, buat dan verifikasi **Google Business Profile** dengan nama, alamat, telepon, dan jam layanan yang persis sama dengan halaman Kontak. Bila tidak ada kantor, lewati.

### 8.3 Konsistensi identitas

Nama program, logo, deskripsi singkat, dan kontak harus identik di situs, profil sosial, dan dokumen unduhan. Perbedaan memperlemah kepercayaan mesin dan orang.

### 8.4 Mencari lewat media sosial dan video

Pelajar sering mencari lewat platform sosial. Rencanakan konten pendek yang selalu menaut ke halaman situs (bukan ke formulir langsung) agar trafik tercatat dan halaman memperoleh sinyal. Konten dengan wajah peserta memerlukan izin tertulis (orang tua/wali bila di bawah 18 tahun).

---

## 9. Pencarian Berbasis Jawaban dan Ringkasan AI

Sebagian pengguna kini mendapat jawaban lewat ringkasan AI atau asisten percakapan. Pendekatan yang tetap relevan tanpa trik khusus:

- Tulis jawaban yang singkat, tepat, dan berdiri sendiri di bagian awal halaman (syarat, durasi, tanggal).
- Pakai pernyataan faktual yang konsisten di semua halaman (satu sumber data).
- Beri nama entitas yang jelas: nama program, penyelenggara, mitra, kota.
- Cantumkan tanggal pembaruan agar jawaban tidak dianggap kedaluwarsa.
- Pastikan konten penting ada di HTML, bukan hanya muncul setelah JavaScript berjalan.

Tidak ada jaminan sebuah situs akan dikutip. Fokus pada konten yang paling berguna dan akurat.

---

## 10. Pengukuran dan Tinjauan

### 10.1 Metrik

| Kategori | Metrik | Sumber |
|----------|--------|--------|
| Visibilitas | Impresi, klik, CTR, posisi rata-rata per klaster | Search Console |
| Cakupan | Halaman terindeks vs dikirim di sitemap; galat 404/5xx; halaman "ditemukan, belum diindeks" | Search Console |
| Tindakan | `klik_daftar`, `klik_posisi_daftar`, `klik_unduhan`, `klik_whatsapp`, `klik_email`, `filter_posisi`, `klik_kerja_sama` (PRD 14.1) | Analitik |
| Kualitas teknis | Core Web Vitals lapangan, Lighthouse halaman kunci | Search Console, uji berkala |
| Dampak operasional | Pertanyaan berulang ke admin (dicatat manual per batch) | Tim penyelenggara |
| Reputasi | Tautan masuk baru, sebutan nama program | Search Console, pemantauan manual |

Jangan menyamakan klik tombol dengan jumlah pendaftar (PRD 14.2). Data pendaftar berasal dari formulir.

### 10.2 Ritme tinjauan

- **Mingguan (bulan pertama):** cakupan indeks, kueri baru, galat.
- **Bulanan:** laporan trafik, halaman teratas, kueri teratas, klik Daftar dan unduhan, halaman yang turun.
- **Per batch:** kueri musiman, pertanyaan yang sering masuk → perbarui FAQ dan artikel; tambahkan anotasi tanggal pembukaan/penutupan di catatan analitik.
- **Triwulan:** audit konten (data kedaluwarsa, halaman tipis, tautan rusak), revisi peta keyword.

Tetapkan baseline setelah 8–12 minggu data pertama. Baru kemudian tentukan target (PRD 1.3).

---

## 11. Risiko SEO dan Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Informasi batch kedaluwarsa muncul di hasil pencarian | Status otomatis di klien, build ulang terjadwal harian, `validThrough` dan penghapusan markup setelah tutup |
| Pelanggaran pedoman JobPosting (markup di halaman daftar, posisi kedaluwarsa, data tak tampil di halaman) | Aturan 7.4; uji sebelum rilis; pasang bertahap |
| Konten tipis atau duplikat (posisi mirip, halaman massal) | Satu keyword per halaman; gabungkan posisi mirip; larangan halaman jembatan (6.3) |
| Duplikasi akibat parameter filter | Canonical ke `/posisi/`, tidak masuk sitemap (7.2) |
| Data pribadi peserta ikut terindeks | Tidak ada nama atau foto tanpa izin; hasil seleksi tanpa nama; dokumen unduhan dibersihkan metadatanya |
| Klaim berlebihan merusak kepercayaan | Hanya info terkonfirmasi; ulas klaim sebelum terbit |
| Staging terindeks | `noindex` dan proteksi sandi pada staging |
| Ketergantungan pada satu mesin pencari | Selain Google, daftarkan Bing; bangun saluran langsung (sekolah, kampus, media sosial) |
| Perubahan pedoman Google | Periksa dokumentasi resmi saat implementasi dan tinjau triwulan |
| Konten tidak diperbarui | Pemilik konten per halaman dan jadwal tinjau (10.2) |

---

## 12. Peta Jalan

### 12.1 Sebelum peluncuran (Fase 0–4 PRD)

- [ ] Nama program, penyelenggara, domain, dan versi domain (www/non-www) ditetapkan
- [ ] Peta keyword awal (`keyword-map.csv`) disusun dari klaster di 3.1
- [ ] Title, meta description, dan H1 unik di semua halaman P0
- [ ] Canonical, sitemap, `robots.txt`, 404 berstatus 404, pengalihan 301 HTTP→HTTPS
- [ ] Open Graph 1200 × 630 dan pratinjau WhatsApp diuji
- [ ] `Organization`, `WebSite`, `BreadcrumbList` tervalidasi; `JobPosting` diuji pada sampel atau ditunda
- [ ] Staging `noindex`; draf tidak terbit
- [ ] Tidak ada penanda `[konfirmasi]` di halaman terbit
- [ ] Event analitik utama diuji
- [ ] Search Console dan Bing Webmaster Tools terverifikasi, sitemap dikirim
- [ ] Lighthouse dan Core Web Vitals memenuhi target

### 12.2 Hari 0–30

- Pantau indeksasi dan galat tiap minggu; minta pengindeksan untuk halaman utama.
- Kirim pengumuman peluncuran ke sekolah, kampus, dan mitra; minta tautan pertama.
- Kumpulkan kueri nyata dari Search Console dan pertanyaan admin.

### 12.3 Hari 30–90

- Perbarui FAQ dan halaman program berdasarkan kueri dan pertanyaan nyata.
- Terbitkan artikel prioritas pertama (3.3 → 6.2).
- Tinjau halaman dengan impresi tinggi dan CTR rendah: perbaiki title dan description.
- Siapkan siklus batch berikutnya (6.4).

### 12.4 Setelah 90 hari

- Tetapkan baseline dan target.
- Evaluasi halaman bidang/kota (6.3) dan fitur P2 (pencarian situs, kalender `.ics`, galeri).
- Audit konten triwulan dan perluas jaringan tautan masuk.

---

## 13. Hal yang Perlu Dikonfirmasi

| Item | Dampak SEO |
|------|-----------|
| Nama resmi program/penyelenggara dan domain final | Title, schema, merek, canonical |
| Versi domain (www/non-www) | Canonical dan pengalihan |
| Kalender akademik dan periode batch | Rencana konten musiman, judul Jadwal |
| Istilah resmi untuk skema (PKL, prakerin, magang kampus) | Keyword dan isi halaman program |
| Kantor fisik dan alamat resmi | `LocalBusiness`, Google Business Profile |
| Kelayakan `JobPosting` (alur lamar per posisi, posisi nyata, siapa pemberi kerja) | Penerapan markup |
| Izin tayang mitra, alumni, dan foto | Halaman Mitra, Cerita Alumni, Open Graph |
| Kemampuan hosting untuk build terjadwal harian | Kesegaran status batch dan markup |
| Pemilik konten tiap halaman | Jadwal tinjau dan pembaruan |
| Platform analitik yang dipakai dan penyesuaian kebijakan privasi | Pengukuran dan Kebijakan Privasi |
