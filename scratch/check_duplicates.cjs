const fs = require('fs');
const path = require('path');
const dir = 'src/content/berita';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

console.log('Total files:', files.length);

const before23 = [
  'pembukaan-pendaftaran-batch-1-2026',
  'panduan-lengkap-menyiapkan-cv-magang-smk',
  'tips-sukses-wawancara-magang-mitra-industri',
  'orientasi-onboarding-peserta-magang-industri',
  '10-hal-penting-sebelum-memilih-tempat-magang-di-malang',
  'cara-mencari-lowongan-magang-malang',
  'perbedaan-pkl-prakerin-internship-magang-mahasiswa',
  'tempat-pkl-smk-malang-raya-2027',
  'syarat-pkl-dan-magang-malang',
  'tempat-pkl-tkj-malang-kompetensi-teknologi-digital',
  'tempat-pkl-smk-malang-panduan-memilih-mitra-industri',
  'pkl-jurusan-rpl-malang-materi-web-development'
];

const current25 = files.filter(f => !before23.includes(f.replace('.md','')));
console.log('25 files count:', current25.length);

for (const f of current25) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const judul = (content.match(/judul:\s*['"]?([^'"\r\n]+)['"]?/) || [])[1];
  console.log(`- ${f.replace('.md','')}: "${judul}"`);
}
