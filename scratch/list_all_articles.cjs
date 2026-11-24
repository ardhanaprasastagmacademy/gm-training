const fs = require('fs');
const path = require('path');

const dir = 'src/content/berita';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

const articles = files.map(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const dateMatch = content.match(/tanggal:\s*([^\r\n]+)/);
  const titleMatch = content.match(/judul:\s*["']?([^"\r\n]+)["']?/);
  const draftMatch = content.match(/draft:\s*([^\r\n]+)/);
  return {
    file: f,
    slug: f.replace('.md', ''),
    tanggal: dateMatch ? dateMatch[1].trim() : '',
    judul: titleMatch ? titleMatch[1].trim() : '',
    draft: draftMatch ? draftMatch[1].trim() : 'false'
  };
});

articles.sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime());

console.log(`Total articles: ${articles.length}`);
articles.forEach((a, idx) => {
  console.log(`${idx + 1}. [${a.tanggal}] ${a.slug} (${a.judul})`);
});
