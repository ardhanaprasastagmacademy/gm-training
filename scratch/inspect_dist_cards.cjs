const fs = require('fs');
const html = fs.readFileSync('dist/blog/index.html', 'utf8');

// Regex to find article titles and dates
const regex = /<h[23][^>]*>([\s\S]*?)<\/h[23]>[\s\S]*?(\d{1,2}\s+[A-Za-z]+\s+\d{4})/g;
let match;
let count = 0;
console.log('Top articles in dist/blog/index.html:');
while ((match = regex.exec(html)) !== null && count < 8) {
  count++;
  const title = match[1].replace(/<[^>]+>/g, '').trim();
  const date = match[2].trim();
  console.log(`${count}. [${date}] ${title}`);
}
