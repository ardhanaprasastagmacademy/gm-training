const fs = require('fs');
const path = require('path');
const dir = 'src/content/berita';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

console.log('Total files:', files.length);

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

// Let's print all 37 articles
articles.forEach((a, idx) => {
  console.log(`${idx+1}. ${a.slug} (${a.tanggal})`);
});
