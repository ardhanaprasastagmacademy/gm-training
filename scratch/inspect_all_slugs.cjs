const fs = require('fs');
const path = require('path');
const dir = 'src/content/berita';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const dateMatch = content.match(/tanggal:\s*([^\r\n]+)/);
  const titleMatch = content.match(/judul:\s*["']?([^"\r\n]+)["']?/);
  
  // Search transcript for this slug to find the brief
  console.log(`${f.replace('.md','').padEnd(45)} | ${dateMatch ? dateMatch[1].trim() : ''}`);
});
