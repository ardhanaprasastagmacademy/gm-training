# Panduan Lengkap Penulisan Artikel: SEO, AEO, GEO, Schema & OpenGraph

Dokumen ini merupakan panduan komprehensif bagi tim redaksi dan pengelola konten website **Gemilang Training Malang** (`maganginformatika.web.id`). Panduan ini dirancang agar setiap artikel yang diterbitkan memiliki kualitas tulisan tinggi, terindeks sempurna di Google Search, dikutip oleh mesin pencari AI (*Answer Engine Optimization*), mendominasi pencarian lokal Malang (*GEO*), bebas error pada *Rich Results Test*, serta menampilkan gambar cuplikan (*link preview*) yang rapi saat dibagikan ke WhatsApp dan media sosial.

---

## 1. Spesifikasi Frontmatter Artikel

Setiap artikel disimpan di folder `src/content/berita/<slug-artikel>.md` dan wajib diawali dengan blok frontmatter YAML di antara tanda `---`:

```yaml
---
judul: "Pembekalan Budaya Kerja dan Keselamatan Industri bagi Peserta Baru"
ringkasan: "Catatan pelaksanaan orientasi bersama pengawas industri, membahas pengisian logbook mingguan, disiplin jam kerja, dan standar keselamatan kerja (K3)."
tanggal: 2026-10-25
diperbarui: 2026-10-25
kategori: "kegiatan"
gambar: "/images/galeri/galeri-5.webp"
penulis: "Koordinator Program Gemilang Training"
draft: false
---
```

### Aturan Setiap Kolom (Field):
| Kolom | Tipe | Batasan & Ketentuan | Fungsi Utama |
|---|---|---|---|
| `judul` | String | 50 – 65 Karakter. Jangan huruf kapital semua (*Title Case*). Letakkan kata kunci utama di depan. | Ditampilkan sebagai `<h1>`, `<title>`, `og:title`, dan `headline` pada skema Article. |
| `ringkasan` | String | 120 – 200 Karakter. Ringkas, padat, dan menjawab maksud pembaca. | Ditampilkan sebagai subjudul lead, `<meta name="description">`, `og:description`, dan `description` skema Article. |
| `tanggal` | Date | Format `YYYY-MM-DD` (contoh: `2026-10-25`). | Penanda waktu terbit resmi (`datePublished` pada JSON-LD & meta artikel). |
| `diperbarui` | Date (Opsional) | Format `YYYY-MM-DD`. Isi bila ada revisi atau penambahan materi signifikan. | Mengindikasikan kesegaran konten (*content freshness*) ke Google (`dateModified`). |
| `kategori` | Enum | Hanya pilih salah satu: `'artikel'`, `'kegiatan'`, atau `'pengumuman'`. | Mengelompokkan jenis postingan pada badge pill dan navigasi breadcrumb. |
| `gambar` | String (Path) | Path gambar lokal berawalan `/` (contoh: `/images/galeri/galeri-5.webp`). | Gambar utama (*featured hero*), `og:image`, dan gambar skema Google Rich Snippet. |
| `penulis` | String | Nama jabatan/institusi resmi (contoh: `"Koordinator Program Gemilang Training"`). | Memberikan sinyal kredibilitas E-E-A-T dan properti `author` pada skema Article. |
| `draft` | Boolean | `false` untuk publikasi langsung; `true` untuk draf artikel yang belum ingin ditayangkan. | Mengontrol visibilitas artikel di sitemap dan halaman indeks publik. |

---

## 2. Panduan SEO (Search Engine Optimization)

SEO memastikan artikel memperoleh peringkat teratas di Google untuk kueri pencarian organik yang ditargetkan calon peserta magang, guru SMK, dan dosen pembimbing.

### 2.1 Struktur Judul (*Title Tag*) & Heading
- **H1 (Judul Utama):** Otomatis digenerate oleh sistem dari kolom `judul` frontmatter. **Jangan menulis tanda `# Judul` di dalam badan artikel** agar tidak terjadi duplikasi tag `<h1>`.
- **H2 (Subjudul Bab Utama):** Gunakan tanda `## Subjudul` untuk membagi artikel menjadi 3–5 poin pembahasan utama. Masukkan variasi kata kunci target pada minimal satu judul H2.
- **H3 (Sub-poin Pembahasan):** Gunakan `### Sub-poin` untuk perincian teknis di bawah H2.

### 2.2 Panjang Konten & Paragraf
- **Panjang Ideal:** 600 – 1.200 kata untuk artikel edukatif mendalam; 300 – 600 kata untuk warta dokumentasi kegiatan.
- **Format Paragraf:** 2 – 4 baris per paragraf. Hindari dinding teks (*wall of text*). Sisipkan daftar berbutir (*bullet points*) atau penomoran (*numbered lists*) untuk memudahkan pemindaian visual (*skimmable*).

### 2.3 Penautan Internal (*Internal Linking*)
Setiap artikel **wajib menyertakan minimal 2 hingga 3 tautan internal** yang relevan ke halaman resmi website dengan format markdown `[Teks Anchor](/path-tujuan/)`:
- Tautan ke program kejuruan: `[Program Magang Siswa SMK](/program/magang-smk/)` atau `[Program Magang Mahasiswa](/program/magang-mahasiswa/)`
- Tautan ke berkas administratif: `[Pusat Unduhan Resmi](/unduhan/)`
- Tautan ke formulir pendaftaran: `[Alur Pendaftaran Magang](/alur-pendaftaran/)` atau `[Formulir Pendaftaran Batch](/pendaftaran/form/)`
- Tautan ke kemitraan: `[Kemitraan Sekolah & Kampus](/untuk-sekolah-kampus/)`

---

## 3. Panduan AEO (Answer Engine Optimization)

AEO dirancang agar artikel Anda dipilih dan dikutip langsung sebagai sumber jawaban (*direct citation*) oleh mesin pencari berbasis kecerdasan buatan, seperti **Google AI Overviews (SGE)**, **ChatGPT Search**, **Perplexity.ai**, dan **Gemini**.

### 3.1 Aturan Piramida Terbalik (Inverted Pyramid)
AI memprioritaskan teks yang memberikan jawaban langsung di awal paragraf tanpa basa-basi berbelit:
1. **2–3 Kalimat Pertama:** Berikan jawaban langsung, definisi konkret, atau rangkuman inti atas pertanyaan utama artikel.
2. **Bagian Tengah:** Uraikan alasan teknis, landasan regulasi, atau prosedur langkah demi langkah.
3. **Bagian Akhir:** Sajikan kesimpulan dan langkah tindak lanjut (*Call to Action*).

### 3.2 Snippet Bait (Format yang Disukai AI)
Gunakan format-format berikut di dalam isi artikel:
- **Daftar Berbutir dengan Frasa Tebal:**
  ```markdown
  Materi orientasi magang mencakup:
  - **Etika & Tata Tertib Kerja:** Kepatuhan jam kerja dan kerahasiaan data perusahaan.
  - **Keselamatan Kerja (K3):** Prosedur keselamatan perangkat keras dan lingkungan kerja.
  - **Pencatatan Logbook Mingguan:** Verifikasi aktivitas harian bersama mentor praktisi.
  ```
- **Blok Kutipan Penegasan (*Blockquote*):**
  ```markdown
  > **Tips Praktisi:** Setiap peserta diwajibkan mencatat progres coding harian di repository Git agar evaluasi mentor industri berjalan objektif.
  ```
- **Bagian Tanya Jawab (FAQ Mini):**
  Cantumkan pertanyaan umum di akhir artikel lengkap dengan jawaban tegas 2–3 kalimat.

---

## 4. Panduan GEO (Geographic & Local SEO Malang)

GEO bertujuan mengukuhkan otoritas situs pada pencarian lokal di wilayah target operasional utama: **Kota Malang, Malang Raya, dan Jawa Timur**.

### 4.1 Entitas Geografis Wajib
Di dalam artikel, cantumkan penyebutan entitas lokal secara alami (tidak berlebihan/spam):
- Wilayah target: *"Kota Malang"*, *"Malang Raya"*, *"Jawa Timur"*.
- Alamat operasional resmi: *"Jl. Lowokwaru, Kota Malang"*.
- Ekosistem mitra pendidikan: Perguruan tinggi dan sekolah rekanan di Malang seperti *Politeknik Negeri Malang (Polinema)*, *Universitas Negeri Malang (UM)*, *SMK PGRI 3 Malang (Skariga)*, *SMKN 5 Malang*, dan sekolah mitra vokasi lainnya.

### 4.2 Contoh Kalimat Berbasis GEO yang Efektif
> *"Bagi siswa SMK dan mahasiswa teknik informatika di Kota Malang dan sekitarnya, program magang ini diselenggarakan di area strategis Jl. Lowokwaru dengan kurikulum industri terpadu."*

---

## 5. Panduan Schema.org & Google Rich Results

Website telah dilengkapi injeksi skema otomatis JSON-LD Graph. Setiap kali artikel diterbitkan, sistem secara otomatis membangun metadata terstruktur berstandar schema.org:

### 5.1 Komponen Skema `Article` Otomatis:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Judul Artikel",
  "description": "Ringkasan Artikel",
  "image": [
    "https://gm-training.pages.dev/images/galeri/galeri-5.jpg"
  ],
  "datePublished": "2026-10-25T00:00:00.000Z",
  "dateModified": "2026-10-25T00:00:00.000Z",
  "author": {
    "@type": "Organization",
    "name": "Koordinator Program Gemilang Training",
    "url": "https://gm-training.pages.dev"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Program Magang Informatika SMK & Mahasiswa",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gm-training.pages.dev/images/logo-gm.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://gm-training.pages.dev/blog/<slug>/"
  }
}
```

### 5.2 Mengapa Properti `image` Wajib?
Pada pengujian **Google Rich Results Test (Pengujian Hasil Multimedia)**, tidak adanya kolom `image` akan menimbulkan peringatan kuning (*warning*). Sistem website ini telah dikonfigurasi untuk:
1. Mengambil URL gambar dari kolom `gambar` di frontmatter.
2. Mengubah format ke file raster resolusi tinggi (`.jpg`) secara otomatis.
3. Menyematkan URL absolut penuh sehingga Google mendeteksi **100% item valid tanpa masalah non-kritis**.

---

## 6. Panduan Gambar & OpenGraph (Pratinjau WhatsApp & Media Sosial)

Agar kartu pratinjau (*link preview*) muncul dengan gambar foto yang jelas saat tautan dibagikan di WhatsApp, Telegram, Facebook, dan LinkedIn:

### 6.1 Ketentuan Teknis Gambar OpenGraph:
1. **Format File Wajib: JPEG (`.jpg`) atau PNG (`.png`).**
   > [!CAUTION]
   > WhatsApp dan Facebook **TIDAK MENDUKUNG format SVG** untuk `og:image`. Gambar berformat `.svg` akan ditolak oleh bot WhatsApp sehingga tautan hanya tampil berupa teks tanpa foto.
2. **Ukuran File: Wajib di bawah 300 KB.**
   - Rekomendasi: **80 KB – 200 KB**.
   - WhatsApp akan membatalkan pengunduhan thumbnail pratinjau jika ukuran file gambar melebihi 300 KB.
3. **Resolusi dan Aspek Rasio:**
   - Rasio standar: **16:9** atau **1.91:1**.
   - Dimensi ideal: **1200 × 675 piksel** atau **1200 × 630 piksel**.
4. **Lokasi Penyimpanan Aset:**
   - Simpan gambar kegiatan/artikel di folder `public/images/galeri/` (sediakan versi `.webp` untuk performa web dan `.jpg` untuk OpenGraph).
   - Simpan gambar branding default di folder `public/og/` (`default-og.jpg` dan `default-og.png`).

---

## 7. Checklist Sebelum Menerbitkan Artikel

Sebelum mengubah `draft: false` dan melakukan commit, periksa 8 poin verifikasi berikut:

- [ ] **Judul Menarik & Tidak Kapital Semua:** Judul menggunakan Title Case, panjang 50–65 karakter, dan memuat kata kunci utama.
- [ ] **Ringkasan Padat:** Ringkasan maksimal 200 karakter, jelas, dan memancing klik (*CTR*).
- [ ] **Gambar Tersedia & Terverifikasi:** File gambar berukuran 1200×675 px dan file JPEG pendukungnya tersedia di `public/images/galeri/`.
- [ ] **Tidak Ada Tag H1 Manual:** Badan artikel hanya menggunakan heading `## H2` dan `### H3`.
- [ ] **Terdapat Minimal 2 Internal Link:** Tautan internal aktif ke halaman `/program/`, `/unduhan/`, atau `/pendaftaran/form/`.
- [ ] **Sinyal Lokal Malang (GEO):** Terdapat penyebutan Kota Malang dan relevansi kejuruan industri.
- [ ] **Snippet AEO:** Paragraf pertama menjawab topik utama secara langsung dalam 2–3 kalimat lugas.
- [ ] **Pengujian Build Lokal:** Jalankan `npm run check` dan `npm run build` di terminal untuk memastikan 0 error pada seluruh halaman statis.

