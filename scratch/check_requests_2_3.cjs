const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').trim().split('\n');

for (let i = 7000; i < lines.length; i++) {
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.source === 'USER_EXPLICIT') {
      console.log(`[${i}]`, obj.content.slice(0, 150).replace(/\n/g, ' '));
    }
  } catch(e) {}
}
