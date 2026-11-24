const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

for (let i = 7696; i <= 7715; i++) {
  const obj = JSON.parse(lines[i]);
  console.log(`[${i}] ${obj.source} ${obj.type}: ${obj.content ? obj.content.slice(0, 100).replace(/\n/g, ' ') : (obj.tool_calls ? JSON.stringify(obj.tool_calls).slice(0, 100) : '')}`);
}
