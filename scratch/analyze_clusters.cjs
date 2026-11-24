const fs = require('fs');
const path = require('path');

const dir = 'src/content/berita';
const files = [
  'magang-mahasiswa-sistem-informasi-malang.md',
  'contoh-jurnal-harian-pkl-smk.md',
  'tempat-pkl-multimedia-malang-content-creation-video-desain-digital.md',
  'rekomendasi-tempat-magang-mahasiswa-malang.md',
  'magang-seo-specialist-digital-business-analytics.md',
  'studi-kasus-radar-kediri.md',
  'magang-gratis-atau-berbayar.md',
  'penilaian-sertifikat-magang.md',
  'bimbingan-mentor-magang.md',
  'durasi-pkl-smk-6-bulan-hingga-1-tahun.md',
  'rekomendasi-tempat-pkl-dkv-malang-desain-grafis-ui-ux.md',
  'pkl-bdp-malang-belajar-digital-marketing.md',
  'tempat-magang-teknik-informatika-malang.md',
  'cara-daftar-magang-informatika.md',
  'checklist-guru-mitra-pkl.md',
  'magang-pariwisata-malang.md',
  'jurusan-magang-pariwisata.md',
  'persyaratan-pkl-rpl.md',
  'skill-dasar-rpl-sebelum-pkl.md',
  'dokumen-pkl-siswa-smk.md',
  'cv-pkl-siswa-smk-rpl.md',
  'kegiatan-pkl-rpl.md',
  'contoh-tugas-harian-pkl-rpl.md',
  'ide-proyek-pkl-rpl.md',
  'persiapan-hari-pertama-pkl.md'
];

files.forEach(f => {
  if (fs.existsSync(path.join(dir, f))) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const dateMatch = content.match(/tanggal:\s*([^\r\n]+)/);
    const titleMatch = content.match(/judul:\s*["']?([^"\r\n]+)["']?/);
    console.log(`${f.padEnd(65)} | ${dateMatch ? dateMatch[1].trim() : 'NO DATE'} | ${titleMatch ? titleMatch[1].trim().slice(0, 50) : ''}`);
  }
});
