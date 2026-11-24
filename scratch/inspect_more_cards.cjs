const fs = require('fs');
const html = fs.readFileSync('dist/blog/index.html', 'utf8');

const regex = /<h[23][^>]*>([\s\S]*?)<\/h[23]>[\s\S]*?(\d{1,2}\s+[A-Za-z]+\s+\d{4})/g;
let match;
let count = 0;
console.log('Articles in dist/blog/index.html:');
while ((match = regex.exec(html)) !== null && count < 15) {
  count++;
  const title = match[1].replace(/<[^>]+>/g, '').trim();
  const date = match[2].trim();
  console.log(`${count}. [${date}] ${title}`);
}
