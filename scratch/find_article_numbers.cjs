const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

const slugs = [
  'tempat-magang-teknik-informatika-malang',
  'pkl-bdp-malang-belajar-digital-marketing',
  'rekomendasi-tempat-pkl-dkv-malang-desain-grafis-ui-ux',
  'rekomendasi-tempat-magang-mahasiswa-malang',
  'durasi-pkl-smk-6-bulan-hingga-1-tahun',
  'bimbingan-mentor-magang',
  'penilaian-sertifikat-magang',
  'magang-gratis-atau-berbayar',
  'studi-kasus-radar-kediri',
  'magang-seo-specialist-digital-business-analytics',
  'contoh-jurnal-harian-pkl-smk',
  'magang-mahasiswa-sistem-informasi-malang',
  'tempat-pkl-multimedia-malang-content-creation-video-desain-digital',
  'checklist-guru-mitra-pkl',
  'cara-daftar-magang-informatika',
  'magang-pariwisata-malang',
  'jurusan-magang-pariwisata',
  'persyaratan-pkl-rpl',
  'skill-dasar-rpl-sebelum-pkl',
  'dokumen-pkl-siswa-smk',
  'cv-pkl-siswa-smk-rpl',
  'kegiatan-pkl-rpl',
  'contoh-tugas-harian-pkl-rpl',
  'ide-proyek-pkl-rpl',
  'persiapan-hari-pertama-pkl'
];

slugs.forEach(slug => {
  let found = null;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(slug) && lines[i].includes('USER_EXPLICIT')) {
      const match = lines[i].match(/(Artikel\s+no\.\s*\d+|Artikel\s+\d+|baris\s+\d+|ARTIKEL\s+\d+|Tipe:\s*[^\\]+)/i);
      const dateMatch = lines[i].match(/(\d{1,2}\s+[A-Za-z]+\s+2026|\d{1,2}\s+november)/i);
      found = { line: i, info: match ? match[0] : 'no match', date: dateMatch ? dateMatch[0] : 'no date' };
    }
  }
  console.log(`${slug.padEnd(50)} -> ${found ? found.info + ' | ' + found.date : 'not found'}`);
});
