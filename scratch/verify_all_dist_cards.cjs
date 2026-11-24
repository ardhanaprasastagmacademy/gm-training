const fs = require('fs');
const html = fs.readFileSync('dist/blog/index.html', 'utf8');

const regex = /<h[23][^>]*>([\s\S]*?)<\/h[23]>[\s\S]*?(\d{1,2}\s+[A-Za-z]+\s+\d{4})/g;
let match;
let count = 0;
const counts = {};
console.log('All articles rendered in dist/blog/index.html:');
while ((match = regex.exec(html)) !== null) {
  count++;
  const title = match[1].replace(/<[^>]+>/g, '').trim();
  const date = match[2].trim();
  console.log(`${count.toString().padStart(2, ' ')}. [${date}] ${title}`);
  counts[date] = (counts[date] || 0) + 1;
}

console.log('\n--- Count by Date ---');
for (const [d, c] of Object.entries(counts)) {
  console.log(`${d}: ${c} artikel`);
}
console.log(`Total rendered: ${count}`);
