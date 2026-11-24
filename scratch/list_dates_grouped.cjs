const fs = require('fs');
const path = require('path');
const dir = 'src/content/berita';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

const articles = files.map(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const dateMatch = content.match(/tanggal:\s*([^\r\n]+)/);
  const titleMatch = content.match(/judul:\s*["']?([^"\r\n]+)["']?/);
  return {
    file: f,
    slug: f.replace('.md', ''),
    tanggal: dateMatch ? dateMatch[1].trim() : '',
    judul: titleMatch ? titleMatch[1].trim() : ''
  };
});

articles.sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime());
articles.forEach((a, i) => {
  console.log(`${(i+1).toString().padStart(2)}. [${a.tanggal.slice(0, 10)}] ${a.slug}`);
});
