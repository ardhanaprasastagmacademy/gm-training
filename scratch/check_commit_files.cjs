const { execSync } = require('child_process');
const output = execSync('git diff-tree --no-commit-id --name-only -r 3eac3c7', { encoding: 'utf8' });
const files = output.split('\n').filter(f => f.startsWith('src/content/berita/') && f.endsWith('.md'));
console.log('Articles in 3eac3c7:');
files.forEach((f, i) => console.log(`${i+1}. ${f.replace('src/content/berita/', '')}`));
