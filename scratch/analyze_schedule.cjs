const fs = require('fs');
const path = require('path');

const dir = 'src/content/berita';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const articles = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const tMatch = content.match(/tanggal:\s*['"]?([^'"\r\n]+)['"]?/);
  const tanggal = tMatch ? tMatch[1].trim() : 'UNKNOWN';
  const jMatch = content.match(/judul:\s*['"]?([^'"\r\n]+)['"]?/);
  const judul = jMatch ? jMatch[1].trim() : file;
  const slug = file.replace(/\.md$/, '');
  articles.push({ file, slug, tanggal, judul });
}

console.log('Total articles:', articles.length);

const before23 = articles.filter(a => a.tanggal < '2026-11-23');
console.log('Before 23 Nov (' + before23.length + '):');
before23.sort((a,b) => a.tanggal.localeCompare(b.tanggal)).forEach(a => console.log('  ', a.tanggal.split('T')[0], a.slug));

const from23 = articles.filter(a => a.tanggal >= '2026-11-23');
console.log('\nFrom 23 Nov (' + from23.length + '):');
from23.forEach(a => console.log('  ', a.tanggal, a.slug));
