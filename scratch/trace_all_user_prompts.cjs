const fs = require('fs');

const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

for (let i = 6900; i < lines.length; i++) {
  if (!lines[i]) continue;
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.source === 'USER_EXPLICIT' || obj.role === 'user' || (obj.message && obj.message.role === 'user')) {
      const content = obj.content || (obj.message && obj.message.content) || '';
      const firstLine = content.split('\n')[0].slice(0, 100);
      const h1Match = content.match(/Judul\s*artikel\s*\((?:H1)?\)[^\n]+/i) || content.match(/H1[^\n]+/i) || content.match(/SEO Title[^\n]+/i);
      const slugMatch = content.match(/Slug[^\n]+/i) || content.match(/Permalink[^\n]+/i);
      console.log(`[${i}] ${firstLine}`);
      if (h1Match) console.log(`     H1: ${h1Match[0]}`);
      if (slugMatch) console.log(`     Slug: ${slugMatch[0]}`);
    }
  } catch (e) {}
}
