const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').trim().split('\n');
for (let i = 8260; i <= 8278; i++) {
  try {
    const obj = JSON.parse(lines[i]);
    console.log(`=== Line ${i} (idx ${obj.step_index}) Source: ${obj.source} Type: ${obj.type} ===`);
    if (obj.tool_calls) console.log('Tool calls:', JSON.stringify(obj.tool_calls));
    if (obj.content) console.log('Content:', obj.content.slice(0, 300));
  } catch(e) {
    console.log(`Line ${i}: error`, e);
  }
}
