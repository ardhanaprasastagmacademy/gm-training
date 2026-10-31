# DESIGN.md — Website Program Magang SMK Mahasiswa

**Versi:** 1.0
**Tanggal:** 29 Oktober 2026
**Acuan:** `prd.md` (Bagian 8, 10, 13)
**Stack:** Astro + Tailwind CSS v4 (konfigurasi `@theme` di `src/styles/global.css`)
**Warna dasar:** Maroon dan putih

Dokumen ini adalah satu-satunya sumber keputusan visual. Semua nilai warna, font, jarak, dan radius di kode harus berasal dari token di Bagian 11, bukan ditulis ulang di komponen.

---

## 1. Prinsip Desain

1. **Putih dominan, maroon sebagai penanda.** Sekitar 80% permukaan putih atau putih-kemerahan sangat muda. Maroon dipakai untuk tindakan (tombol Daftar), struktur (header, footer, satu pita hero), dan penekanan. Jangan mengecat semua bagian dengan maroon.
2. **Hangat dan tepercaya.** Orang tua dan sekolah ikut menilai. Tampilan tenang, rapi, dan tidak ramai. Ramah pelajar tanpa terlihat main-main.
3. **Mobile-first.** Dirancang dari layar 360 px. Tombol Daftar dan status batch harus terlihat tanpa menggulir di 360 × 640 px.
4. **Satu tindakan utama per bagian.** Hanya ada satu tombol maroon penuh per layar.
5. **Bukan template generik.** Tanpa gradien dekoratif, tanpa emoji, tanpa baris tiga kartu identik yang diulang di setiap bagian. Utamakan foto kegiatan asli dan variasikan pola tata letak antarbagian (lihat Bagian 9).
6. **Informasi tidak bergantung pada warna.** Status, error, dan jalur peserta selalu memakai teks, bukan hanya warna.

---

## 2. Warna

Semua warna diuji terhadap WCAG 2.2 AA. Rasio kontras di bawah dihitung dari nilai hex; verifikasi ulang dengan alat kontras bila nilai diubah.

### 2.1 Maroon (warna merek)

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `maroon-50` | `#FBF4F5` | Latar bagian selang-seling, kartu lembut |
| `maroon-100` | `#F6E6E9` | Latar badge, hover item daftar, teks pendukung di atas maroon |
| `maroon-200` | `#EBCBD1` | Garis dan pembatas bernuansa merek |
| `maroon-300` | `#DBA3AE` | Ikon dekoratif, ilustrasi |
| `maroon-400` | `#C47585` | Ikon dekoratif (bukan teks) |
| `maroon-500` | `#A3405A` | Aksen sekunder (bukan teks kecil) |
| `maroon-700` | `#800020` | **Warna utama.** Tombol, tautan, judul penekanan, pita hero |
| `maroon-800` | `#660019` | Hover/aktif tombol dan tautan |
| `maroon-900` | `#4A0012` | Footer, teks di atas latar terang yang butuh bobot ekstra |

Satu-satunya nilai yang perlu disesuaikan bila logo penyelenggara sudah ada adalah `maroon-700`. Turunkan skala lainnya dari warna logo **[konfirmasi]**.

### 2.2 Netral

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `paper` | `#FFFFFF` | Latar utama |
| `ink` | `#2A1A1D` | Teks isi dan judul (netral hangat, bukan hitam murni) |
| `muted` | `#6B5A5E` | Teks sekunder, keterangan, placeholder |
| `line` | `#E7DCDE` | Garis tepi kartu, pemisah, border input |

### 2.3 Status

| Token | Teks | Latar | Label wajib |
|-------|------|-------|-------------|
| `status-open` | `#1F6B3A` | `#EAF5EE` | "Dibuka" |
| `status-soon` | `#7A4B00` | `#FFF4DB` | "Akan Dibuka" |
| `status-closed` | `#4A4A4A` | `#EFEFEF` | "Ditutup" |
| `error` | `#9B1C1C` | `#FDECEC` | Pesan galat tertulis |

Status batch (PRD 7.1) selalu tampil sebagai **ikon + teks + warna**, tidak pernah warna saja.

### 2.4 Kontras kunci

| Kombinasi | Rasio | Catatan |
|-----------|-------|---------|
| Putih di atas `maroon-700` | ≈ 10,8 : 1 | Tombol utama, hero, header mobile |
| Putih di atas `maroon-800` | ≈ 13,3 : 1 | Hover tombol |
| Putih di atas `maroon-900` | ≈ 16,2 : 1 | Footer |
| `maroon-100` di atas `maroon-700` | ≈ 9,0 : 1 | Teks pendukung di pita hero |
| `maroon-700` di atas `maroon-50` | ≈ 10,0 : 1 | Tautan di bagian berlatar lembut |
| `muted` di atas putih | ≈ 6,5 : 1 | Teks sekunder |
| `status-open` di atas latarnya | ≈ 5,8 : 1 | Lencana |
| `status-soon` di atas latarnya | ≈ 6,8 : 1 | Lencana |

### 2.5 Aturan pemakaian warna

- Teks isi: `ink` di atas `paper` atau `maroon-50`. Jangan memakai maroon untuk paragraf panjang.
- Tautan dalam teks: `maroon-700`, bergaris bawah. Hover: `maroon-800`.
- Warna `maroon-300` hingga `maroon-500` tidak dipakai untuk teks kecil.
- Tanpa gradien. Tanpa bayangan berwarna. Tanpa mode gelap di v1.

---

## 3. Tipografi

**Keluarga:** Plus Jakarta Sans (self-host lewat Fontsource), satu keluarga, dua weight: **400** dan **700**. Sesuai batasan PRD 8.1.

```ts
// BaseLayout.astro
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/700.css";
```

Fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Gunakan `font-display: swap`.

### 3.1 Skala

| Peran | Ukuran (mobile → desktop) | Weight | Line-height | Catatan |
|-------|---------------------------|--------|-------------|---------|
| `display` (H1 hero) | `clamp(2rem, 1.5rem + 2.5vw, 3.25rem)` | 700 | 1.1 | Letter-spacing −0,02em |
| `h1` (halaman dalam) | `clamp(1.75rem, 1.4rem + 1.8vw, 2.5rem)` | 700 | 1.15 | Satu H1 per halaman |
| `h2` | `clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)` | 700 | 1.2 | Judul bagian |
| `h3` | `1.25rem` | 700 | 1.3 | Judul kartu |
| `lead` | `1.125rem` | 400 | 1.6 | Kalimat pembuka di bawah judul |
| `body` | `1rem` | 400 | 1.65 | Teks isi, minimal 16 px |
| `small` | `0.875rem` | 400 | 1.5 | Keterangan, meta |
| `caption` | `0.8125rem` | 400 | 1.4 | Ukuran berkas, tanggal pembaruan; batas terkecil |

### 3.2 Aturan

- Lebar baris teks isi maksimal **65 karakter** (`max-w-prose`).
- Penekanan memakai weight 700, bukan huruf kapital semua. Tanpa italic untuk paragraf panjang.
- Judul rata kiri. Tanpa teks rata tengah untuk lebih dari dua baris.
- Angka tanggal dan hitung mundur memakai `font-variant-numeric: tabular-nums`.
- Format tanggal: **29 Oktober 2026**, zona waktu WIB dicantumkan pada tanggal tutup.

---

## 4. Tata Letak dan Jarak

### 4.1 Grid dan kontainer

| Aspek | Nilai |
|-------|-------|
| Breakpoint | `sm` 640, `md` 768, `lg` 1024, `xl` 1280 |
| Kontainer maksimal | `72rem` (1152 px) |
| Padding horizontal kontainer | 20 px (mobile), 32 px (`md`), 40 px (`lg`) |
| Kolom | 4 (mobile), 8 (`md`), 12 (`lg`) |
| Gutter | 16 px (mobile), 24 px (`md` ke atas) |

Tidak boleh ada scroll horizontal dari 360 px hingga 1440 px.

### 4.2 Jarak

Basis **4 px**. Skala yang dipakai: 4, 8, 12, 16, 24, 32, 48, 64, 96.

| Konteks | Jarak |
|---------|-------|
| Padding vertikal bagian | 48 px (mobile), 80 px (`md`), 96 px (`lg`) |
| Antara judul bagian dan isi | 24–32 px |
| Padding dalam kartu | 20 px (mobile), 24 px (`md`) |
| Antar elemen dalam kartu | 8–16 px |

### 4.3 Ritme latar bagian

Latar bagian berganti agar halaman mudah dipindai: `paper` → `maroon-50` → `paper` → ... Satu bagian per halaman boleh berlatar `maroon-700` (hero) dan satu lagi `maroon-900` (footer). CTA akhir halaman berlatar `maroon-700`.

### 4.4 Radius, garis, bayangan

| Token | Nilai | Dipakai untuk |
|-------|-------|---------------|
| `radius-sm` | 6 px | Input, badge persegi, chip filter |
| `radius-md` | 10 px | Tombol, kartu |
| `radius-lg` | 16 px | Panel besar, kartu status batch |
| `radius-full` | 9999 px | Lencana status, avatar |

- Pemisah utama memakai **garis tipis 1 px `line`**, bukan bayangan.
- Bayangan hanya satu: `0 1px 2px rgb(42 26 29 / 0.08)` untuk kartu yang bisa diklik saat hover. Tidak ada bayangan lain.

---

## 5. Ikon, Gambar, dan Ilustrasi

### 5.1 Ikon

- Ikon garis (outline) berukuran 20 atau 24 px, tebal garis 1,5 px, SVG inline (mis. set Lucide).
- Warna mengikuti teks (`currentColor`). Ikon dekoratif memakai `aria-hidden="true"`.
- **Tanpa emoji** di antarmuka.

### 5.2 Foto

- Utamakan **foto asli kegiatan magang**. Foto stok hanya sementara dan harus diganti sebelum peluncuran.
- Foto peserta hanya dengan izin tertulis; untuk di bawah 18 tahun, izin orang tua/wali (PRD 4.1).
- Rasio standar: 16:9 (hero, berita), 4:3 (kartu posisi), 1:1 (avatar alumni). Selalu isi `width` dan `height`.
- Gambar hero (LCP) dimuat dengan prioritas; gambar di bawah lipatan memakai lazy-load.
- Tanpa overlay gradien pada foto. Bila teks harus berada di atas foto, pakai panel `maroon-900` solid dengan opasitas 85%.
- Alt text deskriptif; foto dekoratif memakai `alt=""`.

### 5.3 Logo mitra

- Tampil di atas putih, tinggi seragam 40 px, `object-contain`, dengan jarak lega.
- Hanya logo yang sudah mendapat izin (`izinTayang: true`).
- Boleh digrayscale dan berwarna saat hover/fokus; wajib tetap terbaca pada keadaan grayscale.

### 5.4 Elemen grafis

Satu motif pendukung: garis lurus vertikal tipis `maroon-200` sebagai tulang timeline dan pemisah. Tidak ada pola, blob, atau ilustrasi dekoratif lain.

---

## 6. Komponen

Semua target sentuh minimal **44 × 44 px**. Semua komponen interaktif memiliki keadaan: normal, hover, fokus, aktif, nonaktif.

### 6.1 Fokus (global)

`outline: 2px solid maroon-700; outline-offset: 2px`. Di atas latar maroon, outline berwarna putih. Jangan pernah `outline: none` tanpa pengganti.

### 6.2 Button

| Varian | Tampilan | Dipakai untuk |
|--------|----------|---------------|
| **Primary** | Latar `maroon-700`, teks putih, bold. Hover `maroon-800` | Daftar Sekarang, Daftar untuk Posisi Ini |
| **Inverse** | Latar putih, teks `maroon-700`. Hover `maroon-100` | Tombol utama di atas pita maroon |
| **Secondary** | Putih, border 1,5 px `maroon-700`, teks `maroon-700`. Hover `maroon-50` | Lihat Posisi, Hubungi Kami |
| **Tertiary / tautan** | Teks `maroon-700` dengan garis bawah, ikon panah kanan | Selengkapnya |
| **Nonaktif** | Latar `#EFEFEF`, teks `#4A4A4A`, kursor `not-allowed`, teks berubah menjadi "Pendaftaran Ditutup" | Batch berstatus Ditutup (PRD 7.1) |

Tinggi 48 px (default) dan 56 px (hero). Padding horizontal 24 px. Radius `radius-md`. Pada mobile, tombol utama di hero dan di halaman Daftar berlebar penuh.

### 6.3 Header dan navigasi

- Latar putih, garis bawah 1 px `line`, tinggi 64 px, lengket (sticky) di atas.
- Kiri: logo. Tengah (desktop): Program (menu turun), Posisi, Jadwal, Mitra, Informasi (menu turun). Kanan: tombol **Daftar** (Primary), selalu terlihat, termasuk di mobile.
- Mobile: tombol menu 44 × 44 px membuka panel penuh putih; tautan 56 px tingginya, dipisah garis `line`.
- Item aktif: teks `maroon-700` dengan garis bawah 2 px.
- Tautan "Lewati ke konten" muncul saat fokus di awal halaman.

### 6.4 PageBanner

Latar `maroon-50`, breadcrumb di atas (`small`, `muted`, pemisah "/"), H1 `maroon-900`, deskripsi `lead`. Tanpa foto. Padding vertikal 40 px (mobile), 64 px (desktop).

### 6.5 BatchStatus (kartu status batch)

Komponen terpenting. Tampil identik di Beranda, Jadwal, Daftar, dan detail Posisi.

- Kartu putih, border 1 px `line`, `radius-lg`, padding 20 px.
- Baris atas: lencana status (ikon + teks + warna, lihat 2.3) dan nama batch (bold).
- Baris tengah: "Pendaftaran ditutup" + tanggal (`h3`, tabular), dan hitung mundur dalam hari/jam saat status Dibuka.
- Baris bawah: tombol Primary penuh lebar. Saat Ditutup: tombol nonaktif + tanggal batch berikutnya.
- Di Beranda kartu ini menumpang separuh pada tepi bawah pita hero (negatif margin 32 px).
- Tanpa JS, tampilkan tanggal tanpa hitung mundur (PRD 7).

### 6.6 PilihJalur (dua jalur peserta)

Dua panel berdampingan (satu kolom di mobile): **Siswa SMK** dan **Mahasiswa**.

- Panel putih, border 1 px `line`, `radius-lg`. Hover: border `maroon-700`.
- Isi: label jalur (bold, `maroon-700`), tiga baris informasi inti (durasi, untuk siapa, pendampingan) dalam daftar definisi, dan tautan tertiary ke halaman jalur.
- Kedua jalur **berbentuk sama tetapi dibedakan oleh teks dan ikon**, bukan oleh warna berbeda. Syarat dan istilah tidak dicampur (PRD 10.1).

### 6.7 StepTimeline (alur pendaftaran)

- Garis vertikal 2 px `maroon-200` di kiri; penanda lingkaran 32 px berisi nomor (latar `maroon-700`, teks putih).
- Setiap langkah: judul (`h3`), deskripsi, dan baris meta: **Siapa** dan **Perkiraan waktu**.
- Label jalur ("SMK", "Mahasiswa", "Keduanya") sebagai chip `maroon-100` bila langkah spesifik jalur.
- Desktop: tetap vertikal, tidak dibuat zig-zag.

### 6.8 PosisiCard dan PosisiFilter

**PosisiCard:** putih, border `line`, `radius-md`, foto atau logo mitra 4:3 di atas (opsional), judul posisi (`h3`), nama mitra, chip: jalur, bidang, mode kerja (onsite/hybrid/remote), lokasi, durasi. Seluruh kartu dapat diklik (satu tautan utama pada judul, area klik diperluas dengan `::after`). Hover: bayangan tunggal dan judul bergaris bawah.

**PosisiFilter:**
- Kolom cari (tinggi 48 px, border 1 px `line`, fokus: outline maroon).
- Chip filter: `radius-sm`, tinggi 40 px dengan area sentuh 44 px. Terpilih: latar `maroon-700`, teks putih, ikon centang (bukan hanya warna).
- Di mobile, filter berada dalam panel buka-tutup di atas daftar; jumlah hasil diumumkan lewat `aria-live="polite"`.
- Hasil kosong: pesan singkat dan tombol Secondary "Atur ulang filter".

### 6.9 Accordion (FAQ)

Item dipisah garis 1 px `line`. Tombol pertanyaan selebar penuh, tinggi minimal 56 px, bold, ikon plus/minus kanan. Terbuka: pertanyaan berwarna `maroon-700`, jawaban `body`. Dapat dioperasikan dengan Enter/Spasi dan terhubung dengan `aria-expanded` serta `aria-controls`.

### 6.10 MitraGrid

Grid 2 kolom (mobile), 3 (`md`), 4 (`lg`). Sel putih, border 1 px `line`, logo di tengah, nama dan sektor di bawah dalam `small`. Pada halaman Mitra, setiap sel menautkan ke daftar posisi mitra tersebut.

### 6.11 DownloadItem

Baris bergaris pemisah: ikon berkas (20 px), judul (bold), ringkasan (`small`, `muted`), meta (`caption`: PDF atau DOCX · versi · ukuran · tanggal pembaruan), dan tombol Secondary "Unduh" bertuliskan jenis dan ukuran berkas.

### 6.12 Badge dan chip

- **Lencana status:** `radius-full`, tinggi 28 px, ikon 16 px + teks `small` bold. Warna sesuai 2.3.
- **Chip informasi:** `radius-sm`, latar `maroon-100`, teks `maroon-900`, `small`. Tidak interaktif kecuali dalam filter.

### 6.13 Form dan input

Label di atas input, selalu terlihat (tidak hanya placeholder). Input tinggi 48 px, border 1 px `line`, `radius-sm`, teks `ink`. Fokus: border `maroon-700` + outline fokus. Galat: border `error`, ikon, dan teks galat di bawah input. Pendaftaran sendiri berada di formulir eksternal; input hanya dipakai untuk pencarian dan filter.

### 6.14 CTA akhir halaman

Pita `maroon-700`, judul putih, satu kalimat `maroon-100`, tombol Inverse dan Secondary-inverse (border putih, teks putih). Muncul di setiap halaman sebelum footer (PRD 10.1).

### 6.15 Footer

Latar `maroon-900`, teks `maroon-100`, judul kolom putih bold, tautan putih dengan garis bawah saat hover. Lima kolom di desktop (tentang + kontak, program, informasi, kerja sama, legal), tumpuk di mobile dengan pemisah `maroon-800`. Baris hak cipta di bawah dengan garis `maroon-800`.

### 6.16 FloatingWa (opsional)

Tombol bulat 56 px di kanan bawah, latar `maroon-700`, ikon chat putih, dengan label teks "Tanya admin" pada layar lebar. Jangan menutupi tombol Daftar atau konten penting; sembunyikan saat footer terlihat. Hanya dipasang bila disetujui penyelenggara.

---

## 7. Pola Halaman Kunci

### 7.1 Beranda

Urutan mengikuti PRD 6.1. Pola tata letak dibuat **berbeda antarbagian** agar tidak monoton.

| Bagian | Latar | Pola |
|--------|-------|------|
| Hero | `maroon-700` | Dua kolom di desktop: teks di kiri, foto kegiatan asli 4:3 di kanan. Mobile: teks, tombol, lalu foto. Tombol Inverse + Secondary-inverse |
| Status batch | Menumpang di tepi hero | Satu `BatchStatus` |
| Pilih jalur | `paper` | Dua panel besar berdampingan |
| Cara kerja | `maroon-50` | Empat langkah horizontal bernomor (mobile: vertikal) |
| Posisi terbaru | `paper` | Daftar `PosisiCard` dengan satu kartu unggulan lebih besar |
| Mitra | `maroon-50` | `MitraGrid` satu baris, tanpa kartu |
| Manfaat | `paper` | Daftar teks dua kolom dengan ikon kecil, tanpa kartu |
| Alumni atau pengumuman | `maroon-50` | Satu kutipan besar atau satu daftar tanggal |
| FAQ ringkas | `paper` | Accordion lebar baca |
| CTA akhir | `maroon-700` | Lihat 6.14 |

Syarat: tombol Daftar dan `BatchStatus` terlihat tanpa menggulir di 360 × 640 px. Bila perlu, perkecil foto hero atau pindahkan di bawah.

### 7.2 Halaman program (SMK dan Mahasiswa)

PageBanner, ringkasan dalam daftar definisi (untuk siapa, durasi, jam kerja), tabel persyaratan yang mudah dipindai, `StepTimeline` khusus jalur, FAQ jalur, CTA "Daftar sebagai Siswa SMK" atau "Daftar sebagai Mahasiswa".

### 7.3 Jadwal

Satu `BatchStatus` untuk batch aktif di atas, lalu tabel (desktop) atau kartu (mobile) per batch, lalu arsip yang dilipat dalam accordion.

### 7.4 Daftar

Pilih jalur, `BatchStatus`, daftar dokumen yang disiapkan (checklist visual, tidak interaktif), tombol Primary penuh lebar, lalu catatan privasi dan catatan persetujuan orang tua/wali dalam kotak `maroon-50` dengan border kiri 4 px `maroon-700`.

### 7.5 Berita dan unduhan

Daftar teks dengan tanggal dan kategori sebagai meta; foto hanya bila relevan. Tanpa grid kartu seragam.

### 7.6 404

Pesan singkat, empat tautan (Beranda, Posisi, Jadwal, Kontak) dalam daftar vertikal.

---

## 8. Gerak dan Interaksi

- Durasi transisi 150–200 ms, easing `ease-out`. Hanya properti `color`, `background-color`, `border-color`, `opacity`, `transform`.
- Tidak ada animasi masuk berlebihan, parallax, atau animasi yang berulang.
- Buka-tutup accordion dan menu memakai tinggi/opasitas halus ≤ 200 ms.
- Hormati `prefers-reduced-motion`: matikan semua transisi non-esensial.

---

## 9. Suara dan Teks Antarmuka

- Sapaan: **"kamu"** untuk halaman peserta (SMK, Mahasiswa, Posisi, Daftar, FAQ umum) dan **"Anda"** untuk halaman sekolah, kampus, dan mitra **[konfirmasi]**.
- Kalimat pendek, kata kerja di awal tombol: "Daftar Sekarang", "Lihat Posisi", "Unduh Panduan", "Ajukan Kerja Sama".
- Tidak ada seruan berlebihan, klaim absolut, atau janji yang belum dikonfirmasi (PRD 4.1).
- Teks galat menjelaskan apa yang salah dan cara memperbaikinya.

---

## 10. Aksesibilitas (ringkasan target WCAG 2.2 AA)

- `<html lang="id">`, satu H1 per halaman, heading berurutan.
- Kontras teks ≥ 4,5 : 1 (teks besar ≥ 3 : 1); komponen UI dan fokus ≥ 3 : 1.
- Fokus keyboard selalu terlihat; urutan tab mengikuti urutan visual.
- Ukuran sentuh minimal 44 × 44 px dengan jarak antar target ≥ 8 px.
- Status, jalur, dan galat tidak disampaikan hanya lewat warna.
- Gambar bermakna memiliki `alt`; gambar dekoratif memakai `alt=""`.
- Tautan baru-tab (formulir) diberi teks atau ikon "membuka tab baru".

---

## 11. Token Tailwind v4

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  /* Warna merek */
  --color-maroon-50: #fbf4f5;
  --color-maroon-100: #f6e6e9;
  --color-maroon-200: #ebcbd1;
  --color-maroon-300: #dba3ae;
  --color-maroon-400: #c47585;
  --color-maroon-500: #a3405a;
  --color-maroon-700: #800020;
  --color-maroon-800: #660019;
  --color-maroon-900: #4a0012;

  /* Netral */
  --color-paper: #ffffff;
  --color-ink: #2a1a1d;
  --color-muted: #6b5a5e;
  --color-line: #e7dcde;

  /* Status */
  --color-open-fg: #1f6b3a;
  --color-open-bg: #eaf5ee;
  --color-soon-fg: #7a4b00;
  --color-soon-bg: #fff4db;
  --color-closed-fg: #4a4a4a;
  --color-closed-bg: #efefef;
  --color-error-fg: #9b1c1c;
  --color-error-bg: #fdecec;

  /* Font */
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Ukuran teks */
  --text-display: clamp(2rem, 1.5rem + 2.5vw, 3.25rem);
  --text-display--line-height: 1.1;
  --text-h1: clamp(1.75rem, 1.4rem + 1.8vw, 2.5rem);
  --text-h1--line-height: 1.15;
  --text-h2: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
  --text-h2--line-height: 1.2;
  --text-h3: 1.25rem;
  --text-h3--line-height: 1.3;
  --text-lead: 1.125rem;
  --text-lead--line-height: 1.6;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* Bayangan (satu-satunya) */
  --shadow-card: 0 1px 2px rgb(42 26 29 / 0.08);

  /* Kontainer */
  --container-page: 72rem;
}

@layer base {
  html {
    font-family: var(--font-sans);
    color: var(--color-ink);
    background: var(--color-paper);
    scroll-padding-top: 5rem;
  }
  body { line-height: 1.65; }
  :focus-visible {
    outline: 2px solid var(--color-maroon-700);
    outline-offset: 2px;
  }
  .on-maroon :focus-visible { outline-color: #ffffff; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}
```

Contoh pemakaian di komponen:

```astro
<a class="inline-flex min-h-12 items-center justify-center rounded-md bg-maroon-700 px-6 font-bold text-white transition-colors hover:bg-maroon-800" href={formUrl} target="_blank" rel="noopener noreferrer">
  Daftar Sekarang
</a>
```

---

## 12. Daftar Periksa Desain Sebelum Rilis

- [ ] Semua warna di kode berasal dari token; tidak ada hex di komponen.
- [ ] Hanya satu tombol Primary per layar; di atas pita maroon memakai Inverse.
- [ ] Tidak ada gradien, emoji, atau bayangan selain `shadow-card`.
- [ ] Setiap bagian Beranda memakai pola berbeda dari bagian sebelumnya.
- [ ] Kontras seluruh pasangan warna dicek ulang setelah warna logo ditetapkan.
- [ ] Status batch terbaca tanpa warna; tombol Daftar nonaktif berubah teks saat Ditutup.
- [ ] Tombol Daftar dan `BatchStatus` terlihat tanpa menggulir di 360 × 640 px.
- [ ] Tidak ada scroll horizontal dari 360 px hingga 1440 px.
- [ ] Fokus keyboard terlihat di semua komponen, termasuk di atas latar maroon.
- [ ] Foto dan logo hanya yang berizin; alt text terisi.
- [ ] Font hanya dua weight (400 dan 700), self-host, `font-display: swap`.
- [ ] Lighthouse mobile memenuhi target PRD 13.2.

---

## 13. Hal yang Masih Perlu Dikonfirmasi

| Item | Dampak pada desain |
|------|--------------------|
| Logo dan warna identitas penyelenggara | Nilai `maroon-700` dan turunannya; penempatan logo di header dan footer |
| Gaya sapaan ("kamu" atau "Anda") | Seluruh teks antarmuka |
| Ketersediaan foto kegiatan asli dan izin tayang | Hero, kartu posisi, berita, alumni |
| Persetujuan tombol WhatsApp melayang | Komponen `FloatingWa` |
| Pilihan font final bila penyelenggara punya font merek | Bagian 3 dan token `--font-sans` |
