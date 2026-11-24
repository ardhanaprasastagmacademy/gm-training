const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

for (let i = 7660; i <= 7700; i++) {
  const obj = JSON.parse(lines[i]);
  if (obj.source === 'MODEL' && obj.content) {
    console.log(`[${i}]`, obj.content.slice(0, 200).replace(/\n/g, ' '));
  }
  if (obj.source === 'USER_EXPLICIT') {
    console.log(`[${i}] USER:`, obj.content.replace(/\n/g, ' '));
  }
}
