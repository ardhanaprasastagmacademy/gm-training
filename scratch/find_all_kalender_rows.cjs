const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.source === 'USER_EXPLICIT' && obj.content) {
      const m = obj.content.match(/(Artikel\s*(?:no\.?)?\s*\d+|baris\s*\d+|ARTIKEL\s*\d+)/gi);
      if (m) {
        // extract slug or title
        const slugM = obj.content.match(/\/blog\/([a-z0-9-]+)\/?/i) || obj.content.match(/Slug\s*:?\s*\/?[a-z0-9\/-]+/i);
        const titleM = obj.content.match(/Judul\s*(?:artikel)?\s*(?:\(H1\))?\s*:?\s*([^\r\n]+)/i);
        console.log(`Line ${i}: ${m.join(', ')} | ${slugM ? slugM[0] : 'no slug'} | ${titleM ? titleM[1].slice(0, 40) : 'no title'}`);
      }
    }
  } catch(e) {}
}
