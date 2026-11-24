const fs = require('fs');
const path = require('path');

const dir = 'src/content/berita';

const targetDates = {
  // 23 November 2026 (4 articles)
  'durasi-pkl-smk-6-bulan-hingga-1-tahun.md': '2026-11-23T10:00:00+07:00',
  'rekomendasi-tempat-pkl-dkv-malang-desain-grafis-ui-ux.md': '2026-11-23T09:30:00+07:00',
  'pkl-bdp-malang-belajar-digital-marketing.md': '2026-11-23T09:15:00+07:00',
  'tempat-magang-teknik-informatika-malang.md': '2026-11-23T09:00:00+07:00',

  // 24 November 2026 (4 articles)
  'magang-mahasiswa-sistem-informasi-malang.md': '2026-11-24T10:00:00+07:00',
  'contoh-jurnal-harian-pkl-smk.md': '2026-11-24T09:30:00+07:00',
  'tempat-pkl-multimedia-malang-content-creation-video-desain-digital.md': '2026-11-24T09:00:00+07:00',
  'rekomendasi-tempat-magang-mahasiswa-malang.md': '2026-11-24T08:30:00+07:00',

  // 25 November 2026 (4 articles)
  'persyaratan-pkl-rpl.md': '2026-11-25T10:00:00+07:00',
  'skill-dasar-rpl-sebelum-pkl.md': '2026-11-25T09:30:00+07:00',
  'dokumen-pkl-siswa-smk.md': '2026-11-25T09:15:00+07:00',
  'cv-pkl-siswa-smk-rpl.md': '2026-11-25T09:00:00+07:00',

  // 26 November 2026 (4 articles)
  'kegiatan-pkl-rpl.md': '2026-11-26T10:00:00+07:00',
  'contoh-tugas-harian-pkl-rpl.md': '2026-11-26T09:30:00+07:00',
  'ide-proyek-pkl-rpl.md': '2026-11-26T09:15:00+07:00',
  'persiapan-hari-pertama-pkl.md': '2026-11-26T09:00:00+07:00',

  // 27 November 2026 (4 articles)
  'bimbingan-mentor-magang.md': '2026-11-27T10:00:00+07:00',
  'penilaian-sertifikat-magang.md': '2026-11-27T09:30:00+07:00',
  'magang-gratis-atau-berbayar.md': '2026-11-27T09:15:00+07:00',
  'studi-kasus-radar-kediri.md': '2026-11-27T09:00:00+07:00',

  // 28 November 2026 (4 articles)
  'magang-pariwisata-malang.md': '2026-11-28T10:00:00+07:00',
  'cara-daftar-magang-informatika.md': '2026-11-28T09:30:00+07:00',
  'checklist-guru-mitra-pkl.md': '2026-11-28T09:15:00+07:00',
  'magang-seo-specialist-digital-business-analytics.md': '2026-11-28T09:00:00+07:00',

  // 29 November 2026 (1 article)
  'jurusan-magang-pariwisata.md': '2026-11-29T09:00:00+07:00'
};

let updatedCount = 0;
for (const [filename, newTanggal] of Object.entries(targetDates)) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: File not found: ${filename}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const tMatch = content.match(/tanggal:\s*['"]?([^'"\r\n]+)['"]?/);
  if (!tMatch) {
    console.error(`ERROR: No tanggal found in: ${filename}`);
    continue;
  }
  const oldTanggal = tMatch[1].trim();
  if (oldTanggal !== newTanggal) {
    content = content.replace(/tanggal:\s*['"]?[^'"\r\n]+['"]?/, `tanggal: ${newTanggal}`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filename}: ${oldTanggal} -> ${newTanggal}`);
    updatedCount++;
  } else {
    console.log(`Already up to date: ${filename} (${newTanggal})`);
  }
}

console.log(`\nTotal files updated: ${updatedCount}`);
