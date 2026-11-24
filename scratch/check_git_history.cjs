const { execSync } = require('child_process');

const files = [
  'magang-seo-specialist-digital-business-analytics.md',
  'studi-kasus-radar-kediri.md',
  'magang-gratis-atau-berbayar.md',
  'penilaian-sertifikat-magang.md',
  'bimbingan-mentor-magang.md',
  'durasi-pkl-smk-6-bulan-hingga-1-tahun.md',
  'rekomendasi-tempat-pkl-dkv-malang-desain-grafis-ui-ux.md',
  'pkl-bdp-malang-belajar-digital-marketing.md',
  'tempat-magang-teknik-informatika-malang.md'
];

files.forEach(f => {
  try {
    const log = execSync(`git log -p -2 -- "src/content/berita/${f}"`, { encoding: 'utf8' });
    const dates = log.match(/tanggal:\s*([^\r\n]+)/g);
    console.log(`${f}: ${dates ? dates.join(' <- ') : 'no git history'}`);
  } catch (e) {
    console.log(`${f}: error ${e.message}`);
  }
});
