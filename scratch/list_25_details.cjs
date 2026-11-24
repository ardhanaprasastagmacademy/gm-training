const fs = require('fs');
const path = require('path');

const dir = 'src/content/berita';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

const articles = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const tMatch = content.match(/tanggal:\s*['"]?([^'"\r\n]+)['"]?/);
  const tanggal = tMatch ? tMatch[1].trim() : 'UNKNOWN';
  const jMatch = content.match(/judul:\s*['"]?([^'"\r\n]+)['"]?/);
  const judul = jMatch ? jMatch[1].trim() : file;
  const slug = file.replace(/\.md$/, '');
  
  // check for calendar or row mentions
  const rowMatch = content.match(/(?:baris|artikel no\.?|no\.)\s*(\d+)/i);
  const row = rowMatch ? rowMatch[0] : '';
  
  articles.push({ file, slug, tanggal, judul, row });
}

// Let's filter out the 12 articles before 23 Nov
const before23 = ['pembukaan-pendaftaran-batch-1-2026', 'panduan-lengkap-menyiapkan-cv-magang-smk', 'tips-sukses-wawancara-magang-mitra-industri', 'orientasi-onboarding-peserta-magang-industri', '10-hal-penting-sebelum-memilih-tempat-magang-di-malang', 'cara-mencari-lowongan-magang-malang', 'perbedaan-pkl-prakerin-internship-magang-mahasiswa', 'tempat-pkl-smk-malang-raya-2027', 'syarat-pkl-dan-magang-malang', 'tempat-pkl-tkj-malang-kompetensi-teknologi-digital', 'tempat-pkl-smk-malang-panduan-memilih-mitra-industri', 'pkl-jurusan-rpl-malang-materi-web-development'];

const current25 = articles.filter(a => !before23.includes(a.slug));
console.log('Count of articles from 23 Nov onward:', current25.length);

current25.forEach((a, idx) => {
  console.log(`${idx + 1}. [${a.slug}] - ${a.judul}`);
});
