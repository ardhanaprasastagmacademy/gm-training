const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

const fifteen = [
  'tempat-magang-teknik-informatika-malang',
  'pkl-bdp-malang-belajar-digital-marketing',
  'rekomendasi-tempat-pkl-dkv-malang-desain-grafis-ui-ux',
  'rekomendasi-tempat-magang-mahasiswa-malang',
  'contoh-jurnal-harian-pkl-smk',
  'magang-mahasiswa-sistem-informasi-malang',
  'tempat-pkl-multimedia-malang-content-creation-video-desain-digital',
  'durasi-pkl-smk-6-bulan-hingga-1-tahun',
  'bimbingan-mentor-magang',
  'penilaian-sertifikat-magang',
  'magang-gratis-atau-berbayar',
  'studi-kasus-radar-kediri',
  'magang-seo-specialist-digital-business-analytics',
  'checklist-guru-mitra-pkl',
  'cara-daftar-magang-informatika'
];

fifteen.forEach(slug => {
  for (let i = 6600; i < 7650; i++) {
    try {
      const obj = JSON.parse(lines[i]);
      if (obj.source === 'USER_EXPLICIT' && obj.content && obj.content.includes(slug)) {
        const dateMatch = obj.content.match(/Tanggal\s+rilis\s*:?\s*([^\r\n]+)/i) || obj.content.match(/(\d{1,2}\s+[A-Za-z]+\s+2026|\d{1,2}\s+november)/i);
        console.log(`${slug.padEnd(45)}: line ${i} -> ${dateMatch ? dateMatch[0] : 'no date'}`);
        break;
      }
    } catch(e) {}
  }
});
