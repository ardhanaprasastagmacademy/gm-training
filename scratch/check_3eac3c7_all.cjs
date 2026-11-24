const { execSync } = require('child_process');

const out = execSync('git ls-tree -r --name-only 3eac3c7 src/content/berita', { encoding: 'utf8' });
const files = out.split('\n').filter(f => f.trim().endsWith('.md') && !f.includes('_template'));

const list = [];
for (const file of files) {
  const content = execSync(`git show 3eac3c7:"${file.trim()}"`, { encoding: 'utf8' });
  const t = (content.match(/tanggal:\s*['"]?([^'"\r\n]+)['"]?/) || [])[1];
  list.push({ file: file.trim(), tanggal: t });
}

list.sort((a,b) => (b.tanggal || '').localeCompare(a.tanggal || ''));
console.log('Total files in 3eac3c7:', list.length);
list.forEach(item => {
  console.log(`${item.tanggal} | ${item.file.replace('src/content/berita/', '')}`);
});
