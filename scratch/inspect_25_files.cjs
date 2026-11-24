const fs = require('fs');
const path = require('path');
const dir = 'src/content/berita';

const files = [
  'tempat-magang-teknik-informatika-malang.md',
  'pkl-bdp-malang-belajar-digital-marketing.md',
  'rekomendasi-tempat-pkl-dkv-malang-desain-grafis-ui-ux.md',
  'durasi-pkl-smk-6-bulan-hingga-1-tahun.md',
  'magang-mahasiswa-sistem-informasi-malang.md',
  'contoh-jurnal-harian-pkl-smk.md',
  'tempat-pkl-multimedia-malang-content-creation-video-desain-digital.md',
  'rekomendasi-tempat-magang-mahasiswa-malang.md',
  'bimbingan-mentor-magang.md',
  'penilaian-sertifikat-magang.md',
  'magang-gratis-atau-berbayar.md',
  'studi-kasus-radar-kediri.md',
  'magang-seo-specialist-digital-business-analytics.md',
  'checklist-guru-mitra-pkl.md',
  'cara-daftar-magang-informatika.md',
  'persyaratan-pkl-rpl.md',
  'skill-dasar-rpl-sebelum-pkl.md',
  'dokumen-pkl-siswa-smk.md',
  'cv-pkl-siswa-smk-rpl.md',
  'kegiatan-pkl-rpl.md',
  'contoh-tugas-harian-pkl-rpl.md',
  'ide-proyek-pkl-rpl.md',
  'persiapan-hari-pertama-pkl.md',
  'magang-pariwisata-malang.md',
  'jurusan-magang-pariwisata.md'
];

console.log('Total files listed:', files.length);

for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const t = (c.match(/tanggal:\s*['"]?([^'"\r\n]+)['"]?/) || [])[1];
  const j = (c.match(/judul:\s*['"]?([^'"\r\n]+)['"]?/) || [])[1];
  console.log(`${(i+1).toString().padStart(2, ' ')}. [${t}] ${f.replace('.md','')} - "${j}"`);
}
